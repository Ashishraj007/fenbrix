import Link from 'next/link';
import Icon from './Icon';
import Faq from './Faq';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import CTA from './CTA';
import { SERVICES } from '@/lib/content';

function SectionIntro({ eyebrow, title, body }) {
  return (
    <Reveal className="max-w-2xl">
      <span className="eyebrow">{eyebrow}</span>
      <h2 className="h2 mt-4">{title}</h2>
      {body && <p className="lede mt-5">{body}</p>}
    </Reveal>
  );
}

export default function ServiceDetail({ service, detail }) {
  const related = SERVICES.filter((item) => item.slug !== service.slug).slice(0, 3);

  return (
    <>
      <section className="surface-dark relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 animate-float rounded-full bg-teal-400/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[42%] h-48 w-48 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="container-x relative z-10 grid gap-10 py-16 lg:grid-cols-[1fr_auto] lg:items-end lg:py-24">
          <Reveal>
            <span className="eyebrow text-teal-400">{detail.eyebrow}</span>
            <h1 className="h1 mt-4 max-w-3xl text-white">{detail.hero}</h1>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">{detail.intro}</p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href="/contact/" className="btn-teal">Get a free audit <Icon name="arrow" className="h-4 w-4" /></Link>
              <Link href="/process/" className="btn-ghost-dark">See how we work <Icon name="arrow" className="h-4 w-4" /></Link>
            </div>
          </Reveal>
          <Reveal direction="left" delay={0.12} className="hidden lg:block">
            <div className="flex h-36 w-36 items-center justify-center rounded-3xl border border-white/10 bg-white/5 text-teal-400 shadow-lift">
              <Icon name={service.icon} className="h-14 w-14" strokeWidth={1.35} />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <SectionIntro eyebrow="The business problem" title="When this part of your digital business is not working." />
          <Stagger className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {detail.problems.map((problem, index) => (
              <StaggerItem key={problem}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="text-[12px] font-extrabold tracking-[0.12em] text-teal-600">0{index + 1}</span>
                  <p className="mt-3 text-[15px] font-extrabold leading-snug">{problem}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <SectionIntro eyebrow="What Fenbrix delivers" title="A clear scope, from first plan to ongoing improvement." />
          <Stagger className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {detail.deliverables.map(([title, description]) => (
              <StaggerItem key={title}>
                <div className="card h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600"><Icon name={service.icon} className="h-5 w-5" /></div>
                  <h3 className="mt-5 text-[16px] font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-14 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
          <SectionIntro eyebrow="Across Delhi NCR" title={`${service.title} for businesses in Noida and beyond.`} body={`Fenbrix is based in Noida and supports businesses across Delhi NCR. Whether your team is in Delhi, Gurugram or a nearby market, we use a structured remote process and connect meetings or on-site work to the needs of the project—not a generic location package.`} />
          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            <Link href="/locations/noida/" className="chip transition-colors hover:border-teal-400 hover:text-teal-600">Noida businesses <Icon name="arrow" className="h-3.5 w-3.5" /></Link>
            <Link href="/locations/delhi/" className="chip transition-colors hover:border-teal-400 hover:text-teal-600">Delhi businesses <Icon name="arrow" className="h-3.5 w-3.5" /></Link>
            <Link href="/locations/gurugram/" className="chip transition-colors hover:border-teal-400 hover:text-teal-600">Gurugram businesses <Icon name="arrow" className="h-3.5 w-3.5" /></Link>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[.82fr_1.18fr] lg:gap-20">
          <SectionIntro eyebrow="Capabilities" title={`What is inside our ${service.title.toLowerCase()} work.`} body="Every engagement is tailored to scope, but these are the areas our team can bring together." />
          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {detail.capabilities.map((capability) => (
                <div key={capability} className="flex gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" strokeWidth={2.6} />
                  <span className="text-sm font-semibold text-navy/75">{capability}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <SectionIntro eyebrow="How we work" title="A process you can see, not a black box." />
          <Stagger className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {detail.process.map(([number, title, description]) => (
              <StaggerItem key={number}>
                <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <span className="text-[13px] font-extrabold tracking-[0.1em] text-teal-600">{number}</span>
                  <h3 className="mt-3 text-[16px] font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
          <Reveal delay={0.16} className="mt-8"><Link href="/process/" className="btn-ghost">Explore our full process <Icon name="arrow" className="h-4 w-4" /></Link></Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionIntro eyebrow="Business outcomes" title="Built to make the next business decision easier." body="We focus on work that strengthens your digital foundation and helps your team move with more confidence—not inflated promises." />
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {detail.outcomes.map((outcome) => (
              <StaggerItem key={outcome}>
                <div className="flex h-full gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600/10 text-teal-600"><Icon name="check" className="h-4 w-4" strokeWidth={2.6} /></div>
                  <p className="pt-1 text-sm font-bold leading-relaxed text-navy/75">{outcome}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="bg-mist py-14 lg:py-20">
        <div className="container-x grid gap-10 lg:grid-cols-[.8fr_1.2fr] lg:items-end">
          <SectionIntro eyebrow="Who we help" title="Relevant to businesses with a real need for it." body="These are some of the sectors where this work most naturally connects to customer acquisition and operations." />
          <Reveal delay={0.1} className="flex flex-wrap gap-3">
            {detail.industries.map((industry) => <Link key={industry} href="/industries/" className="chip transition-colors hover:border-teal-400 hover:text-teal-600">{industry} <Icon name="arrow" className="h-3.5 w-3.5" /></Link>)}
          </Reveal>
        </div>
      </section>

      <section className="py-10 lg:py-14">
        <div className="container-x">
          <Reveal>
            <div className="surface-dark relative overflow-hidden rounded-3xl p-8 text-white sm:p-12">
              <div className="pointer-events-none absolute -right-16 -top-16 h-56 w-56 rounded-full bg-teal-400/10 blur-3xl" />
              <div className="relative z-10 grid gap-7 lg:grid-cols-[.8fr_1.2fr] lg:items-center">
                <div><span className="eyebrow text-teal-400">Why Fenbrix</span><h2 className="h2 mt-4 text-white">One partner for the work around the work.</h2></div>
                <p className="text-base leading-relaxed text-white/65">Technology, design, marketing and business growth should reinforce each other. Fenbrix brings those pieces together so your {service.title.toLowerCase()} work can connect to the rest of your digital business.</p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <SectionIntro eyebrow="Questions" title="Useful things to know before we start." />
          <Reveal delay={0.1}><Faq items={detail.faqs.map(([q, a]) => ({ q, a }))} /></Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <SectionIntro eyebrow="Related services" title="The connected work your business may need next." />
          <Stagger className="mt-10 grid gap-5 sm:grid-cols-3">
            {related.map((item) => <StaggerItem key={item.slug}><Link href={`/services/${item.slug}/`} className="card group block h-full"><div className="flex h-10 w-10 items-center justify-center rounded-xl bg-navy text-teal-400 transition-colors group-hover:bg-teal-600 group-hover:text-white"><Icon name={item.icon} className="h-5 w-5" /></div><h3 className="mt-5 text-[16px] font-extrabold">{item.title}</h3><p className="mt-2 text-sm leading-relaxed text-navy/55">{item.short}</p><span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-teal-600">Explore service <Icon name="arrow" className="h-4 w-4" /></span></Link></StaggerItem>)}
          </Stagger>
        </div>
      </section>

      <CTA title={`Ready to make ${service.title.toLowerCase()} work harder for your business?`} body="Start with a free digital audit. We will review the relevant gaps, discuss the right scope and tell you plainly what we would prioritise." />
    </>
  );
}
