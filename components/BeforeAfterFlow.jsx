'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon';
import { LogoMark } from './Logo';
import Reveal from './Reveal';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: '-60px' };

const BEFORE_ITEMS = [
  { title: 'Website', desc: 'Different developer', icon: 'browser' },
  { title: 'Social Media', desc: 'Separate agency', icon: 'camera' },
  { title: 'Ads', desc: 'Another vendor', icon: 'megaphone' },
  { title: 'Developers', desc: 'Multiple freelancers', icon: 'code' },
  { title: 'Manual Follow-ups', desc: 'No proper system', icon: 'phone' },
  { title: 'Reporting', desc: 'No clear insights', icon: 'chart' },
];

const AFTER_ITEMS = [
  { title: 'Content', desc: 'Consistent and strategic content', icon: 'pencil' },
  { title: 'Website', desc: 'Modern, conversion-focused website', icon: 'browser' },
  { title: 'Lead Generation', desc: 'More qualified leads', icon: 'target' },
  { title: 'Automation', desc: 'Automated follow-ups and CRM', icon: 'bolt' },
  { title: 'Analytics', desc: 'Clear reports and actionable insights', icon: 'chart' },
];

// fixed 2-col x 3-row anchor points (%) matching the Before card grid, used
// only by the decorative desktop wiring (lg+) — see BEFORE_ANCHORS below.
const BEFORE_ANCHORS = [
  { x: 24, y: 13 },
  { x: 76, y: 13 },
  { x: 24, y: 50 },
  { x: 76, y: 50 },
  { x: 24, y: 87 },
  { x: 76, y: 87 },
];
const MESH_PAIRS = [
  [0, 1],
  [1, 3],
  [2, 3],
  [2, 4],
  [4, 5],
];

// ---- timeline (seconds) ------------------------------------------------
const CARD_STAGGER = 0.06;
const CARD_DUR = 0.5;
const beforeEnter = (i) => i * CARD_STAGGER;
const beforeLastSettle = beforeEnter(BEFORE_ITEMS.length - 1) + CARD_DUR;
const meshDelay = beforeLastSettle - 0.1;
const convergeDelay = meshDelay + 0.35;
const fenbrixDelay = convergeDelay + 0.45;
const afterWireDelay = fenbrixDelay + 0.45;
const AFTER_STAGGER = 0.09;
const afterBranch = (i) => afterWireDelay + i * AFTER_STAGGER;
const afterEnter = (i) => afterBranch(i) + 0.05;
// -------------------------------------------------------------------

function t(reduceMotion, v) {
  return reduceMotion ? 0 : v;
}

function HandNote({ children, className = '' }) {
  return (
    <p
      className={`select-none font-serif text-[15px] italic leading-snug text-navy/35 ${className}`}
      style={{ fontStyle: 'italic' }}
      aria-hidden="true"
    >
      {children}
    </p>
  );
}

function BeforeCard({ item, i, reduceMotion }) {
  const wobble = i % 2 === 0 ? -1.4 : 1.6;
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 18, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1, rotate: wobble }}
      viewport={VIEWPORT}
      transition={{ duration: t(reduceMotion, CARD_DUR), delay: t(reduceMotion, beforeEnter(i)), ease: EASE }}
      className="relative rounded-2xl border border-red-100 bg-white p-3 shadow-soft sm:p-3.5"
    >
      <span className="absolute -right-1.5 -top-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-500 text-[10px] font-black leading-none text-white shadow-sm">
        !
      </span>
      <div className="flex items-start gap-2.5">
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-red-50 text-red-500">
          <Icon name={item.icon} className="h-4 w-4" strokeWidth={1.8} />
        </span>
        <div className="min-w-0">
          <h4 className="text-[13px] font-extrabold leading-tight text-navy">{item.title}</h4>
          <p className="mt-0.5 text-[11.5px] leading-snug text-navy/50">{item.desc}</p>
        </div>
      </div>
    </motion.div>
  );
}

