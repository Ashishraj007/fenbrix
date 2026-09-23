import JsonLd from '@/components/JsonLd';
import ToolPageLayout from '@/components/tools/ToolPageLayout';
import PasswordGeneratorTool from '@/components/tools/PasswordGeneratorTool';
import { getToolBySlug } from '@/lib/tools';
import { OG_IMAGE } from '@/lib/content';

const tool = getToolBySlug('password-generator');
const path = '/tools/password-generator/';
const ogTitle = `${tool.metaTitle} | Fenbrix`;

export const metadata = {
  title: tool.metaTitle,
  description: tool.metaDescription,
  alternates: { canonical: path },
  openGraph: { type: 'website', title: ogTitle, description: tool.metaDescription, url: path, images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: ogTitle, description: tool.metaDescription, images: [OG_IMAGE] },
};

export default function PasswordGeneratorPage() {
  const url = `https://www.fenbrix.in${path}`;
  const faqs = tool.faqs.map(([q, a]) => ({
    '@type': 'Question',
    name: q,
    acceptedAnswer: { '@type': 'Answer', text: a },
  }));

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'SoftwareApplication',
              name: tool.name,
              description: tool.metaDescription,
              url,
              applicationCategory: 'UtilityApplication',
              operatingSystem: 'Any',
              offers: { '@type': 'Offer', price: '0', priceCurrency: 'INR' },
              provider: { '@id': 'https://www.fenbrix.in/#organization' },
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fenbrix.in/' },
                { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://www.fenbrix.in/tools/' },
                { '@type': 'ListItem', position: 3, name: tool.name, item: url },
              ],
            },
            { '@type': 'FAQPage', mainEntity: faqs },
          ],
        }}
      />
      <ToolPageLayout tool={tool}>
        <PasswordGeneratorTool />
      </ToolPageLayout>
    </>
  );
}
