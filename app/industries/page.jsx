import Link from 'next/link';
import PageHeader from '@/components/PageHeader';
import Icon from '@/components/Icon';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import CTA from '@/components/CTA';
import { INDUSTRIES, OG_IMAGE } from '@/lib/content';

const OG_TITLE = 'Industries | Fenbrix';
const OG_DESCRIPTION =
  'Fenbrix works with restaurants, salons, clinics, real estate, coaching institutes, retail, D2C brands and professional services across Noida and Delhi NCR.';

export const metadata = {
  title: 'Industries',
  alternates: { canonical: '/industries/' },
  description: OG_DESCRIPTION,
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: '/industries/', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: OG_TITLE, description: OG_DESCRIPTION, images: [OG_IMAGE] },
};

const PLAYBOOK = {
  'Restaurants & Cafés': ['Food reels & photography', 'Google Business Profile', 'Zomato/Swiggy-adjacent campaigns', 'Offer & festival creatives'],
  'Salons & Beauty': ['Before/after content', 'Instagram booking funnel', 'WhatsApp appointment reminders', 'Membership & package promos'],
  'Real Estate': ['Project landing pages', 'Meta lead-gen campaigns', 'Instant WhatsApp follow-up', 'CRM to track site visits'],
  'Clinics & Healthcare': ['Doctor-led trust content', 'Local SEO & reviews', 'Appointment automation', 'Patient recall campaigns'],
  'Coaching Institutes': ['Admission campaign funnels', 'Student result creatives', 'Enquiry CRM & follow-up', 'Landing pages per batch'],
  'Local Retail': ['Local SEO & map ranking', 'Offer campaigns', 'WhatsApp broadcast lists', 'Catalogue creatives'],
  'D2C Brands': ['Performance marketing', 'Shopify/custom storefront', 'UGC & product content', 'Retention email flows'],
  'Professional Services': ['LinkedIn authority content', 'Lead-capture website', 'Google Ads for intent keywords', 'Proposal & CRM workflow'],
};

const SERVICE_LINKS = {
  'Restaurants & Cafés': ['content', 'Content production'],
  'Salons & Beauty': ['social-media', 'Social media management'],
  'Real Estate': ['marketing', 'Digital marketing'],
  'Clinics & Healthcare': ['websites', 'Website development'],
  'Coaching Institutes': ['automation', 'Business automation'],
  'Local Retail': ['marketing', 'Digital marketing'],
  'D2C Brands': ['marketing', 'Performance marketing'],
  'Professional Services': ['websites', 'Website development'],
};

export default function IndustriesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Industries"
        title="We know how these businesses actually get customers."
        body="Different industries need different content, different channels and different follow-up. Here is roughly where we start with each."
      />

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <Stagger className="grid gap-5 sm:grid-cols-2">
            {INDUSTRIES.map((ind) => (
              <StaggerItem key={ind.name}>
                <div className="card group h-full">
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                      <Icon name={ind.icon} className="h-5 w-5" />
                    </div>
                    <div>
                      <h2 className="text-lg font-extrabold">{ind.name}</h2>
                      <p className="mt-1.5 text-sm text-navy/55">{ind.need}</p>
                    </div>
                  </div>
                  <ul className="mt-6 grid gap-2 border-t border-line pt-5 sm:grid-cols-2">
                    {(PLAYBOOK[ind.name] || []).map((p) => (
                      <li key={p} className="flex gap-2 text-[13px] text-navy/65">
                        <Icon name="check" className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-600" strokeWidth={2.6} />
                        {p}
                      </li>
                    ))}
                  </ul>
                  <Link href={`/services/${SERVICE_LINKS[ind.name][0]}/`} className="mt-5 inline-flex items-center gap-2 text-sm font-extrabold text-teal-600 transition-colors hover:text-teal-500">
                    Explore {SERVICE_LINKS[ind.name][1]} <Icon name="arrow" className="h-4 w-4" />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </Stagger>

          <Reveal delay={0.1} className="mt-10">
            <p className="text-sm text-navy/50">
              We work with these sectors across Noida and Delhi NCR. Not on this list? We still likely fit — these are just the segments we focus on first. <Link href="/locations/noida/" className="font-bold text-teal-600 hover:text-teal-500">See how we support Noida businesses.</Link>
            </p>
          </Reveal>
        </div>
      </section>

      <CTA />
    </>
  );
}
