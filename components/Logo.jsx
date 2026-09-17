const F_TOP = 'M152 388 V124 H392 L348 190 H218 V388 Z';
const F_MID = 'M152 288 V222 H322 L278 288 Z';

/** The Fenbrix icon mark. `variant`: 'navy' | 'white' | 'gradient' */
export function LogoMark({ className = 'h-9 w-9', variant = 'navy', id = 'fx' }) {
  const fFill = variant === 'white' ? '#ffffff' : variant === 'gradient' ? '#ffffff' : '#0B2436';

  return (
    <svg viewBox="0 0 512 512" className={className} role="img" aria-label="Fenbrix">
      <defs>
        <linearGradient id={`${id}-teal`} x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#1B8F8A" />
          <stop offset="100%" stopColor="#35D6C0" />
        </linearGradient>
        <linearGradient id={`${id}-bg`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#0B2436" />
          <stop offset="55%" stopColor="#103A4E" />
          <stop offset="100%" stopColor="#14566B" />
        </linearGradient>
      </defs>
      {variant === 'gradient' && <rect width="512" height="512" rx="116" fill={`url(#${id}-bg)`} />}
      <path d={F_TOP} fill={fFill} />
      <path d={F_MID} fill={`url(#${id}-teal)`} />
    </svg>
  );
}

/** Full horizontal lockup: mark + wordmark + optional tagline. */
export default function Logo({ variant = 'navy', tagline = true, className = '', id = 'fx' }) {
  const text = variant === 'white' ? 'text-white' : 'text-navy';
  const sub = variant === 'white' ? 'text-white/55' : 'text-navy/50';

  return (
    <span className={`inline-flex items-center gap-2.5 ${className}`}>
      <LogoMark className="h-9 w-9 shrink-0" variant={variant} id={id} />
      <span className="flex flex-col leading-none">
        <span className={`text-[1.12rem] font-extrabold tracking-[0.14em] ${text}`}>FENBRIX</span>
        {tagline && (
          <span className={`mt-[3px] text-[7.5px] font-bold uppercase tracking-[0.2em] ${sub}`}>
            Digital Growth &amp; Technology
          </span>
        )}
      </span>
    </span>
  );
}
