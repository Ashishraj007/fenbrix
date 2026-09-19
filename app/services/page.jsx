import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Icon from '@/components/Icon';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import CTA from '@/components/CTA';
import { SERVICES, TECH_STACK } from '@/lib/content';

const OG_TITLE = 'Services | Fenbrix';
const OG_DESCRIPTION =
  'Social media, content production, digital marketing, websites, custom software and automation — all delivered by one team in Noida.';

export const metadata = {
  title: 'Services',
  alternates: { canonical: '/services/' },
  description: OG_DESCRIPTION,
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: '/services/' },
  twitter: { card: 'summary_large_image', title: OG_TITLE, description: OG_DESCRIPTION },
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Everything your business needs online, under one roof."
        body="Six connected pillars. Take one, take all six — but you only ever deal with one team, one strategy and one invoice."
      />

      <section className="py-20 lg:py-24">
        <div className="container-x space-y-6">
          {SERVICES.map((s, i) => (
            <Reveal key={s.slug} delay={i * 0.05}>
              <article className="grid gap-8 rounded-2xl border border-line bg-white p-7 shadow-soft transition-shadow duration-400 hover:shadow-lift lg:grid-cols-[auto_1.1fr_1fr] lg:items-start lg:gap-10 lg:p-10">
                <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-navy text-teal-400">
                  <Icon name={s.icon} className="h-6 w-6" />
                </div>

                <div>
                  <span className="text-[13px] font-extrabold tracking-[0.1em] text-teal-600">
                    {String(i + 1).padStart(2, '0')}
                  </span>
                  <h2 className="h3 mt-2">{s.title}</h2>
                  <p className="mt-3 text-[15px] leading-relaxed text-navy/60">{s.short}</p>
                  <Link href={`/services/${s.slug}/`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-teal-600 transition-colors hover:text-teal-500">
                    Explore service <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>

                <ul className="grid gap-2.5 border-t border-line pt-6 lg:border-l lg:border-t-0 lg:pl-10 lg:pt-0">
                  {s.items.map((it) => (
                    <li key={it} className="flex gap-3 text-sm text-navy/70">
                      <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" strokeWidth={2.5} />
                      {it}
                    </li>
                  ))}
                </ul>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Our stack</span>
            <h2 className="h2 mt-4">Tools we actually use.</h2>
            <p className="lede mt-5">
              Nothing exotic, nothing you get locked into. Proven tools, set up properly,
              handed over cleanly if you ever move on.
            </p>
          </Reveal>

          <Stagger className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TECH_STACK.map((t) => (
              <StaggerItem key={t.cat}>
                <div className="card h-full">
                  <h3 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal-600">
                    {t.cat}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {t.tools.map((tool) => (
                      <span key={tool} className="chip">{tool}</span>
                    ))}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA />
    </>
  );
}
