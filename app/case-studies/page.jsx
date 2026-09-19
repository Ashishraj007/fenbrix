import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Icon from '@/components/Icon';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import CTA from '@/components/CTA';

const OG_TITLE = 'Case Studies | Fenbrix';
const OG_DESCRIPTION =
  'How Fenbrix documents client results — starting audit, work performed, metrics, before/after and ROI.';

export const metadata = {
  title: 'Case Studies',
  alternates: { canonical: '/case-studies/' },
  description: OG_DESCRIPTION,
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: '/case-studies/' },
  twitter: { card: 'summary_large_image', title: OG_TITLE, description: OG_DESCRIPTION },
};

const FRAMEWORK = [
  ['Starting audit', 'Where the business stood on day one — presence, website, ads and follow-up, captured honestly.'],
  ['Work performed', 'Exactly what we delivered: content volume, campaigns run, pages built, automations set up.'],
  ['Metrics', 'Real numbers shared with the client\u2019s permission — reach, engagement, leads, bookings, enquiries.'],
  ['Before / after', 'A visual comparison of content quality, profile appearance or website design.'],
  ['ROI', 'Where it is measurable — leads generated against ad spend, framed conservatively.'],
  ['Testimonial', 'A short, specific quote from the business owner, published only with written permission.'],
];

export default function CaseStudiesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Case Studies"
        title="Results, documented properly — not screenshots without context."
        body="We are a new agency and we would rather say that plainly than invent a portfolio. Here is exactly how every Fenbrix case study gets built."
      />

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <div className="rounded-2xl border-l-[3px] border-teal-600 bg-mist p-7">
              <h2 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy">
                Straight answer
              </h2>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-navy/65">
                Fenbrix is newly launched, so this page is currently a framework rather than a
                portfolio. Every case study published here will follow the structure below, with real
                numbers and written client permission. If you want to see work in progress, ask on the
                call — we will show you live accounts rather than a polished deck.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-14 max-w-2xl">
            <span className="eyebrow">The framework</span>
            <h2 className="h2 mt-4">Six things every case study must contain.</h2>
          </Reveal>

          <Stagger className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {FRAMEWORK.map(([t, d], i) => (
              <StaggerItem key={t}>
                <div className="card h-full">
                  <span className="text-[13px] font-extrabold tracking-[0.1em] text-teal-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h3 className="mt-3 text-[15px] font-extrabold">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.12}>
            <div className="mt-14 flex flex-col items-start gap-6 rounded-2xl border border-line bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="h3">Want to be one of our first case studies?</h3>
                <p className="mt-2 max-w-lg text-sm text-navy/55">
                  We are offering reduced rates to a small number of early clients in exchange for
                  permission to document the work properly.
                </p>
              </div>
              <Link href="/contact/" className="btn-primary shrink-0">
                Talk to us
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
