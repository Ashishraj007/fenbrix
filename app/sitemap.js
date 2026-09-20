import { LOCATIONS, SERVICES } from '@/lib/content';

export const dynamic = 'force-static';

const BASE = 'https://www.fenbrix.in';

const routes = ['', '/services', '/industries', '/process', '/pricing', '/case-studies', '/about', '/contact'];

export default function sitemap() {
  return [...routes, ...SERVICES.map(({ slug }) => `/services/${slug}`), ...LOCATIONS.map(({ slug }) => `/locations/${slug}`)].map((r) => ({
    url: `${BASE}${r}/`,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: r === '' ? 1 : 0.8,
  }));
}
