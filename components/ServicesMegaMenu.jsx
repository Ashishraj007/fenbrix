'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion } from 'framer-motion';
import Icon from './Icon';
import { SERVICES } from '@/lib/content';

const EASE = [0.22, 1, 0.36, 1];
const CLOSE_DELAY = 150;

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
              initial={{ opacity: 0, y: -6, scale: 0.99 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.99 }}
              transition={{ duration: 0.18, ease: EASE }}
              onMouseEnter={openNow}
              onMouseLeave={scheduleClose}
              className="pointer-events-auto"
            >
              <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-lift">
                <div className="grid gap-1 p-6 sm:grid-cols-2 lg:grid-cols-3">
                  {SERVICES.map((s) => (
                    <Link
                      key={s.slug}
                      href={`/services/${s.slug}/`}
                      role="menuitem"
                      onClick={() => setOpen(false)}
                      className="group flex flex-col gap-3 rounded-xl p-4 transition-colors duration-300 hover:bg-mist focus:outline-none focus-visible:bg-mist focus-visible:ring-2 focus-visible:ring-teal-400"
                    >
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-navy text-teal-400 transition-colors duration-300 group-hover:bg-teal-600 group-hover:text-white">
                          <Icon name={s.icon} className="h-5 w-5" />
                        </div>
                        <h3 className="text-[14px] font-extrabold leading-tight text-navy">{s.title}</h3>
                      </div>
                      <p className="text-[12.5px] leading-relaxed text-navy/55">{s.short}</p>
                      <ul className="space-y-1.5 border-t border-line pt-3">
                        {s.items.slice(0, 3).map((it) => (
                          <li key={it} className="flex gap-2 text-[12px] text-navy/60">
                            <Icon name="check" className="mt-0.5 h-3 w-3 shrink-0 text-teal-600" strokeWidth={2.8} />
                            <span className="leading-snug">{it}</span>
                          </li>
                        ))}
                      </ul>
                    </Link>
                  ))}
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line bg-mist px-6 py-4">
                  <p className="text-[13px] font-semibold text-navy/70">
                    Explore every service in detail on one page.
                  </p>
                  <Link
                    href="/services/"
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="btn-ghost shrink-0 py-2 text-[13px]"
                  >
                    View all services
                    <Icon name="arrow" className="h-4 w-4" />
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