function AfterCard({ item, i, reduceMotion }) {
  const delay = afterEnter(i);
  return (
    <li className="relative">
      <motion.span
        aria-hidden="true"
        initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
        whileInView={{ scaleX: 1, opacity: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: t(reduceMotion, 0.3), delay: t(reduceMotion, afterBranch(i)), ease: EASE }}
        style={{ transformOrigin: 'left' }}
        className="absolute -left-4 top-1/2 hidden h-px w-4 -translate-y-1/2 bg-teal-400/55 md:block lg:-left-6 lg:w-6"
      />
      <motion.div
        initial={reduceMotion ? false : { opacity: 0, x: -14, scale: 0.95 }}
        whileInView={{ opacity: 1, x: 0, scale: 1 }}
        viewport={VIEWPORT}
        transition={{ duration: t(reduceMotion, CARD_DUR), delay: t(reduceMotion, delay), ease: EASE }}
        className="flex items-center gap-3 rounded-2xl border border-line bg-white px-3.5 py-3 shadow-soft transition-shadow duration-300 hover:shadow-lift"
      >
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-teal-600/10 text-teal-600">
          <Icon name={item.icon} className="h-4 w-4" strokeWidth={1.9} />
        </span>
        <div className="min-w-0">
          <h4 className="text-[13px] font-extrabold leading-tight text-navy">{item.title}</h4>
          <p className="mt-0.5 truncate text-[11.5px] leading-snug text-navy/50">{item.desc}</p>
        </div>
        <span className="ml-auto flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500">
          <Icon name="check" className="h-3 w-3 text-white" strokeWidth={3} />
        </span>
      </motion.div>
    </li>
  );
}

