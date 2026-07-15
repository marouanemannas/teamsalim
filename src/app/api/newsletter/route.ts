import { NextResponse } from "next/server";
import { Resend } from "resend";
import { GOOGLE_MAPS_LINK, GYM_ADDRESS, SOCIAL_LINKS } from "@/lib/constants";
import { getWhatsAppLink } from "@/lib/whatsapp";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const SITE_URL = "https://teamsalim.com";

function getWelcomeEmailHtml() {
  return `
    <div style="font-family: Arial, Helvetica, sans-serif; max-width: 480px; margin: 0 auto; color: #111;">
      <h1 style="font-size: 20px;">Ciao, benvenuto/a! Grazie per esserti iscritto/a alla newsletter di Team Salim.</h1>
      <p>Ciao,</p>
      <p>grazie per esserti iscritto/a alla newsletter di Team Salim! Da oggi sarai il/la primo/a a sapere di eventi, novità e aggiornamenti dalla palestra.</p>
      <p>Ti aspettiamo in ${GYM_ADDRESS} — MMA, Muay Thai, K-1 e Kickboxing, per ogni livello.</p>
      <p>A presto sul tatami!<br />Team Salim</p>
      <hr style="border: none; border-top: 1px solid #ddd; margin: 24px 0;" />
      <p style="font-size: 13px; color: #555;">
        <a href="${SITE_URL}" style="color: #555;">Sito</a> ·
        <a href="${getWhatsAppLink()}" style="color: #555;">WhatsApp</a> ·
        <a href="${SOCIAL_LINKS.facebook}" style="color: #555;">Facebook</a> ·
        <a href="${SOCIAL_LINKS.instagram}" style="color: #555;">Instagram</a> ·
        <a href="${GOOGLE_MAPS_LINK}" style="color: #555;">${GYM_ADDRESS}</a>
      </p>
    </div>
  `;
}

export async function POST(request: Request) {
  let email: unknown;

  try {
    const body = await request.json();
    email = body?.email;
  } catch {
    return NextResponse.json(
      { error: "Richiesta non valida." },
      { status: 400 }
    );
  }

  if (typeof email !== "string" || !EMAIL_REGEX.test(email.trim())) {
    return NextResponse.json(
      { error: "Inserisci un indirizzo email valido." },
      { status: 400 }
    );
  }

  const apiKey = process.env.RESEND_API_KEY;
  const topicId = process.env.RESEND_NEWSLETTER_TOPIC_ID;

  if (!apiKey || !topicId) {
    console.error("RESEND_API_KEY o RESEND_NEWSLETTER_TOPIC_ID mancanti nelle variabili d'ambiente.");
    return NextResponse.json(
      { error: "Servizio newsletter non configurato." },
      { status: 500 }
    );
  }

  const resend = new Resend(apiKey);

  const { error } = await resend.contacts.create({
    email: email.trim(),
    unsubscribed: false,
    topics: [{ id: topicId, subscription: "opt_in" }],
  });

  if (error) {
    const message = error.message?.toLowerCase() ?? "";
    const alreadySubscribed =
      message.includes("already") || message.includes("exists");

    if (alreadySubscribed) {
      return NextResponse.json({
        success: true,
        message: "Sei già iscritto alla newsletter.",
      });
    }

    console.error("Errore Resend:", error);
    return NextResponse.json(
      { error: "Errore durante l'iscrizione. Riprova più tardi." },
      { status: 500 }
    );
  }

  try {
    await resend.emails.send({
      from: "Team Salim <benvenuto@teamsalim.com>",
      to: email.trim(),
      subject: "Benvenuto/a in Team Salim! 🥋",
      html: getWelcomeEmailHtml(),
    });
  } catch (welcomeEmailError) {
    console.error("Errore invio email di benvenuto:", welcomeEmailError);
  }

  return NextResponse.json({
    success: true,
    message: "Iscrizione avvenuta! Grazie.",
  });
}
