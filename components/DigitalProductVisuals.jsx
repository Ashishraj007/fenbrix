import Icon from './Icon';
import { Chip } from './ServiceVisuals';

// Per-category pastel themes + tiny decorative illustrations for the Digital
// Products mega-menu — same visual language as ServiceVisuals.jsx (reuses its
// Chip helper) but keyed by category slug (see lib/digital-products.js).

export const THEMES = {
  design: {
    border: 'border-teal-100',
    bg: 'from-teal-50/70',
    iconBg: 'bg-teal-500/10',
    iconText: 'text-teal-600',
    blob: 'bg-teal-400/25',
    countText: 'text-teal-600',
  },
  'video-editing': {
    border: 'border-rose-100',
    bg: 'from-rose-50/70',
    iconBg: 'bg-rose-500/10',
    iconText: 'text-rose-600',
    blob: 'bg-rose-400/25',
    countText: 'text-rose-500',
  },
  'ai-tools': {
    border: 'border-amber-100',
    bg: 'from-amber-50/70',
    iconBg: 'bg-amber-500/10',
    iconText: 'text-amber-600',
    blob: 'bg-amber-400/25',
    countText: 'text-amber-600',
  },
  entertainment: {
    border: 'border-blue-100',
    bg: 'from-blue-50/70',
    iconBg: 'bg-blue-500/10',
    iconText: 'text-blue-600',
    blob: 'bg-blue-400/25',
    countText: 'text-blue-600',
  },
  productivity: {
    border: 'border-purple-100',
    bg: 'from-purple-50/70',
    iconBg: 'bg-purple-500/10',
    iconText: 'text-purple-600',
    blob: 'bg-purple-400/25',
    countText: 'text-purple-600',
  },
  developer: {
    border: 'border-cyan-100',
    bg: 'from-cyan-50/70',
    iconBg: 'bg-cyan-500/10',
    iconText: 'text-cyan-600',
    blob: 'bg-cyan-400/25',
    countText: 'text-cyan-600',
  },
  security: {
    border: 'border-red-100',
    bg: 'from-red-50/70',
    iconBg: 'bg-red-500/10',
    iconText: 'text-red-600',
    blob: 'bg-red-400/25',
    countText: 'text-red-500',
  },
  education: {
    border: 'border-sky-100',
    bg: 'from-sky-50/70',
    iconBg: 'bg-sky-500/10',
    iconText: 'text-sky-600',
    blob: 'bg-sky-400/25',
    countText: 'text-sky-600',
  },
  business: {
    border: 'border-violet-100',
    bg: 'from-violet-50/70',
    iconBg: 'bg-violet-500/10',
    iconText: 'text-violet-600',
    blob: 'bg-violet-400/25',
    countText: 'text-violet-600',
  },
};

function VisualDesign({ theme }) {
  return (
    <div className="relative h-full w-full">
      <span className={`absolute inset-1 rounded-full blur-lg ${theme.blob}`} />
      <span className="absolute left-0 top-0 h-7 w-7 -rotate-6 rounded-lg bg-teal-400/70 shadow-soft" />
      <span className="absolute left-5 top-3 h-7 w-7 rotate-6 rounded-full bg-teal-300/70 shadow-soft" />
      <Chip icon="pencil" className="left-2 top-9 h-7 w-7 text-teal-600" iconClassName="h-3.5 w-3.5" />
    </div>
  );
}

function VisualVideo({ theme }) {
  return (
    <div className="relative h-full w-full">
      <span className={`absolute inset-1 rounded-full blur-lg ${theme.blob}`} />
      <Chip icon="camera" className="left-0 top-1 h-9 w-9 text-rose-600" iconClassName="h-4 w-4" />
      <Chip icon="box" className="left-9 top-9 h-7 w-7 rotate-6 text-rose-400" iconClassName="h-3 w-3" />
    </div>
  );
}

function VisualAiTools() {
  return (
    <div className="relative h-full w-full">
      <span className="absolute inset-1 rounded-full bg-amber-400/25 blur-lg" />
      <Chip icon="bot" className="left-1 top-1 h-9 w-9 text-navy" iconClassName="h-4 w-4" />
      <Chip icon="sparkle" className="left-10 top-8 h-7 w-7 rotate-6 text-amber-500" iconClassName="h-3.5 w-3.5" />
    </div>
  );
}

