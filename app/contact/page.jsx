import PageHeader from '@/components/PageHeader';
import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import ContactForm from '@/components/ContactForm';
import { SITE } from '@/lib/content';

export const metadata = {
  title: 'Contact',
  alternates: { canonical: '/contact/' },
  description:
    'Book a free digital audit with Fenbrix. Based in Noida, working with businesses across Delhi NCR.',
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Book your free digital audit."
        body="Tell us a little about your business. We will review your presence, website, ads and follow-up process, then walk you through what we would change."
      />

      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[1fr_1.25fr] lg:gap-16">
          <Reveal>
            <h2 className="h3">What happens next</h2>
            <ol className="mt-6 space-y-5">
              {[
                ['You send this form', 'Takes about a minute. No obligation, no sales sequence.'],
                ['We reply within 24 hours', 'Usually on WhatsApp or email, whichever you prefer.'],
                ['A 15–20 minute discovery call', 'We ask about your business and what growth means for you.'],
                ['You get the written audit', 'Yours to keep, whether or not you work with us.'],
              ].map(([t, d], i) => (
                <li key={t} className="flex gap-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-600/10 text-[12px] font-extrabold text-teal-600">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="text-[15px] font-extrabold">{t}</h3>
                    <p className="mt-1 text-sm text-navy/55">{d}</p>
                  </div>
                </li>
              ))}
            </ol>

            <div className="mt-10 space-y-3 border-t border-line pt-8">
              <a
                href={`mailto:${SITE.email}`}
                className="flex items-center gap-3 text-sm font-semibold text-navy/70 transition-colors hover:text-teal-600"
              >
                <Icon name="mail" className="h-4 w-4 text-teal-600" />
                {SITE.email}
              </a>
              <a
                href={`tel:${SITE.phone.replace(/\s/g, '')}`}
                className="flex items-center gap-3 text-sm font-semibold text-navy/70 transition-colors hover:text-teal-600"
              >
                <Icon name="phone" className="h-4 w-4 text-teal-600" />
                {SITE.phone}
              </a>
              <p className="flex items-center gap-3 text-sm font-semibold text-navy/70">
                <Icon name="pin" className="h-4 w-4 text-teal-600" />
                {SITE.city}
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </>
  );
}
