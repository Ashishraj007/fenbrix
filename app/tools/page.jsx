import Link from 'next/link';
import ToolsHero from '@/components/tools/ToolsHero';
import ToolsGrid from '@/components/tools/ToolsGrid';
import WhyToolsSection from '@/components/tools/WhyToolsSection';
import CTA from '@/components/CTA';
import Faq from '@/components/Faq';
import Reveal from '@/components/Reveal';
import JsonLd from '@/components/JsonLd';
import { TOOLS, TOOL_CATEGORIES } from '@/lib/tools';
import { OG_IMAGE } from '@/lib/content';

const OG_TITLE = 'Free Online Tools for Business & Developers | Fenbrix';
const OG_DESCRIPTION =
  'Use Fenbrix free online tools including QR code generator, GST calculator, image compressor, JSON formatter, WhatsApp link generator and password generator.';

export const metadata = {
  title: 'Free Online Tools for Business & Developers',
  alternates: { canonical: '/tools/' },
  description: OG_DESCRIPTION,
  openGraph: { type: 'website', title: OG_TITLE, description: OG_DESCRIPTION, url: '/tools/', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: OG_TITLE, description: OG_DESCRIPTION, images: [OG_IMAGE] },
};

const TOOLS_FAQS = [
  {
    q: 'Are Fenbrix tools free to use?',
    a: 'Yes. Every tool on this page is free, with no usage limits, no watermarks and no hidden premium tier.',
  },
  {
    q: 'Do I need to create an account?',
    a: 'No. None of these tools require sign-up or login — open the page and start using the tool immediately.',
  },
  {
    q: 'Are these tools safe to use?',
    a: 'Yes. Each tool processes your input locally in your browser rather than sending it to a server, which is generally safer for sensitive content like passwords, images or business data.',
  },
  {
    q: 'Can I use Fenbrix tools on mobile?',
    a: 'Yes. Every tool is built to work on mobile browsers as well as desktop, though tasks like image compression can feel faster on a larger device.',
  },
  {
    q: 'Do these tools upload my files?',
    a: "No. Image compression, JSON formatting and password generation all run entirely on your device using your browser's own processing — files and text are never uploaded to Fenbrix or any third party.",
  },
  {
    q: 'Which tools are useful for developers?',
    a: 'The JSON Formatter & Validator and the Password Generator are the two most directly useful for developers, though the QR Code Generator is often used for quickly testing links too.',
  },
  {
    q: 'Which tools are useful for businesses?',
    a: 'The GST Calculator, WhatsApp Link Generator and QR Code Generator are built with everyday business and marketing tasks in mind.',
  },
];

