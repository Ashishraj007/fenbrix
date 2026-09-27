import Link from 'next/link';
import Icon from './Icon';
import { LogoMark } from './Logo';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import CTA from './CTA';
import TrackedLink from './TrackedLink';

function SectionIntro({ eyebrow, title, body, className = 'max-w-2xl', dark = false }) {
  return (
    <Reveal className={className}>
      <span className={`eyebrow ${dark ? 'text-teal-400' : ''}`}>{eyebrow}</span>
      <h2 className={`h2 mt-4 ${dark ? 'text-white' : ''}`}>{title}</h2>
      {body && <p className={`mt-5 text-base leading-relaxed sm:text-lg ${dark ? 'text-white/60' : 'text-navy/65'}`}>{body}</p>}
    </Reveal>
  );
}

// Opens the client's live site in a new tab and records the click in GA4.
function LiveSiteLink({ study, location, className, children }) {
  return (
    <TrackedLink
      href={study.url}
      event="case_study_live_site_click"
      eventParams={{ case_study: study.slug, link_location: location }}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
    >
      {children}
    </TrackedLink>
  );
}

// Real screenshot of the client site inside a minimal browser chrome.
function BrowserFrame({ image, domain, eager = false, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-2xl border border-line bg-white shadow-lift ${className}`}>
      <div className="flex items-center gap-3 border-b border-line bg-mist px-4 py-2.5">
        <div className="flex gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-amber-400/70" />
          <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-full border border-line bg-white px-3 py-1 text-[11px] font-semibold text-navy/50">
          <Icon name="lock" className="h-3 w-3 shrink-0 text-teal-600" strokeWidth={2.2} />
          <span className="truncate">{domain}</span>
        </div>
      </div>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading={eager ? 'eager' : 'lazy'}
        fetchPriority={eager ? 'high' : undefined}
        decoding={eager ? undefined : 'async'}
        className="block h-auto w-full"
      />
    </div>
  );
}

function PhoneFrame({ image, className = '' }) {
  return (
    <div className={`overflow-hidden rounded-[2rem] border-[7px] border-navy-900 bg-navy-900 shadow-lift ${className}`}>
      <img
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        loading="lazy"
        decoding="async"
        className="block h-auto w-full rounded-[1.5rem]"
      />
    </div>
  );
}

export default function CaseStudyDetail({ study, next }) {
  const { images, transformation } = study;
  const { overview } = study;
  // Services spans a full row on small screens; if the rest leave an odd cell, the last one fills it.
  const lastSpans = (overview.length - 1) % 2 === 1;
  const primaryShot = images[study.showcase.primary];
  const extraShots = study.showcase.extras.map((key) => images[key]);

  return (
    <>
      {/* ---------- HERO ---------- */}
      <section className="surface-dark relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 animate-float rounded-full bg-teal-400/10 blur-3xl" />
        <div className="pointer-events-none absolute bottom-0 left-[38%] h-48 w-48 rounded-full bg-teal-400/10 blur-3xl" />
        <div className="container-x relative z-10 grid items-center gap-12 py-14 lg:grid-cols-[1fr_1.05fr] lg:gap-14 lg:py-20">
          <Reveal>
            <nav aria-label="Breadcrumb" className="flex items-center gap-2 text-[12px] font-semibold text-white/45">
              <Link href="/case-studies/" className="transition-colors hover:text-white">Case Studies</Link>
              <Icon name="chevron" className="h-3 w-3 -rotate-90" />
              <span className="text-white/70">{study.client}</span>
            </nav>
            <span className="eyebrow mt-6 block text-teal-400">Case Study</span>
            <h1 className="mt-4 text-[2rem] font-extrabold leading-[1.1] tracking-[-0.025em] text-white sm:text-[2.6rem] lg:text-[3rem]">
              {study.title}
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">{study.intro}</p>

            <dl className="mt-8 flex flex-wrap gap-x-8 gap-y-4 border-t border-white/10 pt-6">
              {[...study.heroFacts, ['Services', study.services.join(' • ')]].map(([label, value]) => (
                <div key={label} className={label === 'Services' ? 'min-w-0 flex-1 basis-56' : ''}>
                  <dt className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-white/40">{label}</dt>
                  <dd className="mt-1 text-[15px] font-bold text-white">{value}</dd>
                </div>
              ))}
            </dl>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <LiveSiteLink study={study} location="case_study_hero" className="btn-teal">
                Visit Live Website <Icon name="arrow" className="h-4 w-4 -rotate-45" />
              </LiveSiteLink>
              <Link href="/contact/" className="btn-ghost-dark">
                Start a project <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.12} className="relative">
            <BrowserFrame image={images.desktop} domain={study.domain} eager />
            <PhoneFrame image={images.mobile} className="absolute -bottom-8 -left-4 hidden w-[27%] sm:block lg:-left-10" />
          </Reveal>
        </div>
      </section>

      {/* ---------- PROJECT OVERVIEW ---------- */}
      <section className="pt-14 lg:pt-20">
        <div className="container-x">
          <Reveal>
            <dl className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-line bg-line shadow-soft lg:flex">
              {overview.map(([label, value], i) => (
                <div
                  key={label}
                  className={`bg-white p-5 sm:p-6 ${
                    label === 'Services' ? 'col-span-2 lg:flex-[1.8]' : 'lg:flex-1'
                  } ${lastSpans && i === overview.length - 1 ? 'col-span-2' : ''}`}
                >
                  <dt className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-navy/45">{label}</dt>
                  <dd className="mt-2 text-[15px] font-bold leading-snug text-navy">
                    {label === 'Status' ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="relative flex h-2.5 w-2.5">
                          <span className="absolute inline-flex h-full w-full animate-pulse-ring rounded-full bg-emerald-500" />
                          <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
                        </span>
                        {value}
                      </span>
                    ) : label === 'Website' ? (
                      <LiveSiteLink study={study} location="case_study_overview" className="link-underline text-teal-600">
                        {value}
                      </LiveSiteLink>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- THE CHALLENGE ---------- */}
      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:gap-20">
          <SectionIntro eyebrow="The challenge" title={study.challenge.title} />
          <Reveal delay={0.1}>
            <p className="lede">{study.challenge.body}</p>
            <p className="mt-5 text-[15px] leading-relaxed text-navy/55">{study.about}</p>
            <ul className="mt-7 flex flex-wrap gap-2.5">
              {study.challenge.points.map((point) => (
                <li key={point} className="inline-flex items-center gap-2 rounded-full border border-red-500/15 bg-red-500/5 px-3.5 py-1.5 text-xs font-bold text-red-600/80">
                  <span className="h-1.5 w-1.5 rounded-full bg-red-500/60" aria-hidden="true" />
                  {point}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ---------- THE FENBRIX APPROACH ---------- */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <SectionIntro eyebrow="The Fenbrix approach" title={study.approachTitle} body={study.approachBody} />
          <Stagger className="relative mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {study.approach.map(([title, description, icon], i) => (
              <StaggerItem key={title}>
                <div className="relative h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                  <div className="flex items-center justify-between">
                    <span className="text-[13px] font-extrabold tracking-[0.1em] text-teal-600">{String(i + 1).padStart(2, '0')}</span>
                    <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                      <Icon name={icon} className="h-5 w-5" />
                    </span>
                  </div>
                  <h3 className="mt-5 text-[16px] font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- BEFORE → FENBRIX → AFTER ---------- */}
      <section className="py-20 lg:py-28">
        <div className="container-x">
          <SectionIntro
            className="mx-auto max-w-2xl text-center"
            eyebrow="The transformation"
            title={study.transformationTitle}
          />

          <div
            role="group"
            aria-label={`Before Fenbrix: ${transformation.before.join(', ')}. Fenbrix delivered: ${transformation.fenbrix.join(', ')}. After: ${transformation.after.join(', ')}.`}
            className="mt-12 grid gap-5 lg:grid-cols-[1fr_auto_1.1fr_auto_1fr] lg:items-stretch lg:gap-4"
          >
            {/* Before */}
            <Reveal className="h-full">
              <div
                className="h-full rounded-[28px] border border-line p-6 sm:p-7"
                style={{ background: 'radial-gradient(120% 110% at 15% 0%, rgba(239,68,68,0.07), transparent 60%)' }}
              >
                <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-red-600">
                  Before
                </span>
                <ul className="mt-6 space-y-3">
                  {transformation.before.map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-xl border border-line bg-white/80 px-4 py-3 text-sm font-bold text-navy/55">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-500" aria-hidden="true">
                        <span className="h-0.5 w-2.5 rounded-full bg-current" />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <FlowArrow />

            {/* Fenbrix */}
            <Reveal delay={0.1} className="h-full">
              <div className="surface-dark relative h-full overflow-hidden rounded-[28px] p-6 text-white shadow-lift sm:p-7">
                <span className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-teal-400/15 blur-3xl" aria-hidden="true" />
                <div className="relative flex items-center gap-3">
                  <LogoMark className="h-10 w-10" variant="gradient" id="fx-case-flow" />
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal-400">Fenbrix</span>
                </div>
                <ul className="relative mt-6 space-y-2.5">
                  {transformation.fenbrix.map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm font-bold text-white/90">
                      <span className="h-1.5 w-1.5 rounded-full bg-teal-400" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <FlowArrow />

            {/* After */}
            <Reveal delay={0.2} className="h-full">
              <div
                className="h-full rounded-[28px] border border-teal-400/30 p-6 sm:p-7"
                style={{ background: 'radial-gradient(120% 110% at 85% 0%, rgba(27,143,138,0.1), transparent 60%)' }}
              >
                <span className="inline-flex items-center rounded-full bg-teal-600/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal-600">
                  After
                </span>
                <ul className="mt-6 space-y-3">
                  {transformation.after.map((item) => (
                    <li key={item} className="flex items-center gap-3 rounded-xl border border-line bg-white px-4 py-3 text-sm font-bold text-navy shadow-soft">
                      <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-teal-600 text-white" aria-hidden="true">
                        <Icon name="check" className="h-3.5 w-3.5" strokeWidth={2.8} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- WHAT WE DELIVERED ---------- */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <SectionIntro eyebrow={study.deliverablesEyebrow} title={study.deliverablesTitle} />
          <Stagger className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
            {study.deliverables.map(([title, description, icon]) => (
              <StaggerItem key={title}>
                <div className="card h-full">
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                    <Icon name={icon} className="h-5 w-5" />
                  </div>
                  <h3 className="mt-5 text-[16px] font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- WEBSITE SHOWCASE ---------- */}
      <section className="surface-dark relative overflow-hidden py-20 lg:py-28">
        <span className="pointer-events-none absolute inset-0 dot-grid opacity-[0.04]" aria-hidden="true" />
        <div className="container-x relative">
          <SectionIntro
            dark
            className="mx-auto max-w-2xl text-center"
            eyebrow="Website showcase"
            title={study.showcaseTitle}
            body={study.showcaseBody}
          />

          <div className="mt-14 grid items-center gap-10 lg:grid-cols-[2.4fr_1fr] lg:gap-12">
            <Reveal>
              <BrowserFrame image={primaryShot} domain={`${study.domain}${primaryShot.path || ''}`} />
            </Reveal>
            <Reveal delay={0.12} className="mx-auto w-full max-w-[250px] lg:max-w-[260px]">
              <PhoneFrame image={images.mobile} />
            </Reveal>
          </div>

          {extraShots.length > 0 && (
            <div className="mt-8 grid gap-8 md:grid-cols-2 lg:mt-10">
              {extraShots.map((shot, i) => (
                <Reveal key={shot.src} delay={i * 0.1}>
                  <BrowserFrame image={shot} domain={`${study.domain}${shot.path || ''}`} />
                </Reveal>
              ))}
            </div>
          )}

          {study.brand && images.logo && (
            <Reveal delay={0.1}>
              <div className="mt-10 grid items-center gap-6 rounded-3xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm sm:grid-cols-[auto_1fr] sm:gap-10 sm:p-8">
                <div className="flex h-28 items-center justify-center rounded-2xl bg-white px-8 shadow-soft sm:h-32 sm:w-72">
                  <img
                    src={images.logo.src}
                    alt={images.logo.alt}
                    width={images.logo.width}
                    height={images.logo.height}
                    loading="lazy"
                    decoding="async"
                    className="h-auto max-h-20 w-auto max-w-full"
                  />
                </div>
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal-400">Brand identity</span>
                  <h3 className="mt-2 text-xl font-extrabold text-white sm:text-2xl">{study.brand.title}</h3>
                  <p className="mt-2 max-w-xl text-sm leading-relaxed text-white/60">{study.brand.body}</p>
                </div>
              </div>
            </Reveal>
          )}
        </div>
      </section>

      {/* ---------- RESULTS ---------- */}
      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-20">
          <SectionIntro
            eyebrow="Results"
            title={study.resultsTitle}
            body={study.resultsBody}
          />
          <Stagger className="grid gap-4 sm:grid-cols-2">
            {study.results.map((result) => (
              <StaggerItem key={result}>
                <div className="flex h-full gap-3 rounded-2xl border border-line bg-white p-5 shadow-soft">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-teal-600/10 text-teal-600">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.6} />
                  </div>
                  <p className="pt-1 text-sm font-bold leading-relaxed text-navy/75">{result}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* ---------- RELATED SERVICES + NEXT CASE STUDY ---------- */}
      <section className="pb-14 lg:pb-20">
        <div className="container-x grid gap-6 lg:grid-cols-[1.2fr_1fr]">
          <Reveal className="rounded-2xl border border-line bg-white p-6 shadow-soft sm:p-7">
            <span className="eyebrow">Services behind this project</span>
            <h2 className="mt-3 text-xl font-extrabold leading-snug tracking-[-0.015em] sm:text-2xl">How Fenbrix can help you, too.</h2>
            <p className="mt-3 text-sm leading-relaxed text-navy/60">{study.related.body}</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {study.related.links.map(([label, href]) => (
                <Link key={href} href={href} className="chip transition-colors hover:border-teal-400 hover:text-teal-600">
                  {label} <Icon name="arrow" className="h-3.5 w-3.5" />
                </Link>
              ))}
              <Link href="/case-studies/" className="chip transition-colors hover:border-teal-400 hover:text-teal-600">
                All case studies <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </Reveal>

          {next && (
            <Reveal delay={0.08}>
              <Link href={`/case-studies/${next.slug}/`} className="card group flex h-full flex-col">
                <span className="eyebrow">Next case study</span>
                <span className="mt-3 text-xl font-extrabold leading-snug tracking-[-0.015em] sm:text-2xl">{next.client}</span>
                <span className="mt-1 text-sm font-semibold text-teal-600">{next.industry}</span>
                <span className="mt-3 text-sm leading-relaxed text-navy/60">{next.summary}</span>
                <span className="mt-auto inline-flex items-center gap-2 pt-6 text-sm font-bold text-navy transition-colors group-hover:text-teal-600">
                  Read the {next.client} case study
                  <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </span>
              </Link>
            </Reveal>
          )}
        </div>
      </section>

      {/* ---------- LIVE WEBSITE CTA ---------- */}
      <section className="pb-4">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col items-start gap-6 rounded-2xl border border-line bg-mist p-7 sm:p-9 md:flex-row md:items-center md:justify-between">
              <div>
                <span className="eyebrow">{study.domain}</span>
                <h2 className="h3 mt-3">Explore the {study.client} website</h2>
                <p className="mt-2 max-w-lg text-sm text-navy/55">{study.liveCtaBody}</p>
              </div>
              <LiveSiteLink study={study} location="case_study_live_cta" className="btn-primary shrink-0">
                Visit Live Website <Icon name="arrow" className="h-4 w-4 -rotate-45" />
              </LiveSiteLink>
            </div>
          </Reveal>
        </div>
      </section>

      <CTA
        title={study.cta.title}
        body={study.cta.body}
        ctaLabel="Start a Project"
        secondaryHref="/services/"
        secondaryLabel="Explore Services"
      />
    </>
  );
}

function FlowArrow() {
  return (
    <div className="flex items-center justify-center text-teal-600" aria-hidden="true">
      <span className="flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white shadow-soft">
        <Icon name="arrow" className="h-4 w-4 rotate-90 lg:rotate-0" />
      </span>
    </div>
  );
}
