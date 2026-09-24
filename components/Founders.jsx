import Icon from './Icon';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import { FOUNDERS } from '@/lib/content';
import { getExpertiseTheme } from './founderTheme';

// Purely decorative section content — a "what Fenbrix builds" showcase, not
// founder-specific bio data, so it lives here rather than in lib/content.js.
const SHOWCASE_BADGES = [
  { label: 'Website Developer', icon: 'browser', color: 'purple', className: 'left-0 top-0' },
  { label: 'Frontend Developer', icon: 'code', color: 'emerald', className: 'right-0 top-2 sm:top-4' },
  { label: 'Next.js Developer', icon: 'box', color: 'blue', className: 'left-0 top-1/2 -translate-y-1/2' },
  { label: 'Web & App Development', icon: 'phone', color: 'orange', className: 'right-0 top-[74%] -translate-y-1/2' },
  { label: 'SEO & Performance', icon: 'chart', color: 'rose', className: 'left-2 bottom-0 sm:left-4' },
  { label: 'Digital Solutions', icon: 'megaphone', color: 'cyan', className: 'right-2 bottom-0 sm:right-4' },
];

const SHOWCASE_STATS = [
  { icon: 'code', line1: 'Modern', line2: 'Web Solutions' },
  { icon: 'rocket', line1: 'Scalable', line2: 'Products' },
  { icon: 'trend', line1: 'Better', line2: 'Online Presence' },
];

function ShowcaseBadge({ badge }) {
  const theme = getExpertiseTheme(badge.color);
  return (
    <span
      aria-hidden="true"
      className={`absolute flex animate-float items-center gap-1.5 rounded-lg border border-white/10 bg-navy-700/85 py-1.5 pl-1.5 pr-2.5 text-[10px] font-bold text-white/85 shadow-lift backdrop-blur-md sm:gap-2 sm:rounded-xl sm:py-2 sm:pl-2 sm:pr-3 sm:text-[11px] ${badge.className}`}
    >
      <span className={`flex h-5 w-5 shrink-0 items-center justify-center rounded-md text-white sm:h-6 sm:w-6 ${theme.iconBg}`}>
        <Icon name={badge.icon} className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={2} />
      </span>
      <span className="whitespace-nowrap">{badge.label}</span>
    </span>
  );
}

// Central abstract technology illustration — a stylised laptop with code
// lines and a floating preview card. Built entirely from CSS shapes, no
// image asset of any kind.
function TechVisual() {
  return (
    <div className="relative h-32 w-52 sm:h-36 sm:w-60" aria-hidden="true">
      <div className="pointer-events-none absolute -bottom-6 left-1/2 h-8 w-40 -translate-x-1/2 rounded-full bg-teal-400/30 blur-2xl" />

      <div className="absolute inset-x-0 top-0 h-[6.5rem] rounded-xl border border-white/15 bg-navy-900/80 p-2.5 shadow-lift sm:h-[7.5rem]">
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-rose-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-amber-400/70" />
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400/70" />
        </div>
        <div className="mt-2.5 space-y-1.5">
          <span className="block h-1.5 w-3/4 rounded-full bg-blue-400/50" />
          <span className="block h-1.5 w-1/2 rounded-full bg-purple-400/50" />
          <span className="block h-1.5 w-5/6 rounded-full bg-teal-400/50" />
          <span className="block h-1.5 w-2/3 rounded-full bg-blue-400/30" />
        </div>

        <div className="absolute -bottom-5 -right-5 flex h-14 w-20 flex-col gap-1 rounded-lg border border-white/15 bg-white p-1.5 shadow-lift">
          <span className="h-4 w-full rounded bg-gradient-to-br from-teal-400 to-blue-500" />
          <span className="h-1 w-3/4 rounded-full bg-navy/15" />
          <span className="h-1 w-1/2 rounded-full bg-navy/15" />
        </div>
      </div>

      <div className="absolute inset-x-3 bottom-0 h-2.5 rounded-b-md bg-gradient-to-b from-white/15 to-white/5" />
    </div>
  );
}

