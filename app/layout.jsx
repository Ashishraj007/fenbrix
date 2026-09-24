import localFont from 'next/font/local';
import { GoogleAnalytics } from '@next/third-parties/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import WhatsAppFab from '@/components/WhatsAppFab';
import JsonLd from '@/components/JsonLd';
import { SITE, FOUNDERS, OG_IMAGE } from '@/lib/content';

// Manrope is self-hosted (SIL Open Font License) — no external request at runtime.
const manrope = localFont({
  src: './fonts/Manrope-Variable.woff2',
  weight: '200 800',
  style: 'normal',
  variable: '--font-manrope',
  display: 'swap',
});

export const metadata = {
  metadataBase: new URL('https://www.fenbrix.in'),
  title: {
    default: 'Fenbrix — One Partner. Your Entire Digital Business.',
    template: '%s | Fenbrix',
  },
  description:
    'Fenbrix is a Digital Growth & Technology agency in Noida, helping businesses across Delhi NCR and Gurugram with marketing, websites, software and automation.',
  keywords: [
    'digital marketing agency Noida',
    'social media agency Noida',
    'website development Noida',
    'Delhi NCR digital agency',
    'CRM development',
    'WhatsApp automation',
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  openGraph: {
    title: 'Fenbrix — One Partner. Your Entire Digital Business.',
    description:
      'Marketing, content, websites, software and automation under one roof. Based in Noida, serving Delhi NCR and Gurugram.',
    url: 'https://www.fenbrix.in',
    siteName: 'Fenbrix',
    locale: 'en_IN',
    type: 'website',
    images: [OG_IMAGE],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Fenbrix — One Partner. Your Entire Digital Business.',
    description:
      'Marketing, content, websites, software and automation under one roof. Based in Noida, serving Delhi NCR and Gurugram.',
    images: [OG_IMAGE],
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/logo/favicon.svg', type: 'image/svg+xml' },
    ],
    apple: '/logo/icon-primary-512.png',
  },
};

export const viewport = {
  themeColor: '#0B2436',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${manrope.variable} no-js`}>
      <head>
        <script
          src="https://analytics.ahrefs.com/analytics.js"
          data-key="yigK1I0izeA9q75SRNzPJg"
          async
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `document.documentElement.classList.remove('no-js');`,
          }}
        />
      </head>
      <body className="font-sans">
        <JsonLd data={{
          '@context': 'https://schema.org',
          '@graph': [
            {
              '@type': 'Organization',
              '@id': 'https://www.fenbrix.in/#organization',
              name: SITE.name,
              url: 'https://www.fenbrix.in/',
              logo: 'https://www.fenbrix.in/logo/icon-primary-512.png',
              description: 'Fenbrix is a Digital Growth & Technology agency serving businesses across Noida and Delhi NCR.',
              email: SITE.email,
              telephone: SITE.phone,
              areaServed: ['Noida', 'Delhi NCR', 'Delhi', 'Gurugram', 'Greater Noida', 'Ghaziabad'],
              founder: {
                '@type': 'Person',
                name: FOUNDERS[0].name,
                jobTitle: FOUNDERS[0].title,
                url: 'https://www.fenbrix.in/about/',
                sameAs: [FOUNDERS[0].instagram, FOUNDERS[0].linkedin],
              },
            },
            {
              '@type': 'WebSite',
              '@id': 'https://www.fenbrix.in/#website',
              url: 'https://www.fenbrix.in/',
              name: SITE.name,
              publisher: { '@id': 'https://www.fenbrix.in/#organization' },
            },
          ],
        }} />
        <Navbar />
        <main className="pt-[72px]">{children}</main>
        <Footer />
        <WhatsAppFab />
      </body>
      <GoogleAnalytics gaId="G-V6F4XDT8FB" />
    </html>
  );
}
