'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon';
import { THEMES, VISUALS } from './ServiceVisuals';
import { SERVICES } from '@/lib/content';

const EASE = [0.22, 1, 0.36, 1];
const CLOSE_DELAY = 150;

const VALUE_POINTS = [
  { icon: 'bolt', label: 'One team for everything' },
  { icon: 'trend', label: 'Strategy to execution' },
  { icon: 'check', label: 'Built for real business' },
];

function MiniServiceCard({ service, index, onNavigate }) {
  const theme = THEMES[service.theme] || THEMES.teal;
  const Visual = VISUALS[service.slug];
  const number = String(index + 1).padStart(2, '0');

  return (
    <Link
      href={`/services/${service.slug}/`}
      role="menuitem"
      onClick={onNavigate}
      className={`group relative flex flex-col overflow-hidden rounded-2xl border ${theme.border} bg-gradient-to-br ${theme.bg} to-white p-4 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400`}
    >
      <div className="flex items-start justify-between">
        <span
          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${theme.iconBg} ${theme.iconText}`}
        >
          <Icon name={service.icon} className="h-5 w-5" strokeWidth={1.8} />
        </span>
        <div className="relative h-[68px] w-[84px] shrink-0 origin-top-right scale-[0.62] transition-transform duration-300 ease-out group-hover:-translate-y-0.5">
          <Visual theme={theme} />
        </div>
      </div>

      <span className={`mt-2.5 text-[10px] font-extrabold tracking-[0.12em] ${theme.numberText}`}>{number}</span>
      <h3 className="mt-0.5 text-[14px] font-extrabold leading-tight text-navy">{service.title}</h3>
      <p className="mt-1 text-[12px] leading-snug text-navy/55">{service.short}</p>

      <ul className="mt-2.5 space-y-1.5">
        {service.items.slice(0, 3).map((item) => (
          <li key={item} className="flex items-start gap-2 text-[11.5px] leading-snug text-navy/65">
            <Icon name="check" className={`mt-0.5 h-3 w-3 shrink-0 ${theme.check}`} strokeWidth={2.8} />
            {item}
          </li>
        ))}
      </ul>

      <div className="mt-3 flex items-center justify-between border-t border-line/70 pt-3">
        <span className="inline-flex items-center gap-1.5 text-[12px] font-extrabold text-teal-600">
          Explore service
          <Icon
            name="arrow"
            className="h-3 w-3 transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
        <span
          aria-hidden="true"
          className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-soft transition-transform duration-300 group-hover:translate-x-0.5"
        >
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </span>
      </div>
    </Link>
  );
}

// Desktop mega-menu — hangs off the "Services" nav item, driven entirely by
// the SERVICES catalogue in lib/content.js (the same source used by the
// Services page and each /services/[slug]/ route) so there is one place to
// edit service names, icons and routes.
export function ServicesMegaMenu() {
  const [open, setOpen] = useState(false);
  const closeTimer = useRef(null);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const menuId = useId();
  const pathname = usePathname();
  const active = pathname === '/services/' || pathname?.startsWith('/services/');

  const clearCloseTimer = () => {
    if (closeTimer.current) {
      clearTimeout(closeTimer.current);
      closeTimer.current = null;
    }
  };

  const openNow = () => {
    clearCloseTimer();
    setOpen(true);
  };

  const scheduleClose = () => {
    clearCloseTimer();
    closeTimer.current = setTimeout(() => setOpen(false), CLOSE_DELAY);
  };

  const closeAndFocus = () => {
    clearCloseTimer();
    setOpen(false);
    triggerRef.current?.focus();
  };

  useEffect(() => clearCloseTimer, []);

  // Navbar persists across client-side route changes, so this component never
  // unmounts on navigation — without this, a menu left open would still show
  // open on whatever page you land on.
  useEffect(() => setOpen(false), [pathname]);

  // Click outside closes the panel (keeps hover/click/keyboard all in sync).
  useEffect(() => {
    if (!open) return undefined;
    const onPointerDown = (e) => {
      if (triggerRef.current?.contains(e.target) || panelRef.current?.contains(e.target)) return;
      setOpen(false);
    };
    document.addEventListener('mousedown', onPointerDown);
    return () => document.removeEventListener('mousedown', onPointerDown);
  }, [open]);

  return (
    <div
      className="relative"
      onMouseEnter={openNow}
      onMouseLeave={scheduleClose}
      onKeyDown={(e) => e.key === 'Escape' && closeAndFocus()}
    >
      <button
        ref={triggerRef}
        type="button"
        aria-haspopup="true"
        aria-expanded={open}
        aria-controls={menuId}
        onClick={() => (open ? setOpen(false) : openNow())}
        className={`relative flex items-center gap-1 rounded-full px-4 py-2 text-sm font-bold transition-colors ${
          active || open ? 'text-teal-600' : 'text-navy/70 hover:text-navy'
        }`}
      >
        Services
        <Icon
          name="chevron"
          className={`h-3.5 w-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          strokeWidth={2.4}
        />
        {(active || open) && (
          <motion.span
            layoutId="nav-pill"
            className="absolute inset-0 -z-10 rounded-full bg-teal-600/10"
            transition={{ type: 'spring', stiffness: 380, damping: 32 }}
          />
        )}
      </button>

      {/* Positioning lives on this plain element (Tailwind's -translate-x-1/2
          centers it on the viewport). Framer Motion writes its own inline
          `transform` for the open/close animation on the child below — putting
          both on one node would let Motion's inline style silently overwrite
          the Tailwind translate and knock the panel off-center.
          pointer-events-none is required here: this shell is always mounted
          (so AnimatePresence can exit-animate its child) and spans the full
          nav width, so without it the empty shell would sit under the whole
          navbar and swallow hover for every other nav item. Only the actual
          panel (pointer-events-auto below) should ever receive the pointer. */}
      <div className="pointer-events-none fixed left-1/2 top-[72px] z-40 w-full max-w-container -translate-x-1/2 px-5 pt-3 sm:px-7 lg:px-8">
        <AnimatePresence>
          {open && (
            <motion.div
              ref={panelRef}
              id={menuId}
              role="menu"
              aria-label="Services"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: EASE }}
              onMouseEnter={openNow}
              onMouseLeave={scheduleClose}
              className="pointer-events-auto"
            >
              <div className="max-h-[calc(100vh-96px)] overflow-y-auto overflow-x-hidden rounded-[24px] border border-line bg-white/95 shadow-lift backdrop-blur-xl">
                <div className="grid lg:grid-cols-[27%_1fr]">
                  {/* ---------- LEFT SIDEBAR ---------- */}
                  <div className="flex flex-col justify-between gap-8 border-b border-line bg-mist/60 p-7 lg:border-b-0 lg:border-r">
                    <div>
                      <span className="eyebrow">Our services</span>
                      <h3 className="mt-3 text-[1.55rem] font-extrabold leading-[1.15] tracking-[-0.02em] text-navy">
                        Everything you need to grow, in <span className="text-gradient">one place.</span>
                      </h3>
                      <p className="mt-3 text-[13px] leading-relaxed text-navy/55">
                        From strategy to execution, we help businesses build, market and scale with
                        the right mix of creativity and technology.
                      </p>

                      <ul className="mt-6 space-y-3">
                        {VALUE_POINTS.map((v) => (
                          <li key={v.label} className="flex items-center gap-2.5 text-[12.5px] font-bold text-navy/70">
                            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-teal-500/10 text-teal-600">
                              <Icon name={v.icon} className="h-3.5 w-3.5" strokeWidth={2.2} />
                            </span>
                            {v.label}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="hidden xl:block" aria-hidden="true">
                      <svg width="60" height="38" viewBox="0 0 60 38" fill="none" className="text-navy/25">
                        <path
                          d="M6 6C22 5 40 10 50 28"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeDasharray="1 6"
                        />
                        <path
                          d="M40 24L51 29L53 18"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <p className="-mt-0.5 select-none font-serif text-[14px] italic leading-snug text-navy/40">
                        Ideas.
                        <br />
                        Execution.
                        <br />
                        Real Growth.
                      </p>
                    </div>
                  </div>

                  {/* ---------- RIGHT SERVICE GRID ---------- */}
                  <div className="p-6">
                    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                      {SERVICES.map((s, i) => (
                        <MiniServiceCard
                          key={s.slug}
                          service={s}
                          index={i}
                          onNavigate={() => setOpen(false)}
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* ---------- BOTTOM CTA ---------- */}
                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-teal-50/40 px-7 py-3.5">
                  <div className="flex items-center gap-2.5">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-teal-600 shadow-soft">
                      <Icon name="phone" className="h-3.5 w-3.5" strokeWidth={1.9} />
                    </span>
                    <div>
                      <p className="text-[13px] font-extrabold leading-tight text-navy">
                        Not sure which service fits you?
                      </p>
                      <p className="text-[12px] leading-tight text-navy/55">
                        Talk to our team and get a personalized recommendation.
                      </p>
                    </div>
                  </div>
                  <Link
                    href="/services/"
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="group/cta flex h-[50px] min-w-[172px] shrink-0 items-center justify-center gap-2 rounded-full bg-navy px-5 text-[13px] font-bold text-white transition-all duration-300 hover:bg-navy-700 hover:shadow-lift active:scale-[0.98]"
                  >
                    Explore services
                    <Icon
                      name="arrow"
                      className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1"
                    />
                  </Link>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}

// Mobile accordion — same SERVICES data, collapsible layout for touch.
export function ServicesAccordion({ onNavigate }) {
  const [open, setOpen] = useState(false);
  const panelId = useId();

  return (
    <div className="rounded-xl">
      <button
        type="button"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-xl px-4 py-3 text-base font-bold text-navy/80 transition-colors hover:bg-mist hover:text-navy"
      >
        Services
        <Icon
          name="chevron"
          className={`h-4 w-4 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
          strokeWidth={2.4}
        />
      </button>

      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            id={panelId}
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.28, ease: EASE }}
            className="overflow-hidden"
          >
            <div className="flex flex-col gap-1 py-1 pl-2">
              {SERVICES.map((s) => (
                <Link
                  key={s.slug}
                  href={`/services/${s.slug}/`}
                  onClick={onNavigate}
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[14px] font-semibold text-navy/70 transition-colors hover:bg-mist hover:text-navy"
                >
                  <Icon name={s.icon} className="h-4 w-4 shrink-0 text-teal-600" />
                  {s.title}
                </Link>
              ))}
              <Link
                href="/services/"
                onClick={onNavigate}
                className="mt-1 flex items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-extrabold text-teal-600 transition-colors hover:bg-mist"
              >
                View all services
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
