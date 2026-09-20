import { DIGITAL_PRODUCTS } from './content';

// Icon per category, drawn from the existing Icon.jsx set (see components/Icon.jsx).
const CATEGORY_ICONS = {
  Design: 'sparkle',
  'Video Editing': 'camera',
  'AI Tools': 'bolt',
  Entertainment: 'play',
  Productivity: 'target',
  Developer: 'code',
  Security: 'shield',
  Education: 'cap',
  Business: 'brief',
};

export function slugify(value) {
  return value
    .toLowerCase()
    .replace(/[()]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-+|-+$)/g, '');
}

// DIGITAL_PRODUCTS has one row per (name, duration) pair — e.g. "Jasper AI (Pro)"
// appears twice, once per duration. Rows that are genuinely different variants
// already have distinct names in the source data (e.g. "Murf AI (Shared)" vs
// "Murf AI (Private)"), so grouping by exact name is enough to consolidate
// duration options without merging anything that shouldn't be merged.
function buildCatalog() {
  const byName = new Map();
  const categoryOrder = [];

  for (const row of DIGITAL_PRODUCTS) {
    if (!categoryOrder.includes(row.category)) categoryOrder.push(row.category);

    if (!byName.has(row.name)) {
      byName.set(row.name, {
        name: row.name,
        slug: slugify(row.name),
        category: row.category,
        categorySlug: slugify(row.category),
        icon: CATEGORY_ICONS[row.category] || 'box',
        durations: [],
      });
    }
    const product = byName.get(row.name);
    if (!product.durations.includes(row.duration)) product.durations.push(row.duration);
  }

  const products = Array.from(byName.values());
  const categories = categoryOrder.map((name) => {
    const slug = slugify(name);
    return {
      name,
      slug,
      icon: CATEGORY_ICONS[name] || 'box',
      count: products.filter((p) => p.categorySlug === slug).length,
    };
  });

  return { products, categories };
}

const CATALOG = buildCatalog();

export function getAllProducts() {
  return CATALOG.products;
}

export function getCategories() {
  return CATALOG.categories;
}

export function getCategoryBySlug(slug) {
  return CATALOG.categories.find((c) => c.slug === slug);
}

export function getProductsByCategorySlug(slug) {
  return CATALOG.products.filter((p) => p.categorySlug === slug);
}
