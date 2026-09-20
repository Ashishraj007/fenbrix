import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import LocationDetail from '@/components/LocationDetail';
import { LOCATIONS, SERVICES, SITE, OG_IMAGE } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const location = LOCATIONS.find((item) => item.slug === params.slug);
  if (!location) return {};
  const path = `/locations/${location.slug}/`;
  const ogTitle = `${location.metaTitle} | Fenbrix`;
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: path },
    openGraph: { type: 'website', title: ogTitle, description: location.metaDescription, url: path, images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title: ogTitle, description: location.metaDescription, images: [OG_IMAGE] },
  };
}

export default function LocationPage({ params }) {
  const location = LOCATIONS.find((item) => item.slug === params.slug);
  if (!location) notFound();
  const url = `https://www.fenbrix.in/locations/${location.slug}/`;
  const faqs = location.faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }));

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fenbrix.in/' }, { '@type': 'ListItem', position: 2, name: location.name, item: url }] },
        {
          '@type': 'LocalBusiness',
          '@id': 'https://www.fenbrix.in/#organization',
          name: SITE.name,
          url,
          email: SITE.email,
          telephone: SITE.phone,
          address: { '@type': 'PostalAddress', addressLocality: 'Noida', addressRegion: 'Uttar Pradesh', addressCountry: 'IN' },
          areaServed: [location.name, ...location.neighborhoods],
          serviceType: SERVICES.map((s) => s.title),
          priceRange: '₹15,000–₹1,50,000+',
        },
        { '@type': 'FAQPage', mainEntity: faqs },
      ] }} />
      <LocationDetail location={location} />
    </>
  );
}
