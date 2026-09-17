export const SITE = {
  name: 'Fenbrix',
  tagline: 'Digital Growth & Technology',
  promise: 'One Partner. Your Entire Digital Business.',
  phone: '+91 7979066971',
  email: 'seashish14@gmail.com',
  city: 'Noida, Uttar Pradesh, India',
  whatsapp: '+917979066971',
};

export const NAV = [
  { href: '/services/', label: 'Services' },
  { href: '/industries/', label: 'Industries' },
  { href: '/process/', label: 'Process' },
  { href: '/pricing/', label: 'Pricing' },
  { href: '/about/', label: 'About' },
];

export const SERVICES = [
  {
    slug: 'social-media',
    title: 'Social Media Management',
    short: 'Accounts that stay alive, on-brand and on schedule.',
    icon: 'share',
    items: [
      'Instagram, Facebook, LinkedIn & YouTube',
      'Monthly content calendars',
      'Account & community management',
      'Comment and DM handling',
    ],
  },
  {
    slug: 'content',
    title: 'Content Production',
    short: 'Reels, photography and design that actually look premium.',
    icon: 'camera',
    items: [
      'Reels & short-form video',
      'Video editing',
      'Product & business photography',
      'Graphic design, creatives & copywriting',
    ],
  },
  {
    slug: 'marketing',
    title: 'Digital Marketing',
    short: 'Paid and organic channels pointed at one thing — leads.',
    icon: 'target',
    items: [
      'Meta Ads & Google Ads',
      'Lead generation campaigns',
      'SEO & Google Business Profile',
      'WhatsApp, email & marketing analytics',
    ],
  },
  {
    slug: 'websites',
    title: 'Website Development',
    short: 'Fast, modern sites built to convert — not just to exist.',
    icon: 'browser',
    items: [
      'Business websites & landing pages',
      'E-commerce & booking websites',
      'Custom web applications',
      'Maintenance, hosting & deployment',
    ],
  },
  {
    slug: 'software',
    title: 'Software & App Development',
    short: 'The systems that run your business, built around how you work.',
    icon: 'code',
    items: [
      'Custom business software',
      'CRM systems & admin dashboards',
      'Inventory & billing systems',
      'Mobile apps & internal tools',
    ],
  },
  {
    slug: 'automation',
    title: 'Automation & AI',
    short: 'Stop losing leads to manual follow-ups.',
    icon: 'bolt',
    items: [
      'WhatsApp & lead automation',
      'CRM and appointment automation',
      'Invoice automation & follow-ups',
      'AI chatbots & business dashboards',
    ],
  },
];