function BeforeWiring({ reduceMotion }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 100 100"
      preserveAspectRatio="none"
      className="pointer-events-none absolute inset-0 hidden overflow-visible md:block"
      style={{ overflow: 'visible' }}
    >
      {MESH_PAIRS.map(([a, b], idx) => {
        const p1 = BEFORE_ANCHORS[a];
        const p2 = BEFORE_ANCHORS[b];
        const mx = (p1.x + p2.x) / 2 + (idx % 2 === 0 ? 4 : -4);
        const my = (p1.y + p2.y) / 2 + (idx % 2 === 0 ? -4 : 4);
        return (
          <motion.path
            key={idx}
            d={`M ${p1.x} ${p1.y} Q ${mx} ${my} ${p2.x} ${p2.y}`}
            fill="none"
            stroke="#EF4444"
            strokeOpacity="0.3"
            strokeWidth="0.55"
            strokeDasharray="2 2.2"
            strokeLinecap="round"
            initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            viewport={VIEWPORT}
            transition={{ duration: t(reduceMotion, 0.6), delay: t(reduceMotion, meshDelay), ease: 'easeOut' }}
          />
        );
      })}
      {BEFORE_ANCHORS.map((p, i) => {
        const busY = 50 + (i - 2.5) * 6;
        return (
          <motion.g key={`c-${i}`}>
            <motion.path
              d={`M ${p.x} ${p.y} Q ${(p.x + 101) / 2} ${(p.y + busY) / 2} 101 ${busY}`}
              fill="none"
              stroke="#35D6C0"
              strokeOpacity="0.4"
              strokeWidth="0.5"
              strokeLinecap="round"
              initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
              whileInView={{ pathLength: 1, opacity: 1 }}
              viewport={VIEWPORT}
              transition={{
                duration: t(reduceMotion, 0.5),
                delay: t(reduceMotion, convergeDelay + i * 0.05),
                ease: 'easeOut',
              }}
            />
            <motion.circle
              cx={p.x}
              cy={p.y}
              r="1.4"
              fill="#35D6C0"
              initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={VIEWPORT}
              transition={{
                duration: t(reduceMotion, 0.3),
                delay: t(reduceMotion, convergeDelay + i * 0.05),
                ease: EASE,
              }}
            />
          </motion.g>
        );
      })}
      <motion.path
        d="M 101 35 Q 108 50 101 65"
        fill="none"
        stroke="#35D6C0"
        strokeOpacity="0.5"
        strokeWidth="0.6"
        strokeLinecap="round"
        strokeLinejoin="round"
        initial={reduceMotion ? false : { pathLength: 0, opacity: 0 }}
        whileInView={{ pathLength: 1, opacity: 1 }}
        viewport={VIEWPORT}
        transition={{
          duration: t(reduceMotion, 0.35),
          delay: t(reduceMotion, convergeDelay + BEFORE_ANCHORS.length * 0.05),
          ease: 'easeOut',
        }}
      />
      <motion.circle
        cx="101"
        cy="50"
        r="1.8"
        fill="#35D6C0"
        initial={reduceMotion ? false : { opacity: 0, scale: 0 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={VIEWPORT}
        transition={{
          duration: t(reduceMotion, 0.3),
          delay: t(reduceMotion, convergeDelay + BEFORE_ANCHORS.length * 0.05),
          ease: EASE,
        }}
      />
    </svg>
  );
}

export default function BeforeAfterFlow() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative py-20 lg:py-28">
      <div className="container-x relative">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="eyebrow">The shift</span>
          <h2 className="h2 mt-4">Stop Managing Your Digital Presence in Pieces.</h2>
          <p className="lede mt-4">Bring your digital presence together with Fenbrix.</p>
          <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-navy/45">
            Instead of managing multiple disconnected digital vendors and processes, Fenbrix
            brings the important pieces together into one connected system.
          </p>
        </Reveal>

        <div
          role="group"
          aria-label="Before Fenbrix your tools are scattered across separate vendors, causing lost leads and no clear ownership. With Fenbrix everything becomes one connected digital growth system."
          className="relative mt-10 grid grid-cols-1 gap-10 md:mt-14 md:grid-cols-[1fr_auto_1fr] md:items-stretch md:gap-4 lg:gap-6 xl:gap-10"
        >
          {/* ---------- BEFORE ---------- */}
          <div
            className="relative overflow-hidden rounded-[28px] p-5 sm:p-6 lg:p-7"
            style={{
              background:
                'radial-gradient(120% 110% at 15% 0%, rgba(239,68,68,0.07), transparent 60%)',
            }}
          >
            <span className="inline-flex items-center rounded-full bg-red-500/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-red-600">
              Before Fenbrix
            </span>
            <h3 className="mt-3 text-lg font-extrabold text-navy">Your digital presence is scattered.</h3>
            <p className="mt-1.5 text-[13px] text-navy/50">
              Different tools, different vendors, no clear ownership.
            </p>

            <div className="relative mt-6">
              <BeforeWiring reduceMotion={reduceMotion} />
              <div className="relative grid grid-cols-1 gap-3 sm:grid-cols-2 sm:gap-4">
                {BEFORE_ITEMS.map((item, i) => (
                  <BeforeCard key={item.title} item={item} i={i} reduceMotion={reduceMotion} />
                ))}
              </div>
            </div>

            <HandNote className="mt-6 -rotate-1">
              Multiple vendors.
              <br />
              Multiple invoices.
              <br />
              Leads still get lost.
            </HandNote>
          </div>

          {/* ---------- FENBRIX ---------- */}
          <div className="relative z-10 flex flex-col items-center justify-center gap-3 py-4 md:mx-1 md:w-32 lg:w-40 xl:w-48">
            <div className="relative flex items-center justify-center">
              {[1.9, 1.55, 1.22].map((scale, ri) => (
                <motion.span
                  key={scale}
                  aria-hidden="true"
                  initial={reduceMotion ? false : { opacity: 0, scale: scale * 0.85 }}
                  whileInView={{ opacity: 1, scale }}
                  viewport={VIEWPORT}
                  transition={{
                    duration: t(reduceMotion, 0.7),
                    delay: t(reduceMotion, fenbrixDelay + ri * 0.08),
                    ease: EASE,
                  }}
                  className="absolute h-20 w-20 rounded-full border border-teal-400/25 md:h-24 md:w-24"
                  style={{ borderOpacity: 1 - ri * 0.25 }}
                />
              ))}
              <span
                aria-hidden="true"
                className="absolute h-28 w-28 rounded-full bg-teal-400/12 blur-2xl md:h-32 md:w-32"
              />
              <motion.div
                initial={reduceMotion ? false : { opacity: 0, scale: 0.7 }}
                whileInView={{ opacity: 1, scale: [0.7, 1, 1.08, 1] }}
                viewport={VIEWPORT}
                transition={{
                  duration: t(reduceMotion, 1.05),
                  delay: t(reduceMotion, fenbrixDelay),
                  ease: EASE,
                  times: [0, 0.4, 0.72, 1],
                }}
                className="relative flex h-20 w-20 items-center justify-center rounded-[22px] border border-line bg-white shadow-lift md:h-24 md:w-24"
              >
                <LogoMark className="h-11 w-11 md:h-12 md:w-12" variant="navy" id="ba" />
                <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-[22px] bg-teal-400/50" />
                <motion.span
                  aria-hidden="true"
                  initial={{ opacity: 0, scale: 1 }}
                  whileInView={{ opacity: [0, 0.55, 0], scale: [1, 1.2, 1.32] }}
                  viewport={VIEWPORT}
                  transition={{
                    duration: t(reduceMotion, 0.9),
                    delay: t(reduceMotion, fenbrixDelay + 0.35),
                    ease: 'easeOut',
                  }}
                  className="absolute inset-0 -z-10 rounded-[22px] bg-teal-400/60"
                />
              </motion.div>
            </div>
            <div className="text-center">
              <span className="text-[11px] font-extrabold uppercase tracking-[0.18em] text-navy">
                Fenbrix
              </span>
              <p className="mt-0.5 max-w-[9rem] text-[11px] leading-snug text-navy/45">
                Your Digital Growth Partner
              </p>
            </div>

            <div className="hidden md:block">
              <HandNote className="mt-2 text-center">
                One team.
                <br />
                One strategy.
                <br />
                Real growth.
              </HandNote>
            </div>

            {/* mobile vertical connectors */}
            <motion.div
              aria-hidden="true"
              initial={reduceMotion ? false : { scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: t(reduceMotion, 0.4), delay: t(reduceMotion, convergeDelay), ease: EASE }}
              style={{ transformOrigin: 'bottom' }}
              className="absolute -top-8 h-8 w-px bg-gradient-to-t from-teal-400/60 to-teal-400/10 md:hidden"
            />
            <motion.div
              aria-hidden="true"
              initial={reduceMotion ? false : { scaleY: 0, opacity: 0 }}
              whileInView={{ scaleY: 1, opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: t(reduceMotion, 0.4), delay: t(reduceMotion, afterWireDelay), ease: EASE }}
              style={{ transformOrigin: 'top' }}
              className="absolute -bottom-8 h-8 w-px bg-gradient-to-b from-teal-400/60 to-teal-400/10 md:hidden"
            />
            {/* desktop horizontal connectors */}
            <motion.div
              aria-hidden="true"
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: t(reduceMotion, 0.4), delay: t(reduceMotion, convergeDelay), ease: EASE }}
              style={{ transformOrigin: 'right' }}
              className="absolute left-[-1.25rem] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-gradient-to-r from-transparent to-teal-400/60 md:block xl:left-[-2.5rem] xl:w-10"
            />
            <motion.div
              aria-hidden="true"
              initial={reduceMotion ? false : { scaleX: 0, opacity: 0 }}
              whileInView={{ scaleX: 1, opacity: 1 }}
              viewport={VIEWPORT}
              transition={{ duration: t(reduceMotion, 0.4), delay: t(reduceMotion, afterWireDelay), ease: EASE }}
              style={{ transformOrigin: 'left' }}
              className="absolute right-[-1.25rem] top-1/2 hidden h-px w-5 -translate-y-1/2 bg-gradient-to-l from-transparent to-teal-400/60 md:block xl:right-[-2.5rem] xl:w-10"
            />
          </div>

          {/* ---------- AFTER ---------- */}
          <div
            className="relative overflow-hidden rounded-[28px] p-5 sm:p-6 lg:p-7"
            style={{
              background:
                'radial-gradient(120% 110% at 85% 0%, rgba(16,185,129,0.07), transparent 60%)',
            }}
          >
            <span className="inline-flex items-center rounded-full bg-green-500/10 px-3 py-1 text-[11px] font-extrabold uppercase tracking-[0.16em] text-green-700">
              With Fenbrix
            </span>
            <h3 className="mt-3 text-lg font-extrabold text-navy">
              One connected digital growth system.
            </h3>
            <p className="mt-1.5 text-[13px] text-navy/50">Everything you need, working together.</p>

            <ul className="relative mt-6 space-y-3 md:pl-6 lg:pl-7">
              {AFTER_ITEMS.map((item, i) => (
                <AfterCard key={item.title} item={item} i={i} reduceMotion={reduceMotion} />
              ))}
            </ul>

            <HandNote className="mt-6 rotate-1 text-right">
              More leads.
              <br />
              Better conversions.
              <br />
              A growing business.
            </HandNote>
          </div>
        </div>
      </div>
    </section>
  );
}
