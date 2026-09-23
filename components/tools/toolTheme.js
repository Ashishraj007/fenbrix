// Per-tool accent colors for the Free Tools section (icon tiles, category
// badges, hover glow). Kept as a components/ file rather than under lib/ so
// Tailwind's content scanner (app/**, components/**) actually sees these
// literal class strings — lib/**/*.js is not scanned, so classes placed
// there would silently get purged from the production build.
export const ACCENT_THEME = {
  emerald: {
    iconBg: 'bg-emerald-500',
    badgeBg: 'bg-emerald-50',
    badgeText: 'text-emerald-700',
    badgeBorder: 'border-emerald-200',
    ring: 'group-hover:border-emerald-300',
    glow: 'bg-emerald-400/20',
  },
  orange: {
    iconBg: 'bg-orange-500',
    badgeBg: 'bg-orange-50',
    badgeText: 'text-orange-700',
    badgeBorder: 'border-orange-200',
    ring: 'group-hover:border-orange-300',
    glow: 'bg-orange-400/20',
  },
  blue: {
    iconBg: 'bg-blue-500',
    badgeBg: 'bg-blue-50',
    badgeText: 'text-blue-700',
    badgeBorder: 'border-blue-200',
    ring: 'group-hover:border-blue-300',
    glow: 'bg-blue-400/20',
  },
  purple: {
    iconBg: 'bg-purple-500',
    badgeBg: 'bg-purple-50',
    badgeText: 'text-purple-700',
    badgeBorder: 'border-purple-200',
    ring: 'group-hover:border-purple-300',
    glow: 'bg-purple-400/20',
  },
  green: {
    iconBg: 'bg-green-500',
    badgeBg: 'bg-green-50',
    badgeText: 'text-green-700',
    badgeBorder: 'border-green-200',
    ring: 'group-hover:border-green-300',
    glow: 'bg-green-400/20',
  },
  rose: {
    iconBg: 'bg-rose-500',
    badgeBg: 'bg-rose-50',
    badgeText: 'text-rose-700',
    badgeBorder: 'border-rose-200',
    ring: 'group-hover:border-rose-300',
    glow: 'bg-rose-400/20',
  },
};

export function getAccentTheme(accent) {
  return ACCENT_THEME[accent] || ACCENT_THEME.emerald;
}
