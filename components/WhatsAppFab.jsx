import TrackedLink from './TrackedLink';
import { SITE } from '@/lib/content';

export default function WhatsAppFab() {
  const msg = encodeURIComponent(
    "Hi Fenbrix, I'd like to know more about your services."
  );

  return (
    <TrackedLink
      href={`https://wa.me/${SITE.whatsapp}?text=${msg}`}
      event="whatsapp_click"
      eventParams={{ link_location: 'floating_button' }}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Fenbrix on WhatsApp"
      className="group fixed bottom-5 right-5 z-40 flex h-14 w-14 items-center justify-center
                 rounded-full bg-teal-600 text-white shadow-lift transition-transform
                 duration-300 hover:scale-105 active:scale-95 sm:bottom-7 sm:right-7"
    >
      <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-full bg-teal-500" />
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-7 w-7" aria-hidden="true">
        <path d="M12.04 2c-5.46 0-9.9 4.44-9.9 9.9 0 1.75.46 3.45 1.32 4.95L2 22l5.3-1.38a9.86 9.86 0 004.74 1.21h.01c5.46 0 9.9-4.44 9.9-9.9 0-2.64-1.03-5.13-2.9-7A9.82 9.82 0 0012.04 2zm0 1.67c2.2 0 4.27.86 5.82 2.42a8.17 8.17 0 012.42 5.82c0 4.54-3.7 8.23-8.24 8.23a8.2 8.2 0 01-4.19-1.15l-.3-.18-3.12.82.83-3.05-.2-.31a8.17 8.17 0 01-1.26-4.37c0-4.54 3.7-8.23 8.24-8.23zm-2.6 4.2c-.17 0-.44.06-.67.31-.23.25-.88.86-.88 2.1s.9 2.44 1.03 2.6c.12.17 1.76 2.7 4.27 3.78.6.26 1.06.41 1.42.53.6.19 1.14.16 1.57.1.48-.07 1.48-.6 1.69-1.19.2-.58.2-1.08.15-1.19-.06-.1-.23-.16-.48-.29-.25-.12-1.48-.73-1.71-.81-.23-.09-.4-.13-.56.12-.17.25-.65.81-.8.98-.14.16-.29.19-.54.06-.25-.12-1.06-.39-2.01-1.24-.74-.66-1.25-1.48-1.39-1.73-.15-.25-.02-.38.11-.5.11-.11.25-.29.37-.43.13-.15.17-.25.25-.41.09-.17.04-.31-.02-.44-.06-.12-.55-1.36-.77-1.86-.2-.48-.4-.42-.55-.42h-.48z" />
      </svg>
    </TrackedLink>
  );
}
