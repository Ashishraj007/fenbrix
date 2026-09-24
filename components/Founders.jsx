import Icon from './Icon';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import TrackedLink from './TrackedLink';
import { LogoMark } from './Logo';
import { FOUNDERS } from '@/lib/content';
import { getExpertiseTheme } from './founderTheme';

// "The Fenbrix vision" card — sits where a founder photo would, at the same
// aspect ratio, so the profile card keeps its size. Typography, glow and a
// faint monogram only; no image or avatar of any kind.
function VisionCard() {
  return (
    <div className="relative aspect-[4/5] overflow-hidden rounded-[22px] border border-white/10 bg-gradient-to-br from-navy-900/90 via-navy-800/80 to-navy-600/60 lg:aspect-[5/6]">
      <span className="pointer-events-none absolute -left-16 -top-16 h-56 w-56 rounded-full bg-teal-400/20 blur-3xl" aria-hidden="true" />
      <span className="pointer-events-none absolute -bottom-20 -right-16 h-64 w-64 rounded-full bg-purple-500/15 blur-3xl" aria-hidden="true" />
      <span className="pointer-events-none absolute inset-0 dot-grid opacity-[0.06]" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-14 -top-10 opacity-[0.06]" aria-hidden="true">
        <LogoMark className="h-64 w-64 sm:h-72 sm:w-72" variant="white" id="fx-vision-bg" />
      </span>

      <div className="relative flex h-full flex-col justify-between p-6 sm:p-8">
        <div className="flex items-center gap-3">
          <LogoMark className="h-9 w-9 shrink-0" variant="gradient" id="fx-vision" />
          <p className="text-[11px] font-extrabold uppercase tracking-[0.22em] text-teal-400">The Fenbrix Vision</p>
        </div>

        <div>
          <span className="block h-px w-12 bg-gradient-to-r from-teal-400 to-transparent" aria-hidden="true" />
          <p className="mt-5 text-[1.75rem] font-extrabold leading-[1.12] tracking-tight text-white sm:text-4xl lg:text-[2rem] xl:text-4xl">
            Building ideas that create <span className="text-teal-400">real impact.</span>
          </p>
          <p className="mt-4 max-w-sm text-[14px] leading-relaxed text-white/60 sm:text-[15px]">
            Turning ideas into practical digital products and technology that create meaningful impact.
          </p>
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

function FounderConnect({ person }) {
  if (!person.instagram && !person.linkedin && !person.email) return null;
  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-3">
      {(person.instagram || person.linkedin) && (
        <div className="flex items-center gap-2.5">
          {person.instagram && (
            <SocialLink href={person.instagram} icon="instagram" label={`${person.name} on Instagram`} />
          )}
          {person.linkedin && (
            <SocialLink href={person.linkedin} icon="linkedin" label={`${person.name} on LinkedIn`} />
          )}
        </div>
      )}
      {person.email && (
        <div className="flex min-w-0 items-center gap-2 text-sm">
          <Icon name="mail" className="h-4 w-4 shrink-0 text-teal-400" />
          <TrackedLink
            href={`mailto:${person.email}`}
            event="email_click"
            eventParams={{ link_location: 'founder_card' }}
            className="link-underline min-w-0 break-all font-semibold text-white/80 hover:text-white"
          >
            {person.email}
          </TrackedLink>
          {person.emailIsPlaceholder && (
            <span className="text-xs italic text-white/35">(placeholder — not live yet)</span>
          )}
        </div>
      )}
    </div>
  );
}

// Founder vision + identity card. Vision card over details on mobile and desktop;
// side by side on tablet, where the whole section is a single column.
function FounderProfile({ person }) {
  return (
    <div className="relative">
      <div className="pointer-events-none absolute -left-10 -top-10 h-52 w-52 animate-float rounded-full bg-teal-400/20 blur-3xl" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -bottom-12 -right-8 h-56 w-56 animate-float rounded-full bg-purple-500/20 blur-3xl"
        style={{ animationDelay: '1.4s' }}
        aria-hidden="true"
      />

      <div className="relative overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.04] p-3 shadow-lift backdrop-blur-xl md:grid md:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)] md:items-center md:gap-4 lg:block">
        <span className="pointer-events-none absolute inset-0 dot-grid opacity-[0.08]" aria-hidden="true" />
        <span
          className="pointer-events-none absolute -inset-px bg-gradient-to-br from-teal-400/10 via-transparent to-purple-500/10"
          aria-hidden="true"
        />

        <VisionCard />

        <div className="relative px-2 pb-2 pt-5 sm:px-3 md:py-4 lg:px-3 lg:pb-3 lg:pt-5">
          <div className="flex flex-wrap items-end justify-between gap-x-4 gap-y-1">
            <div className="flex items-center gap-3">
              <LogoMark className="h-10 w-10 shrink-0 rounded-xl shadow-soft" variant="gradient" id="fx-founder" />
              <div>
                <h3 className="text-2xl font-extrabold leading-tight text-white">{person.name}</h3>
                <p className="mt-0.5 text-[13px] font-bold text-teal-400">{person.role || person.title}</p>
              </div>
            </div>
            {person.location && (
              <p className="flex items-center gap-1.5 pb-0.5 text-[13px] font-semibold text-white/55">
                <Icon name="pin" className="h-3.5 w-3.5 text-teal-400" strokeWidth={2} />
                Based in {person.location}
              </p>
            )}
          </div>

          {person.focus?.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-2" aria-label="Focus areas">
              {person.focus.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[12px] font-bold text-white/75"
                >
                  {f}
                </li>
              ))}
            </ul>
          )}

          <div className="mt-5 border-t border-white/10 pt-5">
            <FounderConnect person={person} />
          </div>
        </div>
      </div>
    </div>
  );
}

