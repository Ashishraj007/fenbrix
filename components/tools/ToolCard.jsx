import Link from 'next/link';
import Icon from '@/components/Icon';
import { getAccentTheme } from './toolTheme';

export default function ToolCard({ tool }) {
  const theme = getAccentTheme(tool.accent);

  return (
    <Link
      href={`/tools/${tool.slug}/`}
      className={`card group relative flex h-full flex-col overflow-hidden transition-all duration-300 hover:-translate-y-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 ${theme.ring}`}
    >
      <span
        aria-hidden="true"
        className={`pointer-events-none absolute -right-10 -top-10 h-32 w-32 rounded-full blur-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100 ${theme.glow}`}
      />

      <div className="relative flex items-start justify-between gap-3">
        <div
          className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-white shadow-soft transition-transform duration-300 group-hover:scale-105 ${theme.iconBg}`}
        >
          <Icon name={tool.icon} className="h-5 w-5" />
        </div>
        <span
          className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-extrabold ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}
        >
          {tool.category}
        </span>
      </div>

      <h3 className="relative mt-5 text-[17px] font-extrabold leading-snug text-navy">{tool.name}</h3>
      <p className="relative mt-2 flex-1 text-sm leading-relaxed text-navy/60">{tool.short}</p>

      {tool.highlights?.length > 0 && (
        <div className="relative mt-4 flex flex-wrap gap-2">
          {tool.highlights.map((h) => (
            <span
              key={h}
              className="inline-flex items-center gap-1 rounded-full border border-line bg-mist px-2.5 py-1 text-[11px] font-bold text-navy/60"
            >
              <Icon name="check" className="h-3 w-3 text-teal-600" strokeWidth={3} />
              {h}
            </span>
          ))}
        </div>
      )}

      <div className="relative mt-6 flex items-center gap-2.5">
        <span className="btn-primary flex-1 justify-center text-[13px]">
          Use Tool
          <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
        <span
          aria-hidden="true"
          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line text-navy/40 transition-all duration-300 group-hover:border-navy/25 group-hover:text-navy"
        >
          <Icon name="arrow" className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </span>
      </div>
    </Link>
  );
}
