import PageHeader from '@/components/PageHeader';
import DigitalProductExplorer from '@/components/DigitalProductExplorer';
import CTA from '@/components/CTA';
import { getAllProducts, getCategories } from '@/lib/digital-products';
import { OG_IMAGE } from '@/lib/content';

const OG_TITLE = 'Digital Products | Fenbrix';
const OG_DESCRIPTION =
  'Browse premium software, AI platforms, creative tools and developer resources — see available plans and connect with Fenbrix on WhatsApp for pricing.';

export const metadata = {
  title: 'Digital Products',
  alternates: { canonical: '/digital-products/' },
  description: OG_DESCRIPTION,
  openGraph: { type: 'website', title: OG_TITLE, description: OG_DESCRIPTION, url: '/digital-products/', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: OG_TITLE, description: OG_DESCRIPTION, images: [OG_IMAGE] },
};

export default function DigitalProductsPage() {
  const products = getAllProducts();
  const categories = getCategories();

  return (
    <>
      <PageHeader
        eyebrow="Digital Products"
        title="Premium digital tools for modern work."
        body={`Design software, AI platforms, developer tools and productivity apps — ${products.length} products across ${categories.length} categories. Browse the catalog, see the available plans, and connect with our team on WhatsApp for pricing and access.`}
      />

      <section className="py-16 lg:py-20">
        <div className="container-x">
          <DigitalProductExplorer products={products} categories={categories} />
        </div>
      </section>

      <CTA
        title="Looking for something that isn't listed?"
        body="Tell us the tool you need on WhatsApp — we regularly add new products to the catalog."
      />
    </>
  );
}
