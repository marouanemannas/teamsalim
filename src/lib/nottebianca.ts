// I file in public/nottebianca hanno nomi con spazi e parentesi (export
// diretto da WhatsApp): li incapsuliamo qui invece di rinominarli sul disco.
export function nottebiancaImage(filename: string): string {
  return `/nottebianca/${encodeURIComponent(filename)}`;
}