// Long-form content stays beside the service catalogue so listing cards, routes and
// page copy always share the same source of truth.
export const SERVICE_DETAILS = {
  'social-media': {
    metaTitle: 'Social Media Management in Noida & Delhi NCR',
    metaDescription: 'Fenbrix plans, creates and manages social media that keeps your business visible, credible and connected to real enquiries.',
    eyebrow: 'Social Media Management',
    hero: 'Make your social presence a channel people trust.',
    intro: 'We turn scattered posting into a clear, consistent social presence with the content, community management and reporting needed to support business growth.',
    problems: ['Posting stops when the team gets busy', 'Your feed looks inconsistent or off-brand', 'Comments and DMs go unanswered', 'Content gets attention but not useful action'],
    deliverables: [
      ['Strategy & calendar', 'A practical monthly plan built around your offers, audience and important business moments.'],
      ['Content production', 'Reels, creatives, captions and platform-ready assets prepared for approval.'],
      ['Publishing & community', 'Scheduled publishing plus considered handling of comments and direct messages.'],
      ['Reporting & refinement', 'A clear review of what is working and what should change next month.'],
    ],
    capabilities: ['Instagram, Facebook, LinkedIn & YouTube', 'Monthly content calendars', 'Account & community management', 'Comment and DM handling', 'Reels and short-form content', 'Caption writing and creative direction', 'Campaign support and content repurposing', 'Monthly performance reporting'],
    process: [['01', 'Listen', 'Understand your business, audience, offers and existing presence.'], ['02', 'Plan', 'Set content pillars, monthly themes and a practical calendar.'], ['03', 'Create', 'Produce on-brand assets, copy and short-form video.'], ['04', 'Approve & publish', 'Share work clearly, then schedule it at the right time.'], ['05', 'Review', 'Use engagement and enquiries to improve the next cycle.']],
    outcomes: ['A more credible, consistent brand presence', 'Clearer conversations with prospective customers', 'Content that supports campaigns and launches', 'Better visibility into what your audience responds to'],
    industries: ['Restaurants & CafÃ©s', 'Salons & Beauty', 'Clinics & Healthcare', 'Real Estate', 'D2C Brands'],
    faqs: [
      ['What is included in social media management?', 'Scope is agreed up front and can include strategy, calendars, creative production, captions, publishing, community management and reporting.'],
      ['Can you work with our existing brand guidelines?', 'Yes. We begin by understanding your existing voice, visual identity and approvals process, then make the work consistent.'],
      ['Which platforms should we focus on?', 'We recommend the platforms that match your customers and capacity rather than asking you to be active everywhere.'],
      ['Do you handle replies and DMs?', 'That can be included in the scope. We set response guidelines and flag enquiries or sensitive conversations to your team.'],
    ],
  },
  content: {
    metaTitle: 'Content Production for Noida & Delhi NCR Businesses',
    metaDescription: 'Fenbrix creates polished reels, photography, design and copy that give growing businesses a stronger content engine.',
    eyebrow: 'Content Production',
    hero: 'Create the content your business deserves to be known for.',
    intro: 'From a single campaign to an ongoing content engine, Fenbrix brings together concepts, shoots, editing, design and copy so every asset feels like the same brand.',
    problems: ['Good offers are hard to explain visually', 'Content quality changes from post to post', 'Producing reels takes too much internal time', 'Campaigns launch without enough usable assets'],
    deliverables: [
      ['Creative direction', 'A clear idea for what to make, why it matters and where it will be used.'],
      ['Photo & video production', 'Business, product and short-form video assets planned for real marketing use.'],
      ['Editing & design', 'Finished reels, graphics and layouts that look considered on every screen.'],
      ['Copy & handover', 'Captions, supporting copy and organised files ready for publishing or campaigns.'],
    ],
    capabilities: ['Reels and short-form video', 'Video editing', 'Product and business photography', 'Graphic design and campaign creatives', 'Copywriting and captions', 'Product launches and offer campaigns', 'Content repurposing across channels', 'Creative support for paid ads'],
    process: [['01', 'Brief', 'Clarify the offer, audience, channels and the job each asset must do.'], ['02', 'Concept', 'Develop practical ideas, shot lists and visual direction.'], ['03', 'Produce', 'Shoot or design the assets with a consistent creative standard.'], ['04', 'Refine', 'Edit, review and prepare final platform-ready versions.'], ['05', 'Deploy', 'Hand off, publish or connect assets to the wider campaign plan.']],
    outcomes: ['A sharper, more recognisable visual presence', 'More useful assets for social, ads and websites', 'Faster campaign execution', 'Content that better communicates your offer'],
    industries: ['Restaurants & CafÃ©s', 'Salons & Beauty', 'Real Estate', 'D2C Brands'],
    faqs: [
      ['What types of content can Fenbrix produce?', 'We produce short-form video, photography, graphic design, campaign creatives, captions and supporting copy based on your needs.'],
      ['Can you create content for ads as well as social media?', 'Yes. We plan assets around their destination, including social posts, paid campaigns, landing pages and product launches.'],
      ['Do you provide raw footage?', 'This is agreed in the project scope. We can provide organised final files and, where appropriate, source material.'],
      ['How do approvals work?', 'We agree a simple review process before production so feedback is consolidated and the final work stays on schedule.'],
    ],
  },
  marketing: {
    metaTitle: 'Digital Marketing Services in Noida',
    metaDescription: 'Fenbrix connects paid media, SEO, local visibility and analytics into practical digital marketing for growing businesses.',
    eyebrow: 'Digital Marketing',
    hero: 'Put your marketing budget behind a clearer path to leads.',
    intro: 'We connect ads, search visibility, landing pages and follow-up so marketing activity is easier to understand and more useful to your sales process.',
    problems: ['Leads arrive inconsistently or at the wrong quality', 'Ad spend is hard to explain or track', 'Your business is difficult to find in local search', 'Traffic lands on pages that do not convert'],
    deliverables: [
      ['Channel strategy', 'A focused plan for the channels most likely to support your current goals.'],
      ['Campaign management', 'Well-structured paid campaigns, creative testing and audience refinement.'],
      ['Search & local visibility', 'SEO and Google Business Profile work that helps relevant customers find you.'],
      ['Tracking & reporting', 'Clear measurement, practical reporting and decisions based on the signal available.'],
    ],
    capabilities: ['Meta Ads and Google Ads', 'Lead generation campaigns', 'SEO and Google Business Profile', 'Landing page recommendations', 'WhatsApp and email marketing', 'Conversion optimisation', 'Campaign creative direction', 'Marketing analytics and reporting'],
    process: [['01', 'Audit', 'Review current channels, tracking, offer and follow-up gaps.'], ['02', 'Prioritise', 'Choose the channels and campaign structure worth investing in now.'], ['03', 'Build', 'Prepare targeting, creative, landing-page requirements and measurement.'], ['04', 'Launch', 'Go live with tracking in place and clear ownership for enquiries.'], ['05', 'Optimise', 'Review performance regularly and improve what the data supports.']],
    outcomes: ['A clearer view of marketing activity and enquiries', 'More relevant visibility for your offers', 'Better alignment between campaigns and follow-up', 'A practical basis for improving conversion over time'],
    industries: ['Real Estate', 'Clinics & Healthcare', 'Coaching Institutes', 'Local Retail', 'D2C Brands', 'Professional Services'],
    faqs: [
      ['Which advertising platforms do you manage?', 'Fenbrix can manage Meta and Google Ads, with the mix chosen around your audience, offer and sales process.'],
      ['Do you guarantee leads or ROI?', 'No. We set up measurable work, report honestly and optimise responsibly, but responsible marketing does not make guaranteed results promises.'],
      ['Can you work with our existing campaigns?', 'Yes. We can audit existing accounts, identify the priorities and agree whether to improve the current setup or rebuild it.'],
      ['Do you manage SEO too?', 'Yes. SEO and local search work can be included where they are appropriate to your goals and timeline.'],
    ],
  },
  websites: {
    metaTitle: 'Website Development in Noida & Delhi NCR',
    metaDescription: 'Fenbrix designs and develops fast, responsive websites, landing pages and web applications that make it easier for customers to act.',
    eyebrow: 'Website Development',
    hero: 'Build a website that earns its place in your business.',
    intro: 'Your website should explain the offer, make action easy and fit the rest of your digital operation. We design and build for that job—not just for a launch day screenshot.',
    problems: ['An outdated site weakens first impressions', 'Mobile visitors struggle to take action', 'Pages are slow or hard to maintain', 'Campaign traffic has nowhere focused to land'],
    deliverables: [
      ['Discovery & structure', 'A clear page plan, user journeys and content priorities before design begins.'],
      ['Design & development', 'Responsive, on-brand pages built for clarity, speed and everyday use.'],
      ['Integrations & launch', 'Forms, analytics, CMS or API connections set up for the way you operate.'],
      ['Ongoing support', 'Practical maintenance, hosting and iteration support when your site needs to evolve.'],
    ],
    capabilities: ['Business websites and landing pages', 'Corporate websites', 'E-commerce and booking websites', 'Custom web applications', 'CMS integration', 'API and third-party integrations', 'Responsive development', 'Maintenance, hosting and deployment'],
    process: [['01', 'Discover', 'Clarify users, conversion goals, content and technical needs.'], ['02', 'Structure', 'Plan the pages, journeys and information architecture.'], ['03', 'Design', 'Create a clear visual system and responsive page designs.'], ['04', 'Build', 'Develop, integrate, test and prepare the site for launch.'], ['05', 'Improve', 'Monitor real usage and support measured improvements over time.']],
    outcomes: ['A stronger first impression across devices', 'A clearer route from visitor to enquiry or purchase', 'A website that supports campaigns and operations', 'A scalable foundation for future digital work'],
    industries: ['Real Estate', 'Clinics & Healthcare', 'Coaching Institutes', 'D2C Brands', 'Professional Services'],
    faqs: [
      ['What is included in a website project?', 'Every project is scoped separately, typically covering discovery, design, development, testing, launch and the integrations you actually need.'],
      ['Can you improve our existing website?', 'Yes. We can audit an existing site, recommend targeted improvements or rebuild it when the current foundation is holding you back.'],
      ['Can you integrate third-party tools?', 'Yes. We can scope CMS, analytics, booking, CRM, payment and API integrations based on the tools your business uses.'],
      ['Do you provide support after launch?', 'Yes. Maintenance, hosting and ongoing improvements can be included as a separate support arrangement.'],
    ],
  },
  software: {
    metaTitle: 'Custom Software Development in Noida',
    metaDescription: 'Fenbrix builds practical custom software, dashboards, CRMs and apps around the way your business needs to work.',
    eyebrow: 'Software & App Development',
    hero: 'Turn the way your business works into software that works for you.',
    intro: 'When off-the-shelf tools create more work than they remove, we scope and build the systems, dashboards and apps that fit your real workflows.',
    problems: ['Important work lives across disconnected spreadsheets', 'Teams repeat manual steps or lose context', 'Existing tools do not match your workflow', 'Leaders lack a clear operational view'],
    deliverables: [
      ['Workflow discovery', 'We map the current process, bottlenecks and priorities before proposing a build.'],
      ['Product design', 'Clear screens, roles and user journeys shaped around day-to-day use.'],
      ['Development & integration', 'Reliable software connected to the systems and data it needs.'],
      ['Training & support', 'A practical handover, documentation and support plan for adoption.'],
    ],
    capabilities: ['Custom business software', 'CRM systems and admin dashboards', 'Inventory and billing systems', 'Mobile apps and internal tools', 'SaaS applications', 'API systems and integrations', 'Reporting dashboards', 'Role-based business platforms'],
    process: [['01', 'Map', 'Understand users, current workflows and the cost of the problem.'], ['02', 'Scope', 'Prioritise the first useful release and define a clear roadmap.'], ['03', 'Prototype', 'Validate screens, roles and flows before deeper development.'], ['04', 'Build & test', 'Develop in stages, integrate carefully and test with real scenarios.'], ['05', 'Roll out', 'Train users, launch deliberately and improve from feedback.']],
    outcomes: ['Less operational friction and duplicated work', 'Better visibility into important business activity', 'Technology tailored to your working process', 'A foundation that can evolve with the business'],
    industries: ['Real Estate', 'Clinics & Healthcare', 'Coaching Institutes', 'Local Retail', 'Professional Services'],
    faqs: [
      ['How do you scope a custom software project?', 'We start with workflows, users, integrations and the outcome you need, then define a clear first phase with scope, timeline and price.'],
      ['Can you integrate our existing tools?', 'Often, yes. We assess the available APIs, data quality and practical requirements before including an integration in the scope.'],
      ['Do you build mobile apps?', 'Yes, where a mobile experience is the right solution. We first confirm whether an app, web application or internal tool best fits the use case.'],
      ['Will we own the software?', 'Ownership, access and handover arrangements are made clear in the proposal before development begins.'],
    ],
  },
  automation: {
    metaTitle: 'Business Automation Services in Noida & Delhi NCR',
    metaDescription: 'Fenbrix connects lead, CRM, WhatsApp and operational workflows so important follow-up does not depend on manual memory.',
    eyebrow: 'Automation & AI',
    hero: 'Let your business follow up even when your team is busy.',
    intro: 'We identify repeatable work that is slowing your team down, then connect the tools and workflows that keep leads, reminders and information moving.',
    problems: ['Leads are missed or followed up too late', 'Appointments and reminders are handled manually', 'Information is copied between systems', 'Teams lack a simple view of what needs attention'],
    deliverables: [
      ['Workflow audit', 'A practical review of repetitive tasks, lead handoffs and data gaps.'],
      ['Automation design', 'Clear triggers, rules, exceptions and ownership before anything is connected.'],
      ['Implementation', 'CRM, WhatsApp, notification and data workflows configured and tested.'],
      ['Monitoring & refinement', 'Support to improve the flow as your process and tools change.'],
    ],
    capabilities: ['WhatsApp and lead automation', 'CRM and appointment automation', 'Invoice automation and follow-ups', 'AI chatbots and business dashboards', 'Lead-routing workflows', 'Notifications and reminders', 'Data workflows and integrations', 'Business process automation'],
    process: [['01', 'Audit', 'Find the handoffs, delays and manual work worth fixing first.'], ['02', 'Design', 'Map triggers, actions, ownership and exception handling.'], ['03', 'Connect', 'Configure the right tools and integrations around your workflow.'], ['04', 'Test', 'Run real-world scenarios before the automation is relied on.'], ['05', 'Improve', 'Monitor outcomes and refine the flow as the business changes.']],
    outcomes: ['Faster and more consistent lead follow-up', 'Fewer manual handoffs between people and tools', 'A clearer view of operational activity', 'More team time for high-value customer work'],
    industries: ['Real Estate', 'Clinics & Healthcare', 'Coaching Institutes', 'Local Retail', 'Professional Services'],
    faqs: [
      ['What can you automate first?', 'The best first target is usually a repeatable, high-volume task such as lead follow-up, appointment reminders, enquiry routing or status updates.'],
      ['Can you automate WhatsApp follow-up?', 'Yes. We can scope compliant WhatsApp workflows for lead responses, reminders and handoffs that fit your sales process.'],
      ['Will automation replace our team?', 'The goal is to remove repetitive work and make follow-up dependable, so your team can focus on conversations and decisions that need people.'],
      ['Can automation work with our CRM?', 'Usually. We review your current CRM, its integration options and the data you need to move before proposing the workflow.'],
    ],
  },
};

