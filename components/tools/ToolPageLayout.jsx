import Link from 'next/link';
import Icon from '@/components/Icon';
import Faq from '@/components/Faq';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import CTA from '@/components/CTA';
import ToolCard from './ToolCard';
import { getAccentTheme } from './toolTheme';
import { getRelatedTools } from '@/lib/tools';

export default function ToolPageLayout({ tool, children }) {
  const theme = getAccentTheme(tool.accent);
  const relatedTools = getRelatedTools(tool, 2);

  return (
    <>
      <section className="surface-dark relative overflow-hidden">
        <div className="pointer-events-none absolute -right-24 -top-20 h-80 w-80 animate-float rounded-full bg-teal-400/10 blur-3xl" />
        <div className="container-x relative z-10 py-14 lg:py-20">
          <nav aria-label="Breadcrumb" className="mb-6 flex flex-wrap items-center gap-1.5 text-[13px] text-white/45">
            <Link href="/" className="link-underline hover:text-white">Home</Link>
            <Icon name="chevron" className="h-3 w-3 -rotate-90" />
            <Link href="/tools/" className="link-underline hover:text-white">Free Tools</Link>
            <Icon name="chevron" className="h-3 w-3 -rotate-90" />
            <span className="text-white/70">{tool.name}</span>
          </nav>
          <Reveal className="flex items-start gap-4">
            <div className={`hidden h-14 w-14 shrink-0 items-center justify-center rounded-2xl text-white shadow-lift sm:flex ${theme.iconBg}`}>
              <Icon name={tool.icon} className="h-6 w-6" />
            </div>
            <div>
              <span className={`inline-flex items-center rounded-full border px-3 py-1 text-[11px] font-extrabold ${theme.badgeBg} ${theme.badgeText} ${theme.badgeBorder}`}>
                {tool.category} Tool
              </span>
              <h1 className="h1 mt-4 max-w-2xl text-white">{tool.hero}</h1>
              <p className="mt-5 max-w-2xl text-base leading-relaxed text-white/65 sm:text-lg">{tool.intro}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* the interactive tool itself */}
      <section className="py-12 lg:py-16">
        <div className="container-x">
          <Reveal>{children}</Reveal>

          {tool.trustPoints?.length > 0 && (
            <Reveal delay={0.08} className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-3 rounded-2xl border border-line bg-mist px-5 py-4">
              {tool.trustPoints.map((point) => (
                <span key={point} className="flex items-center gap-2 text-[13px] font-semibold text-navy/65">
                  <Icon name="check" className="h-3.5 w-3.5 shrink-0 text-teal-600" strokeWidth={3} />
                  {point}
                </span>
              ))}
            </Reveal>
          )}
        </div>
      </section>

      {/* how to use */}
      <section className="bg-mist py-16 lg:py-20">
        <div className="container-x">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">How it works</span>
            <h2 className="h2 mt-4">Use it in three simple steps.</h2>
          </Reveal>
          <Stagger className="mt-11 grid gap-5 sm:grid-cols-3">
            {tool.howTo.map(([title, description], index) => (
              <StaggerItem key={title}>
                <div className="card h-full">
                  <span className="text-[13px] font-extrabold tracking-[0.1em] text-teal-600">0{index + 1}</span>
                  <h3 className="mt-3 text-[16px] font-extrabold">{title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-navy/55">{description}</p>
                </div>
              </StaggerItem>
            ))}
          </Stagger>
        </div>
      </section>

      {/* key features */}
      <section className="py-16 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <Reveal className="max-w-2xl">
            <span className="eyebrow">Key features</span>
            <h2 className="h2 mt-4">Built to be fast, private and free.</h2>
            <p className="lede mt-5">
              Every Fenbrix tool runs fully in your browser — nothing you enter is uploaded or stored
              on our servers.
            </p>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="grid gap-3 sm:grid-cols-2">
              {tool.features.map((feature) => (
                <div key={feature} className="flex gap-3 rounded-xl border border-line bg-white p-4 shadow-soft">
                  <Icon name="check" className="mt-0.5 h-4 w-4 shrink-0 text-teal-600" strokeWidth={2.6} />
                  <span className="text-sm font-semibold text-navy/75">{feature}</span>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* why use this tool */}
      {tool.whyUse && (
        <section className="bg-mist py-16 lg:py-20">
          <div className="container-x">
            <Reveal className="max-w-3xl">
              <span className="eyebrow">Why this tool</span>
              <h2 className="h2 mt-4">{tool.whyUse.heading}</h2>
              <div className="lede mt-6 space-y-4">
                {tool.whyUse.paragraphs.map((p) => (
                  <p key={p}>{p}</p>
                ))}
              </div>
            </Reveal>
          </div>
        </section>
      )}

      {/* faq */}
      <section className="py-16 lg:py-20">
        <div className="container-x grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-16">
          <Reveal>
            <span className="eyebrow">Questions</span>
            <h2 className="h2 mt-4">Things people ask about this tool.</h2>
          </Reveal>
          <Reveal delay={0.1}>
            <Faq items={tool.faqs.map(([q, a]) => ({ q, a }))} />
          </Reveal>
        </div>
      </section>

      {/* related tools */}
      {relatedTools.length > 0 && (
        <section className="bg-mist py-16 lg:py-20">
          <div className="container-x">
            <Reveal className="max-w-2xl">
              <span className="eyebrow">Related tools</span>
              <h2 className="h2 mt-4">You might also find these useful.</h2>
            </Reveal>
            <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {relatedTools.map((related) => (
                <StaggerItem key={related.slug}>
                  <ToolCard tool={related} />
                </StaggerItem>
              ))}
              <StaggerItem>
                <Link
                  href="/tools/"
                  className="card group flex h-full flex-col items-center justify-center gap-3 text-center"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-navy text-teal-400 transition-colors group-hover:bg-teal-600 group-hover:text-white">
                    <Icon name="arrow" className="h-5 w-5" />
                  </span>
                  <span className="text-[15px] font-extrabold text-navy">View all free tools</span>
                </Link>
              </StaggerItem>
            </Stagger>
          </div>
        </section>
      )}

      <CTA
        title="Need more than a free tool?"
        body="Fenbrix helps businesses build websites, digital products and technology solutions."
        ctaLabel="Talk to Fenbrix"
      />
    </>
  );
}
