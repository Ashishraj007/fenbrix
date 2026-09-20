'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import Logo from './Logo';
import Icon from './Icon';
import { ServicesMegaMenu, ServicesAccordion } from './ServicesMegaMenu';
import { DigitalProductsMegaMenu, DigitalProductsAccordion } from './DigitalProductsMegaMenu';
import { NAV } from '@/lib/content';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-400 ${
        scrolled || open
          ? 'border-b border-line bg-white/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav className="container-x flex h-[72px] items-center justify-between gap-6">
        <Link href="/" aria-label="Fenbrix home" className="transition-opacity hover:opacity-80">
          <Logo />
        </Link>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV.map((item) => {
            if (item.href === '/services/') {
              return <ServicesMegaMenu key={item.href} />;
            }
            if (item.href === '/digital-products/') {
              return <DigitalProductsMegaMenu key={item.href} />;
            }
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative rounded-full px-4 py-2 text-sm font-bold transition-colors ${
                  active ? 'text-teal-600' : 'text-navy/70 hover:text-navy'
                }`}
              >
                {item.label}
                {active && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 -z-10 rounded-full bg-teal-600/10"
                    transition={{ type: 'spring', stiffness: 380, damping: 32 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-3 lg:flex">
          <Link href="/contact/" className="btn-primary text-[13px]">
            Get a free audit
            <Icon name="arrow" className="h-4 w-4" />
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white lg:hidden"
        >
          <span className="relative block h-3.5 w-5">
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded bg-navy transition-all duration-300 ${
                open ? 'top-1.5 rotate-45' : 'top-0'
              }`}
            />
            <span
              className={`absolute left-0 top-1.5 block h-[2px] w-5 rounded bg-navy transition-all duration-200 ${
                open ? 'opacity-0' : 'opacity-100'
              }`}
            />
            <span
              className={`absolute left-0 block h-[2px] w-5 rounded bg-navy transition-all duration-300 ${
                open ? 'top-1.5 -rotate-45' : 'top-3'
              }`}
            />
          </span>
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-line bg-white lg:hidden"
          >
            <div className="container-x flex flex-col gap-1 py-5">
              {NAV.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -14 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05 }}
                >
                  {item.href === '/services/' ? (
                    <ServicesAccordion onNavigate={() => setOpen(false)} />
                  ) : item.href === '/digital-products/' ? (
                    <DigitalProductsAccordion onNavigate={() => setOpen(false)} />
                  ) : (
                    <Link
                      href={item.href}
                      className="block rounded-xl px-4 py-3 text-base font-bold text-navy/80 transition-colors hover:bg-mist hover:text-navy"
                    >
                      {item.label}
                    </Link>
                  )}
                </motion.div>
              ))}
              <Link href="/contact/" className="btn-primary mt-3 w-full">
                Get a free audit
                <Icon name="arrow" className="h-4 w-4" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