// Full "what Fenbrix builds" showcase card — replaces the old founder
// photo/identity card. No image, avatar or stock photo of any kind; every
// zone (header, central visual, floating badges, bottom strip) is filled
// with typography, CSS shapes and icons so no area is left empty.
function ShowcaseCard() {
  return (
    <div className="relative mx-auto max-w-[440px] lg:max-w-none">
      <div className="pointer-events-none absolute -left-10 -top-10 h-52 w-52 animate-float rounded-full bg-teal-400/20 blur-3xl" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-14 -right-8 h-56 w-56 animate-float rounded-full bg-purple-500/20 blur-3xl"
        style={{ animationDelay: '1.4s' }}
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute right-1/4 top-1/3 h-28 w-28 animate-float rounded-full bg-blue-500/15 blur-3xl"
        style={{ animationDelay: '2.2s' }}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-6 shadow-lift backdrop-blur-xl sm:p-8">
        <span className="pointer-events-none absolute inset-0 dot-grid opacity-[0.08]" aria-hidden="true" />
        <span
          className="pointer-events-none absolute -inset-px bg-gradient-to-br from-teal-400/10 via-transparent to-purple-500/10"
          aria-hidden="true"
        />

        <div className="relative">
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-teal-400">
            Building Digital Solutions
          </p>
          <div className="mt-3 text-[2rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-4xl">
            <p>Websites.</p>
            <p>Products.</p>
            <p className="text-teal-400">Growth.</p>
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-white/50">
            Design &bull; Develop &bull; Automate
            <br />
            Create &bull; Grow
          </p>
        </div>

        {/* ---- central visual + floating badges ---- */}
        <div className="relative mt-8 flex h-[290px] items-center justify-center sm:h-[320px]">
          <span className="pointer-events-none absolute h-40 w-40 rounded-full border border-teal-400/20" aria-hidden="true" />
          <span className="pointer-events-none absolute h-56 w-56 rounded-full border border-white/[0.06]" aria-hidden="true" />

          <svg className="pointer-events-none absolute inset-0 h-full w-full overflow-visible text-teal-400/25" aria-hidden="true">
            <path d="M60 40 C 100 60, 120 90, 150 130" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 6" strokeLinecap="round" />
            <path d="M320 60 C 280 90, 260 110, 230 140" fill="none" stroke="currentColor" strokeWidth="1.2" strokeDasharray="2 6" strokeLinecap="round" />
          </svg>

          <TechVisual />

          {SHOWCASE_BADGES.map((badge) => (
            <ShowcaseBadge key={badge.label} badge={badge} />
          ))}
        </div>

        {/* ---- bottom stats strip ---- */}
        <div className="relative mt-6 grid grid-cols-3 divide-x divide-white/10 rounded-2xl border border-white/10 bg-white/5 py-4">
          {SHOWCASE_STATS.map((stat) => (
            <div key={stat.line1} className="flex flex-col items-center gap-1.5 px-1 text-center sm:px-2">
              <Icon name={stat.icon} className="h-4 w-4 text-teal-400" strokeWidth={1.9} aria-hidden="true" />
              <p className="text-[11px] font-extrabold leading-tight text-white sm:text-[12px]">{stat.line1}</p>
              <p className="text-[10px] leading-tight text-white/45 sm:text-[11px]">{stat.line2}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Renders a bio paragraph's [text, emphasis] segments — see lib/content.js
// for why the content is shaped this way instead of embedding markup there.
function BioParagraph({ segments }) {
  return (
    <p>
      {segments.map(([text, emphasis], i) => {
        if (emphasis === 'bold') {
          return (
            <strong key={i} className="font-bold text-white">
              {text}
            </strong>
          );
        }
        if (emphasis === 'teal') {
          return (
            <strong key={i} className="font-bold text-teal-400">
              {text}
            </strong>
          );
        }
        return <span key={i}>{text}</span>;
      })}
    </p>
  );
}

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15
                 bg-white/5 text-white/80 transition-all duration-300 hover:border-teal-400/60
                 hover:bg-white/10 hover:text-teal-400"
    >
      <Icon name={icon} className="h-4 w-4" strokeWidth={1.8} />
    </a>
  );
}

function FounderCard({ person, reverse = false }) {
  return (
    <div
      className={`grid items-start gap-12 lg:grid-cols-[1fr_1.05fr] lg:gap-14 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <Reveal direction={reverse ? 'left' : 'right'}>
        <ShowcaseCard />
      </Reveal>

      <Reveal direction={reverse ? 'right' : 'left'} delay={0.1}>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/5 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-400">
            <Icon name="people" className="h-3.5 w-3.5" strokeWidth={2} />
            Meet the Founder
          </span>
          <span className="hidden h-px max-w-[100px] flex-1 bg-gradient-to-r from-teal-400/50 to-transparent sm:block" aria-hidden="true" />
        </div>

        <h2 className="h2 mt-5 text-white">{person.name}</h2>
        <p className="text-gradient mt-1 text-xl font-extrabold sm:text-2xl">{person.title}</p>

        {person.intro && (
          <p className="mt-5 text-lg font-semibold italic leading-relaxed text-white/80">{person.intro}</p>
        )}

        {person.bio?.length > 0 && (
          <div className="mt-7 space-y-4 text-[15px] leading-relaxed text-white/65">
            {person.bio.map((segments, i) => (
              <BioParagraph key={i} segments={segments} />
            ))}
          </div>
        )}

        {person.statement && (
          <blockquote className="relative mt-8 overflow-hidden rounded-2xl border border-teal-400/20 bg-teal-400/5 p-6">
            <span aria-hidden="true" className="absolute -top-3 left-5 font-serif text-5xl leading-none text-teal-400/30">
              &ldquo;
            </span>
            <p className="relative text-[16px] font-semibold italic leading-relaxed text-white/85">
              {person.statement}
            </p>
          </blockquote>
        )}

        {person.expertise?.length > 0 && (
          <div className="mt-10">
            <div className="flex items-center gap-2">
              <Icon name="bolt" className="h-4 w-4 text-teal-400" />
              <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-400">
                Experience &amp; Expertise
              </h3>
            </div>

            <Stagger className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3" gap={0.06}>
              {person.expertise.map((item) => {
                const theme = getExpertiseTheme(item.color);
                return (
                  <StaggerItem key={item.title}>
                    <div
                      className={`group relative h-full overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift ${theme.border}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${theme.glow}`}
                      />
                      <span
                        className={`relative flex h-11 w-11 items-center justify-center rounded-xl text-white shadow-soft transition-transform duration-300 group-hover:scale-105 ${theme.iconBg}`}
                      >
                        <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <h4 className="relative mt-4 text-[15px] font-extrabold text-white">{item.title}</h4>
                      <p className="relative mt-1 text-[13px] text-white/50">{item.desc}</p>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        )}

        {(person.instagram || person.linkedin || person.email) && (
          <div className="mt-10 flex flex-wrap items-center gap-4 border-t border-white/10 pt-7">
            <span className="text-[13px] font-bold text-white/45">Connect with {person.name}</span>
            <div className="flex items-center gap-3">
              {person.instagram && (
                <SocialLink href={person.instagram} icon="instagram" label={`${person.name} on Instagram`} />
              )}
              {person.linkedin && (
                <SocialLink href={person.linkedin} icon="linkedin" label={`${person.name} on LinkedIn`} />
              )}
            </div>
            {person.email && (
              <div className="flex items-center gap-2 text-sm">
                <Icon name="mail" className="h-4 w-4 text-teal-400" />
                <a href={`mailto:${person.email}`} className="link-underline font-semibold text-white/80 hover:text-white">
                  {person.email}
                </a>
                {person.emailIsPlaceholder && (
                  <span className="text-xs italic text-white/35">(placeholder — not live yet)</span>
                )}
              </div>
            )}
          </div>
        )}
      </Reveal>
    </div>
  );
}

export default function Founders({ people = FOUNDERS }) {
  return (
    <section aria-label="Meet the Fenbrix founder" className="surface-dark relative overflow-hidden py-20 lg:py-24">
      <span className="pointer-events-none absolute inset-0 dot-grid opacity-[0.03]" aria-hidden="true" />
      <div className="pointer-events-none absolute right-10 top-10 hidden lg:block" aria-hidden="true">
        <span className="text-[13px] italic leading-snug text-teal-400/60">
          Turning Ideas
          <br />
          into Real Solutions
        </span>
        <svg width="52" height="30" viewBox="0 0 52 30" fill="none" className="mt-1 text-teal-400/40">
          <path d="M4 4c16-2 32 3 40 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1 6" />
          <path d="M34 18l11 6 2-11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>

      <div className="container-x relative space-y-24">
        {people.map((person, i) => (
          <FounderCard key={person.name} person={person} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
