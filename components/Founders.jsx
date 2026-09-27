import Icon from './Icon';
import Reveal, { Stagger, StaggerItem } from './Reveal';
import TrackedLink from './TrackedLink';
import { LogoMark } from './Logo';
import { FOUNDERS } from '@/lib/content';
import { getExpertiseTheme } from './founderTheme';

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

// Team portrait in a rounded frame with a soft teal glow. Same frame on every
// card; positioned from the top so the face is never cropped.
function Portrait({ person }) {
  return (
    <div className="relative mt-4 aspect-[4/3] overflow-hidden rounded-[20px] border border-teal-300/40 bg-navy-800 shadow-[0_0_30px_-8px_rgba(53,214,192,0.45)]">
      <img
        src={person.image}
        alt={`${person.name}, ${person.title} at Fenbrix`}
        loading="lazy"
        decoding="async"
        className="h-full w-full object-cover object-[50%_22%]"
      />
      {person.portraitTint && (
        // Cool teal tone over a studio-white backdrop so it sits in the dark theme.
        <span
          className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#d9eeef] via-[#c9e0e4] to-[#a9c4cd] mix-blend-multiply"
          aria-hidden="true"
        />
      )}
      <span className="pointer-events-none absolute inset-0 rounded-[20px] ring-1 ring-inset ring-white/10" aria-hidden="true" />
    </div>
  );
}

// Compact vertical team card: role pill, portrait, identity, experience and
// tags, with the description pinned to the bottom so cards in a row align.
function ProfileCard({ person }) {
  return (
    <article className="relative h-full">
      <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 rounded-full bg-teal-400/10 blur-3xl" aria-hidden="true" />

      <div className="relative flex h-full flex-col overflow-hidden rounded-[24px] border border-teal-400/25 bg-gradient-to-br from-white/[0.07] via-white/[0.03] to-blue-500/[0.14] p-5 shadow-lift backdrop-blur-xl xl:p-6">
        <span
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_70%_at_0%_0%,rgba(53,214,192,0.12),transparent_55%)]"
          aria-hidden="true"
        />

        <p className="relative max-w-full self-start rounded-2xl border border-teal-400/40 bg-navy-900/40 px-3.5 py-1.5 text-[10.5px] font-extrabold uppercase tracking-[0.12em] text-teal-400 min-[360px]:rounded-full">
          {person.role || person.title}
        </p>

        {person.image && <Portrait person={person} />}

        <div className="relative mt-5 flex items-center gap-3">
          <LogoMark className="h-10 w-10 shrink-0 rounded-xl shadow-soft" variant="gradient" id={`fx-${person.name.replace(/\W+/g, '')}`} />
          <div className="min-w-0">
            <h3 className="text-[1.35rem] font-extrabold leading-tight text-white xl:text-2xl">{person.name}</h3>
            <p className="mt-0.5 text-[14px] font-semibold leading-snug text-teal-400">{person.role || person.title}</p>
          </div>
        </div>

        <div className="relative flex flex-1 flex-col">
          {person.highlight && (
            <p className="mt-4 inline-flex max-w-full items-center gap-2 self-start rounded-2xl border border-teal-400/35 bg-teal-400/10 py-1 pl-1 pr-3 text-[12.5px] font-semibold leading-snug text-white">
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-teal-400 to-teal-600 text-navy-900">
                <Icon name="brief" className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
              {person.highlight}
            </p>
          )}

          {person.focus?.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label="Focus areas">
              {person.focus.map((f) => (
                <li
                  key={f}
                  className="rounded-full border border-white/15 bg-white/[0.06] px-2.5 py-1 text-[12px] font-semibold text-white/85"
                >
                  {f}
                </li>
              ))}
            </ul>
          )}

          {person.location && (
            <p className="mt-3 flex items-center gap-2 text-[13px] text-white/70">
              <Icon name="pin" className="h-4 w-4 shrink-0 text-teal-400" strokeWidth={2} />
              Based in {person.location}
            </p>
          )}

          {person.description && (
            <div className="mt-auto pt-4">
              <p className="border-t border-white/10 pt-4 text-[13.5px] leading-relaxed text-white/70">{person.description}</p>
            </div>
          )}
        </div>
      </div>
    </article>
  );
}

