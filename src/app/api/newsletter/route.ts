import { NextResponse } from "next/server";
import { Resend } from "resend";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

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

  return NextResponse.json({
    success: true,
    message: "Iscrizione avvenuta! Grazie.",
  });
}
