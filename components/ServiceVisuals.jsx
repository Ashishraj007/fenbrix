import Icon from './Icon';

// Shared per-service pastel themes + decorative mini-illustrations, used by
// both the /services/ page grid (ServicesShowcase) and the Services navbar
// mega-menu (ServicesMegaMenu) — one place to keep the two in sync.

export const THEMES = {
  teal: {
    border: 'border-teal-100',
    bg: 'from-teal-50/70',
    iconBg: 'bg-teal-500/10',
    iconText: 'text-teal-600',
    check: 'text-teal-600',
    blob: 'bg-teal-400/25',
    numberText: 'text-teal-600',
  },
  rose: {
    border: 'border-rose-100',
    bg: 'from-rose-50/70',
    iconBg: 'bg-rose-500/10',
    iconText: 'text-rose-600',
    check: 'text-rose-500',
    blob: 'bg-rose-400/25',
    numberText: 'text-rose-600',
  },
  orange: {
    border: 'border-orange-100',
    bg: 'from-orange-50/70',
    iconBg: 'bg-orange-500/10',
    iconText: 'text-orange-600',
    check: 'text-orange-500',
    blob: 'bg-orange-400/25',
    numberText: 'text-orange-600',
  },
  blue: {
    border: 'border-blue-100',
    bg: 'from-blue-50/70',
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-600',
    check: 'text-blue-500',
    blob: 'bg-blue-400/25',
    numberText: 'text-blue-600',
  },
  purple: {
    border: 'border-purple-100',
    bg: 'from-purple-50/70',
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-600',
    check: 'text-purple-500',
    blob: 'bg-purple-400/25',
    numberText: 'text-purple-600',
  },
  emerald: {
    border: 'border-emerald-100',
    bg: 'from-emerald-50/70',
    iconBg: 'bg-emerald-500/10',
    iconText: 'text-emerald-600',
    check: 'text-emerald-500',
    blob: 'bg-emerald-400/25',
    numberText: 'text-emerald-600',
  },
};

export function Chip({ icon, className = '', iconClassName = 'h-4 w-4' }) {
  return (
    <span className={`absolute flex items-center justify-center rounded-xl bg-white shadow-soft ${className}`}>
      <Icon name={icon} className={iconClassName} strokeWidth={1.9} />
    </span>
  );
}

function VisualSocial({ theme }) {
  return (
    <div className="relative h-full w-full">
      <span className={`absolute inset-1 rounded-full blur-xl ${theme.blob}`} />
      <Chip icon="instagram" className="left-0 top-0 h-9 w-9 -rotate-6 text-pink-500" />
      <Chip icon="facebook" className="left-11 top-1 h-8 w-8 rotate-3 text-blue-600" />
      <Chip icon="play" className="left-0 top-11 h-8 w-8 -rotate-3 text-red-500" iconClassName="h-3.5 w-3.5" />
      <Chip icon="linkedin" className="left-11 top-12 h-8 w-8 rotate-6 text-sky-600" />
    </div>
  );
}

function VisualContent({ theme }) {
  return (
    <div className="relative h-full w-full">
      <span className={`absolute inset-1 rounded-full blur-xl ${theme.blob}`} />
      <Chip icon="camera" className="left-1 top-0 h-12 w-12 text-rose-600" iconClassName="h-5 w-5" />
      <Chip icon="sparkle" className="left-14 top-10 h-8 w-8 rotate-6 text-rose-400" />
    </div>
  );
}

function VisualMarketing({ theme }) {
  const bars = [8, 14, 11, 18];
  return (
    <div className="relative h-full w-full">
      <span className={`absolute inset-1 rounded-full blur-xl ${theme.blob}`} />
      <div className="absolute left-0 top-0 rounded-full bg-white px-2 py-1 text-[9px] font-extrabold text-orange-600 shadow-soft">
        More leads ↑
      </div>
      <div className="absolute bottom-0 left-0 flex items-end gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-2.5 rounded-t-sm bg-gradient-to-t from-orange-500 to-orange-300"
            style={{ height: `${h * 2}px` }}
          />
        ))}
      </div>
      <Chip icon="chart" className="right-0 top-6 h-8 w-8 text-orange-600" />
    </div>
  );
}

function VisualWebsite() {
  return (
    <div className="relative h-full w-full">
      <span className="absolute inset-1 rounded-full bg-blue-400/25 blur-xl" />
      <div className="absolute left-0 top-0 h-[68px] w-[104px] rounded-lg border border-blue-100 bg-white shadow-soft">
        <div className="flex items-center gap-1 border-b border-blue-50 px-2 py-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
          <span className="h-1.5 w-1.5 rounded-full bg-blue-200" />
        </div>
        <div className="space-y-1.5 px-2 py-2">
          <span className="block h-1.5 w-3/4 rounded-full bg-blue-100" />
          <span className="block h-1.5 w-1/2 rounded-full bg-blue-100" />
          <span className="block h-3.5 w-9 rounded-full bg-blue-500/70" />
        </div>
      </div>
      <Chip icon="cursor" className="bottom-0 right-0 h-7 w-7 text-navy" iconClassName="h-3.5 w-3.5" />
    </div>
  );
}

function VisualSoftware() {
  return (
    <div className="relative h-full w-full">
      <span className="absolute inset-1 rounded-full bg-purple-400/25 blur-xl" />
      <div className="absolute left-4 top-0 h-[84px] w-12 rounded-2xl border border-purple-100 bg-white p-1.5 shadow-soft">
        <span className="mx-auto block h-1 w-3.5 rounded-full bg-purple-100" />
        <div className="mt-2 space-y-1.5">
          <span className="block h-1.5 w-full rounded-full bg-purple-100" />
          <span className="block h-1.5 w-2/3 rounded-full bg-purple-100" />
        </div>
      </div>
      <Chip icon="code" className="right-0 top-2 h-8 w-8 text-purple-600" />
    </div>
  );
}

function VisualAutomation() {
  return (
    <div className="relative h-full w-full">
      <span className="absolute inset-1 rounded-full bg-emerald-400/25 blur-xl" />
      <svg className="absolute inset-0 h-full w-full overflow-visible" aria-hidden="true">
        <line x1="22" y1="16" x2="66" y2="40" stroke="#10B981" strokeOpacity="0.35" strokeWidth="1.4" strokeDasharray="3 4" />
        <line x1="66" y1="40" x2="26" y2="66" stroke="#10B981" strokeOpacity="0.35" strokeWidth="1.4" strokeDasharray="3 4" />
      </svg>
      <Chip icon="wa" className="left-0 top-0 h-8 w-8 text-emerald-600" />
      <Chip icon="bot" className="left-12 top-8 h-8 w-8 text-navy" />
      <Chip icon="mail" className="left-3 top-[54px] h-8 w-8 text-emerald-500" />
    </div>
  );
}

export const VISUALS = {
  'social-media': VisualSocial,
  content: VisualContent,
  marketing: VisualMarketing,
  websites: VisualWebsite,
  software: VisualSoftware,
  automation: VisualAutomation,
};
