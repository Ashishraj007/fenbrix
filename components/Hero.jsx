'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon';
import TrackedLink from './TrackedLink';
import { LogoMark } from './Logo';

const NODES = [
  { label: 'Social Media', angle: -90, icon: 'share' },
  { label: 'Content', angle: -30, icon: 'pencil' },
  { label: 'Ads & SEO', angle: 30, icon: 'trend' },
  { label: 'Website', angle: 90, icon: 'browser' },
  { label: 'Software', angle: 150, icon: 'code' },
  { label: 'Automation', angle: 210, icon: 'bolt' },
];

function OrbitDiagram() {
  const R = 150; // node orbit radius in the 400-unit viewBox
  const START = 50; // connectors start just outside the centre mark
  const reduce = useReducedMotion();

  const points = NODES.map((n) => {
    const rad = (n.angle * Math.PI) / 180;
    const cos = Math.cos(rad);
    const sin = Math.sin(rad);
    return {
      ...n,
      sx: 200 + cos * START,
      sy: 200 + sin * START,
      x: 200 + cos * R,
      y: 200 + sin * R,
    };
  });

  return (
    <div className="relative mx-auto w-full max-w-[480px]">
      <div className="relative mx-auto aspect-square w-full max-w-[320px] sm:max-w-none">
        {/* ambient glow */}
        <div className="pointer-events-none absolute inset-[20%] rounded-full bg-teal-400/10 blur-3xl" />

        <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
          <defs>
            <linearGradient id="orbit-ring" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stopColor="#35D6C0" stopOpacity="0.45" />
              <stop offset="0.5" stopColor="#FFFFFF" stopOpacity="0.06" />
              <stop offset="1" stopColor="#23AFA3" stopOpacity="0.35" />
            </linearGradient>
            <radialGradient id="orbit-line" cx="200" cy="200" r={R} gradientUnits="userSpaceOnUse">
              <stop offset="0.3" stopColor="#35D6C0" stopOpacity="0.6" />
              <stop offset="1" stopColor="#35D6C0" stopOpacity="0.12" />
            </radialGradient>
          </defs>

          {/* outer ring — very slow drift */}
          <g
            className="animate-spin motion-reduce:animate-none"
            style={{ animationDuration: '160s', transformOrigin: '200px 200px', transformBox: 'view-box' }}
          >
            <circle cx="200" cy="200" r="190" fill="none" stroke="url(#orbit-ring)" strokeWidth="1" />
            <circle cx="390" cy="200" r="2.4" fill="#35D6C0" opacity="0.8" />
            <circle cx="10" cy="200" r="1.6" fill="#FFFFFF" opacity="0.4" />
          </g>

          {/* node orbit — slow counter drift */}
          <g
            className="animate-spin motion-reduce:animate-none"
            style={{
              animationDuration: '220s',
              animationDirection: 'reverse',
              transformOrigin: '200px 200px',
              transformBox: 'view-box',
            }}
          >
            <circle
              cx="200"
              cy="200"
              r={R}
              fill="none"
              stroke="rgba(255,255,255,0.12)"
              strokeWidth="1"
              strokeDasharray="2 7"
              strokeLinecap="round"
            />
          </g>

          {/* inner ring */}
          <circle cx="200" cy="200" r="92" fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth="1" />

          {/* connectors */}
          {points.map((p, i) => (
            <motion.line
              key={p.label}
              x1={p.sx}
              y1={p.sy}
              x2={p.x}
              y2={p.y}
              stroke="url(#orbit-line)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 + i * 0.09, ease: 'easeOut' }}
            />
          ))}

          {/* anchor dots */}
          {points.map((p, i) => (
            <motion.g
              key={`${p.label}-anchor`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.9 + i * 0.09 }}
            >
              <circle cx={p.x} cy={p.y} r="7" fill="none" stroke="rgba(53,214,192,0.25)" strokeWidth="1" />
              <circle cx={p.x} cy={p.y} r="2.8" fill="#35D6C0" />
            </motion.g>
          ))}

          {/* travelling dots */}
          {!reduce &&
            points.map((p, i) => (
              <motion.circle
                key={`${p.label}-pulse`}
                r="2.2"
                fill="#35D6C0"
                style={{ filter: 'drop-shadow(0 0 4px rgba(53,214,192,0.9))' }}
                cx={p.sx}
                cy={p.sy}
                initial={{ opacity: 0 }}
                animate={{ cx: [p.sx, p.x], cy: [p.sy, p.y], opacity: [0, 1, 1, 0] }}
                transition={{
                  duration: 2.8,
                  ease: 'easeInOut',
                  repeat: Infinity,
                  repeatDelay: 2.4,
                  delay: 1.6 + i * 0.55,
                  opacity: {
                    duration: 2.8,
                    times: [0, 0.2, 0.8, 1],
                    repeat: Infinity,
                    repeatDelay: 2.4,
                    delay: 1.6 + i * 0.55,
                  },
                }}
              />
            ))}
        </svg>

        {/* centre mark */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            <motion.span
              aria-hidden="true"
              className="absolute -inset-5 rounded-[40px] bg-teal-400/25 blur-2xl"
              animate={reduce ? undefined : { opacity: [0.55, 0.9, 0.55] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
            />
            <motion.div
              animate={reduce ? undefined : { scale: [1, 1.025, 1] }}
              transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              className="relative flex h-[72px] w-[72px] items-center justify-center rounded-[22px] bg-white
                         shadow-[0_0_0_7px_rgba(255,255,255,0.05),0_18px_44px_-12px_rgba(53,214,192,0.55)]
                         sm:h-[92px] sm:w-[92px] sm:rounded-[28px]"
            >
              <LogoMark className="h-9 w-9 sm:h-11 sm:w-11" variant="navy" id="hero" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* service cards — radial on sm+, 2-column grid on mobile */}
      <ul className="mt-8 grid grid-cols-2 gap-3 sm:absolute sm:inset-0 sm:mt-0 sm:block">
        {points.map((p, i) => (
          <li
            key={p.label}
            className="sm:absolute sm:-translate-x-1/2 sm:-translate-y-1/2"
            style={{ left: `${(p.x / 400) * 100}%`, top: `${(p.y / 400) * 100}%` }}
          >
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 + i * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.div
                animate={reduce ? undefined : { y: [0, -5, 0] }}
                transition={{ duration: 5.5 + (i % 3) * 0.7, repeat: Infinity, ease: 'easeInOut', delay: i * 0.45 }}
              >
                <div
                  className="flex items-center gap-2.5 rounded-2xl border border-white/[0.12] bg-gradient-to-br
                             from-white/[0.11] to-white/[0.03] py-2 pl-2 pr-3.5 shadow-[0_12px_30px_-14px_rgba(0,0,0,0.6)]
                             backdrop-blur-md transition duration-300 ease-out hover:scale-[1.04]
                             hover:border-teal-400/40 hover:shadow-[0_12px_34px_-10px_rgba(53,214,192,0.45)]
                             sm:whitespace-nowrap"
                >
                  <span
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br
                               from-teal-400/25 to-teal-600/10 text-teal-400 ring-1 ring-inset ring-teal-400/25"
                  >
                    <Icon name={p.icon} className="h-4 w-4" strokeWidth={1.9} />
                  </span>
                  <span className="text-[12.5px] font-semibold tracking-[0.01em] text-white/90">{p.label}</span>
                </div>
              </motion.div>
            </motion.div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default function Hero() {
  return (
    <section className="surface-dark relative overflow-hidden">
      {/* floating blobs */}
      <div className="pointer-events-none absolute -left-24 top-16 h-72 w-72 animate-float rounded-full bg-teal-400/10 blur-3xl" />
      <div
        className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 animate-float rounded-full bg-teal-600/15 blur-3xl"
        style={{ animationDelay: '2s' }}
      />

      <div className="container-x relative z-10 grid items-center gap-14 py-20 lg:grid-cols-[1.08fr_1fr] lg:gap-10 lg:py-28">
        <div>
          <motion.span
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5
                       px-4 py-1.5 text-[11px] font-extrabold uppercase tracking-[0.18em] text-teal-400"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-teal-400" />
            Noida · Delhi NCR
          </motion.span>

          <motion.h1
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.75, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="h1 mt-6 text-white"
          >
            One partner for your{' '}
            <span className="text-gradient">entire digital business.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22 }}
            className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
          >
            Fenbrix is a Digital Growth &amp; Technology agency helping businesses across Noida,
            Delhi NCR and Gurugram connect digital marketing, websites, software and automation.
            We build and manage the complete digital ecosystem around your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row"
          >
            <TrackedLink
              href="/contact/"
              event="consultation_click"
              eventParams={{ link_location: 'homepage_hero' }}
              className="btn-teal"
            >
              Get a free digital audit
              <Icon name="arrow" className="h-4 w-4" />
            </TrackedLink>
            <Link href="/services/" className="btn-ghost-dark">
              Explore services
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-white/50"
          >
            {['No lock-in after the first term', 'Work done in-house', 'Reports you can actually read'].map(
              (t) => (
                <span key={t} className="flex items-center gap-2">
                  <Icon name="check" className="h-4 w-4 text-teal-400" strokeWidth={2.4} />
                  {t}
                </span>
              )
            )}
          </motion.div>
        </div>

        <OrbitDiagram />
      </div>
    </section>
  );
}
