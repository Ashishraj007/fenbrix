'use client';

import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon';
import { PROCESS } from '@/lib/content';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: '-40px', amount: 0.4 };

const THEMES = {
  emerald: {
    border: 'border-emerald-100',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-600',
    numberText: 'text-emerald-600',
    pill: 'bg-emerald-50 text-emerald-700 border-emerald-100',
    line: '#10B981',
  },
  blue: {
    border: 'border-blue-100',
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-600',
    numberText: 'text-blue-600',
    pill: 'bg-blue-50 text-blue-700 border-blue-100',
    line: '#3B82F6',
  },
  purple: {
    border: 'border-purple-100',
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-600',
    numberText: 'text-purple-600',
    pill: 'bg-purple-50 text-purple-700 border-purple-100',
    line: '#A855F7',
  },
  teal: {
    border: 'border-teal-100',
    iconBg: 'bg-teal-500/10',
    iconText: 'text-teal-600',
    numberText: 'text-teal-600',
    pill: 'bg-teal-50 text-teal-700 border-teal-100',
    line: '#1B8F8A',
  },
  orange: {
    border: 'border-orange-100',
    iconBg: 'bg-orange-500/10',
    iconText: 'text-orange-600',
    numberText: 'text-orange-600',
    pill: 'bg-orange-50 text-orange-700 border-orange-100',
    line: '#F97316',
  },
  rose: {
    border: 'border-rose-100',
    iconBg: 'bg-rose-500/10',
    iconText: 'text-rose-600',
    numberText: 'text-rose-600',
    pill: 'bg-rose-50 text-rose-700 border-rose-100',
    line: '#F43F5E',
  },
  sky: {
    border: 'border-sky-100',
    iconBg: 'bg-sky-500/10',
    iconText: 'text-sky-600',
    numberText: 'text-sky-600',
    pill: 'bg-sky-50 text-sky-700 border-sky-100',
    line: '#0EA5E9',
  },
  violet: {
    border: 'border-violet-100',
    iconBg: 'bg-violet-500/10',
    iconText: 'text-violet-600',
    numberText: 'text-violet-600',
    pill: 'bg-violet-50 text-violet-700 border-violet-100',
    line: '#8B5CF6',
  },
};

