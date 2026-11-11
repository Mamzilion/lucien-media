/** Construit un lien WhatsApp avec un message pré-rempli. */
export function waLink(number: string, text: string) {
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
