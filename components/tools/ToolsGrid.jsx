'use client';

import { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import Icon from '@/components/Icon';
import ToolCard from './ToolCard';

// Local fade-up variants for the grid. We intentionally do NOT reuse the
// shared Stagger/StaggerItem from components/Reveal.jsx here: those rely on
// whileInView + viewport={{ once: true }}, meant for static sections that
// reveal a single time on scroll. This grid's contents are re-filtered by
// category, so cards are removed and later re-added to the DOM — a
// StaggerItem remounting after the parent's "once" trigger has already fired
// would permanently stay at its hidden (opacity: 0) state, since nothing
// tells the already-revealed parent to reveal it again. Animating on
// `animate` (not `whileInView`) and remounting via `key={activeCategory}`
// below sidesteps that entirely: every category change gets its own fresh,
// guaranteed-to-play reveal.
//
// Search is deliberately handled differently: it toggles a plain CSS
// `hidden` class on already-mounted cards rather than adding/removing them
// from the array. That means search typing can never unmount/remount a
// card, so it can never resurrect the same stale-animation problem.
const gridVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.07 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

export default function ToolsGrid({ tools, categories }) {
  const [activeCategory, setActiveCategory] = useState('all');
  const [search, setSearch] = useState('');

  const categoryFiltered = useMemo(() => {
    if (!activeCategory || activeCategory === 'all') return tools;
    return tools.filter((tool) => tool.category === activeCategory);
  }, [tools, activeCategory]);

  const query = search.trim().toLowerCase();
  const visibleSlugs = useMemo(() => {
    if (!query) return null; // null = "no search active, show everything"
    return new Set(
      categoryFiltered
        .filter((tool) => tool.name.toLowerCase().includes(query) || tool.short.toLowerCase().includes(query))
        .map((tool) => tool.slug)
    );
  }, [categoryFiltered, query]);

  const visibleCount = visibleSlugs ? visibleSlugs.size : categoryFiltered.length;
  const hasResults = visibleCount > 0;

  const resetAll = () => {
    setActiveCategory('all');
    setSearch('');
  };

  return (
    <div>
      <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="-mx-1 flex gap-2 overflow-x-auto px-1 pb-1 scrollbar-hide lg:mx-0 lg:flex-wrap lg:overflow-visible lg:px-0 lg:pb-0">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            aria-pressed={activeCategory === 'all'}
            className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 ${
              activeCategory === 'all'
                ? 'border-teal-600 bg-teal-600 text-white shadow-soft'
                : 'border-line bg-white text-navy/65 hover:border-navy/20 hover:text-navy'
            }`}
          >
            All tools ({tools.length})
          </button>
          {categories.map((category) => {
            const count = tools.filter((tool) => tool.category === category).length;
            if (!count) return null;
            const active = activeCategory === category;
            return (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={active}
                className={`shrink-0 whitespace-nowrap rounded-full border px-4 py-2 text-sm font-bold transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-teal-400 focus-visible:ring-offset-2 ${
                  active
                    ? 'border-teal-600 bg-teal-600 text-white shadow-soft'
                    : 'border-line bg-white text-navy/65 hover:border-navy/20 hover:text-navy'
                }`}
              >
                {category} ({count})
              </button>
            );
          })}
        </div>

        <div className="flex items-center gap-3">
          <div className="relative w-full sm:w-64">
            <Icon
              name="search"
              className="pointer-events-none absolute left-3.5 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/35"
            />
            <label htmlFor="tools-search" className="sr-only">
              Search tools
            </label>
            <input
              id="tools-search"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search tools…"
              className="w-full rounded-full border border-line bg-white py-2.5 pl-10 pr-4 text-sm text-navy placeholder:text-navy/35 transition-all duration-200 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/15"
            />
          </div>
          <span className="hidden shrink-0 items-center gap-1.5 text-[12px] font-semibold text-navy/40 md:flex">
            <Icon name="sparkle" className="h-3.5 w-3.5 text-teal-500" />
            Find the right tool for your work
          </span>
        </div>
      </div>

      <motion.div
        key={activeCategory}
        initial="hidden"
        animate="show"
        variants={gridVariants}
        className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {categoryFiltered.map((tool) => (
          <motion.div
            key={tool.slug}
            variants={cardVariants}
            className={visibleSlugs && !visibleSlugs.has(tool.slug) ? 'hidden' : ''}
          >
            <ToolCard tool={tool} />
          </motion.div>
        ))}
      </motion.div>

      {!hasResults && (
        <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl border border-line bg-mist px-6 py-16 text-center">
          <Icon name="search" className="h-10 w-10 text-navy/25" strokeWidth={1.2} />
          {query ? (
            <p className="text-sm font-semibold text-navy/50">No tools match your search.</p>
          ) : (
            <p className="text-sm font-semibold text-navy/50">No tools available in this category yet.</p>
          )}
          <button type="button" onClick={resetAll} className="btn-ghost">
            View all tools
          </button>
        </div>
      )}
    </div>
  );
}
