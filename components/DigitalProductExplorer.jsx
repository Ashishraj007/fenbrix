'use client';

import { useMemo, useState } from 'react';
import Icon from './Icon';
import ProductCard from './ProductCard';

export default function DigitalProductExplorer({ products, categories, showCategoryFilter = true }) {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    return products.filter((p) => {
      const matchesQuery = !q || p.name.toLowerCase().includes(q);
      const matchesCategory = !showCategoryFilter || activeCategory === 'all' || p.categorySlug === activeCategory;
      return matchesQuery && matchesCategory;
    });
  }, [products, query, activeCategory, showCategoryFilter]);

  const hasFilters = query.trim() !== '' || (showCategoryFilter && activeCategory !== 'all');

  const clearFilters = () => {
    setQuery('');
    setActiveCategory('all');
  };

  return (
    <div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="relative w-full sm:max-w-sm">
          <Icon
            name="search"
            className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-navy/35"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search products…"
            aria-label="Search digital products"
            className="w-full rounded-xl border border-line bg-white py-3 pl-11 pr-4 text-sm text-navy placeholder:text-navy/35 transition-all duration-200 focus:border-teal-600 focus:outline-none focus:ring-2 focus:ring-teal-600/15"
          />
        </div>
        {hasFilters && (
          <button
            type="button"
            onClick={clearFilters}
            className="text-left text-[13px] font-bold text-teal-600 transition-colors hover:text-teal-700 sm:shrink-0"
          >
            Clear filters
          </button>
        )}
      </div>

      {showCategoryFilter && categories?.length > 0 && (
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActiveCategory('all')}
            aria-pressed={activeCategory === 'all'}
            className={`chip transition-colors duration-200 ${
              activeCategory === 'all' ? '!border-teal-600 !bg-teal-600/10 !text-teal-600' : ''
            }`}
          >
            All ({products.length})
          </button>
          {categories.map((c) => (
            <button
              key={c.slug}
              type="button"
              onClick={() => setActiveCategory(c.slug)}
              aria-pressed={activeCategory === c.slug}
              className={`chip transition-colors duration-200 ${
                activeCategory === c.slug ? '!border-teal-600 !bg-teal-600/10 !text-teal-600' : ''
              }`}
            >
              {c.name} ({c.count})
            </button>
          ))}
        </div>
      )}

      <p className="mt-6 text-[13px] font-semibold text-navy/45">
        {filtered.length} {filtered.length === 1 ? 'product' : 'products'}
      </p>

      {filtered.length > 0 ? (
        <div className="mt-4 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      ) : (
        <div className="mt-4 rounded-2xl border border-line bg-mist py-16 text-center">
          <p className="text-sm font-semibold text-navy/50">No products match your search.</p>
          <button type="button" onClick={clearFilters} className="btn-ghost mt-5">
            Clear filters
          </button>
        </div>
      )}
    </div>
  );
}
