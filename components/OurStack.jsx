'use client';

import { motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon';
import Reveal from './Reveal';
import { TECH_STACK } from '@/lib/content';

const EASE = [0.22, 1, 0.36, 1];
const VIEWPORT = { once: true, margin: '-60px' };

const THEMES = {
  blue: {
    bg: 'from-blue-50/90',
    border: 'border-blue-100',
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-600',
    decor: 'text-blue-500/[0.08]',
  },
  purple: {
    bg: 'from-purple-50/90',
    border: 'border-purple-100',
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-600',
    decor: 'text-purple-500/[0.08]',
  },
  orange: {
    bg: 'from-orange-50/90',
    border: 'border-orange-100',
    iconBg: 'bg-orange-500/10',
    iconText: 'text-orange-600',
    decor: 'text-orange-500/[0.08]',
  },
  mint: {
    bg: 'from-emerald-50/90',
    border: 'border-emerald-100',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-600',
    decor: 'text-emerald-500/[0.08]',
  },
  rose: {
    bg: 'from-rose-50/90',
    border: 'border-rose-100',
    iconBg: 'bg-rose-500/10',
    iconText: 'text-rose-600',
    decor: 'text-rose-500/[0.08]',
  },
  cyan: {
    bg: 'from-cyan-50/90',
    border: 'border-cyan-100',
    iconBg: 'bg-cyan-500/10',
    iconText: 'text-cyan-600',
    decor: 'text-cyan-500/[0.08]',
  },
};

const TOOL_BADGES = {
  'Next.js': { bg: '#0B0B0C', label: 'N' },
  WordPress: { bg: '#1E3A4C', label: 'W' },
  Webflow: { bg: '#146EF5', label: 'Wf' },
  Shopify: { bg: '#5E8E3E', label: 'S' },
  Figma: { bg: '#A259FF', label: 'F' },
  'Adobe CC': { bg: '#DA1F26', label: 'A' },
  Canva: { bg: '#00A0B0', label: 'C' },
  'Meta Ads': { bg: '#0866FF', label: 'M' },
  'Google Ads': { bg: '#4285F4', label: 'G' },
  GA4: { bg: '#E8710A', label: 'A4' },
  Zoho: { bg: '#E42527', label: 'Z' },
  HubSpot: { bg: '#FF7A59', label: 'H' },
  n8n: { bg: '#EA4B71', label: 'n8' },
  Make: { bg: '#6D00CC', label: 'Mk' },
  'Premiere Pro': { bg: '#00005B', label: 'Pr' },
  'After Effects': { bg: '#5B1DD1', label: 'Ae' },
  CapCut: { bg: '#161823', label: 'Cc' },
  Notion: { bg: '#000000', label: 'No' },
  ClickUp: { bg: '#7B68EE', label: 'Cu' },
  Slack: { bg: '#611F69', label: 'Sl' },
  'Google Workspace': { bg: '#1A73E8', label: 'Gw' },
};

function ToolBadge({ name }) {
  const meta = TOOL_BADGES[name] || { bg: '#0B2436', label: name.slice(0, 1) };
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-line bg-white py-1 pl-1 pr-3 text-[12px] font-bold text-navy/75 shadow-soft">
      <span
        className="flex h-5 w-5 shrink-0 items-center justify-center rounded-[6px] text-[9px] font-extrabold tracking-tight text-white"
        style={{ background: meta.bg }}
      >
        {meta.label}
      </span>
      {name}
    </span>
  );
}

function StackCard({ item, i, reduceMotion }) {
  const theme = THEMES[item.theme];
  return (
    <motion.div
      initial={reduceMotion ? false : { opacity: 0, y: 24, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={VIEWPORT}
      transition={{ duration: reduceMotion ? 0 : 0.55, delay: reduceMotion ? 0 : i * 0.08, ease: EASE }}
      className={`group relative overflow-hidden rounded-[22px] border ${theme.border} bg-gradient-to-br ${theme.bg} to-white p-6 shadow-soft transition-all duration-400 hover:-translate-y-1 hover:shadow-lift sm:p-7`}
    >
      <Icon
        name={item.icon}
        className={`pointer-events-none absolute -right-5 -top-5 h-28 w-28 rotate-6 transition-transform duration-500 ease-out group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:rotate-3 ${theme.decor}`}
        strokeWidth={1}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div className="flex items-start gap-3.5 sm:gap-4">
          <span
            className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${theme.iconBg} ${theme.iconText}`}
          >
            <Icon name={item.icon} className="h-5 w-5" strokeWidth={1.8} />
          </span>
          <div>
            <h3 className="text-[16px] font-extrabold leading-tight text-navy">{item.cat}</h3>
            <p className="mt-1 max-w-[22ch] text-[13px] leading-snug text-navy/55">{item.description}</p>
          </div>
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-soft transition-transform duration-300 ease-out group-hover:translate-x-1">
          <Icon name="arrow" className="h-4 w-4" />
        </span>
      </div>

      <div className="relative mt-5 flex flex-wrap gap-2">
        {item.tools.map((tool) => (
          <ToolBadge key={tool} name={tool} />
        ))}
      </div>
    </motion.div>
  );
}

export default function OurStack() {
  const reduceMotion = useReducedMotion();

  return (
    <section className="bg-mist py-20 lg:py-24">
      <div className="container-x relative">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Our stack</span>
          <h2 className="h2 mt-4">
            Tools we <span className="text-gradient">actually</span> use.
          </h2>
          <p className="lede mt-5">
            Nothing exotic, nothing you get locked into. Proven tools, set up properly, handed
            over cleanly if you ever move on.
          </p>
        </Reveal>

        <motion.div
          initial={reduceMotion ? false : { opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={VIEWPORT}
          transition={{ duration: reduceMotion ? 0 : 0.6, delay: reduceMotion ? 0 : 0.2, ease: EASE }}
          className="pointer-events-none absolute right-0 top-0 hidden flex-col items-end text-right xl:flex"
          aria-hidden="true"
        >
          <svg width="76" height="52" viewBox="0 0 76 52" fill="none" className="text-navy/25">
            <path
              d="M8 6C26 6 48 12 64 36"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeDasharray="1 6"
            />
            <path
              d="M55 31L65 38L67 27"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p className="-mt-1 select-none font-serif text-[15px] italic leading-snug text-navy/40">
            Right tools.
            <br />
            Real results.
            <br />
            No lock-ins.
          </p>
        </motion.div>

        <div className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {TECH_STACK.map((item, i) => (
            <StackCard key={item.cat} item={item} i={i} reduceMotion={reduceMotion} />
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-[13px] font-bold text-navy/50">
          <span className="flex items-center gap-2">
            <Icon name="bolt" className="h-4 w-4 text-teal-600" strokeWidth={1.8} />
            Proven tools
          </span>
          <span className="hidden h-4 w-px bg-line sm:block" />
          <span className="flex items-center gap-2">
            <Icon name="cap" className="h-4 w-4 text-teal-600" strokeWidth={1.8} />
            Expert setup
          </span>
          <span className="hidden h-4 w-px bg-line sm:block" />
          <span className="flex items-center gap-2">
            <Icon name="shield" className="h-4 w-4 text-teal-600" strokeWidth={1.8} />
            Fully yours
          </span>
        </div>
      </div>
    </section>
  );
}
