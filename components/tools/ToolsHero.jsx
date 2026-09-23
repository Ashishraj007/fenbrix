'use client';

import Icon from '@/components/Icon';
import Reveal from '@/components/Reveal';
import { LogoMark } from '@/components/Logo';

const TRUST_ROW = [
  { icon: 'bolt', title: 'Free to use', sub: 'Always free' },
  { icon: 'shield', title: 'No sign-up required', sub: 'Start instantly' },
  { icon: 'browser', title: 'Browser-based', sub: 'Works on any device' },
  { icon: 'lock', title: 'Your files stay on your device', sub: '100% private' },
];

function FloatingTile({ icon, className = '', iconClassName = 'h-5 w-5', delay = '0s' }) {
  return (
    <span
      aria-hidden="true"
      className={`absolute flex items-center justify-center rounded-2xl bg-white text-navy shadow-lift animate-float ${className}`}
      style={{ animationDelay: delay }}
    >
      <Icon name={icon} className={iconClassName} strokeWidth={1.7} />
    </span>
  );
}

export default function ToolsHero() {
  return (
    <section className="surface-dark relative overflow-hidden">
      <div className="pointer-events-none absolute inset-0 grid-lines opacity-[0.06]" aria-hidden="true" />
      <div className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-teal-400/10 blur-3xl" aria-hidden="true" />
      <div
        className="pointer-events-none absolute -right-10 bottom-0 h-80 w-80 animate-float rounded-full bg-teal-600/15 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-x relative z-10 py-16 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_.9fr] lg:items-center lg:gap-8">
          {/* ---------- LEFT: copy ---------- */}
          <Reveal>
            <span className="eyebrow inline-flex items-center gap-2 text-teal-400">
              Free Digital Tools
              <span className="h-px w-8 bg-teal-400/50" aria-hidden="true" />
            </span>
            <h1 className="h1 mt-4 text-white">
              Free Tools That
              <br />
              <span className="text-teal-400">Get Things Done</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
              Fast, simple and privacy-friendly tools for business, marketing, developers and everyday
              digital tasks.
            </p>

            <ul className="mt-9 grid grid-cols-2 gap-x-6 gap-y-5 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
              {TRUST_ROW.map((item) => (
                <li key={item.title} className="flex items-start gap-2.5">
                  <span className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white/10 text-teal-400">
                    <Icon name={item.icon} className="h-4 w-4" strokeWidth={2} />
                  </span>
                  <span>
                    <span className="block text-[13px] font-extrabold leading-tight text-white">
                      {item.title}
                    </span>
                    <span className="block text-[12px] leading-tight text-white/45">{item.sub}</span>
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>

          {/* ---------- RIGHT: decorative composition (desktop only) ---------- */}
          <Reveal direction="left" delay={0.12} className="relative hidden h-[320px] lg:block">
            <span
              aria-hidden="true"
              className="absolute right-10 top-2 text-[13px] italic leading-snug text-teal-400/70"
            >
              Small Tools
              <br />
              Big Possibilities
            </span>
            <svg
              aria-hidden="true"
              width="52"
              height="30"
              viewBox="0 0 52 30"
              fill="none"
              className="absolute right-2 top-14 text-teal-400/50"
            >
              <path d="M4 4c16-2 32 3 40 20" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeDasharray="1 6" />
              <path d="M34 18l11 6 2-11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
            </svg>

            <div className="absolute left-1/2 top-1/2 h-44 w-56 -translate-x-1/2 -translate-y-1/2 rotate-3 rounded-3xl border border-white/10 bg-white/5 p-5 shadow-lift backdrop-blur-sm">
              <p className="font-serif text-lg italic leading-snug text-white/70">
                Tools
                <br />
                for a Smarter
                <br />
                Tomorrow
              </p>
            </div>

            <FloatingTile icon="qr" className="left-[8%] top-[6%] h-14 w-14 text-emerald-600" delay="0s" />
            <FloatingTile icon="image" className="left-0 top-[46%] h-14 w-14 text-blue-600" delay="1.4s" />
            <FloatingTile icon="braces" className="right-[16%] top-0 h-14 w-14 text-purple-600" iconClassName="h-5 w-5" delay="0.7s" />
            <FloatingTile icon="wa" className="right-[6%] top-[42%] h-14 w-14 text-green-600" delay="2.1s" />

            <div className="absolute bottom-0 right-0 flex items-center gap-2.5 rounded-full border border-white/10 bg-navy-700/80 py-2 pl-2 pr-4 shadow-lift backdrop-blur-sm">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white">
                <LogoMark className="h-5 w-5" variant="navy" id="tools-hero" />
              </span>
              <span className="leading-tight">
                <span className="block text-[12px] font-extrabold text-white">Built by Fenbrix</span>
                <span className="block text-[11px] text-white/45">for creators, businesses and builders</span>
              </span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
