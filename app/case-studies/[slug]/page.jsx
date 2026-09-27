import { notFound } from 'next/navigation';
import CaseStudyDetail from '@/components/CaseStudyDetail';
import JsonLd from '@/components/JsonLd';
import { CASE_STUDIES, OG_IMAGE } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return CASE_STUDIES.map(({ slug }) => ({ slug }));
}

export function generateMetadata({ params }) {
  const study = CASE_STUDIES.find((item) => item.slug === params.slug);
  if (!study) return {};

  const path = `/case-studies/${study.slug}/`;
  const ogTitle = `${study.metaTitle} | Fenbrix`;
  // Lead with a JPEG crop of the delivered site (WebP previews are unreliable on
  // some social platforms); the Fenbrix brand card is the fallback.
  const { og } = study.images;
  const images = [{ url: og.src, width: og.width, height: og.height, alt: og.alt }, OG_IMAGE];
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: path },
    openGraph: { type: 'article', title: ogTitle, description: study.metaDescription, url: path, images },
    twitter: { card: 'summary_large_image', title: ogTitle, description: study.metaDescription, images: [og.src] },
  };
}

export default function CaseStudyPage({ params }) {
  const study = CASE_STUDIES.find((item) => item.slug === params.slug);
  if (!study) notFound();

  const url = `https://www.fenbrix.in/case-studies/${study.slug}/`;

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [
        {
          '@type': 'Article',
          headline: study.title,
          description: study.metaDescription,
          url,
          image: `https://www.fenbrix.in${study.images.og.src}`,
          author: { '@id': 'https://www.fenbrix.in/#organization' },
          publisher: { '@id': 'https://www.fenbrix.in/#organization' },
          about: { '@type': 'Organization', name: study.client, url: study.url },
        },
        { '@type': 'BreadcrumbList', itemListElement: [
          { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fenbrix.in/' },
          { '@type': 'ListItem', position: 2, name: 'Case Studies', item: 'https://www.fenbrix.in/case-studies/' },
          { '@type': 'ListItem', position: 3, name: study.client, item: url },
        ] },
      ] }} />
      <CaseStudyDetail study={study} />
    </>
  );
}
