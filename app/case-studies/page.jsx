import PageHeader from '@/components/PageHeader';
import Icon from '@/components/Icon';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import CTA from '@/components/CTA';
import TrackedLink from '@/components/TrackedLink';
import Link from 'next/link';
import { CASE_STUDIES, OG_IMAGE } from '@/lib/content';

const OG_TITLE = 'Case Studies | Fenbrix';
const OG_DESCRIPTION =
  'How Fenbrix documents client results — starting audit, work performed, metrics, before/after and ROI.';

export const metadata = {
  title: 'Case Studies',
  alternates: { canonical: '/case-studies/' },
  description: OG_DESCRIPTION,
  openGraph: { type: 'website', title: OG_TITLE, description: OG_DESCRIPTION, url: '/case-studies/', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: OG_TITLE, description: OG_DESCRIPTION, images: [OG_IMAGE] },
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

      <section className="pt-20 lg:pt-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Published work</span>
            <h2 className="h2 mt-4">Real businesses, documented honestly.</h2>
          </Reveal>

          <div className="mt-11 grid gap-6">
            {CASE_STUDIES.map((study) => (
              <Reveal key={study.slug}>
                <Link
                  href={`/case-studies/${study.slug}/`}
                  className="card group grid gap-7 overflow-hidden p-0 sm:p-0 lg:grid-cols-[1.15fr_1fr] lg:items-center"
                >
                  <div className="relative overflow-hidden border-b border-line bg-mist lg:h-full lg:border-b-0 lg:border-r">
                    <img
                      src={study.images.desktop.src}
                      alt={study.images.desktop.alt}
                      width={study.images.desktop.width}
                      height={study.images.desktop.height}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="px-6 pb-7 sm:px-8 lg:py-9 lg:pl-2 lg:pr-10">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="chip">{study.category}</span>
                      <span className="chip">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
                        {study.status}
                      </span>
                    </div>
                    <h3 className="h3 mt-5">{study.client}</h3>
                    <p className="mt-1 text-sm font-semibold text-teal-600">{study.industry}</p>
                    <p className="mt-4 text-[15px] leading-relaxed text-navy/60">{study.summary}</p>
                    <span className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-navy transition-colors group-hover:text-teal-600">
                      View Case Study
                      <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <Reveal>
            <div className="rounded-2xl border-l-[3px] border-teal-600 bg-mist p-7">
              <h2 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy">
                Straight answer
              </h2>
              <p className="mt-3 max-w-3xl text-[15px] leading-relaxed text-navy/65">
                Fenbrix is newly launched, so our portfolio is small and growing. We only publish
                what the client has confirmed — no invented numbers. As engagements mature, each case
                study follows the structure below, with real metrics and written client permission. If
                you want to see work in progress, ask on the call — we will show you live accounts
                rather than a polished deck.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.08} className="mt-10 max-w-2xl">
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
            <div className="mt-10 flex flex-col items-start gap-6 rounded-2xl border border-line bg-white p-8 shadow-soft sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="h3">Want to be one of our first case studies?</h3>
                <p className="mt-2 max-w-lg text-sm text-navy/55">
                  We are offering reduced rates to a small number of early clients in exchange for
                  permission to document the work properly.
                </p>
              </div>
              <TrackedLink
                href="/contact/"
                event="consultation_click"
                eventParams={{ link_location: 'case_studies_page' }}
                className="btn-primary shrink-0"
              >
                Talk to us
                <Icon name="arrow" className="h-4 w-4" />
              </TrackedLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
