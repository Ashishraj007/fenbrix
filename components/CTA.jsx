import Link from 'next/link';
import Icon from './Icon';
import Reveal from './Reveal';
import { SITE } from '@/lib/content';

export default function CTA({
  title = 'Let us audit your digital presence — free.',
  body = 'A short call, then a written audit of your social media, website, ads and follow-up process. You keep the audit whether you work with us or not.',
}) {
  return (
    <section className="py-20 lg:py-24">
      <div className="container-x">
        <Reveal>
          <div className="surface-dark relative overflow-hidden rounded-3xl px-7 py-14 text-center sm:px-14 lg:py-20">
            <div className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 animate-float rounded-full bg-teal-400/10 blur-3xl" />
            <div
              className="pointer-events-none absolute -bottom-20 -right-10 h-64 w-64 animate-float rounded-full bg-teal-600/15 blur-3xl"
              style={{ animationDelay: '1.6s' }}
            />

            <div className="relative z-10 mx-auto max-w-2xl">
              <span className="eyebrow text-teal-400">Next step</span>
              <h2 className="h2 mt-4 text-white">{title}</h2>
              <p className="mt-5 text-base leading-relaxed text-white/60">{body}</p>

              <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
                <Link href="/contact/" className="btn-teal">
                  Book the free audit
                  <Icon name="arrow" className="h-4 w-4" />
                </Link>
                <a
                  href={`https://wa.me/${SITE.whatsapp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-ghost-dark"
                >
                  <Icon name="wa" className="h-4 w-4" />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
