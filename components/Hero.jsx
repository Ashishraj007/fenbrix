'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import Icon from './Icon';
import { LogoMark } from './Logo';

const NODES = [
  { label: 'Social Media', angle: -90 },
  { label: 'Content', angle: -30 },
  { label: 'Ads & SEO', angle: 30 },
  { label: 'Website', angle: 90 },
  { label: 'Software', angle: 150 },
  { label: 'Automation', angle: 210 },
];

function OrbitDiagram() {
  const R = 132;

  return (
    <div className="relative mx-auto aspect-square w-full max-w-[400px]">
      {/* rings */}
      <div className="absolute inset-[8%] rounded-full border border-white/10" />
      <div className="absolute inset-[22%] rounded-full border border-white/[0.07]" />

      {/* connector lines */}
      <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
        {NODES.map((n, i) => {
          const rad = (n.angle * Math.PI) / 180;
          const x = 200 + Math.cos(rad) * R;
          const y = 200 + Math.sin(rad) * R;
          return (
            <motion.line
              key={n.label}
              x1="200"
              y1="200"
              x2={x}
              y2={y}
              stroke="rgba(53,214,192,0.35)"
              strokeWidth="1.2"
              strokeDasharray="4 5"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 + i * 0.09, ease: 'easeOut' }}
            />
          );
        })}
      </svg>

      {/* centre mark */}
      <motion.div
        initial={{ scale: 0.6, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
        className="absolute left-1/2 top-1/2 flex h-[88px] w-[88px] -translate-x-1/2 -translate-y-1/2
                   items-center justify-center rounded-[26px] bg-white shadow-lift"
      >
        <LogoMark className="h-11 w-11" variant="navy" id="hero" />
        <span className="absolute inset-0 -z-10 animate-pulse-ring rounded-[26px] bg-teal-400/60" />
      </motion.div>

      {/* nodes */}
      {NODES.map((n, i) => {
        const rad = (n.angle * Math.PI) / 180;
        const left = 50 + (Math.cos(rad) * R) / 4;
        const top = 50 + (Math.sin(rad) * R) / 4;
        return (
          <motion.div
            key={n.label}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.75 + i * 0.09, ease: [0.22, 1, 0.36, 1] }}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${left}%`, top: `${top}%` }}
          >
            <span className="whitespace-nowrap rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5
                             text-[11px] font-bold text-white/90 backdrop-blur-md">
              {n.label}
            </span>
          </motion.div>
        );
      })}
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
            <Link href="/contact/" className="btn-teal">
              Get a free digital audit
              <Icon name="arrow" className="h-4 w-4" />
            </Link>
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
