// Accent colors for the "Meet the Founder" section's expertise cards and
// floating badges. Kept as a components/ file (not lib/) so Tailwind's
// content scanner (app/**, components/**) actually sees these literal class
// strings — see components/tools/toolTheme.js for the same reasoning.
export const EXPERTISE_THEME = {
  blue: {
    iconBg: 'bg-gradient-to-br from-blue-500 to-blue-600',
    border: 'group-hover:border-blue-400/40',
    glow: 'bg-blue-400/20',
  },
  purple: {
    iconBg: 'bg-gradient-to-br from-purple-500 to-purple-600',
    border: 'group-hover:border-purple-400/40',
    glow: 'bg-purple-400/20',
  },
  emerald: {
    iconBg: 'bg-gradient-to-br from-emerald-500 to-emerald-600',
    border: 'group-hover:border-emerald-400/40',
    glow: 'bg-emerald-400/20',
  },
  rose: {
    iconBg: 'bg-gradient-to-br from-rose-500 to-pink-600',
    border: 'group-hover:border-rose-400/40',
    glow: 'bg-rose-400/20',
  },
  orange: {
    iconBg: 'bg-gradient-to-br from-orange-500 to-amber-600',
    border: 'group-hover:border-orange-400/40',
    glow: 'bg-orange-400/20',
  },
  cyan: {
    iconBg: 'bg-gradient-to-br from-cyan-500 to-sky-600',
    border: 'group-hover:border-cyan-400/40',
    glow: 'bg-cyan-400/20',
  },
};

export function getExpertiseTheme(color) {
  return EXPERTISE_THEME[color] || EXPERTISE_THEME.blue;
}
