import PageHeader from '@/components/PageHeader';
import Icon from '@/components/Icon';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';
import CTA from '@/components/CTA';
import { PROCESS } from '@/lib/content';

const OG_TITLE = 'Process | Fenbrix';
const OG_DESCRIPTION =
  'From discovery call to monthly review — the exact nine steps Fenbrix follows with every client.';

export const metadata = {
  title: 'Process',
  alternates: { canonical: '/process/' },
  description: OG_DESCRIPTION,
  openGraph: { title: OG_TITLE, description: OG_DESCRIPTION, url: '/process/' },
  twitter: { card: 'summary_large_image', title: OG_TITLE, description: OG_DESCRIPTION },
};

export default function ProcessPage() {
  return (
    <>
      <PageHeader
        eyebrow="Process"
        title="No mystery. Here is exactly how we work."
        body="The same nine steps run for every client, whether you are on a ₹15,000 retainer or building a CRM with us."
      />

      <section className="py-20 lg:py-24">
        <div className="container-x">
          <div className="relative">
            <div className="absolute left-[19px] top-2 hidden h-[calc(100%-2rem)] w-px bg-line sm:block" />

            <Stagger className="space-y-5" gap={0.07}>
              {PROCESS.map((p) => (
                <StaggerItem key={p.step}>
                  <div className="relative flex gap-6">
                    <div className="hidden sm:block">
                      <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-line bg-white text-[12px] font-extrabold text-teal-600 shadow-soft">
                        {p.step}
                      </div>
                    </div>
                    <div className="flex-1 rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-400 hover:-translate-y-0.5 hover:border-teal-400/45 hover:shadow-lift sm:p-7">
                      <span className="text-[12px] font-extrabold tracking-[0.1em] text-teal-600 sm:hidden">
                        {p.step}
                      </span>
                      <h2 className="h3 mt-1 sm:mt-0">{p.title}</h2>
                      <p className="mt-2.5 text-[15px] leading-relaxed text-navy/60">{p.body}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </Stagger>
          </div>
        </div>
      </section>

      <section className="bg-mist py-20 lg:py-24">
        <div className="container-x grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <span className="eyebrow">Behind the scenes</span>
            <h2 className="h2 mt-4">How we keep 15+ clients on track.</h2>
            <p className="lede mt-5">
              A small team can only serve a lot of clients well if the system is tight. Ours is
              deliberately simple.
            </p>
          </Reveal>

          <Stagger className="space-y-4">
            {[
              ['Weekly planning sprint', 'Content calendars and ad plans locked for the week ahead, across every client at once.'],
              ['One shared production board', 'Every deliverable tracked by client, status and due date. Nothing lives in someone\u2019s head.'],
              ['Daily 15-minute stand-up', 'Blockers, pending approvals and urgent requests surfaced before they become problems.'],
              ['Account health tracker', 'A red/amber/green status per client on delivery, communication and results — reviewed weekly.'],
            ].map(([t, d]) => (
              <StaggerItem key={t}>
                <div className="flex gap-4 rounded-2xl border border-line bg-white p-5 shadow-soft">
                  <Icon name="check" className="mt-0.5 h-5 w-5 shrink-0 text-teal-600" strokeWidth={2.4} />
                  <div>
                    <h3 className="text-[15px] font-extrabold">{t}</h3>
                    <p className="mt-1 text-sm text-navy/55">{d}</p>
                  </div>
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
