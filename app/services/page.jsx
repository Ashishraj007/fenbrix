import CTA from '@/components/CTA';
import OurStack from '@/components/OurStack';
import ServicesShowcase from '@/components/ServicesShowcase';
import { OG_IMAGE } from '@/lib/content';

const OG_TITLE = 'Services | Fenbrix';
const OG_DESCRIPTION =
  'Social media, content production, digital marketing, websites, custom software and automation — all delivered by one team in Noida.';

export const metadata = {
  title: 'Services',
  alternates: { canonical: '/services/' },
  description: OG_DESCRIPTION,
  openGraph: { type: 'website', title: OG_TITLE, description: OG_DESCRIPTION, url: '/services/', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: OG_TITLE, description: OG_DESCRIPTION, images: [OG_IMAGE] },
};

export default function ServicesPage() {
  return (
    <>
      <ServicesShowcase />
      <OurStack />
      <CTA />
    </>
  );
}
