import { notFound } from 'next/navigation';
import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import DigitalProductExplorer from '@/components/DigitalProductExplorer';
import CTA from '@/components/CTA';
import JsonLd from '@/components/JsonLd';
import { getCategories, getCategoryBySlug, getProductsByCategorySlug } from '@/lib/digital-products';
import { OG_IMAGE } from '@/lib/content';

export const dynamicParams = false;

export function generateStaticParams() {
  return getCategories().map(({ slug }) => ({ category: slug }));
}

export function generateMetadata({ params }) {
  const category = getCategoryBySlug(params.category);
  if (!category) return {};

  const path = `/digital-products/${category.slug}/`;
  const ogTitle = `${category.name} | Fenbrix Digital Products`;
  const description = `Browse ${category.count} ${category.name.toLowerCase()} ${
    category.count === 1 ? 'product' : 'products'
  } available through Fenbrix — see available plans and connect on WhatsApp for pricing.`;

  return {
    title: `${category.name} — Digital Products`,
    description,
    alternates: { canonical: path },
    openGraph: { type: 'website', title: ogTitle, description, url: path, images: [OG_IMAGE] },
    twitter: { card: 'summary_large_image', title: ogTitle, description, images: [OG_IMAGE] },
  };
}

export default function DigitalProductCategoryPage({ params }) {
  const category = getCategoryBySlug(params.category);
  if (!category) notFound();

  const products = getProductsByCategorySlug(category.slug);
  const otherCategories = getCategories().filter((c) => c.slug !== category.slug);
  const url = `https://www.fenbrix.in/digital-products/${category.slug}/`;

  return (
    <>
      <JsonLd
        data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fenbrix.in/' },
                { '@type': 'ListItem', position: 2, name: 'Digital Products', item: 'https://www.fenbrix.in/digital-products/' },
                { '@type': 'ListItem', position: 3, name: category.name, item: url },
              ],
            },
            {
              '@type': 'ItemList',
              itemListElement: products.map((p, i) => ({
                '@type': 'ListItem',
                position: i + 1,
                name: p.name,
              })),
            },
          ],
        }}
      />

      <PageHeader
        eyebrow="Digital Products"
        title={category.name}
        body={`${category.count} ${
          category.count === 1 ? 'product' : 'products'
        } available in this category. Browse the options below and connect with us on WhatsApp for pricing.`}
      />

      <section className="py-16 lg:py-20">
        <div className="container-x">
          <nav aria-label="Breadcrumb" className="mb-8 flex items-center gap-2 text-[13px] font-semibold text-navy/45">
            <Link href="/digital-products/" className="transition-colors hover:text-teal-600">
              Digital Products
            </Link>
            <span aria-hidden="true">/</span>
            <span className="text-navy/70">{category.name}</span>
          </nav>

          <DigitalProductExplorer products={products} showCategoryFilter={false} />

          {otherCategories.length > 0 && (
            <div className="mt-10 border-t border-line pt-6">
              <p className="eyebrow">Browse other categories</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {otherCategories.map((c) => (
                  <Link
                    key={c.slug}
                    href={`/digital-products/${c.slug}/`}
                    className="chip transition-colors hover:border-teal-600 hover:text-teal-600"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>

      <CTA
        title={`Need help choosing a ${category.name.toLowerCase()} tool?`}
        body="Tell us what you're trying to get done and we'll point you to the right option on WhatsApp."
      />
    </>
  );
}
