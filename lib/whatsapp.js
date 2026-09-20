import { SITE } from './content';

export function getProductWhatsAppUrl(name, duration) {
  const message =
    `Hi Fenbrix, I'm interested in ${name}${duration ? ` - ${duration}` : ''}. ` +
    `Please share the current pricing and details.`;
  return `https://wa.me/${SITE.whatsapp}?text=${encodeURIComponent(message)}`;
}
