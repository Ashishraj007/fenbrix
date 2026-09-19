import Image from 'next/image';
import Icon from './Icon';
import Reveal from './Reveal';
import { FOUNDERS } from '@/lib/content';

function SocialLink({ href, icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15
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
      className={`grid items-center gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16 ${
        reverse ? 'lg:[&>*:first-child]:order-2' : ''
      }`}
    >
      <Reveal direction={reverse ? 'left' : 'right'}>
        <div className="relative mx-auto max-w-[360px] lg:max-w-none">
          <div className="pointer-events-none absolute -left-8 -top-8 h-40 w-40 animate-float rounded-full bg-teal-400/15 blur-3xl" />
          <div
            className="pointer-events-none absolute -bottom-10 -right-6 h-48 w-48 animate-float rounded-full bg-teal-600/20 blur-3xl"
            style={{ animationDelay: '1.4s' }}
          />

          <div className="group relative aspect-[4/5] overflow-hidden rounded-[28px] border border-white/10 shadow-lift">
            <Image
              src={person.photo}
              alt={`${person.name}, ${person.title}`}
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 80vw, 420px"
              className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.06]"
              style={{ objectPosition: '50% 18%' }}
            />
          </div>

          <div className="relative z-10 mx-4 -mt-8 rounded-2xl border border-white/10 bg-navy-700/90 p-5 shadow-lift backdrop-blur-md sm:mx-6">
            <p className="text-[15px] font-extrabold text-white">{person.name}</p>
            <p className="mt-0.5 text-[12px] font-bold uppercase tracking-[0.1em] text-teal-400">{person.title}</p>
          </div>
        </div>
      </Reveal>

      <Reveal direction={reverse ? 'right' : 'left'} delay={0.1}>
        <span className="eyebrow text-teal-400">Leadership</span>
        <h2 className="h2 mt-4 text-white">Meet the Founder</h2>

        <div className="mt-6 space-y-4 text-[15px] leading-relaxed text-white/65">
          {person.bio.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-4 border-t border-white/10 pt-7">
          <div className="flex items-center gap-3">
            <SocialLink href={person.instagram} icon="instagram" label={`${person.name} on Instagram`} />
            <SocialLink href={person.linkedin} icon="linkedin" label={`${person.name} on LinkedIn`} />
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Icon name="mail" className="h-4 w-4 text-teal-400" />
            <a href={`mailto:${person.email}`} className="link-underline font-semibold text-white/80 hover:text-white">
              {person.email}
            </a>
            {person.emailIsPlaceholder && (
              <span className="text-xs italic text-white/35">(placeholder — not live yet)</span>
            )}
          </div>
        </div>
      </Reveal>
    </div>
  );
}

export default function Founders({ people = FOUNDERS }) {
  return (
    <section className="surface-dark relative overflow-hidden py-20 lg:py-28">
      <div className="container-x relative space-y-24">
        {people.map((person, i) => (
          <FounderCard key={person.name} person={person} reverse={i % 2 === 1} />
        ))}
      </div>
    </section>
  );
}
