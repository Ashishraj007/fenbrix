'use client';

import Link from 'next/link';
import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon';
import { THEMES, VISUALS } from './ServiceVisuals';
import { SERVICES } from '@/lib/content';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: '-60px' };

const TRUST = [
  { icon: 'bolt', title: 'Strategy to Execution', body: 'End-to-end digital growth support' },
  { icon: 'people', title: 'One Team, Many Skills', body: 'Creative, marketing and technology' },
  { icon: 'trend', title: 'Built for Real Business', body: 'Practical solutions, real results' },
];

function ServiceCard({ service, index, reduceMotion }) {
  const theme = THEMES[service.theme] || THEMES.teal;
  const Visual = VISUALS[service.slug];
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 26 }}
      animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : index * 0.07, ease: EASE }}
      className={`group relative flex h-full flex-col overflow-hidden rounded-[22px] border ${theme.border} bg-gradient-to-br ${theme.bg} to-white p-5 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-lift sm:p-6`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl ${theme.iconBg} ${theme.iconText}`}
        >
          <Icon name={service.icon} className="h-6 w-6" strokeWidth={1.7} />
        </span>
        <div className="relative h-[90px] w-[112px] shrink-0 transition-transform duration-500 ease-out group-hover:-translate-y-0.5">
          <Visual theme={theme} />
        </div>
      </div>

      <div className="mt-4">
        <span className={`text-[12px] font-extrabold tracking-[0.12em] ${theme.numberText}`}>{number}</span>
        <h3 className="mt-1 text-[19px] font-extrabold leading-tight text-navy">{service.title}</h3>
        <p className="mt-1.5 text-[13.5px] leading-relaxed text-navy/55">{service.short}</p>
      </div>

      <ul className="mt-4 flex-1 space-y-2">
        {service.items.map((item, i) => (
          <motion.li
            key={item}
            initial={reduceMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: 8 }}
            animate={reduceMotion ? { opacity: 1, x: 0 } : undefined}
            whileInView={reduceMotion ? undefined : { opacity: 1, x: 0 }}
            viewport={VIEWPORT}
            transition={{
              duration: reduceMotion ? 0 : 0.4,
              delay: reduceMotion ? 0 : index * 0.07 + 0.15 + i * 0.04,
              ease: EASE,
            }}
            className="flex items-start gap-2.5 text-[13px] leading-snug text-navy/70"
          >
            <Icon name="check" className={`mt-0.5 h-3.5 w-3.5 shrink-0 ${theme.check}`} strokeWidth={2.8} />
            {item}
          </motion.li>
        ))}
      </ul>

      <div className="mt-5 flex items-center justify-between border-t border-line/70 pt-4">
        <Link
          href={`/services/${service.slug}/`}
          className="group/link inline-flex items-center gap-1.5 text-[13px] font-extrabold text-teal-600 transition-colors duration-200 hover:text-teal-500"
        >
          Explore service
          <Icon name="arrow" className="h-3.5 w-3.5 transition-transform duration-300 group-hover/link:translate-x-1" />
        </Link>
        <Link
          href={`/services/${service.slug}/`}
          aria-label={`Explore ${service.title}`}
          className="group/arrow flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-soft transition-all duration-300 hover:shadow-lift"
        >
          <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover/arrow:translate-x-1" />
        </Link>
      </div>
    </motion.article>
  );
}

export default function ServicesShowcase() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative py-16 lg:py-20">
      <div className="container-x relative">
        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 18 }}
          animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: reduceMotion ? 0 : 0.6, ease: EASE }}
          className="mx-auto max-w-2xl text-center lg:mx-0 lg:text-left"
        >
          <span className="eyebrow">Our services</span>
          <h1 className="h1 mt-4 text-navy">
            Everything you need to grow,
            <br className="hidden sm:block" />
            in <span className="text-gradient">one place.</span>
          </h1>
          <p className="lede mx-auto mt-5 lg:mx-0">
            From strategy to execution, we help businesses build, market and scale with the
            right mix of creativity and technology.
          </p>
        </motion.div>

        <motion.div
          initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
          animate={reduceMotion ? { opacity: 1, y: 0 } : undefined}
          whileInView={reduceMotion ? undefined : { opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.2, ease: EASE }}
          className="pointer-events-none absolute right-0 top-0 hidden flex-col items-end text-right xl:flex"
          aria-hidden="true"
        >
          <svg width="90" height="56" viewBox="0 0 90 56" fill="none" className="text-navy/25">
            <path
              d="M10 8C34 6 62 10 78 38"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray="1 6"
            />
            <path
              d="M68 33L79 39L82 28"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="-mt-1 select-none font-serif text-[15px] italic leading-snug text-navy/40">
            Ideas.
            <br />
            Execution.
            <br />
            Real Growth.
          </p>
        </motion.div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {SERVICES.map((service, i) => (
            <ServiceCard key={service.slug} service={service} index={i} reduceMotion={reduceMotion} />
          ))}
        </div>

        <div className="mt-12 grid gap-6 border-t border-line pt-8 sm:grid-cols-3 lg:mt-14">
          {TRUST.map((t) => (
            <div key={t.title} className="flex items-center gap-3">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
                <Icon name={t.icon} className="h-4 w-4" strokeWidth={1.8} />
              </span>
              <div>
                <p className="text-[13.5px] font-extrabold text-navy">{t.title}</p>
                <p className="text-[12.5px] text-navy/50">{t.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
