import { LOCATIONS, SERVICES } from '@/lib/content';
import { getCategories } from '@/lib/digital-products';
import { TOOLS } from '@/lib/tools';

export const dynamic = 'force-static';

const BASE = 'https://www.fenbrix.in';

const routes = ['', '/services', '/industries', '/digital-products', '/tools', '/process', '/pricing', '/case-studies', '/about', '/contact'];

export default function sitemap() {
  return [
    ...routes,
    ...SERVICES.map(({ slug }) => `/services/${slug}`),
    ...LOCATIONS.map(({ slug }) => `/locations/${slug}`),
    ...getCategories().map(({ slug }) => `/digital-products/${slug}`),
    ...TOOLS.map(({ slug }) => `/tools/${slug}`),
  ].map((r) => ({
    url: `${BASE}${r}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.8,
  }));
}
