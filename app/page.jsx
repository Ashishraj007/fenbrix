import Link from 'next/link';
import Hero from '@/components/Hero';
import Icon from '@/components/Icon';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import Marquee from '@/components/Marquee';
import CTA from '@/components/CTA';
import { SERVICES, STATS, DIFFERENTIATORS, PROCESS, PACKAGES, INDUSTRIES } from '@/lib/content';

export const metadata = {
  alternates: { canonical: '/' },
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Marquee />

      {/* ---------- PROBLEM ---------- */}
      <section className="relative overflow-hidden py-20 lg:py-28">
        <div className="absolute inset-0 grid-lines opacity-60" />
        <div className="container-x relative">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
            <Reveal>
              <span className="eyebrow">The problem</span>
              <h2 className="h2 mt-4">
                Four vendors. Four invoices. <br className="hidden sm:block" />
                <span className="text-navy/40">Nobody actually responsible.</span>
              </h2>
              <p className="lede mt-6">
                It is the most common setup we see in Noida — and it is why so many good
                businesses stay stuck online. The content person doesn&apos;t talk to the ads
                person. The website goes stale. Leads come in on WhatsApp and quietly die
                because nobody follows up.
              </p>
              <Link href="/process/" className="btn-ghost mt-8">
                See how we work instead
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </Reveal>

            <Stagger className="grid gap-4 sm:grid-cols-2">
              {[
                { t: 'Social media freelancer', d: 'Posts go up. No link to sales.' },
                { t: 'Separate ads agency', d: 'Campaigns disconnected from your brand voice.' },
                { t: 'One-time web developer', d: 'Built once, never touched again.' },
                { t: 'No technology partner', d: 'Manual follow-ups, missed leads, zero visibility.' },
              ].map((x) => (
                <StaggerItem key={x.t}>
                  <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
                      <Icon name="plus" className="h-4 w-4 rotate-45" strokeWidth={2.4} />
                    </div>
                    <h3 className="mt-4 text-[15px] font-extrabold">{x.t}</h3>
                    <p className="mt-1.5 text-sm text-navy/55">{x.d}</p>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      {/* ---------- SERVICES ---------- */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">What we do</span>
            <h2 className="h2 mt-4">Six pillars, one team, one roadmap.</h2>
            <p className="lede mt-5">
              Start wherever you need us. Most clients begin with social media and ads, then
              bring us the website, the CRM and the automation once they see the work.
            </p>
          </Reveal>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((s) => (
              <StaggerItem key={s.slug}>
                <Link href={`/services/${s.slug}/`} className="card group block h-full">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-navy text-teal-400 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                    <Icon name={s.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-lg font-extrabold">{s.title}</h3>
                  <p className="mt-2 text-sm text-navy/55">{s.short}</p>
                  <ul className="mt-5 space-y-2 border-t border-line pt-5">
                    {s.items.map((it) => (
                      <li key={it} className="flex gap-2.5 text-[13px] text-navy/65">
                        <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" strokeWidth={2.6} />
                        {it}
                      </li>
                    ))}
                  </ul>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- STATS ---------- */}
      <section className="surface-dark py-16 text-white lg:py-20">
        <div className="container-x">
          <Stagger className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <StaggerItem key={s.label}>
                <div className="text-center lg:text-left">
                  <div className="text-4xl font-extrabold tracking-tight text-teal-400 lg:text-5xl">
                    {s.value}{s.suffix}
                  </div>
                  <p className="mt-2 text-sm text-white/55">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- DIFFERENTIATION ---------- */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Why Fenbrix</span>
            <h2 className="h2 mt-4">Everyone else solves one piece.</h2>
            <p className="lede mt-5">
              We are not trying to be the cheapest agency in Noida. We are trying to be the
              only one you need.
            </p>
          </Reveal>

          <Reveal delay={0.1} className="mt-11 overflow-hidden rounded-2xl border border-line shadow-soft">
            <div className="overflow-x-auto">
              <table className="w-full min-w-[620px] text-left text-sm">
                <thead>
                  <tr className="bg-navy text-white">
                    <th className="px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em]">Typical provider</th>
                    <th className="px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em]">Where it breaks</th>
                    <th className="px-6 py-4 text-[11px] font-extrabold uppercase tracking-[0.14em] text-teal-400">With Fenbrix</th>
                  </tr>
                </thead>
                <tbody>
                  {DIFFERENTIATORS.map((d, i) => (
                    <tr key={d.them} className={i % 2 ? 'bg-mist' : 'bg-white'}>
                      <td className="px-6 py-4 font-bold">{d.them}</td>
                      <td className="px-6 py-4 text-navy/55">{d.gap}</td>
                      <td className="px-6 py-4 font-semibold text-teal-600">{d.us}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- PROCESS ---------- */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">How it runs</span>
            <h2 className="h2 mt-4">A process you can actually follow.</h2>
          </Reveal>

          <Stagger className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {PROCESS.slice(0, 6).map((p) => (
              <StaggerItem key={p.step}>
                <div className="card h-full">
                  <span className="text-[13px] font-extrabold tracking-[0.1em] text-teal-600">{p.step}</span>
                  <h3 className="mt-3 text-lg font-extrabold">{p.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{p.body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15} className="mt-9">
            <Link href="/process/" className="btn-ghost">
              See the full 9-step process
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ---------- INDUSTRIES ---------- */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Who we work with</span>
            <h2 className="h2 mt-4">Built for local businesses that want to grow.</h2>
          </Reveal>

          <Stagger className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {INDUSTRIES.map((ind) => (
              <StaggerItem key={ind.name}>
                <div className="card group h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <Icon name={ind.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-4 text-[15px] font-extrabold">{ind.name}</h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed text-navy/55">{ind.need}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- PRICING TEASER ---------- */}
      <section className="bg-mist py-20 lg:py-28">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Packages</span>
            <h2 className="h2 mt-4">Transparent monthly retainers.</h2>
            <p className="lede mt-5">
              Websites, software and apps are quoted separately as projects — never buried
              inside a monthly fee as &ldquo;unlimited&rdquo;.
            </p>
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
                  <h3 className={`text-lg font-extrabold ${p.featured ? 'text-white' : ''}`}>{p.name}</h3>
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
                    {p.features.slice(0, 6).map((f) => (
                      <li key={f} className={`flex gap-2.5 text-[13px] ${p.featured ? 'text-white/70' : 'text-navy/65'}`}>
                        <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" strokeWidth={2.6} />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href="/contact/"
                    className={`mt-7 w-full ${p.featured ? 'btn-teal' : 'btn-ghost'}`}
                  >
                    Enquire about {p.name}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.15} className="mt-9">
            <Link href="/pricing/" className="btn-ghost">
              See full pricing & project rates
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