function VisualEntertainment() {
  return (
    <div className="relative h-full w-full">
      <span className="absolute inset-1 rounded-full bg-blue-400/25 blur-lg" />
      <span className="absolute left-1 top-2 flex h-9 w-9 items-center justify-center rounded-full bg-blue-600 text-white shadow-soft">
        <Icon name="play" className="h-3.5 w-3.5" strokeWidth={1.9} />
      </span>
      <Chip icon="chart" className="left-9 top-9 h-7 w-7 text-blue-500" iconClassName="h-3 w-3" />
    </div>
  );
}

function VisualProductivity({ theme }) {
  return (
    <div className="relative h-full w-full">
      <span className={`absolute inset-1 rounded-full blur-lg ${theme.blob}`} />
      <div className="absolute left-0 top-1 w-[70px] rounded-lg border border-purple-100 bg-white p-2 shadow-soft">
        <div className="flex items-center gap-1.5 text-[9px] text-purple-500">
          <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
          <span className="block h-1 flex-1 rounded-full bg-purple-100" />
        </div>
        <div className="mt-1.5 flex items-center gap-1.5 text-[9px] text-purple-500">
          <Icon name="check" className="h-2.5 w-2.5" strokeWidth={3} />
          <span className="block h-1 flex-1 rounded-full bg-purple-100" />
        </div>
      </div>
    </div>
  );
}

function VisualDeveloper() {
  return (
    <div className="relative h-full w-full">
      <span className="absolute inset-1 rounded-full bg-cyan-400/25 blur-lg" />
      <div className="absolute left-0 top-0 h-[52px] w-[78px] rounded-lg border border-cyan-100 bg-white shadow-soft">
        <div className="flex items-center gap-1 border-b border-cyan-50 px-2 py-1">
          <span className="h-1 w-1 rounded-full bg-cyan-200" />
          <span className="h-1 w-1 rounded-full bg-cyan-200" />
          <span className="h-1 w-1 rounded-full bg-cyan-200" />
        </div>
        <div className="px-2 py-1.5 text-[9px] font-bold text-cyan-500">&lt;/&gt;</div>
      </div>
      <Chip icon="code" className="bottom-0 right-0 h-7 w-7 text-cyan-600" iconClassName="h-3 w-3" />
    </div>
  );
}

function VisualSecurity() {
  return (
    <div className="relative h-full w-full">
      <span className="absolute inset-1 rounded-full bg-red-400/25 blur-lg" />
      <span className="absolute left-2 top-1 flex h-10 w-10 items-center justify-center rounded-2xl bg-red-500/10 text-red-600">
        <Icon name="shield" className="h-5 w-5" strokeWidth={1.7} />
      </span>
      <Chip icon="check" className="left-11 top-9 h-6 w-6 text-red-500" iconClassName="h-3 w-3" strokeWidth={3} />
    </div>
  );
}

function VisualEducation() {
  return (
    <div className="relative h-full w-full">
      <span className="absolute inset-1 rounded-full bg-sky-400/25 blur-lg" />
      <Chip icon="cap" className="left-1 top-1 h-9 w-9 text-sky-600" iconClassName="h-4 w-4" />
      <Chip icon="mail" className="left-10 top-9 h-7 w-7 rotate-6 text-sky-400" iconClassName="h-3 w-3" />
    </div>
  );
}

function VisualBusiness({ theme }) {
  const bars = [7, 12, 9, 15];
  return (
    <div className="relative h-full w-full">
      <span className={`absolute inset-1 rounded-full blur-lg ${theme.blob}`} />
      <div className="absolute bottom-0 left-0 flex items-end gap-1">
        {bars.map((h, i) => (
          <span
            key={i}
            className="w-2 rounded-t-sm bg-gradient-to-t from-violet-500 to-violet-300"
            style={{ height: `${h * 2}px` }}
          />
        ))}
      </div>
      <Chip icon="trend" className="right-0 top-0 h-8 w-8 text-violet-600" iconClassName="h-3.5 w-3.5" />
    </div>
  );
}

export const VISUALS = {
  design: VisualDesign,
  'video-editing': VisualVideo,
  'ai-tools': VisualAiTools,
  entertainment: VisualEntertainment,
  productivity: VisualProductivity,
  developer: VisualDeveloper,
  security: VisualSecurity,
  education: VisualEducation,
  business: VisualBusiness,
};
