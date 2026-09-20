import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Icon from '@/components/Icon';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import Faq from '@/components/Faq';
import CTA from '@/components/CTA';
import { PACKAGES, PROJECT_PRICING, FAQS, OG_IMAGE } from '@/lib/content';

const OG_TITLE = 'Pricing | Fenbrix';
const OG_DESCRIPTION =
  'Monthly retainer packages from ₹15,000 and indicative project pricing for websites, software, apps and automation.';

export const metadata = {
  title: 'Pricing',
  alternates: { canonical: '/pricing/' },
  description: OG_DESCRIPTION,
  openGraph: { type: 'website', title: OG_TITLE, description: OG_DESCRIPTION, url: '/pricing/', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: OG_TITLE, description: OG_DESCRIPTION, images: [OG_IMAGE] },
};

export default function PricingPage() {
  return (
    <>
      <PageHeader
        eyebrow="Pricing"
        title="Clear numbers. No “contact us for a quote” games."
        body="Monthly retainers cover marketing, content and management. Development work is scoped and priced separately — that is how you get something built properly."
      />

      {/* retainers */}
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Monthly retainers</span>
            <h2 className="h2 mt-4">Pick where you are today.</h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-5 lg:grid-cols-3">
            {PACKAGES.map((p) => (
              <StaggerItem key={p.name}>
                <div
                  className={`relative flex h-full flex-col rounded-2xl border p-7 transition-all duration-400 hover:-translate-y-1 ${
                    p.featured
                      ? 'border-teal-600 bg-navy text-white shadow-lift'
                      : 'border-line bg-white shadow-soft hover:shadow-lift'
                  }`}
                >
                  {p.featured && (
                    <span className="absolute -top-3 left-7 rounded-full bg-teal-600 px-3 py-1 text-[10px] font-extrabold uppercase tracking-[0.14em] text-white">
                      Most popular
                    </span>
                  )}
                  <h3 className="text-lg font-extrabold">{p.name}</h3>
                  <p className={`mt-1 text-[13px] ${p.featured ? 'text-white/55' : 'text-navy/50'}`}>{p.for}</p>
                  <div className="mt-5 flex items-baseline gap-1">
                    <span className={`text-2xl font-extrabold tracking-tight ${p.featured ? 'text-teal-400' : 'text-navy'}`}>
                      {p.price}
                    </span>
                    <span className={`text-xs font-bold ${p.featured ? 'text-white/40' : 'text-navy/40'}`}>
                      {p.period}
                    </span>
                  </div>
                  <ul className={`mt-6 flex-1 space-y-2.5 border-t pt-6 ${p.featured ? 'border-white/10' : 'border-line'}`}>
                    {p.features.map((f) => (
                      <li key={f} className={`flex gap-2.5 text-[13px] ${p.featured ? 'text-white/70' : 'text-navy/65'}`}>
                        <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" strokeWidth={2.6} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/contact/" className={`mt-7 w-full ${p.featured ? 'btn-teal' : 'btn-ghost'}`}>
                    Enquire about {p.name}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.12}>
            <div className="mt-8 rounded-2xl border-l-[3px] border-teal-600 bg-mist p-6">
              <h3 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy">
                Why development is not “unlimited”
              </h3>
              <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-navy/60">
                Website, custom software and mobile app development are never bundled as unlimited
                inclusions — not even in Digital Partner. That tier includes managing and advising on
                your existing technology. New builds get scoped and quoted on their own, so you know
                exactly what you are paying for and we can build it properly.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.16}>
            <div className="mt-5 rounded-2xl border-l-[3px] border-teal-600 bg-mist p-6">
              <h3 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy">
                What “no lock-in” means
              </h3>
              <p className="mt-2.5 max-w-3xl text-sm leading-relaxed text-navy/60">
                Retainers run on a 3-month minimum term so there is enough runway to build, test and
                measure — after that, they continue month to month and you can cancel anytime with
                30 days&rsquo; written notice.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="mt-5 text-sm text-navy/55">
              Not ready for a retainer? Websites start from ₹8,000, software projects start from
              ₹60,000 and automation work starts from ₹15,000 —{' '}
              <a href="#project-pricing" className="link-underline font-semibold text-teal-600">
                see indicative project pricing below
              </a>
              .
            </p>
          </Reveal>
        </div>
      </section>

      {/* project pricing */}
      <section id="project-pricing" className="bg-mist py-20 lg:py-24 scroll-mt-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Project pricing</span>
            <h2 className="h2 mt-4">Indicative ranges for build work.</h2>
            <p className="lede mt-5">
              Final price depends on scope — pages, screens, integrations and timeline. Every project
              is confirmed in a written proposal before anything starts.
            </p>
          </Reveal>

          <Stagger className="mt-11 grid gap-5 lg:grid-cols-3">
            {PROJECT_PRICING.map((g) => (
              <StaggerItem key={g.group}>
                <div className="h-full overflow-hidden rounded-2xl border border-line bg-white shadow-soft">
                  <div className="bg-navy px-6 py-4">
                    <h3 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal-400">
                      {g.group}
                    </h3>
                  </div>
                  <ul>
                    {g.rows.map(([name, price], i) => (
                      <li
                        key={name}
                        className={`flex items-center justify-between gap-4 px-6 py-3.5 text-sm ${
                          i % 2 ? 'bg-mist/60' : ''
                        }`}
                      >
                        <span className="text-navy/70">{name}</span>
                        <span className="shrink-0 font-extrabold text-navy">{price}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.12}>
            <p className="mt-7 text-[13px] italic text-navy/45">
              All figures above are indicative estimates for planning purposes and depend entirely on
              final scope. They are not fixed quotes.
            </p>
          </Reveal>
        </div>
      </section>

      {/* faq */}
      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="h2 mt-4">Things people ask before signing.</h2>
            <p className="lede mt-5">
              If something is not covered here, just ask on the call — we would rather over-explain
              than have you sign confused.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <Faq items={FAQS} />
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
