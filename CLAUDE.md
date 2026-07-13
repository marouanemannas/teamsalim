# Team Salim — Sito Web

## Progetto
Sito web one-page per **Team Salim**, palestra di arti marziali a **Vergato (Bologna, Italia)**.

Discipline insegnate: **MMA, Muay Thai, K-1, Kickboxing**.

Logo disponibile in `public/logo.png`. Sfondo nero, tigre con guantoni, stile aggressivo.

## Stack tecnico
- **Next.js** (App Router)
- **React**
- **TypeScript**
- **Tailwind CSS**
- Deploy previsto su **Vercel**

## Stile visivo
- Dark theme professionale, "new gen": sfondo nero/antracite con accenti blu scuro/blu elettrico ispirati al logo.
- Font titoli: bold, condensato, aggressivo, stile combat sport (es. "Anton", "Bebas Neue" o simili da Google Fonts).
- Font testo: pulito e leggibile (es. "Inter" o "Poppins").
- Sito deve sentirsi premium, non un template generico: micro-animazioni allo scroll, transizioni fluide, hover states curati, buon uso di spazio negativo.
- Priorità responsive: **mobile > tablet > desktop** (molti utenti arrivano da Google Maps sul telefono).

## Struttura — sito ONE-PAGE con scroll fluido
Nessuna pagina separata, eccetto la futura area admin.

1. **Hero**: logo, nome palestra, discipline, call to action, immagine/sfondo placeholder.
2. **Chi siamo / Discipline**: breve presentazione palestra + le 4 discipline con icone o immagini placeholder.
3. **Attività**: card per ogni attività della palestra (MMA, Muay Thai, K-1, Kickboxing, Corsi Donne, Corsi Bambini, Personal Training, Allenamenti di gruppo). Ogni card ha un bottone che porta al link WhatsApp fisso della palestra: `https://api.whatsapp.com/send?text=https%3A%2F%2Fmaps.app.goo.gl%2FCky3GMeDyK7uJ9e96` (stesso link ovunque, nessun messaggio precompilato per attività).
4. **Eventi**: card con prossimi eventi (data, titolo, breve descrizione). Popolare con 2-3 eventi di esempio, ma strutturare i dati pensando a una futura integrazione con **Supabase** (non hardcodare in modo permanente, tenere i dati separati/tipizzati).
5. **Abbigliamento**: griglia prodotti (magliette, pantaloncini, ecc.) con placeholder. Click su un prodotto apre WhatsApp con messaggio precompilato che menziona il prodotto. Nessun carrello, nessun pagamento online.
6. **Newsletter**: form con campo email per iscriversi. Per ora solo UI, senza connessione reale a un servizio esterno.
7. **Footer**: contatti, social placeholder, indirizzo reale della palestra: Via Guglielmo Marconi 3, 40038 Vergato (BO), cliccabile verso Google Maps (`https://maps.app.goo.gl/Cky3GMeDyK7uJ9e96`).

## Vincoli importanti per questo step
- **Non implementare** ancora autenticazione utenti, e-commerce reale, o backend Supabase: solo UI/frontend completa con dati placeholder ben strutturati, pronti per essere collegati a un database in seguito.
- Codice pulito e organizzato in componenti riutilizzabili (es. `components/Hero.tsx`, `components/Packages.tsx`, ecc.).
- Nessun contenuto o immagine stock scaricata da internet: usare placeholder generici (div colorati, icone) finché non verranno fornite immagini vere.
