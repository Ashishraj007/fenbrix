import Icon from '@/components/Icon';
import Reveal, { Stagger, StaggerItem } from '@/components/Reveal';

const POINTS = [
  {
    icon: 'lock',
    title: 'Privacy-first',
    body: 'Tools like image compression, JSON formatting and password generation process your data directly in your browser — nothing is uploaded.',
  },
  {
    icon: 'bolt',
    title: 'Fast',
    body: 'No unnecessary sign-ups or complicated workflows. Open a tool and get a result in seconds.',
  },
  {
    icon: 'check',
    title: 'Free to use',
    body: 'Access useful digital utilities without creating an account or hitting a paywall.',
  },
  {
    icon: 'brief',
    title: 'Built by Fenbrix',
    body: 'Practical digital tools designed around real business, marketing and technology workflows.',
  },
];

export default function WhyToolsSection() {
  return (
    <section className="bg-mist py-20 lg:py-24">
      <div className="container-x">
        <Reveal className="max-w-2xl">
          <span className="eyebrow">Why Fenbrix tools</span>
          <h2 className="h2 mt-4">Simple tools. No unnecessary complexity.</h2>
        </Reveal>

        <Stagger className="mt-11 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {POINTS.map((point) => (
            <StaggerItem key={point.title}>
              <div className="card h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-600/10 text-teal-600">
                  <Icon name={point.icon} className="h-5 w-5" strokeWidth={1.9} />
                </div>
                <h3 className="mt-5 text-[16px] font-extrabold">{point.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-navy/55">{point.body}</p>
              </div>
            </StaggerItem>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