function ProcessCard({ step, index, reduceMotion }) {
  const theme = THEMES[step.theme] || THEMES.teal;

  return (
    <motion.div
      data-card
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 22 }}
      animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: reduceMotion ? 0 : 0.5, delay: reduceMotion ? 0 : (index % 5) * 0.08, ease: EASE }}
      className="w-[78vw] max-w-[280px] shrink-0 snap-center sm:w-[220px]"
    >
      <div
        className={`group flex h-full flex-col items-center rounded-[20px] border ${theme.border} bg-white p-5 text-center shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-lift`}
      >
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-full ${theme.iconBg} ${theme.iconText} transition-shadow duration-300 group-hover:shadow-[0_0_0_6px_rgba(27,143,138,0.08)]`}
        >
          <Icon name={step.icon} className="h-6 w-6" strokeWidth={1.7} />
        </span>

        <span className={`mt-3.5 text-[12px] font-extrabold tracking-[0.14em] ${theme.numberText}`}>
          {step.step}
        </span>
        <h3 className="mt-1 text-[16px] font-extrabold leading-tight text-navy">{step.title}</h3>
        <p className="mt-2.5 text-[12.5px] leading-relaxed text-navy/55">{step.body}</p>

        <span
          aria-hidden="true"
          className="mt-4 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-navy transition-all duration-300 group-hover:translate-x-1 group-hover:border-teal-400/50 group-hover:text-teal-600"
        >
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>

      <div className="mt-3.5 flex justify-center">
        <span
          className={`rounded-full border px-3.5 py-1 text-[11.5px] font-bold ${theme.pill}`}
        >
          {step.outcome}
        </span>
      </div>
    </motion.div>
  );
}

function Connector({ theme, index, reduceMotion }) {
  return (
    <div className="hidden shrink-0 items-center self-start pt-[42px] sm:flex sm:w-10 lg:w-12" aria-hidden="true">
      <svg width="100%" height="24" viewBox="0 0 48 24" fill="none" preserveAspectRatio="none" className="overflow-visible">
        <motion.path
          d="M2 4C14 4 20 20 46 20"
          stroke={theme.line}
          strokeOpacity="0.4"
          strokeWidth="1.6"
          strokeDasharray="1 5.5"
          strokeLinecap="round"
          initial={reduceMotion ? { pathLength: 1, opacity: 0.4 } : { pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 0.4 }}
          viewport={VIEWPORT}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : (index % 5) * 0.08 + 0.2, ease: 'easeOut' }}
        />
        <motion.path
          d="M40 14l6 6-6 6"
          stroke={theme.line}
          strokeOpacity="0.55"
          strokeWidth="1.6"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={reduceMotion ? { opacity: 0.55 } : { opacity: 0 }}
          whileInView={{ opacity: 0.55 }}
          viewport={VIEWPORT}
          transition={{ duration: reduceMotion ? 0 : 0.3, delay: reduceMotion ? 0 : (index % 5) * 0.08 + 0.5, ease: 'easeOut' }}
        />
      </svg>
    </div>
  );
}

export default function ProcessJourney() {
  const reduceMotion = useReducedMotion();
  const trackRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [edge, setEdge] = useState({ start: true, end: false });
  const rafRef = useRef(null);

  const measure = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const cards = track.querySelectorAll('[data-card]');
    let closest = 0;
    let minDist = Infinity;
    cards.forEach((el, i) => {
      const dist = Math.abs(el.offsetLeft - track.scrollLeft);
      if (dist < minDist) {
        minDist = dist;
        closest = i;
      }
    });
    setActiveIndex(closest);
    setEdge({
      start: track.scrollLeft < 8,
      end: track.scrollLeft + track.clientWidth >= track.scrollWidth - 8,
    });
  }, []);

  const handleScroll = useCallback(() => {
    if (rafRef.current) return;
    rafRef.current = requestAnimationFrame(() => {
      rafRef.current = null;
      measure();
    });
  }, [measure]);

  useEffect(() => {
    measure();
    window.addEventListener('resize', measure);
    return () => window.removeEventListener('resize', measure);
  }, [measure]);

  const scrollByStep = (dir) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: dir * track.clientWidth * 0.82, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  const scrollToIndex = (i) => {
    const track = trackRef.current;
    const card = track?.querySelectorAll('[data-card]')[i];
    if (!track || !card) return;
    track.scrollTo({ left: card.offsetLeft - 4, behavior: reduceMotion ? 'auto' : 'smooth' });
  };

  return (
    <section className="relative overflow-hidden py-16 lg:py-20">
      <div className="container-x relative">
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }}
          animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center"
        >
          <div className="flex items-center justify-center gap-3">
            <span className="h-px w-8 bg-gradient-to-r from-transparent to-line sm:w-10" />
            <span className="eyebrow">Our process</span>
            <span className="h-px w-8 bg-gradient-to-l from-transparent to-line sm:w-10" />
          </div>
          <h1 className="h2 mt-4 text-navy">
            From Idea to <span className="text-gradient">Impact</span>
          </h1>
          <p className="lede mx-auto mt-4">
            A simple, clear and collaborative process to help your business grow — without the
            confusion.
          </p>
        </motion.div>

        <div className="relative mt-11 lg:mt-12">
          <button
            type="button"
            onClick={() => scrollByStep(-1)}
            disabled={edge.start}
            aria-label="Scroll to previous steps"
            className="absolute -left-2 top-[74px] z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy shadow-soft transition-all duration-300 hover:shadow-lift disabled:pointer-events-none disabled:opacity-0 sm:flex lg:-left-4"
          >
            <Icon name="arrow" className="h-4 w-4 rotate-180" />
          </button>
          <button
            type="button"
            onClick={() => scrollByStep(1)}
            disabled={edge.end}
            aria-label="Scroll to next steps"
            className="absolute -right-2 top-[74px] z-10 hidden h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-navy shadow-soft transition-all duration-300 hover:shadow-lift disabled:pointer-events-none disabled:opacity-0 sm:flex lg:-right-4"
          >
            <Icon name="arrow" className="h-4 w-4" />
          </button>

          <div
            ref={trackRef}
            onScroll={handleScroll}
            className="scrollbar-hide flex snap-x snap-mandatory items-start gap-0 overflow-x-auto scroll-smooth px-1 pb-3 pt-1 sm:px-8 lg:px-10"
          >
            {PROCESS.map((step, i) => (
              <div key={step.step} className="flex shrink-0 items-start">
                <ProcessCard step={step} index={i} reduceMotion={reduceMotion} />
                {i < PROCESS.length - 1 && (
                  <Connector theme={THEMES[step.theme] || THEMES.teal} index={i} reduceMotion={reduceMotion} />
                )}
              </div>
            ))}
          </div>

          <div className="mt-5 flex items-center justify-center gap-4 sm:hidden">
            <span className="text-[12px] font-bold tracking-[0.08em] text-navy/50">
              {String(activeIndex + 1).padStart(2, '0')} / {String(PROCESS.length).padStart(2, '0')}
            </span>
            <div className="flex items-center gap-1.5">
              {PROCESS.map((step, i) => (
                <button
                  key={step.step}
                  type="button"
                  onClick={() => scrollToIndex(i)}
                  aria-label={`Go to step ${step.step}`}
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    i === activeIndex ? 'w-5 bg-teal-600' : 'w-1.5 bg-line'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