export default function Founders({ people = FOUNDERS }) {
  // The first person leads the section: headline, story and expertise are
  // theirs. Everyone (founder first) gets a card in the team row.
  const [founder] = people;
  const oddCount = people.length % 2 === 1;
  const [lead, highlight] = founder.tagline || [founder.name, ''];

  return (
    <section aria-label="Meet the Fenbrix founder and leadership" className="surface-dark relative overflow-hidden py-16 sm:py-20 lg:py-24">
      <span className="pointer-events-none absolute inset-0 dot-grid opacity-[0.03]" aria-hidden="true" />
      {/* Soft orbit arcs framing the section */}
      <span className="pointer-events-none absolute -right-40 -top-48 hidden h-[460px] w-[460px] rounded-full border border-teal-400/20 shadow-[inset_0_0_60px_rgba(53,214,192,0.08)] md:block" aria-hidden="true" />
      <span className="pointer-events-none absolute -right-24 -top-32 hidden h-[330px] w-[330px] rounded-full border border-teal-400/10 md:block" aria-hidden="true" />
      <span className="pointer-events-none absolute -bottom-56 -left-56 hidden h-[520px] w-[520px] rounded-full border border-teal-400/15 md:block" aria-hidden="true" />

      <div className="container-x relative">
        {/* ---- Founder intro ---- */}
        <Reveal>
          <div>
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
          </div>

          {founder.summary && (
            <p className="mt-5 max-w-xl text-[16px] leading-relaxed text-white/70 sm:text-[17px]">{founder.summary}</p>
          )}
        </Reveal>

        {/* ---- Team row: 3 across on desktop; 2 + a centred last card on tablet ---- */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-5 xl:gap-6">
          {people.map((person, i) => (
            <Reveal
              key={person.name}
              delay={i * 0.1}
              className={`h-full ${
                oddCount && i === people.length - 1
                  ? 'md:col-span-2 md:mx-auto md:w-[calc(50%-0.75rem)] lg:col-span-1 lg:mx-0 lg:w-auto'
                  : ''
              }`}
            >
              <ProfileCard person={person} />
            </Reveal>
          ))}
        </div>

        {/* ---- Vision, then experience ---- */}
        <div className="mt-14 grid items-start gap-8 lg:mt-16 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <Reveal direction="right">
            {(founder.intro || founder.bio?.length > 0) && (
              <div className="flex items-center gap-2">
                <Icon name="sparkle" className="h-4 w-4 text-teal-400" />
                <h3 className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-400">The story</h3>
              </div>
            )}

            {founder.intro && (
              <p className="mt-4 text-lg font-semibold italic leading-relaxed text-white/85 sm:text-xl">{founder.intro}</p>
            )}

            {founder.bio?.length > 0 && (
              <div className="mt-5 space-y-4 text-[15px] leading-relaxed text-white/65">
                {founder.bio.map((segments, i) => (
                  <BioParagraph key={i} segments={segments} />
                ))}
              </div>
            )}

            {(founder.instagram || founder.linkedin || founder.email) && (
              <div className="mt-8 border-t border-white/10 pt-6">
                <p className="mb-3 text-[13px] font-bold text-white/45">Connect with {founder.name}</p>
                <FounderConnect person={founder} />
              </div>
            )}
          </Reveal>

          <Reveal direction="left" delay={0.1} className="lg:pt-10">
            {founder.statement && (
              <blockquote className="relative overflow-hidden rounded-2xl border border-teal-400/20 bg-teal-400/5 p-5 sm:p-6">
                <span aria-hidden="true" className="absolute -top-3 left-5 font-serif text-5xl leading-none text-teal-400/30">
                  &ldquo;
                </span>
                <p className="relative text-[16px] font-semibold italic leading-relaxed text-white/85">
                  {founder.statement}
                </p>
              </blockquote>
            )}

            {founder.expertise?.length > 0 && (
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
                  {founder.expertise.map((item) => {
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
      </div>
    </section>
  );
}