export const LOCATIONS = [
  {
    slug: 'noida',
    name: 'Noida',
    metaTitle: 'Digital Growth & Technology Agency in Noida',
    metaDescription: 'Fenbrix helps Noida businesses with websites, digital marketing, software and business automation from one connected team.',
    hero: 'Digital growth and technology for businesses in Noida.',
    intro: 'Fenbrix is based in Noida and works with businesses that need their marketing, website and operating systems to pull in the same direction.',
    context: 'Noida businesses often need to move quickly across a mix of local discovery, sales follow-up and digital trust. From established teams around Sector 62 and Sector 63 to newer businesses serving the expressway corridor, the useful work is rarely just more posts or a new website in isolation. It is a clear offer, a practical customer journey and a team that can connect the pieces.',
    priorities: [
      ['A credible digital front door', 'Websites and landing pages that make it easier for prospective customers to understand the offer and enquire.'],
      ['Local visibility with intent', 'Search, Google Business Profile and paid activity planned around how local customers actually discover you.'],
      ['Reliable lead follow-up', 'CRM and WhatsApp workflows that help teams respond while interest is still fresh.'],
      ['Content that reflects the business', 'Clear social and campaign content for service businesses, healthcare, real estate, education and D2C brands.'],
    ],
    industries: ['Real Estate', 'Clinics & Healthcare', 'Coaching Institutes', 'D2C Brands', 'Professional Services'],
    faqs: [
      ['Is Fenbrix based in Noida?', 'Yes. Fenbrix is based in Noida and works with businesses across Noida and the wider Delhi NCR region.'],
      ['Can you support a local Noida business with both a website and marketing?', 'Yes. Fenbrix can scope connected website, content, campaign and follow-up work around the needs of your business.'],
      ['Do you work with businesses in Greater Noida too?', 'Yes. We work remotely and can support businesses across Greater Noida and nearby NCR markets.'],
      ['Can you help with local SEO?', 'We can include local search and Google Business Profile work where it fits the wider marketing plan and your business goals.'],
    ],
  },
  {
    slug: 'delhi',
    name: 'Delhi',
    metaTitle: 'Digital Agency Services for Delhi Businesses',
    metaDescription: 'Fenbrix supports Delhi businesses with digital marketing, websites, software and automation through a coordinated Noida-based team.',
    hero: 'Connected digital work for businesses operating in Delhi.',
    intro: 'Fenbrix supports Delhi businesses remotely and collaboratively, bringing marketing and technology work together around the customer journey.',
    context: 'Delhi businesses often compete in crowded, trust-led categories—from professional services and healthcare to education, real estate and consumer brands. The answer is not a generic campaign. It is a digital presence that makes expertise clear, gives prospects a straightforward next step and supports the team behind the scenes. Fenbrix is based in Noida; we do not claim a Delhi office.',
    priorities: [
      ['Clearer positioning', 'Content, design and websites that explain a business clearly in competitive categories.'],
      ['Campaigns connected to conversion', 'Paid and organic activity planned alongside the page, offer and follow-up process it depends on.'],
      ['Technology that supports service', 'Practical dashboards, systems and automations that reduce gaps between enquiry and response.'],
      ['A flexible working model', 'Structured remote collaboration, clear approvals and on-site work only where the scope calls for it.'],
    ],
    industries: ['Professional Services', 'Clinics & Healthcare', 'Coaching Institutes', 'Real Estate', 'D2C Brands'],
    faqs: [
      ['Does Fenbrix work with businesses in Delhi?', 'Yes. Fenbrix is based in Noida and supports Delhi businesses through remote collaboration and project-based meetings where appropriate.'],
      ['Do you have a Delhi office?', 'No. Our listed base is Noida; we work with businesses across Delhi NCR without representing a separate Delhi office.'],
      ['Can you build a website for a Delhi professional services firm?', 'Yes. We can scope a website, content and lead-capture experience around the firm’s services, audience and sales process.'],
      ['Can marketing and automation be managed together?', 'Yes. We can connect campaigns with the website, CRM and follow-up workflows where that is useful to the project.'],
    ],
  },
  {
    slug: 'gurugram',
    name: 'Gurugram',
    metaTitle: 'Digital Growth & Technology Services for Gurugram Businesses',
    metaDescription: 'Fenbrix helps Gurugram and Gurgaon businesses connect websites, performance marketing, software and automation around practical growth goals.',
    hero: 'A joined-up digital partner for Gurugram and Gurgaon businesses.',
    intro: 'For teams in Gurugram, Fenbrix brings together the website, marketing and technology work that is too often spread across disconnected vendors.',
    context: 'Gurugram—also commonly called Gurgaon—has a mix of technology-led firms, professional services, real estate businesses and D2C brands that need sharp digital execution without unnecessary complexity. A launch page, ad campaign or internal workflow becomes more valuable when it is designed around the same commercial goal. Fenbrix works from Noida and supports Gurugram teams through a clear, collaborative delivery process.',
    priorities: [
      ['Web experiences that explain complex offers', 'Focused websites and landing pages for services, SaaS-style products and high-consideration decisions.'],
      ['Growth campaigns with context', 'Performance marketing and content tied to the customer journey rather than isolated activity.'],
      ['Operational foundations', 'Dashboards, CRM workflows and automation for teams that need better visibility and follow-up.'],
      ['Room to scale deliberately', 'A practical roadmap that helps digital systems grow with the business instead of becoming a patchwork.'],
    ],
    industries: ['Professional Services', 'D2C Brands', 'Real Estate', 'Clinics & Healthcare'],
    faqs: [
      ['Does Fenbrix work with businesses in Gurugram or Gurgaon?', 'Yes. Gurugram and Gurgaon refer to the same market in common use, and Fenbrix supports teams there from its Noida base.'],
      ['Can you support SaaS or technology-led teams?', 'We can scope web, content, performance and internal-tool work around the actual product, sales motion and priorities of the team.'],
      ['Do projects require frequent in-person meetings?', 'Not usually. We use a structured remote process and schedule meetings when they add value to discovery, workshops or production.'],
      ['Can you improve an existing lead process?', 'Yes. We can audit the path from campaign or website enquiry through CRM and follow-up, then recommend practical improvements.'],
    ],
  },
];

