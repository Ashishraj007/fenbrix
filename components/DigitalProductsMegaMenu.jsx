'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import Icon from './Icon';
import { THEMES, VISUALS } from './DigitalProductVisuals';
import { getCategories } from '@/lib/digital-products';

const EASE = [0.22, 1, 0.36, 1];
const CLOSE_DELAY = 150;
const CATEGORIES = getCategories();

function CategoryCard({ category, index, onNavigate, reduceMotion }) {
  const theme = THEMES[category.slug] || THEMES.design;
  const Visual = VISUALS[category.slug];

  return (
    <motion.div
      initial={reduceMotion ? { opacity: 1, y: 0 } : { opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: reduceMotion ? 0 : 0.35, delay: reduceMotion ? 0 : index * 0.04, ease: EASE }}
    >
      <Link
        href={`/digital-products/${category.slug}/`}
        role="menuitem"
        onClick={onNavigate}
        className={`group relative flex items-center gap-3.5 overflow-hidden rounded-2xl border ${theme.border} bg-gradient-to-br ${theme.bg} to-white p-4 transition-all duration-300 hover:-translate-y-1 hover:shadow-lift focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400`}
      >
        <span
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl ${theme.iconBg} ${theme.iconText} transition-transform duration-300 group-hover:scale-105`}
        >
          <Icon name={category.icon} className="h-5 w-5" strokeWidth={1.7} />
        </span>

        <div className="min-w-0 flex-1">
          <h3 className="truncate text-[14px] font-extrabold leading-tight text-navy">{category.name}</h3>
          <p className={`mt-0.5 text-[12px] font-semibold ${theme.countText}`}>{category.count} products</p>
        </div>

        {Visual && (
          <div className="relative hidden h-[58px] w-[70px] shrink-0 transition-transform duration-300 ease-out group-hover:-translate-y-0.5 sm:block">
            <Visual theme={theme} />
          </div>
        )}

        <span
          aria-hidden="true"
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-navy shadow-soft transition-transform duration-300 group-hover:translate-x-1"
        >
          <Icon name="arrow" className="h-3.5 w-3.5" />
        </span>
      </Link>
    </motion.div>
  );
}

// Desktop mega-menu for "Digital Products" — mirrors the interaction pattern
// already fixed in ServicesMegaMenu.jsx: positioning and animation are split
// across two nested elements (Framer Motion's inline transform would otherwise
// clobber Tailwind's centering transform on a single node), the invisible
// positioning shell is pointer-events-none so it can never capture hover for
// nav items it happens to sit under, and `open` resets on route change since
// Navbar persists across client-side navigations.
export function DigitalProductsMegaMenu() {
  const [open, setOpen] = useState(false);
  const reduceMotion = useReducedMotion();
  const closeTimer = useRef(null);
  const triggerRef = useRef(null);
  const panelRef = useRef(null);
  const menuId = useId();
  const pathname = usePathname();
  const active = pathname === '/digital-products/' || pathname?.startsWith('/digital-products/');

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
  useEffect(() => setOpen(false), [pathname]);

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
        className={`relative flex shrink-0 items-center gap-1 whitespace-nowrap rounded-full px-4 py-2 text-sm font-bold leading-none transition-colors ${
          active || open ? 'text-teal-600' : 'text-navy/70 hover:text-navy'
        }`}
      >
        Digital Products
        <Icon
          name="chevron"
          className={`h-3.5 w-3.5 shrink-0 transition-transform duration-300 ${open ? 'rotate-180' : ''}`}
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

      <div className="pointer-events-none fixed left-1/2 top-[72px] z-40 w-full max-w-container -translate-x-1/2 px-5 pt-3 sm:px-7 lg:px-8">
        <AnimatePresence>
          {open && (
            <motion.div
              ref={panelRef}
              id={menuId}
              role="menu"
              aria-label="Digital Products"
              initial={{ opacity: 0, y: -8, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ duration: 0.22, ease: EASE }}
              onMouseEnter={openNow}
              onMouseLeave={scheduleClose}
              className="pointer-events-auto"
            >
              <div className="relative overflow-hidden rounded-[24px] border border-line bg-white shadow-lift">
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -left-16 -top-20 h-64 w-64 rounded-full bg-teal-400/[0.06] blur-3xl"
                />
                <span
                  aria-hidden="true"
                  className="pointer-events-none absolute -bottom-24 -right-10 h-72 w-72 rounded-full bg-purple-400/[0.05] blur-3xl"
                />

                <div className="relative grid grid-cols-1 gap-3 p-6 sm:grid-cols-2 lg:grid-cols-3">
                  {CATEGORIES.map((c, i) => (
                    <CategoryCard
                      key={c.slug}
                      category={c}
                      index={i}
                      reduceMotion={reduceMotion}
                      onNavigate={() => setOpen(false)}
                    />
                  ))}
                </div>

                <div className="relative flex flex-wrap items-center justify-between gap-4 border-t border-line bg-mist px-7 py-4">
                  <div className="flex items-center gap-3">
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white text-teal-600 shadow-soft">
                      <Icon name="box" className="h-3.5 w-3.5" strokeWidth={1.9} />
                    </span>
                    <p className="text-[13px] font-semibold text-navy/70">
                      Premium software, AI tools and creative apps — browse the full catalog.
                    </p>
                  </div>
                  <Link
                    href="/digital-products/"
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className="group/cta flex h-[50px] min-w-[176px] shrink-0 items-center justify-center gap-2 rounded-full border border-line bg-white px-5 text-[13px] font-bold text-navy shadow-soft transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lift active:scale-[0.98]"
                  >
                    View all products
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

// Mobile accordion — same category data, collapsible layout for touch.
export function DigitalProductsAccordion({ onNavigate }) {
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
        Digital Products
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
              {CATEGORIES.map((c) => (
                <Link
                  key={c.slug}
                  href={`/digital-products/${c.slug}/`}
                  onClick={onNavigate}
                  className="flex items-center gap-3 rounded-lg px-4 py-2.5 text-[14px] font-semibold text-navy/70 transition-colors hover:bg-mist hover:text-navy"
                >
                  <Icon name={c.icon} className="h-4 w-4 shrink-0 text-teal-600" />
                  {c.name}
                  <span className="ml-auto text-[12px] font-medium text-navy/40">{c.count}</span>
                </Link>
              ))}
              <Link
                href="/digital-products/"
                onClick={onNavigate}
                className="mt-1 flex items-center gap-2 rounded-lg px-4 py-2.5 text-[13px] font-extrabold text-teal-600 transition-colors hover:bg-mist"
              >
                View all products
                <Icon name="arrow" className="h-3.5 w-3.5" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