export default function ToolsPage() {
  const toolListItems = TOOLS.map((tool, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    url: `https://www.fenbrix.in/tools/${tool.slug}/`,
    name: tool.name,
  }));

  const faqItems = TOOLS_FAQS.map(({ q, a }) => ({
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
              '@type': 'WebPage',
              '@id': 'https://www.fenbrix.in/tools/#webpage',
              name: 'Free Online Tools for Business & Developers',
              description: OG_DESCRIPTION,
              url: 'https://www.fenbrix.in/tools/',
              isPartOf: { '@id': 'https://www.fenbrix.in/#website' },
            },
            {
              '@type': 'ItemList',
              itemListElement: toolListItems,
            },
            {
              '@type': 'BreadcrumbList',
              itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Home', item: 'https://www.fenbrix.in/' },
                { '@type': 'ListItem', position: 2, name: 'Free Tools', item: 'https://www.fenbrix.in/tools/' },
              ],
            },
            { '@type': 'FAQPage', mainEntity: faqItems },
          ],
        }}
      />

      <ToolsHero />

      <section className="py-16 lg:py-20">
        <div className="container-x">
          <ToolsGrid tools={TOOLS} categories={TOOL_CATEGORIES} />
        </div>
      </section>

      <WhyToolsSection />

      {/* SEO content */}
      <section className="py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-3xl">
            <span className="eyebrow">Free Tools</span>
            <h2 className="h2 mt-4">Free Online Tools for Business, Marketing &amp; Developers</h2>
            <div className="lede mt-6 space-y-5">
              <p>
                Most everyday digital tasks don&apos;t need a dedicated app or a paid subscription — they
                just need a tool that works quickly, without friction. Fenbrix built this collection of
                free online tools to cover exactly that gap: generating a QR code for a flyer, checking a
                GST calculation before sending a quote, shrinking a photo before it&apos;s emailed, tidying
                up a JSON response, building a WhatsApp link for a landing page, or generating a password
                that won&apos;t get guessed. Each tool runs entirely in your browser, so there is nothing to
                install, no account to create, and no waiting on a server somewhere else to process your
                request.
              </p>
            </div>
          </Reveal>

          <div className="mt-12 grid gap-10 lg:grid-cols-3 lg:gap-8">
            <Reveal delay={0.05}>
              <h3 className="h3">Business &amp; Marketing Tools</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                Small business owners and marketers juggle a lot of small, repetitive tasks — pricing a
                quote correctly, sharing a WhatsApp number customers can message with one tap, or putting
                a QR code on a poster that links straight to a menu or offer. The <Link href="/tools/gst-calculator/" className="link-underline font-semibold text-teal-600">GST Calculator</Link>{' '}
                handles both adding and removing GST at the standard Indian rates — 5%, 12%, 18% or 28% —
                or a custom percentage, useful when a quoted price needs to be broken down for a customer
                or checked against an invoice. The{' '}
                <Link href="/tools/whatsapp-link-generator/" className="link-underline font-semibold text-teal-600">
                  WhatsApp Link Generator
                </Link>{' '}
                turns a phone number and a message into a single shareable link for websites, Instagram
                bios and printed materials, and the{' '}
                <Link href="/tools/qr-generator/" className="link-underline font-semibold text-teal-600">
                  QR Code Generator
                </Link>{' '}
                complements both by turning any link into a scannable code for offline marketing.
              </p>
            </Reveal>
            <Reveal delay={0.1}>
              <h3 className="h3">Developer Tools</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                Developers spend a surprising amount of time reformatting data by hand. The{' '}
                <Link href="/tools/json-formatter/" className="link-underline font-semibold text-teal-600">
                  JSON Formatter &amp; Validator
                </Link>{' '}
                turns minified API responses or config files into readable, indented JSON, or compresses
                readable JSON back down for production use — and when something is broken, it points to
                the exact position where parsing failed instead of a vague error. The{' '}
                <Link href="/tools/password-generator/" className="link-underline font-semibold text-teal-600">
                  Password Generator
                </Link>{' '}
                is also useful for setting up test accounts, API keys or temporary credentials that need
                to be genuinely random rather than typed out by hand.
              </p>
            </Reveal>
            <Reveal delay={0.15}>
              <h3 className="h3">Browser-Based Utility Tools</h3>
              <p className="mt-3 text-sm leading-relaxed text-navy/60">
                Some tasks are simple in principle but awkward in practice — like compressing a photo
                before uploading it somewhere with a strict file-size limit, or generating a password
                that isn&apos;t a variation of one you&apos;ve used before. The{' '}
                <Link href="/tools/image-compressor/" className="link-underline font-semibold text-teal-600">
                  Image Compressor
                </Link>{' '}
                reduces JPG, PNG and WebP file sizes directly in your browser using the Canvas API, so the
                image itself is never uploaded anywhere before you choose to send it. The Password
                Generator uses the Web Crypto API to produce genuinely random passwords, with control over
                length and character types. Both are built the same way as every tool on this page: fast
                to open, free to use, and designed to run locally rather than depend on a server
                round-trip for something that doesn&apos;t need one.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.2} className="mt-10">
            <p className="text-sm leading-relaxed text-navy/55">
              If your business needs something more involved than a free utility — a proper website, an
              internal tool or an automated workflow — that is exactly the kind of work Fenbrix builds day
              to day.{' '}
              <Link href="/services/" className="link-underline font-semibold text-teal-600">
                Take a look at our services
              </Link>{' '}
              or{' '}
              <Link href="/contact/" className="link-underline font-semibold text-teal-600">
                get in touch
              </Link>{' '}
              to talk through what you need.
            </p>
          </Reveal>
        </div>
      </section>

      {/* faq */}
      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="h2 mt-4">Frequently asked questions.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Faq items={TOOLS_FAQS} />
          </Reveal>
        </div>
      </section>

      <CTA
        title="Need something built for your business?"
        body="These tools are free for everyday use. If your business needs a custom website, software or automation, Fenbrix can scope and build that too."
        ctaLabel="Talk to Fenbrix"
      />
    </>
  );
}
