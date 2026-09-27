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
  // Lead with a JPEG crop of the delivered site (WebP previews are unreliable on
  // some social platforms); the Fenbrix brand card is the fallback.
  const { og } = study.images;
  const images = [{ url: og.src, width: og.width, height: og.height, alt: og.alt }, OG_IMAGE];
  return {
    title: study.metaTitle,
    description: study.metaDescription,
    alternates: { canonical: path },
    openGraph: { type: 'article', siteName: 'Fenbrix', title: study.ogTitle, description: study.ogDescription, url: path, images },
    twitter: { card: 'summary_large_image', title: study.ogTitle, description: study.ogDescription, images: [og.src] },
  };
}

export default function CaseStudyPage({ params }) {
  const index = CASE_STUDIES.findIndex((item) => item.slug === params.slug);
  if (index === -1) notFound();
  const study = CASE_STUDIES[index];
  // The following case study (wrapping to the first) — linked at the foot of the page.
  const next = CASE_STUDIES.length > 1 ? CASE_STUDIES[(index + 1) % CASE_STUDIES.length] : null;

  const url = `https://www.fenbrix.in/case-studies/${study.slug}/`;

  return (
    <>
      <JsonLd data={{ '@context': 'https://schema.org', '@graph': [
        {
          '@type': 'Article',
          headline: study.title,
          description: study.metaDescription,
          url,
          mainEntityOfPage: { '@type': 'WebPage', '@id': url },
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
      <CaseStudyDetail study={study} next={next} />
    </>
  );
}