export const INDUSTRIES = [
  { name: 'Restaurants & Cafés', need: 'Footfall, delivery orders and food content that sells.', icon: 'cup' },
  { name: 'Salons & Beauty', need: 'Instagram-led bookings and before/after storytelling.', icon: 'sparkle' },
  { name: 'Real Estate', need: 'Qualified site-visit leads and fast WhatsApp follow-up.', icon: 'building' },
  { name: 'Clinics & Healthcare', need: 'Trust-building content and appointment automation.', icon: 'heart' },
  { name: 'Coaching Institutes', need: 'Enrolment funnels backed by a real CRM.', icon: 'cap' },
  { name: 'Local Retail', need: 'Local SEO, offers and repeat-customer campaigns.', icon: 'bag' },
  { name: 'D2C Brands', need: 'Performance marketing plus a store that converts.', icon: 'box' },
  { name: 'Professional Services', need: 'Authority on LinkedIn and a site that captures leads.', icon: 'brief' },
];

export const PACKAGES = [
  {
    name: 'Starter',
    price: '₹15,000 – ₹25,000',
    period: '/month',
    for: 'Small businesses building a credible baseline presence.',
    featured: false,
    features: [
      'Social media management (1–2 platforms)',
      '8–12 posts per month',
      '4–6 reels per month',
      'Basic creatives & captions',
      'Google Business Profile setup & upkeep',
      'Monthly performance report',
    ],
  },
  {
    name: 'Growth',
    price: '₹35,000 – ₹60,000',
    period: '/month',
    for: 'Businesses ready to invest in paid growth and lead flow.',
    featured: true,
    features: [
      'Social media management (2–3 platforms)',
      '12–16 posts per month',
      '8–12 reels per month',
      'Meta Ads & Google Ads management',
      'Lead generation campaigns',
      'Website maintenance',
      'SEO (on-page + local)',
      'Monthly strategy call & reporting',
    ],
  },
  {
    name: 'Digital Partner',
    price: '₹75,000 – ₹1,50,000+',
    period: '/month',
    for: 'Brands that want us running the whole digital engine.',
    featured: false,
    features: [
      'Full social media & content production',
      'Reels-first content strategy',
      'Paid advertising across platforms',
      'SEO & website management',
      'CRM usage & automation oversight',
      'Advanced analytics',
      'Ongoing technology consulting',
      'Dedicated account manager',
    ],
  },
];