function FounderCard({ person, reverse = false }) {
  const [lead, highlight] = person.tagline || [person.name, ''];
  return (
    <div
      className={`grid items-start gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-14 xl:gap-16 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      {/* ---- Founder: who, why, and the person behind it ---- */}
      <Reveal direction={reverse ? 'left' : 'right'}>
        <div className="flex items-center gap-3">
          <span className="inline-flex items-center gap-2 rounded-full border border-teal-400/30 bg-teal-400/5 px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-400">
            <Icon name="people" className="h-3.5 w-3.5" strokeWidth={2} />
            Meet the Founder
          </span>
          <span className="hidden h-px max-w-[100px] flex-1 bg-gradient-to-r from-teal-400/50 to-transparent sm:block" aria-hidden="true" />
        </div>

        <h2 className="h2 mt-5 text-white">
          {lead} {highlight && <span className="text-teal-400">{highlight}</span>}
        </h2>

        {person.summary && (
          <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/70 sm:text-[17px]">{person.summary}</p>
        )}

        <div className="mt-9 lg:mt-10">
          <FounderProfile person={person} />
        </div>
      </Reveal>

      {/* ---- Vision, then experience ---- */}
      <Reveal direction={reverse ? 'right' : 'left'} delay={0.1} className="lg:pt-2">
        {(person.intro || person.bio?.length > 0) && (
          <div className="flex items-center gap-2">
            <Icon name="sparkle" className="h-4 w-4 text-teal-400" />
            <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-400">The story</h3>
          </div>
        )}

        {person.intro && (
          <p className="mt-4 text-lg font-semibold italic leading-relaxed text-white/85 sm:text-xl">{person.intro}</p>
        )}

        {person.bio?.length > 0 && (
          <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/65">
            {person.bio.map((segments, i) => (
              <BioParagraph key={i} segments={segments} />
            ))}
          </div>
        )}

        {person.statement && (
          <blockquote className="relative mt-8 overflow-hidden rounded-2xl border border-teal-400/20 bg-teal-400/5 p-5 sm:p-6">
            <span aria-hidden="true" className="absolute -top-3 left-5 font-serif text-5xl leading-none text-teal-400/30">
              &ldquo;
            </span>
            <p className="relative text-[16px] font-semibold italic leading-relaxed text-white/85">
              {person.statement}
            </p>
          </blockquote>
        )}

        {person.expertise?.length > 0 && (
          <div className="mt-10 lg:mt-12">
            <div className="flex items-center gap-2">
              <Icon name="bolt" className="h-4 w-4 text-teal-400" />
              <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-400">
                Experience &amp; Expertise
              </h3>
            </div>

            {/* 1 col (compact rows) on small phones, 2 on larger phones, 3 from tablet up. */}
            <Stagger
              className="mt-5 grid gap-3 min-[420px]:grid-cols-2 sm:gap-4 md:grid-cols-3"
              gap={0.06}
            >
              {person.expertise.map((item) => {
                const theme = getExpertiseTheme(item.color);
                return (
                  <StaggerItem key={item.title}>
                    <div
                      className={`group relative flex h-full items-center gap-4 overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03] p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift min-[420px]:block min-[420px]:p-5 lg:p-4 xl:p-5 ${theme.border}`}
                    >
                      <span
                        aria-hidden="true"
                        className={`pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100 ${theme.glow}`}
                      />
                      <span
                        className={`relative flex h-11 w-11 shrink-0 items-center justify-center rounded-xl text-white shadow-soft transition-transform duration-300 group-hover:scale-105 ${theme.iconBg}`}
                      >
                        <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.8} />
                      </span>
                      <div className="relative min-w-0">
                        <h4 className="text-[15px] font-extrabold text-white min-[420px]:mt-4">{item.title}</h4>
                        <p className="mt-1 text-[13px] text-white/50">{item.desc}</p>
                      </div>
                    </div>
                  </StaggerItem>
                );
              })}
            </Stagger>
          </div>
        )}
      </Reveal>
    </div>
  );
}

export default function Founders({ people = FOUNDERS }) {
  return (
    <section aria-label="Meet the Fenbrix founder" className="surface-dark relative overflow-hidden py-16 sm:py-20 lg:py-24">
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
