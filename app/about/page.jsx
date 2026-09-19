import PageHeader from '@/components/PageHeader';
import Icon from '@/components/Icon';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import CTA from '@/components/CTA';
import Founders from '@/components/Founders';
import { LogoMark } from '@/components/Logo';
import { OG_IMAGE } from '@/lib/content';

const OG_TITLE = 'About | Fenbrix';
const OG_DESCRIPTION =
  'Fenbrix is a Digital Growth & Technology partner based in Noida, built to replace the four-vendor mess most businesses live with.';

export const metadata = {
  title: 'About',
  alternates: { canonical: '/about/' },
  description: OG_DESCRIPTION,
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: '/about/', images: [OG_IMAGE] },
  twitter: { card: 'summary_large_image', title: OG_TITLE, description: OG_DESCRIPTION, images: [OG_IMAGE] },
};

const VALUES = [
  ['Ownership', 'We behave like an extension of your team, not a vendor waiting for instructions.'],
  ['Transparency', 'Clear reporting, honest timelines, no inflated claims about what marketing can do.'],
  ['Craft', 'Content, design and code held to a professional bar — every single month.'],
  ['Systems thinking', 'Everything we build is repeatable and measurable, not one-off heroics.'],
  ['Long-term partnership', 'We would rather have ten clients for three years than fifty for three months.'],
];

const TEAM = [
  ['Founder', 'Technology direction, strategy and client relationships'],
  ['Social Media Manager', 'Calendars, publishing and community management'],
  ['Video Editor', 'Reels, short-form video and editing'],
  ['Graphic Designer', 'Creatives, brand assets and presentation design'],
  ['Performance Marketer', 'Meta & Google Ads, SEO and analytics'],
  ['Business Development', 'Outreach, discovery calls and proposals'],
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="We built Fenbrix because the four-vendor model is broken."
        body="A lean, senior team in Noida handling marketing and technology together — the way it should have been in the first place."
      />

      <section className="py-20 lg:py-24">
        <div className="container-x grid gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-20">
          <Reveal>
            <span className="eyebrow">Our position</span>
            <h2 className="h2 mt-4">Not a marketing agency.</h2>
            <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-navy/65">
              <p>
                Almost every agency in this market sells the same thing: posts, reels and ads. That is
                useful, but it is only the visible layer. Underneath, the businesses that actually grow
                have a website that converts, a CRM that catches every lead, and follow-up that happens
                whether or not somebody remembers to do it.
              </p>
              <p>
                Fenbrix exists to own both layers. We call ourselves a Digital Growth &amp; Technology
                Partner rather than a digital marketing agency, because the second half of that job is
                where most of the value sits — and where almost nobody local is set up to help.
              </p>
              <p>
                We are based in Noida and focused on Delhi NCR. That is deliberate. Being close enough
                to sit across the table from you is worth more than serving clients in ten cities badly.
              </p>
            </div>
          </Reveal>

          <Reveal direction="left" delay={0.1}>
            <div className="surface-dark relative overflow-hidden rounded-3xl p-9 text-white">
              <div className="pointer-events-none absolute -right-12 -top-12 h-48 w-48 animate-float rounded-full bg-teal-400/15 blur-3xl" />
              <div className="relative z-10">
                <LogoMark className="h-12 w-12" variant="white" id="about" />
                <p className="mt-7 text-xl font-extrabold leading-snug">
                  “We don&apos;t just market your business. We build and manage its complete digital
                  ecosystem.”
                </p>
                <div className="mt-8 space-y-4 border-t border-white/10 pt-7">
                  <div>
                    <h3 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal-400">Mission</h3>
                    <p className="mt-1.5 text-sm text-white/60">
                      Give growth-focused local businesses enterprise-grade marketing and technology
                      capability through one accountable partner.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-[11px] font-extrabold uppercase tracking-[0.16em] text-teal-400">Vision</h3>
                    <p className="mt-1.5 text-sm text-white/60">
                      To be the leading Digital Growth &amp; Technology Partner for small and mid-sized
                      businesses across Delhi NCR.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      <Founders />

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Values</span>
            <h2 className="h2 mt-4">What we hold ourselves to.</h2>
          </Reveal>

          <Stagger className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {VALUES.map(([t, d]) => (
              <StaggerItem key={t}>
                <div className="card h-full">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-teal-600/10 text-teal-600">
                    <Icon name="check" className="h-4 w-4" strokeWidth={2.6} />
                  </div>
                  <h3 className="mt-4 text-[15px] font-extrabold">{t}</h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-navy/55">{d}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">The team</span>
            <h2 className="h2 mt-4">Small, senior and in-house.</h2>
            <p className="lede mt-5">
              A lean core team covers every pillar. Photography, videography and specialist
              development are handled by vetted freelance partners when a project needs them.
            </p>
          </Reveal>

          <Stagger className="mt-11 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {TEAM.map(([role, desc]) => (
              <StaggerItem key={role}>
                <div className="card h-full">
                  <h3 className="text-[15px] font-extrabold">{role}</h3>
                  <p className="mt-1.5 text-sm text-navy/55">{desc}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      <CTA />
    </>
  );
}