export const PROJECT_PRICING = [
  { group: 'Websites', rows: [
    ['Landing page', '₹8,000 – ₹20,000'],
    ['Business website', '₹25,000 – ₹70,000'],
    ['E-commerce website', '₹60,000 – ₹2,50,000+'],
    ['Booking website', '₹40,000 – ₹1,20,000'],
    ['Custom web application', '₹1,00,000 – ₹5,00,000+'],
  ]},
  { group: 'Software & Apps', rows: [
    ['CRM system', '₹80,000 – ₹3,00,000'],
    ['Admin dashboard', '₹60,000 – ₹2,50,000'],
    ['Billing / inventory system', '₹75,000 – ₹3,00,000'],
    ['Mobile application', '₹1,50,000 – ₹6,00,000+'],
    ['Custom business software', '₹1,00,000 – ₹8,00,000+'],
  ]},
  { group: 'Automation', rows: [
    ['WhatsApp / lead automation', '₹15,000 – ₹60,000'],
    ['CRM & appointment automation', '₹25,000 – ₹90,000'],
    ['AI chatbot', '₹30,000 – ₹1,50,000'],
    ['Automation maintenance', '₹8,000 – ₹25,000/mo'],
  ]},
];

export const PROCESS = [
  { step: '01', title: 'Discovery Call', body: 'A short conversation about your business, what you have tried, and what growth actually means for you.' },
  { step: '02', title: 'Digital Audit', body: 'We review your presence, website, ads and follow-up process, then show you exactly where the gaps are.' },
  { step: '03', title: 'Proposal', body: 'A clear scope, timeline and price. No vague retainers, no unlimited-everything promises.' },
  { step: '04', title: 'Onboarding', body: 'Access, brand assets, tone of voice and goals get set up in one structured week.' },
  { step: '05', title: 'Strategy & Planning', body: 'Content calendar, campaign plan and technology roadmap agreed before anything goes live.' },
  { step: '06', title: 'Production', body: 'Reels, creatives, copy, pages and code get built by the team, reviewed internally first.' },
  { step: '07', title: 'Approval & Publishing', body: 'You approve, we schedule and publish. Nothing goes out that you have not seen.' },
  { step: '08', title: 'Advertising', body: 'Campaigns launch with tracking in place so every rupee is accounted for.' },
  { step: '09', title: 'Analytics & Review', body: 'A monthly report and a real conversation about what worked, what did not, and what changes next month.' },
];

