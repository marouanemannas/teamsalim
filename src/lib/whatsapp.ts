export const WHATSAPP_NUMBER = "393899918272";

export const WHATSAPP_DEFAULT_MESSAGE =
  "Salve, vorrei avere informazioni sulla palestra.";

export function getWhatsAppLink(
  message: string = WHATSAPP_DEFAULT_MESSAGE,
  number: string = WHATSAPP_NUMBER,
) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}

export function getDisciplineWhatsAppMessage(disciplineName: string) {
  return `Salve, sono interessato/a al corso di ${disciplineName}. Potreste darmi maggiori informazioni?`;
}

export function getProductWhatsAppMessage(productName: string) {
  return `Salve, sono interessato/a a questo capo: ${productName}. È disponibile?`;
}
