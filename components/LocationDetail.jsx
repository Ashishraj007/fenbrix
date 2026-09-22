import Link from 'next/link';
import Icon from './Icon';
import Faq from './Faq';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import CTA from './CTA';
import { SERVICES } from '@/lib/content';

export default function LocationDetail({ location }) {
  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="surface-dark relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 animate-float rounded-full bg-teal-400/10 blur-3xl" />
        <div className="container-x relative z-10 py-16 lg:py-24">
          <Reveal className="max-w-3xl">
            <span className="eyebrow text-teal-400">Serving {location.name}</span>
            <h1 className="h1 mt-4 text-white">{location.hero}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">{location.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="btn-teal">Get a free digital audit <Icon name="arrow" className="h-4 w-4" /></Link>
              <Link href="/services/" className="btn-ghost-dark">Explore services <Icon name="arrow" className="h-4 w-4" /></Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- LOCAL CONTEXT ---------- */}
      <section className="py-14 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal><span className="eyebrow">Local context</span><h2 className="h2 mt-4">Useful digital work starts with how the business actually operates.</h2></Reveal>
          <Reveal delay={0.1}><p className="lede">{location.context}</p></Reveal>
        </div>
      </section>

      {/* ---------- LOCAL PROBLEMS ---------- */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">The problem</span>
            <h2 className="h2 mt-4">What we keep seeing in {location.name}.</h2>
          </Reveal>
          <Stagger className="mt-11 grid gap-5 sm:grid-cols-2">
            {location.problems.map(([title, body]) => (
              <StaggerItem key={title}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500">
                    <Icon name="plus" className="h-4 w-4 rotate-45" strokeWidth={2.4} />
                  </div>
                  <h3 className="mt-4 text-[15px] font-extrabold">{title}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{body}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- SERVICES IN CITY ---------- */}
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Services in {location.name}</span>
            <h2 className="h2 mt-4">The six pillars, delivered around how {location.name} actually works.</h2>
          </Reveal>
          <Stagger className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.map((service) => (
              <StaggerItem key={service.slug}>
                <Link href={`/services/${service.slug}/`} className="card group block h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-teal-400 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <Icon name={service.icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-[16px] font-extrabold">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{location.cityNotes[service.slug]}</p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-600">
                    Explore service <Icon name="arrow" className="h-4 w-4" />
                  </span>
                </Link>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- WHY CHOOSE FENBRIX ---------- */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-start">
          <Reveal>
            <span className="eyebrow">Why Fenbrix</span>
            <h2 className="h2 mt-4">Why {location.name} businesses work with us.</h2>
          </Reveal>
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {location.whyChoose.map((point) => (
              <StaggerItem key={point}>
                <div className="flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" strokeWidth={2.6} />
                  <p className="text-sm leading-relaxed text-navy/70">{point}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- INDUSTRIES ---------- */}
      <section className="py-14 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal><span className="eyebrow">Industries we serve in {location.name}</span><h2 className="h2 mt-4">Digital work that fits the business model.</h2><p className="lede mt-5">Different sectors need different customer journeys, content and follow-up. These are the areas we focus on first in {location.name}.</p></Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-3"><Link href="/industries/" className="chip transition-colors hover:border-teal-400 hover:text-teal-600">Explore industries <Icon name="arrow" className="h-3.5 w-3.5" /></Link>{location.industries.map((industry) => <span key={industry} className="chip">{industry}</span>)}</Reveal>
        </div>
      </section>

      {/* ---------- LOCAL FAQ ---------- */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <Reveal><span className="eyebrow">Local questions</span><h2 className="h2 mt-4">Working with Fenbrix from {location.name}.</h2></Reveal>
          <Reveal delay={0.1}><Faq items={location.faqs.map(([q, a]) => ({ q, a }))} /></Reveal>
        </div>
      </section>

      {/* ---------- NEARBY AREAS ---------- */}
      <section className="py-14 lg:py-16">
        <div className="container-x">
          <Reveal>
            <span className="eyebrow">Areas we cover</span>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-navy/55">
              Alongside {location.name} itself, we regularly work with businesses across:
            </p>
            <div className="mt-5 flex flex-wrap gap-2.5">
              {location.neighborhoods.map((area) => (
                <span key={area} className="chip">{area}</span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
