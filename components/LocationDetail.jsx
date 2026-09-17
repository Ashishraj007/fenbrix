import Link from 'next/link';
import Icon from './Icon';
import Faq from './Faq';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import CTA from './CTA';
import { SERVICES } from '@/lib/content';

export default function LocationDetail({ location }) {
  const featuredServices = SERVICES.filter((service) => ['websites', 'marketing', 'software', 'automation'].includes(service.slug));

  return (
    <>
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

      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:gap-20">
          <Reveal><span className="eyebrow">Local context</span><h2 className="h2 mt-4">Useful digital work starts with how the business actually operates.</h2></Reveal>
          <Reveal delay={0.1}><p className="lede">{location.context}</p></Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl"><span className="eyebrow">Where we can help</span><h2 className="h2 mt-4">Practical priorities for {location.name} businesses.</h2></Reveal>
          <Stagger className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {location.priorities.map(([title, body]) => <StaggerItem key={title}><div className="card h-full"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600"><Icon name="check" className="h-5 w-5" strokeWidth={2.5} /></div><h3 className="mt-5 text-[16px] font-extrabold">{title}</h3><p className="mt-2 text-sm leading-relaxed text-navy/55">{body}</p></div></StaggerItem>)}
          </Stagger>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl"><span className="eyebrow">Relevant services</span><h2 className="h2 mt-4">Build the pieces that matter, in the right order.</h2><p className="lede mt-5">Start with the most immediate gap, then connect the rest as the business needs it.</p></Reveal>
          <Stagger className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredServices.map((service) => <StaggerItem key={service.slug}><Link href={`/services/${service.slug}/`} className="card group block h-full"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-teal-400 transition-colors group-hover:bg-teal-600 group-hover:text-white"><Icon name={service.icon} className="h-5 w-5" /></div><h3 className="mt-5 text-[16px] font-extrabold">{service.title}</h3><p className="mt-2 text-sm leading-relaxed text-navy/55">{service.short}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-600">Explore service <Icon name="arrow" className="h-4 w-4" /></span></Link></StaggerItem>)}
          </Stagger>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <Reveal><span className="eyebrow">Industries we understand</span><h2 className="h2 mt-4">Digital work that fits the business model.</h2><p className="lede mt-5">Different sectors need different customer journeys, content and follow-up. See the areas we focus on first.</p></Reveal>
          <Reveal delay={0.1} className="flex flex-wrap gap-3"><Link href="/industries/" className="chip transition-colors hover:border-teal-400 hover:text-teal-600">Explore industries <Icon name="arrow" className="h-3.5 w-3.5" /></Link>{location.industries.map((industry) => <span key={industry} className="chip">{industry}</span>)}</Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <Reveal><span className="eyebrow">Local questions</span><h2 className="h2 mt-4">Working with Fenbrix from {location.name}.</h2></Reveal>
          <Reveal delay={0.1}><Faq items={location.faqs.map(([q, a]) => ({ q, a }))} /></Reveal>
        </div>
      </section>

      <CTA title={`Need a clearer digital plan for your ${location.name} business?`} body="Start with a free audit. We will look at the parts of your digital presence that matter most and discuss a practical next step." />
    </>
  );
}
