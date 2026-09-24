'use client';

import Link from 'next/link';
import { trackEvent } from '@/lib/gtag';

// Drop-in replacement for next/link (internal routes) or a plain <a> (tel:,
// mailto:, wa.me and other external URLs) that fires a GA4 event on click.
// Renders the exact same markup/attributes as whichever it replaces — no
// visual, styling or navigation change, just an added tracking call. This
// is the one place `lib/gtag.js` is wired to a real click, so every lead
// CTA across the site shares this single, tested code path.
const EXTERNAL_PREFIXES = ['http://', 'https://', 'mailto:', 'tel:'];

export default function TrackedLink({ href, event, eventParams, onClick, children, ...rest }) {
  const isExternal = EXTERNAL_PREFIXES.some((prefix) => href?.startsWith(prefix));

  const handleClick = (e) => {
    trackEvent(event, eventParams);
    onClick?.(e);
  };

  if (isExternal) {
    return (
      <a href={href} onClick={handleClick} {...rest}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} onClick={handleClick} {...rest}>
      {children}
    </Link>
  );
}
