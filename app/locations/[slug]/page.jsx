import { notFound } from 'next/navigation';
import JsonLd from '@/components/JsonLd';
import LocationDetail from '@/components/LocationDetail';
import { LOCATIONS } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return LOCATIONS.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const location = LOCATIONS.find((item) => item.slug === params.slug);
  if (!location) return {};
  const path = `/locations/${location.slug}/`;
  return {
    title: location.metaTitle,
    description: location.metaDescription,
    alternates: { canonical: path },
    openGraph: { title: `${location.metaTitle} | Fenbrix`, description: location.metaDescription, url: path },
  };
}

export default function LocationPage({ params }) {
  const location = LOCATIONS.find((item) => item.slug === params.slug);
  if (!location) notFound();
  const url = `https://fenbrix.in/locations/${location.slug}/`;
  const faqs = location.faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }));

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fenbrix.in/' }, { '@type': 'ListItem', position: 2, name: location.name, item: url }] },
        { '@type': 'FAQPage', mainEntity: faqs },
      ] }} />
      <LocationDetail location={location} />
    </>
  );
}