export const DIFFERENTIATORS = [
  {
    them: 'Social media agency',
    gap: 'No website, software or automation capability',
    us: 'Same content quality, plus the technology behind it',
  },
  {
    them: 'Advertising agency',
    gap: 'Weak content, cannot build anything',
    us: 'Ads connected to content, CRM and follow-up',
  },
  {
    them: 'Freelancers',
    gap: 'Inconsistent availability, single point of failure',
    us: 'A team with documented processes and backup',
  },
  {
    them: 'Web development company',
    gap: 'Builds once, then disappears',
    us: 'Your site stays part of an ongoing growth plan',
  },
  {
    them: 'Software company',
    gap: 'Expensive, slow, no marketing capability',
    us: 'Right-sized builds bundled with growth services',
  },
];

export const TECH_STACK = [
  { cat: 'Websites', tools: ['Next.js', 'WordPress', 'Webflow', 'Shopify'] },
  { cat: 'Design', tools: ['Figma', 'Adobe CC', 'Canva'] },
  { cat: 'Advertising', tools: ['Meta Ads', 'Google Ads', 'GA4'] },
  { cat: 'CRM & Automation', tools: ['Zoho', 'HubSpot', 'n8n', 'Make'] },
  { cat: 'Video', tools: ['Premiere Pro', 'After Effects', 'CapCut'] },
  { cat: 'Delivery', tools: ['Notion', 'ClickUp', 'Slack', 'Google Workspace'] },
];

