const ITEMS = [
  'Instagram', 'Reels', 'Meta Ads', 'Google Ads', 'SEO', 'Landing Pages',
  'E-commerce', 'CRM Systems', 'WhatsApp Automation', 'AI Chatbots',
  'Product Photography', 'Admin Dashboards', 'Google Business Profile',
  'Mobile Apps', 'Email Marketing', 'Analytics',
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];

  return (
    <div className="border-y border-line bg-white py-5">
      <div className="mask-fade-x overflow-hidden">
        <div className="flex w-max animate-marquee gap-3">
          {row.map((item, i) => (
            <span
              key={`${item}-${i}`}
              className="whitespace-nowrap rounded-full border border-line bg-mist px-4 py-2 text-[13px] font-bold text-navy/60"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
