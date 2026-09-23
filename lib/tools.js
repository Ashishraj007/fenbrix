// Central source of truth for the Free Tools section — listing cards, routes,
// metadata and on-page SEO content all read from here. Accent colors (visual
// only) live in components/tools/toolTheme.js, not here — see that file for
// why (Tailwind's content scanner does not cover lib/**).
export const TOOL_CATEGORIES = ['Business', 'Developer', 'Marketing', 'Utility'];

export const TOOLS = [
  {
    slug: 'qr-generator',
    name: 'QR Code Generator',
    short: 'Turn any link or text into a downloadable QR code in seconds.',
    icon: 'qr',
    accent: 'emerald',
    category: 'Marketing',
    highlights: ['Download instantly', 'High quality'],
    metaTitle: 'Free QR Code Generator Online',
    metaDescription:
      'Turn any link, offer or message into a scannable QR code in seconds. Free, browser-based and ready to download as PNG — no sign-up, no watermark.',
    hero: 'Free QR Code Generator',
    intro:
      'Create a scannable QR code for a website link, offer, menu or any block of text — generated entirely in your browser and ready to download as a PNG.',
    trustPoints: ['No sign-up required', 'Works entirely in your browser', 'Unlimited free downloads'],
    howTo: [
      ['Enter your text or link', 'Type or paste the URL, message or contact detail you want people to scan.'],
      ['Preview the QR code', 'The QR code updates instantly so you can check it before using it.'],
      ['Download the PNG', 'Save the QR code as an image and use it on packaging, print or a digital screen.'],
    ],
    features: [
      'Works with URLs, text, offers or contact details',
      'Instant live preview as you type',
      'Download as a high-resolution PNG',
      'Copy your input with one click',
      'No sign-up and no data sent to a server',
    ],
    whyUse: {
      heading: "Why use Fenbrix's QR Code Generator?",
      paragraphs: [
        "A QR code is often the fastest way to move someone from print or a screen straight to a link, menu, offer or contact detail — no typing required. Fenbrix's generator creates a clean, scannable code in seconds, directly in your browser.",
        "Because nothing is uploaded to a server, you can generate codes for internal drafts, client work or personal use without worrying about where the data goes. It's built for quick, repeatable use — not a one-time gimmick.",
      ],
    },
    relatedSlugs: ['whatsapp-link-generator', 'image-compressor'],
    faqs: [
      ['Is this QR code generator really free?', 'Yes. There is no sign-up, watermark or usage limit — generate and download as many QR codes as you need.'],
      ['Do the QR codes expire?', 'No. Because the QR code encodes your text or link directly, it works for as long as the destination link is valid.'],
      ['Can I use this for a business or menu?', 'Yes. It works well for menus, offers, business cards, packaging and any print or digital material that needs a scannable code.'],
      ['Is my data uploaded anywhere?', 'No. The QR code is generated locally in your browser — nothing you type is sent to Fenbrix or any third party.'],
    ],
  },
  {
    slug: 'gst-calculator',
    name: 'GST Calculator',
    short: 'Add or remove GST from any amount with instant, accurate results.',
    icon: 'percent',
    accent: 'orange',
    category: 'Business',
    highlights: ['Indian GST rates', 'Add or remove'],
    metaTitle: 'Free GST Calculator India',
    metaDescription:
      'Add or remove GST at 5%, 12%, 18%, 28% or a custom rate and see the exact base, GST and total amounts — built for Indian business owners, freelancers and accountants.',
    hero: 'Free GST Calculator (India)',
    intro:
      'Work out GST on any amount in seconds — add GST to a base price or extract it from a GST-inclusive total, using the standard Indian GST slabs or your own custom rate.',
    trustPoints: ['Standard 0/5/12/18/28% slabs', 'Add or remove GST instantly', 'No data leaves your device'],
    howTo: [
      ['Enter the amount', 'Type the base amount or the GST-inclusive total, whichever you have.'],
      ['Choose the GST rate', 'Pick 0%, 5%, 12%, 18% or 28%, or enter a custom percentage.'],
      ['Pick Add or Remove GST', 'Add GST to calculate the total payable, or remove GST to find the base price hidden inside a total.'],
    ],
    features: [
      'Standard Indian GST slabs: 0%, 5%, 12%, 18%, 28%',
      'Custom GST percentage support',
      'Add GST or remove GST from a total',
      'Clear breakdown of base amount, GST amount and total',
      'Indian Rupee formatting throughout',
    ],
    whyUse: {
      heading: 'Why use this GST calculator?',
      paragraphs: [
        'GST math is simple in theory but easy to get wrong under pressure — especially when working backwards from a GST-inclusive price to the base amount. This calculator handles both directions instantly, using the exact slabs used across India.',
        "It's built for freelancers, small business owners and anyone quoting or checking prices who wants a fast, accurate second opinion without opening a spreadsheet or accounting software.",
      ],
    },
    relatedSlugs: ['whatsapp-link-generator', 'qr-generator'],
    faqs: [
      ['How is GST calculated on an amount?', 'GST amount = Base Amount × (GST rate ÷ 100). The total payable is the base amount plus the GST amount.'],
      ['How do I remove GST from a total price?', 'Base amount = Total ÷ (1 + GST rate ÷ 100). This calculator does that automatically when you choose "Remove GST".'],
      ['Which GST rates does this support?', 'The common Indian slabs — 0%, 5%, 12%, 18% and 28% — plus any custom rate you need to enter.'],
      ['Is this calculator accurate for invoices?', 'It performs standard GST arithmetic and is useful for quick estimates. For formal invoicing, always confirm figures with your accountant or GST software.'],
    ],
  },
  {
    slug: 'image-compressor',
    name: 'Image Compressor',
    short: 'Shrink JPG, PNG and WebP images without uploading them anywhere.',
    icon: 'image',
    accent: 'blue',
    category: 'Utility',
    highlights: ['Compress locally', 'Maintain quality'],
    metaTitle: 'Free Image Compressor Online',
    metaDescription:
      'Shrink JPG, PNG and WebP files for websites, email or WhatsApp without uploading them anywhere — compression runs entirely in your browser, so your images stay private.',
    hero: 'Free Online Image Compressor',
    intro:
      'Reduce the file size of your JPG, PNG or WebP images before uploading them to a website, email or WhatsApp — processed fully on your device, so your images never leave your browser.',
    trustPoints: ['Processed 100% in your browser', 'Original files never leave your device', 'Works with JPG, PNG & WebP'],
    howTo: [
      ['Upload or drag in an image', 'Choose a JPG, PNG or WebP file, or drag and drop it into the drop zone.'],
      ['Adjust the quality slider', 'Lower the quality to shrink the file further, or keep it higher to preserve detail.'],
      ['Download the compressed image', 'Compare the before/after size, then save the compressed file to your device.'],
    ],
    features: [
      'Supports JPG, JPEG, PNG and WebP',
      'Drag-and-drop upload',
      'Adjustable compression quality',
      'Shows original size, new size and percentage saved',
      '100% client-side — images are never uploaded anywhere',
    ],
    whyUse: {
      heading: "Why use Fenbrix's Image Compressor?",
      paragraphs: [
        "Large images slow down websites, bounce off email attachment limits and eat up WhatsApp data. Compressing them normally means uploading to a third-party site — handing over files you might not want stored anywhere. Fenbrix's compressor never does that: everything happens on your device using the browser's own image-processing engine.",
        'It works well for anyone preparing photos for a website, a listing, a resume or a quick share — where the goal is a smaller file, not a redesign.',
      ],
    },
    relatedSlugs: ['qr-generator', 'json-formatter'],
    faqs: [
      ['Are my images uploaded to a server?', 'No. Compression happens entirely inside your browser using the Canvas API — your images never leave your device.'],
      ['Does the quality slider affect PNG files?', 'PNG is a lossless format, so the quality slider mainly affects JPG and WebP output. PNG files may still shrink slightly from re-encoding.'],
      ['What is the maximum file size I can compress?', 'To keep things fast and reliable in the browser, files up to 15MB are supported.'],
      ['Will compression reduce image dimensions?', 'No, dimensions stay the same by default — only the file size is reduced through compression quality.'],
    ],
  },
  {
    slug: 'json-formatter',
    name: 'JSON Formatter & Validator',
    short: 'Format, minify and validate JSON instantly, right in your browser.',
    icon: 'braces',
    accent: 'purple',
    category: 'Developer',
    highlights: ['Format & validate', 'Clean & readable'],
    metaTitle: 'Free JSON Formatter & Validator',
    metaDescription:
      'Pretty-print, minify or validate JSON instantly with clear, position-accurate error messages — a fast, local tool for developers debugging APIs, configs and logs.',
    hero: 'Free JSON Formatter & Validator',
    intro:
      'Paste messy or minified JSON to instantly pretty-print it, minify it, or validate it — with clear, useful error messages when something is wrong.',
    trustPoints: ['Runs entirely client-side', 'Clear, specific error messages', "No file content sent to a server"],
    howTo: [
      ['Paste your JSON', 'Drop your raw JSON into the editor on the left.'],
      ['Format, minify or validate', 'Choose the action you need — Format for readable indentation, Minify for a compact single line, or Validate to check it is correct.'],
      ['Copy the result', 'Copy the formatted output straight to your clipboard for use elsewhere.'],
    ],
    features: [
      'Pretty-print JSON with clean indentation',
      'Minify JSON to a single compact line',
      'Validate JSON and see exactly what is wrong',
      'One-click copy of the formatted result',
      'Runs fully in your browser — nothing is uploaded',
    ],
    whyUse: {
      heading: "Why use Fenbrix's JSON Formatter?",
      paragraphs: [
        'Minified API responses, config files and log payloads are hard to read as one long line. This formatter turns them into clean, indented JSON — or the reverse, compressing readable JSON into a compact single line for production use.',
        "Because validation happens with the browser's own JSON parser, error messages point to the exact character position of the problem instead of a generic 'invalid JSON' message, which makes debugging faster.",
      ],
    },
    relatedSlugs: ['password-generator', 'qr-generator'],
    faqs: [
      ['Why is my JSON showing an error?', 'Common causes are trailing commas, missing quotes around keys, or unclosed brackets. The error message points to the position where parsing failed.'],
      ['Does this tool send my JSON anywhere?', "No. Formatting, minifying and validation all happen locally in your browser using JavaScript's built-in JSON parser."],
      ['Can I format very large JSON files?', 'Yes, though very large files (several megabytes) may take a moment to process depending on your device.'],
      ['What is the difference between format and minify?', 'Format adds indentation and line breaks for readability. Minify removes all unnecessary whitespace to make the JSON as compact as possible.'],
    ],
  },
  {
    slug: 'whatsapp-link-generator',
    name: 'WhatsApp Link Generator',
    short: 'Create a click-to-chat WhatsApp link with a pre-filled message.',
    icon: 'wa',
    accent: 'green',
    category: 'Marketing',
    highlights: ['Instant link', 'Boost engagement'],
    metaTitle: 'Free WhatsApp Link Generator',
    metaDescription:
      'Build a wa.me click-to-chat link with a pre-filled message for your website, bio or business card — no WhatsApp Business account or sign-up required.',
    hero: 'Free WhatsApp Link Generator',
    intro:
      'Build a wa.me link that opens a WhatsApp chat with a phone number and a pre-filled message — useful for websites, bios, business cards and ads.',
    trustPoints: ['No WhatsApp Business account needed', 'Works with any phone number', 'Nothing is stored or sent to a server'],
    howTo: [
      ['Choose a country code', 'Select your country code — India (+91) is selected by default.'],
      ['Enter the phone number and message', 'Add the WhatsApp number and the message you want pre-filled.'],
      ['Copy or open the link', 'Copy the generated link to use anywhere, or open it directly to test it in WhatsApp.'],
    ],
    features: [
      'Country code selector, defaulting to India (+91)',
      'Optional pre-filled message',
      'Live link preview',
      'One-click copy and open-in-WhatsApp',
      'Generated entirely in your browser — no numbers stored',
    ],
    whyUse: {
      heading: "Why use Fenbrix's WhatsApp Link Generator?",
      paragraphs: [
        'A click-to-chat WhatsApp link removes the extra step of saving a number before messaging — useful for websites, Instagram bios, email signatures, business cards and ads. This generator builds that link and lets you pre-fill a message so the conversation starts with context.',
        'It works for personal use, small businesses and marketing campaigns alike, and the link itself is just a standard wa.me URL — nothing proprietary, nothing that expires.',
      ],
    },
    relatedSlugs: ['qr-generator', 'gst-calculator'],
    faqs: [
      ['What format does a WhatsApp link use?', 'A click-to-chat link looks like https://wa.me/<countrycode><number>?text=<message>, with the message URL-encoded.'],
      ['Does the recipient need to save my number?', "No. Click-to-chat links open a conversation without either person needing to save the other's number first."],
      ['Can I use this link on my website or Instagram bio?', 'Yes. These links work anywhere a normal URL works, including websites, social bios, email signatures and printed materials.'],
      ['Is my phone number stored by Fenbrix?', 'No. The link is generated locally in your browser and nothing you enter is sent to or stored by Fenbrix.'],
    ],
  },
  {
    slug: 'password-generator',
    name: 'Password Generator',
    short: 'Generate strong, random passwords using secure browser crypto.',
    icon: 'key',
    accent: 'rose',
    category: 'Utility',
    highlights: ['Strong & random', '100% private'],
    metaTitle: 'Free Password Generator',
    metaDescription:
      "Generate strong, random passwords using your browser's secure crypto API — choose the length and character mix, then copy instantly. Nothing is ever sent to a server.",
    hero: 'Free Password Generator',
    intro:
      "Generate strong, random passwords using your browser's secure crypto API — choose the length and character types you need, then copy the result.",
    trustPoints: ['Uses the Web Crypto API', 'Passwords are never transmitted', 'Customisable length & character sets'],
    howTo: [
      ['Set the length', 'Use the slider to choose how many characters your password should have.'],
      ['Pick character types', 'Toggle uppercase, lowercase, numbers and symbols on or off.'],
      ['Generate and copy', 'Generate a password, check the strength indicator, then copy it or regenerate for another option.'],
    ],
    features: [
      'Adjustable password length',
      'Toggle uppercase, lowercase, numbers and symbols',
      'Visual password strength indicator',
      'Uses the browser\'s secure crypto.getRandomValues API',
      'Passwords are never sent to a server',
    ],
    whyUse: {
      heading: "Why use Fenbrix's Password Generator?",
      paragraphs: [
        "Reused or predictable passwords are one of the easiest ways accounts get compromised. This generator creates genuinely random passwords using your browser's built-in cryptographic random number generator, rather than a weaker general-purpose random function.",
        'You control the length and which character types are included, so you can match a password to a specific site\'s requirements while keeping it strong.',
      ],
    },
    relatedSlugs: ['json-formatter', 'image-compressor'],
    faqs: [
      ['Are these passwords truly random?', 'Yes. Passwords are generated using the Web Crypto API (crypto.getRandomValues), which is designed for cryptographically secure randomness.'],
      ['Is my generated password stored anywhere?', 'No. Password generation happens entirely in your browser and nothing is sent to or stored by Fenbrix.'],
      ['What makes a password strong?', 'Length matters most, followed by using a mix of uppercase, lowercase, numbers and symbols to increase unpredictability.'],
      ['How long should my password be?', 'For most accounts, 12–16 characters combining multiple character types is a reasonable, strong default.'],
    ],
  },
];

export function getToolBySlug(slug) {
  return TOOLS.find((tool) => tool.slug === slug);
}

export function getRelatedTools(tool, limit = 2) {
  const bySlug = (slug) => TOOLS.find((t) => t.slug === slug);
  const explicit = (tool.relatedSlugs || []).map(bySlug).filter(Boolean);
  if (explicit.length >= limit) return explicit.slice(0, limit);
  const fallback = TOOLS.filter((t) => t.slug !== tool.slug && !explicit.includes(t));
  return [...explicit, ...fallback].slice(0, limit);
}