export const FAQS = [
  {
    q: 'Do I have to take a website or software project to work with you?',
    a: 'No. Most clients start on a monthly retainer for social media, content and ads. Website, software and automation work is quoted separately as and when you need it — never forced into the monthly fee.',
  },
  {
    q: 'Why is development priced separately from the monthly package?',
    a: 'Because "unlimited development" inside a retainer is how agencies end up cutting corners. Scoping a build properly and pricing it on its own is how you get something that actually works and is maintainable.',
  },
  {
    q: 'Is there a lock-in contract?',
    a: 'We usually work on a three-month initial term so there is enough runway to build, test and measure — after that it continues month to month. We will tell you plainly if we think you are not a good fit.',
  },
  {
    q: 'Do you work with businesses outside Noida?',
    a: 'Yes. We are based in Noida and focused on Delhi NCR, but most of the work runs remotely. Shoots and in-person meetings are easiest within NCR.',
  },
  {
    q: 'What do the prices actually depend on?',
    a: 'Scope. Number of platforms, volume of content, ad spend under management, and for projects, the number of pages, screens and integrations. Every quote is confirmed in writing before work starts.',
  },
  {
    q: 'How quickly can we start?',
    a: 'Typically within a week of the proposal being signed. Onboarding takes a few days, then the first content calendar goes to you for approval.',
  },
];

export const STATS = [
  { value: 6, suffix: '', label: 'Service pillars under one roof' },
  { value: 3, suffix: '', label: 'Retainer packages to start from' },
  { value: 24, suffix: 'h', label: 'Typical response time' },
  { value: 100, suffix: '%', label: 'Work delivered in-house or by vetted partners' },
];
