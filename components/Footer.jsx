import Link from 'next/link';
import Logo from './Logo';
import Icon from './Icon';
import { SITE, SERVICES, NAV } from '@/lib/content';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="surface-dark relative overflow-hidden text-white">
      <div className="container-x relative z-10 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.35fr_.8fr_1fr_1fr_1.1fr]">
          <div>
            <Logo variant="white" />
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/60">
              {SITE.promise} We build and manage the complete digital ecosystem for
              growth-focused businesses across Delhi NCR.
            </p>
            <Link href="/contact/" className="btn-teal mt-7 text-[13px]">
              Book a free digital audit
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </div>

          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-400">Service areas</h4>
            <ul className="mt-5 space-y-2.5">
              <li><Link href="/locations/noida/" className="link-underline text-sm text-white/65 transition-colors hover:text-white">Noida</Link></li>
              <li><Link href="/locations/delhi/" className="link-underline text-sm text-white/65 transition-colors hover:text-white">Delhi</Link></li>
              <li><Link href="/locations/gurugram/" className="link-underline text-sm text-white/65 transition-colors hover:text-white">Gurugram / Gurgaon</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-400">
              Services
            </h4>
            <ul className="mt-5 space-y-2.5">
              {SERVICES.map((s) => (
                <li key={s.slug}>
                  <Link
                    href={`/services/${s.slug}/`}
                    className="link-underline text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-400">
              Company
            </h4>
            <ul className="mt-5 space-y-2.5">
              {NAV.map((n) => (
                <li key={n.href}>
                  <Link
                    href={n.href}
                    className="link-underline text-sm text-white/65 transition-colors hover:text-white"
                  >
                    {n.label}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/case-studies/"
                  className="link-underline text-sm text-white/65 transition-colors hover:text-white"
                >
                  Case Studies
                </Link>
              </li>
              <li>
                <Link
                  href="/contact/"
                  className="link-underline text-sm text-white/65 transition-colors hover:text-white"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-400">
              Get in touch
            </h4>
            <ul className="mt-5 space-y-3.5 text-sm text-white/65">
              <li className="flex items-start gap-3">
                <Icon name="pin" className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                {SITE.city}
              </li>
              <li className="flex items-start gap-3">
                <Icon name="mail" className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <a href={`mailto:${SITE.email}`} className="link-underline hover:text-white">
                  {SITE.email}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Icon name="phone" className="mt-0.5 h-4 w-4 shrink-0 text-teal-400" />
                <a href={`tel:${SITE.phone.replace(/\s/g, '')}`} className="link-underline hover:text-white">
                  {SITE.phone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-7 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <p>© {year} {SITE.name}. All rights reserved.</p>
          <p>Pricing shown across this site is indicative and depends on scope.</p>
        </div>
      </div>
    </footer>
  );
}
