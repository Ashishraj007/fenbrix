import { notFound } from 'next/navigation';
import ServiceDetail from '@/components/ServiceDetail';
import JsonLd from '@/components/JsonLd';
import { SERVICES, SERVICE_DETAILS } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return SERVICES.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const service = SERVICES.find((item) => item.slug === params.slug);
  const detail = SERVICE_DETAILS[params.slug];

  if (!service || !detail) return {};

  const path = `/services/${service.slug}/`;
  const ogTitle = `${detail.metaTitle} | Fenbrix`;
  return {
    title: detail.metaTitle,
    description: detail.metaDescription,
    alternates: { canonical: path },
    openGraph: {
      title: ogTitle,
      description: detail.metaDescription,
      url: path,
    },
    twitter: {
      card: 'summary_large_image',
      title: ogTitle,
      description: detail.metaDescription,
    },
  };
}

export default function ServicePage({ params }) {
  const service = SERVICES.find((item) => item.slug === params.slug);
  const detail = SERVICE_DETAILS[params.slug];

  if (!service || !detail) notFound();

  const url = `https://fenbrix.in/services/${service.slug}/`;
  const faqs = detail.faqs.map(([name, text]) => ({ '@type': 'Question', name, acceptedAnswer: { '@type': 'Answer', text } }));

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [
        { '@type': 'Service', name: service.title, description: detail.metaDescription, url, provider: { '@id': 'https://fenbrix.in/#organization' }, areaServed: ['Noida', 'Delhi NCR'] },
        { '@type': 'BreadcrumbList', itemListElement: [{ '@type': 'ListItem', position: 1, name: 'Home', item: 'https://fenbrix.in/' }, { '@type': 'ListItem', position: 2, name: 'Services', item: 'https://fenbrix.in/services/' }, { '@type': 'ListItem', position: 3, name: service.title, item: url }] },
        { '@type': 'FAQPage', mainEntity: faqs },
      ] }} />
      <ServiceDetail service={service} detail={detail} />
    </>
  );
}
