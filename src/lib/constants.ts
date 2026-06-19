// Pro Shoot — Brand Constants & Data
// Complete data layer for all site content

import { CATEGORY_IMAGES, type CategoryKey } from './imageData';

// ──────────────────────────────────────
// Brand
// ──────────────────────────────────────

export const BRAND = {
  name: 'Pro Shoot',
  tagline: 'Capture Moments. Create Stories. Preserve Forever.',
  description: 'Premium photography and cinematic storytelling crafted for life\'s most meaningful moments.',
  phone: '+91 98765 43210',
  email: 'hello@proshoot.in',
  whatsapp: '919876543210',
  address: {
    line1: 'Pro Shoot Studios',
    line2: '42, MG Road, Indiranagar',
    city: 'Bangalore',
    state: 'Karnataka',
    pin: '560038',
    country: 'India',
    full: '42, MG Road, Indiranagar, Bangalore, Karnataka 560038',
    mapUrl: 'https://maps.google.com/?q=12.9716,77.5946',
  },
  social: {
    instagram: 'https://instagram.com/proshoot',
    facebook: 'https://facebook.com/proshoot',
    youtube: 'https://youtube.com/@proshoot',
    pinterest: 'https://pinterest.com/proshoot',
    linkedin: 'https://linkedin.com/company/proshoot',
  },
  hours: {
    weekdays: '10:00 AM – 7:00 PM',
    saturday: '10:00 AM – 5:00 PM',
    sunday: 'By Appointment Only',
  },
  founded: 2014,
  stats: {
    weddings: 500,
    years: 10,
    awards: 50,
    clients: 1000,
    projects: 2500,
    cities: 25,
  },
} as const;

// ──────────────────────────────────────
// Services (9 core categories)
// ──────────────────────────────────────

export interface ServiceData {
  slug: string;
  title: string;
  shortTitle: string;
  tagline: string;
  description: string;
  price: string;
  image: string;
  galleryImages: string[];
  icon: string;
  categoryKey: CategoryKey;
  features: string[];
  deliverables: string[];
  process: { step: string; title: string; desc: string }[];
}

export const SERVICES: ServiceData[] = [
  {
    slug: 'wedding-photography',
    title: 'Wedding Photography',
    shortTitle: 'Weddings',
    tagline: 'Where Love Meets Legacy',
    description: 'Every wedding is a vivid tapestry of meaningful rituals, joyful celebration, and honest emotion. From intimate vows to grand destination weekends, we do more than document the day — we preserve its atmosphere, relationships, and unforgettable details. Our team works thoughtfully across cultures and traditions, capturing every celebration with reverence, artistry, and a refined editorial eye.',
    price: '₹75,000+',
    image: CATEGORY_IMAGES.wedding[0],
    galleryImages: CATEGORY_IMAGES.wedding,
    icon: 'Heart',
    categoryKey: 'wedding',
    features: [
      'Full-day coverage with lead photographer + team',
      'Candid and editorial photography blend',
      'Cinematic highlight film (4K)',
      'Pre-wedding consultation and planning',
      'Second shooter for complete coverage',
      'Same-day sneak peek delivery',
      'Drone coverage of venue and ceremony',
      'Luxury album design included',
    ],
    deliverables: [
      '500+ professionally edited images',
      'Online private gallery (lifetime access)',
      '4K cinematic highlight reel (5-8 mins)',
      'Premium leather-bound album (40 pages)',
      'All images in print-ready resolution',
      'Social media optimized versions',
      'USB drive with all deliverables',
      'RAW files available on request',
    ],
    process: [
      { step: '01', title: 'Consultation', desc: 'We begin with a detailed conversation to understand your wedding vision, traditions, and expectations.' },
      { step: '02', title: 'Planning', desc: 'Our team plans every detail — venue recce, lighting setup, timeline coordination, and creative direction.' },
      { step: '03', title: 'The Wedding Day', desc: 'Multiple photographers and videographers capture every ritual, emotion, and celebration seamlessly.' },
      { step: '04', title: 'Curation & Editing', desc: 'Each image is hand-curated and expertly retouched with our signature cinematic style.' },
      { step: '05', title: 'Delivery', desc: 'Receive your complete gallery, highlight film, and luxury album within 6-8 weeks.' },
    ],
  },
  {
    slug: 'pre-wedding-photography',
    title: 'Pre-Wedding Photography',
    shortTitle: 'Pre-Wedding',
    tagline: 'Stories Before The Story',
    description: 'Cinematic pre-wedding experiences that capture the chemistry, laughter, and anticipation before your big day. From heritage architecture and dramatic coastlines to modern cityscapes and quiet countryside escapes, we create visual love stories that feel unmistakably yours. Every session is designed to feel effortless, romantic, and beautifully cinematic wherever your story takes us.',
    price: '₹25,000+',
    image: CATEGORY_IMAGES.preWedding[0],
    galleryImages: CATEGORY_IMAGES.preWedding,
    icon: 'Sparkles',
    categoryKey: 'preWedding',
    features: [
      'Multiple outfit changes and locations',
      'Creative concept development',
      'Professional styling guidance',
      'Destination shoot coordination',
      'Drone aerial coverage',
      'Save-the-date content creation',
      'Social media reels and clips',
      'Sunset and golden hour sessions',
    ],
    deliverables: [
      '150+ professionally edited images',
      'Cinematic pre-wedding film (3-5 mins)',
      'Instagram-ready vertical edits',
      'Save-the-date digital cards',
      'Online gallery with download access',
      'Print-ready high-resolution files',
    ],
    process: [
      { step: '01', title: 'Mood Board', desc: 'Share your vision — we create a custom mood board with location, outfit, and concept ideas.' },
      { step: '02', title: 'Location Scout', desc: 'We recommend and scout the perfect locations that match your story and aesthetic.' },
      { step: '03', title: 'The Shoot', desc: 'A relaxed, fun-filled day of creating cinematic magic with expert direction.' },
      { step: '04', title: 'Post Production', desc: 'Color grading, retouching, and cinematic editing to create your visual love story.' },
      { step: '05', title: 'Delivery', desc: 'Receive your complete gallery and film within 3-4 weeks.' },
    ],
  },
  {
    slug: 'maternity-photography',
    title: 'Maternity Photography',
    shortTitle: 'Maternity',
    tagline: 'The Art of Becoming',
    description: 'Celebrate the extraordinary beauty of motherhood with a bespoke maternity session shaped around your style and story. From timeless cultural attire and elegant editorial looks to modern studio portraits and natural outdoor settings, each experience blends artistic direction with intimate storytelling to honor this transformative journey.',
    price: '₹20,000+',
    image: CATEGORY_IMAGES.maternity[0],
    galleryImages: CATEGORY_IMAGES.maternity,
    icon: 'Flower2',
    categoryKey: 'maternity',
    features: [
      'Comfortable studio and outdoor sessions',
      'Cultural and contemporary styling options',
      'Baby shower and celebration coverage',
      'Couple maternity portraits',
      'Professional makeup artist available',
      'Baby bump progression series',
      'Silhouette and artistic lighting',
      'Props and floral arrangements included',
    ],
    deliverables: [
      '80+ professionally edited images',
      'Online private gallery',
      'Print-ready high-resolution files',
      'Social media optimized versions',
      'Optional premium photo book',
      'Digital announcement cards',
    ],
    process: [
      { step: '01', title: 'Consultation', desc: 'Discuss your preferences — traditional, modern, or a beautiful blend of both.' },
      { step: '02', title: 'Styling', desc: 'We guide you on outfits, props, and the perfect timing (28-34 weeks recommended).' },
      { step: '03', title: 'The Session', desc: 'A relaxed 2-3 hour session with breaks, ensuring your comfort throughout.' },
      { step: '04', title: 'Artistry', desc: 'Each image is carefully retouched to highlight the natural beauty of this special time.' },
      { step: '05', title: 'Delivery', desc: 'Receive your gallery within 2-3 weeks with optional same-week sneak peeks.' },
    ],
  },
  {
    slug: 'baby-photography',
    title: 'Baby Photography',
    shortTitle: 'Baby Shoots',
    tagline: 'Tiny Moments, Timeless Memories',
    description: 'Delicate, tender, and breathtaking. Our baby photography captures the pure magic of new life with artistic precision and infinite gentleness. From newborn sessions and naming celebrations to first birthdays and milestone portraits, we document every precious phase of your baby\'s journey. Our climate-controlled studio ensures complete safety and comfort for your little one.',
    price: '₹15,000+',
    image: CATEGORY_IMAGES.baby[0],
    galleryImages: CATEGORY_IMAGES.baby,
    icon: 'Baby',
    categoryKey: 'baby',
    features: [
      'Newborn-safe, temperature-controlled studio',
      'Trained baby handlers on set',
      'Custom props, wraps, and setups',
      'Milestone sessions (3, 6, 9, 12 months)',
      'Naming and welcome celebration coverage',
      'First birthday and milestone documentation',
      'Sibling and family inclusion',
      'Patience-first approach — no rushing',
    ],
    deliverables: [
      '60+ professionally edited images',
      'Online private gallery',
      'Print-ready high-resolution files',
      'Growth timeline collage design',
      'Social media announcement cards',
      'Optional photo book',
    ],
    process: [
      { step: '01', title: 'Consultation', desc: 'Discuss your baby\'s age, preferences, and any special themes you envision.' },
      { step: '02', title: 'Preparation', desc: 'We prepare custom setups, props, and a warm, safe environment for your baby.' },
      { step: '03', title: 'The Session', desc: 'A gentle, unhurried 2-3 hour session with breaks for feeding and soothing.' },
      { step: '04', title: 'Artistry', desc: 'Delicate retouching that preserves the natural beauty and tenderness of each moment.' },
      { step: '05', title: 'Delivery', desc: 'Receive your precious gallery within 2-3 weeks.' },
    ],
  },
  {
    slug: 'fashion-photography',
    title: 'Fashion Photography',
    shortTitle: 'Fashion',
    tagline: 'Where Vision Meets Vogue',
    description: 'Editorial fashion photography that commands attention. From emerging-designer lookbooks to international campaigns, model portfolios, and brand stories, we create imagery that defines identities and inspires audiences. Our fashion team brings magazine-quality production values, polished creative direction, and a globally fluent visual language to every project.',
    price: '₹40,000+',
    image: CATEGORY_IMAGES.fashion[0],
    galleryImages: CATEGORY_IMAGES.fashion,
    icon: 'Shirt',
    categoryKey: 'fashion',
    features: [
      'Editorial and commercial fashion photography',
      'Lookbook and catalog creation',
      'Model portfolio development',
      'E-commerce fashion photography',
      'Styling and creative direction',
      'Hair and makeup team coordination',
      'Studio and location shoots',
      'Post-production color grading',
    ],
    deliverables: [
      '100+ professionally edited images',
      'E-commerce ready white/lifestyle backgrounds',
      'Social media campaign assets',
      'Lookbook layout design (optional)',
      'Print-ready and web-optimized versions',
      'RAW files available in premium packages',
    ],
    process: [
      { step: '01', title: 'Brief', desc: 'Understand your brand identity, target audience, and creative vision.' },
      { step: '02', title: 'Pre-Production', desc: 'Mood boards, styling, model casting, and location scouting.' },
      { step: '03', title: 'The Shoot', desc: 'High-energy shoot with professional direction, lighting, and multiple setups.' },
      { step: '04', title: 'Post Production', desc: 'Retouching, color grading, and formatting for all required platforms.' },
      { step: '05', title: 'Delivery', desc: 'Complete delivery within 2-4 weeks depending on project scope.' },
    ],
  },
  {
    slug: 'drone-coverage',
    title: 'Drone Coverage',
    shortTitle: 'Drone',
    tagline: 'Elevated Perspectives',
    description: 'Professional aerial photography and cinematography that reveals the grandeur invisible to the human eye. Our licensed drone operators capture breathtaking perspectives of wedding venues, outdoor celebrations, resort properties, and events. From cinematic fly-throughs to dramatic top-down compositions — we add a dimension of luxury that ground-level photography simply cannot match.',
    price: '₹15,000+',
    image: CATEGORY_IMAGES.drone[0],
    galleryImages: CATEGORY_IMAGES.drone,
    icon: 'Plane',
    categoryKey: 'drone',
    features: [
      'DGCA licensed and insured operators',
      '4K Ultra HD aerial video',
      'DJI Mavic 3 Pro and Inspire 3 systems',
      'Wedding venue aerial coverage',
      'Cinematic fly-through sequences',
      'Panoramic and hyperlapse captures',
      'Real estate and property aerials',
      'Event aerial documentation',
    ],
    deliverables: [
      '50+ aerial photographs (edited)',
      '4K drone video footage',
      'Cinematic aerial highlight reel',
      'Panoramic stitched images',
      'Print-ready high-resolution files',
      'Social media optimized clips',
    ],
    process: [
      { step: '01', title: 'Assessment', desc: 'Evaluate the location, airspace regulations, and creative possibilities.' },
      { step: '02', title: 'Flight Planning', desc: 'Plan flight paths, timing (golden hour preference), and safety protocols.' },
      { step: '03', title: 'The Flight', desc: 'Professional operators execute planned and creative aerial captures.' },
      { step: '04', title: 'Post Production', desc: 'Color grading, stabilization, and cinematic editing of all footage.' },
      { step: '05', title: 'Delivery', desc: 'Receive your aerial gallery and footage within 1-2 weeks.' },
    ],
  },
  {
    slug: 'corporate-photography',
    title: 'Corporate Photography',
    shortTitle: 'Corporate',
    tagline: 'Professional Presence, Powerful Impact',
    description: 'Executive portraits, team photography, event coverage, and brand documentation that elevates your professional image to industry-leading standards. From ambitious startups and global teams to established enterprises, we translate your visual identity into confident, consistent photography built for modern business.',
    price: '₹30,000+',
    image: CATEGORY_IMAGES.corporate[0],
    galleryImages: CATEGORY_IMAGES.corporate,
    icon: 'Building2',
    categoryKey: 'corporate',
    features: [
      'Executive and leadership portraits',
      'Team and group photography',
      'Office and workspace documentation',
      'Corporate event coverage',
      'Conference and summit photography',
      'Brand identity photography',
      'LinkedIn-optimized headshots',
      'Annual report visual content',
    ],
    deliverables: [
      'Professionally edited portraits',
      'Corporate event gallery',
      'LinkedIn and website-ready formats',
      'Print-ready high-resolution files',
      'Brand-consistent color grading',
      'Quick turnaround (48-72 hours for events)',
    ],
    process: [
      { step: '01', title: 'Brief', desc: 'Understand your brand guidelines, visual identity, and specific requirements.' },
      { step: '02', title: 'Planning', desc: 'Schedule sessions, plan lighting setups, and coordinate with your team.' },
      { step: '03', title: 'The Shoot', desc: 'Efficient, professional sessions designed to minimize disruption to your workday.' },
      { step: '04', title: 'Editing', desc: 'Brand-consistent editing with attention to professional standards.' },
      { step: '05', title: 'Delivery', desc: 'Fast turnaround with files optimized for all corporate needs.' },
    ],
  },
  {
    slug: 'product-photography',
    title: 'Product Photography',
    shortTitle: 'Products',
    tagline: 'Every Product Has a Story',
    description: 'Luxury product photography for direct-to-consumer brands, e-commerce, and advertising. We make products irresistible through masterful lighting, composition, and styling. From jewellery and fashion to technology, beauty, and food, our imagery is crafted to drive conversions and elevate brand perception across global marketplaces and owned channels.',
    price: '₹20,000+',
    image: CATEGORY_IMAGES.products[0],
    galleryImages: CATEGORY_IMAGES.products,
    icon: 'Package',
    categoryKey: 'products',
    features: [
      'White background e-commerce shots',
      'Lifestyle and contextual photography',
      'Jewellery and fashion accessory specials',
      'Food and beverage photography',
      '360-degree product spins',
      'Flat-lay and creative compositions',
      'Amazon and marketplace compliance',
      'Bulk product photography packages',
    ],
    deliverables: [
      'Professionally edited product images',
      'White background and lifestyle versions',
      'Web-optimized and print-ready files',
      'Multiple angle coverage per product',
      'Marketplace-compliant formats',
      'Quick turnaround for bulk orders',
    ],
    process: [
      { step: '01', title: 'Brief', desc: 'Understand your products, brand aesthetic, and platform requirements.' },
      { step: '02', title: 'Setup', desc: 'Professional lighting, backdrop, and styling preparation in our studio.' },
      { step: '03', title: 'The Shoot', desc: 'Methodical capture of each product from optimal angles and compositions.' },
      { step: '04', title: 'Retouching', desc: 'Clean backgrounds, color correction, and detail enhancement.' },
      { step: '05', title: 'Delivery', desc: 'Formatted files ready for web, print, and marketplace upload.' },
    ],
  },
  {
    slug: 'behind-the-scenes',
    title: 'Behind The Scenes',
    shortTitle: 'BTS',
    tagline: 'The Art Behind The Art',
    description: 'Go behind the curtain and witness the passion, precision, and creative energy that powers every Pro Shoot project. Our BTS coverage documents the making of magic — from equipment setups and lighting tests to candid moments between photographer and subject. Perfect for social media content, brand storytelling, and showing your audience the human side of professional photography.',
    price: '₹10,000+',
    image: CATEGORY_IMAGES.bts[0],
    galleryImages: CATEGORY_IMAGES.bts,
    icon: 'Camera',
    categoryKey: 'bts',
    features: [
      'Real-time shoot documentation',
      'Social media BTS content creation',
      'Time-lapse setup videos',
      'Team and equipment showcases',
      'Client interaction moments',
      'Studio and location ambiance',
      'Instagram Reels and Stories content',
      'Brand transparency storytelling',
    ],
    deliverables: [
      'BTS photo gallery',
      'Short-form video clips for social media',
      'Time-lapse sequences',
      'Social media ready content',
      'Blog-ready images and captions',
    ],
    process: [
      { step: '01', title: 'Coordination', desc: 'Align BTS coverage with the primary shoot schedule.' },
      { step: '02', title: 'Documentation', desc: 'A dedicated BTS photographer captures the creative process unobtrusively.' },
      { step: '03', title: 'Editing', desc: 'Quick-turnaround editing for timely social media posting.' },
      { step: '04', title: 'Content Creation', desc: 'Format BTS footage into reels, stories, and blog-ready content.' },
      { step: '05', title: 'Delivery', desc: 'Fast delivery — within 1 week of the shoot.' },
    ],
  },
];

// ──────────────────────────────────────
// Navigation
// ──────────────────────────────────────

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Portfolio', href: '/portfolio' },
  {
    label: 'Services',
    href: '/services',
    children: [
      { label: 'Wedding Photography', href: '/services/wedding-photography', icon: 'Camera' },
      { label: 'Wedding Films', href: '/services/wedding-photography#films', icon: 'Video' },
      { label: 'Drone Coverage', href: '/services/drone-coverage', icon: 'Plane' },
      { label: 'Maternity', href: '/services/maternity-photography', icon: 'Baby' },
      { label: 'Baby Shoots', href: '/services/baby-photography', icon: 'Baby' },
      { label: 'Pre Wedding', href: '/services/pre-wedding-photography', icon: 'Heart' },
      { label: 'Albums', href: '/albums', icon: 'BookOpen' },
      { label: 'Corporate Coverage', href: '/services/corporate-photography', icon: 'Briefcase' },
      { label: 'Fashion Photography', href: '/services/fashion-photography', icon: 'Sparkles' },
      { label: 'Product Photography', href: '/services/product-photography', icon: 'Package' },
      { label: 'Behind The Scenes', href: '/services/behind-the-scenes', icon: 'Video' },
      { label: 'Equipment Rentals', href: '/rentals', icon: 'Camera' },
      { label: 'Pricing', href: '/pricing', icon: 'BadgeIndianRupee' },
    ],
  },
  { label: 'Insights', href: '/insights' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
] as const;

// ──────────────────────────────────────
// Testimonials
// ──────────────────────────────────────

export const TESTIMONIALS = [
  {
    id: 1,
    name: 'Priya & Arjun Sharma',
    event: 'Wedding Photography',
    location: 'Udaipur, Rajasthan',
    quote: 'Pro Shoot didn\'t just capture our wedding — they captured our souls. Every photograph feels like a painting. We relive our wedding every time we open our album.',
    rating: 5,
    image: CATEGORY_IMAGES.wedding[0],
  },
  {
    id: 2,
    name: 'Ananya & Vikram Menon',
    event: 'Pre-Wedding Shoot',
    location: 'Kerala Backwaters',
    quote: 'The team understood our story before we even told it. The pre-wedding shoot felt like a Bollywood movie — effortless, romantic, and absolutely cinematic.',
    rating: 5,
    image: CATEGORY_IMAGES.preWedding[0],
  },
  {
    id: 3,
    name: 'Meera & Raj Patel',
    event: 'Baby Photography',
    location: 'Bangalore Studio',
    quote: 'Our daughter\'s newborn photos are the most precious possession we own. The patience, the artistry, the tenderness — Pro Shoot is simply unmatched.',
    rating: 5,
    image: CATEGORY_IMAGES.baby[0],
  },
  {
    id: 4,
    name: 'Deepika Reddy',
    event: 'Fashion Editorial',
    location: 'Mumbai',
    quote: 'Working with Pro Shoot elevated my portfolio to international standards. Their understanding of light, mood, and storytelling is extraordinary.',
    rating: 5,
    image: CATEGORY_IMAGES.fashion[0],
  },
  {
    id: 5,
    name: 'Suresh & Lakshmi Iyer',
    event: 'Destination Wedding',
    location: 'Goa',
    quote: 'From the first consultation to the final album delivery, every interaction felt premium. This is what luxury photography truly means.',
    rating: 5,
    image: '/generated/event-1.png',
  },
  {
    id: 6,
    name: 'Karthik Nair',
    event: 'Corporate Headshots',
    location: 'Bangalore',
    quote: 'Our entire leadership team\'s portraits were transformed. Professional, modern, and perfectly aligned with our brand identity. Highly recommended.',
    rating: 5,
    image: CATEGORY_IMAGES.corporate[0],
  },
];

// ──────────────────────────────────────
// FAQ
// ──────────────────────────────────────

export const FAQ_DATA = [
  {
    category: 'Booking',
    questions: [
      {
        q: 'How far in advance should I book?',
        a: 'For weddings and large events, we recommend booking 3-6 months in advance. Popular dates fill quickly, especially during wedding season (October-February). For other services, 2-4 weeks notice is typically sufficient.',
      },
      {
        q: 'What is the booking process?',
        a: 'Begin with an inquiry through our website, WhatsApp, or phone call. We\'ll schedule a consultation to understand your vision, discuss packages, and finalize details. A 30% advance secures your date.',
      },
      {
        q: 'Can I customize my package?',
        a: 'Absolutely. Every client is unique, and we believe your photography package should be too. All our packages can be tailored to your specific requirements, preferences, and budget.',
      },
    ],
  },
  {
    category: 'Pricing',
    questions: [
      {
        q: 'Why don\'t you display fixed prices?',
        a: 'Every project is unique in scope, duration, and creative requirements. Fixed pricing would either underserve premium clients or overcharge simpler projects. We provide transparent, customized quotes after understanding your needs.',
      },
      {
        q: 'What payment methods do you accept?',
        a: 'We accept bank transfers, UPI, credit/debit cards, and Razorpay for advance payments. A 30% advance is required to confirm your booking, with the balance due before the event.',
      },
    ],
  },
  {
    category: 'Services',
    questions: [
      {
        q: 'Do you travel for destination shoots?',
        a: 'Yes. We travel worldwide for weddings, portraits, campaigns, and destination productions. Travel, accommodation, permits, and local production requirements are included in a clear custom quote.',
      },
      {
        q: 'How long does it take to receive final photos?',
        a: 'Edited highlights are delivered within 7-10 business days. Complete galleries with full retouching take 4-6 weeks for weddings and 2-3 weeks for other services. Rush delivery is available.',
      },
      {
        q: 'Do you provide raw/unedited photos?',
        a: 'We deliver professionally edited images that represent our artistic vision and quality standards. Raw files are not included as they don\'t reflect our finished work, but can be discussed for premium packages.',
      },
    ],
  },
  {
    category: 'Technical',
    questions: [
      {
        q: 'What equipment do you use?',
        a: 'We use professional-grade Canon and Sony mirrorless systems, cinema-grade lenses, professional lighting setups, DJI drones, and RED/Blackmagic cinema cameras for videography.',
      },
      {
        q: 'Do you offer videography along with photography?',
        a: 'Yes, we offer combined photo and video packages. Having both teams from Pro Shoot ensures seamless coordination and a consistent visual style across all deliverables.',
      },
    ],
  },
];

// ──────────────────────────────────────
// Blog (15 SEO posts)
// ──────────────────────────────────────

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image: string;
  featured: boolean;
  author: string;
  tags: string[];
  content: string;
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: 'telugu-wedding-photography-guide',
    title: 'The Complete Telugu Wedding Photography Guide',
    excerpt: 'From Pellikuthuru to Muhurtham — a comprehensive guide to capturing every sacred ritual of a traditional Telugu wedding with cinematic elegance.',
    category: 'Wedding',
    date: '2026-06-10',
    readTime: '12 min read',
    image: CATEGORY_IMAGES.wedding[0],
    featured: true,
    author: 'Pro Shoot Studios',
    tags: ['Telugu Wedding', 'South Indian', 'Wedding Photography', 'Traditions'],
    content: `A Telugu wedding is a grand celebration that spans multiple days, each filled with deeply meaningful rituals, vibrant colors, and overwhelming emotions. As photographers who have covered hundreds of Telugu weddings across Andhra Pradesh, Telangana, and destination locations, we understand that every ceremony tells a unique story.

## Understanding Telugu Wedding Rituals

### Pellikuthuru & Snathakam
The pre-wedding ceremonies begin with Pellikuthuru (the bride's preparation) and Snathakam (the groom's sacred thread ceremony). These intimate moments are often overlooked by photographers unfamiliar with Telugu traditions. We always assign a dedicated photographer to capture the turmeric application, the playful moments with family, and the emotional getting-ready sequences.

### Muhurtham — The Sacred Moment
The Muhurtham is the most auspicious moment — when the groom ties the Mangalsutra around the bride's neck. This happens at a precise time determined by the pandit, and there's absolutely no room for error in capturing it. Our lead photographers position themselves at three angles simultaneously: the tying moment, the couple's expressions, and the family's reactions.

### Talambralu — The Showering of Rice
The Talambralu ceremony, where the couple showers each other with rice mixed with turmeric, is one of the most photogenic moments. The golden rice catching the light, the competitive spirit between families, the burst of laughter — we use high-speed burst mode to capture every grain in motion.

## Photography Tips for Telugu Weddings

**Lighting**: Telugu wedding mandapams are often adorned with marigold flowers and banana leaves, creating warm, golden tones. We use this natural warmth and complement it with our lighting to create a cinematic look.

**Timing**: Always coordinate with the pandit. Telugu ceremonies follow strict astrological timings, and the key moments happen in precise windows.

**Candid Approach**: The most emotional moments in Telugu weddings happen between the rituals — the grandmother's tears during the Kashi Yatra, the brother's protective hand during Kanyadanam. These candid moments are what clients treasure most.

**Color Palette**: Telugu brides typically wear red and gold, which photographs beautifully against the green mandapam decorations. We adjust our white balance to preserve these rich, warm tones.

## Choosing Your Wedding Photographer

When selecting a photographer for your Telugu wedding, ensure they understand the significance of each ritual. Ask to see their previous Telugu wedding work, and discuss the specific ceremonies that are most important to your family. A photographer who understands your traditions will know exactly when to be ready and where to position themselves.

At Pro Shoot, we don't just document your wedding — we preserve the cultural heritage, the family emotions, and the sacred moments that make Telugu weddings truly magnificent.`,
  },
  {
    slug: 'south-indian-wedding-trends-2026',
    title: 'South Indian Wedding Photography Trends 2026',
    excerpt: 'Discover the latest trends shaping South Indian wedding photography — from drone mandapam shots to AI-enhanced editing and minimalist editorial styles.',
    category: 'Wedding',
    date: '2026-05-28',
    readTime: '10 min read',
    image: CATEGORY_IMAGES.wedding[1],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Trends', 'South Indian', 'Wedding Photography', '2026'],
    content: `The South Indian wedding photography landscape is evolving rapidly, blending centuries-old traditions with cutting-edge technology. Here are the defining trends of 2026 that every couple should know about.

## 1. Cinematic Drone Mandapam Coverage

Drone photography has become a must-have for South Indian weddings. The bird's-eye view of a beautifully decorated mandapam, with the couple at the center surrounded by family — this single shot has become the most requested image in our portfolio. We use DJI Mavic 3 Pro for its exceptional low-light capability, perfect for evening ceremonies.

## 2. Editorial Minimalism

Gone are the overly edited, heavily filtered images. 2026 couples prefer clean, editorial styles that let the natural beauty of the ceremony shine. This means minimal retouching, authentic skin tones, and a focus on composition over effects. The South Indian bride's natural glow in a Kanjeevaram saree needs no filter.

## 3. AI-Assisted Culling and Editing

We now use AI tools to assist in the initial culling of thousands of images, but every final edit is hand-crafted by our photographers. This technology allows us to deliver galleries faster without compromising our artistic standards.

## 4. Intimate Moment Photography

Micro-weddings during the pandemic taught us the beauty of intimate moments. Even in large South Indian weddings with 1000+ guests, couples now specifically request intimate portraits — quiet moments stolen between the chaos, private glances during the ceremony, and emotional exchanges that happen away from the crowd.

## 5. Day-After Sessions

A growing trend we love — day-after sessions where the couple can relax in their wedding attire at a beautiful location without the time pressure of the wedding day. This gives us creative freedom to experiment with lighting, poses, and locations.

## 6. Vertical Video for Social Media

Instagram Reels and YouTube Shorts have created demand for vertical-format wedding films. We now shoot with this in mind, creating dedicated content for social media alongside traditional horizontal footage.

## 7. Heritage Property Locations

Couples are choosing heritage properties, temples, and ancestral homes as wedding venues, and this architectural richness adds incredible depth to photography. The interplay of ancient stone, warm lighting, and modern fashion creates compelling visual narratives.

The key to great South Indian wedding photography in 2026 is understanding that tradition and modernity can coexist beautifully. The best photographers honor the cultural significance of every ritual while presenting it through a contemporary artistic lens.`,
  },
  {
    slug: 'best-pre-wedding-locations-hyderabad',
    title: 'Best Pre-Wedding Shoot Locations in Hyderabad',
    excerpt: 'From the iconic Charminar to the serene Durgam Cheruvu — discover Hyderabad\'s most stunning locations for your pre-wedding photoshoot.',
    category: 'Pre-Wedding',
    date: '2026-05-15',
    readTime: '8 min read',
    image: CATEGORY_IMAGES.preWedding[0],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Pre-Wedding', 'Hyderabad', 'Locations', 'South India'],
    content: `Hyderabad — the City of Pearls — offers an extraordinary blend of heritage architecture, modern landscapes, and natural beauty that makes it a dream destination for pre-wedding photography. Here are our top picks based on years of shooting in this magnificent city.

## Heritage & Historical

### 1. Chowmahalla Palace
The former residence of the Nizams offers regal architecture with European and Persian influences. The grand durbar hall, the ornate corridors, and the vintage car collection provide multiple shooting options. Best visited during weekday mornings for fewer crowds.

### 2. Falaknuma Palace
This stunning Nizam-era palace sits atop a hill with panoramic views of the city. While access is limited, the exterior gardens and the road leading up to the palace offer breathtaking backdrops. The golden hour light hitting the palace facade is absolutely magical.

### 3. Taramati Baradari
This historical monument on the banks of the Musi River offers Qutub Shahi architecture with open skies. The sunset views from here are spectacular, and the minimal crowd makes it ideal for intimate sessions.

## Modern & Urban

### 4. Durgam Cheruvu
The cable-stayed bridge over Durgam Cheruvu (Secret Lake) has become an iconic pre-wedding location. The modern architecture reflecting in the lake, especially during blue hour, creates stunning compositions.

### 5. Ramoji Film City
India's largest film studio complex offers virtually unlimited backdrops — from European streets to Japanese gardens, from palace sets to natural landscapes. It's an entire pre-wedding destination in one location.

### 6. Lumbini Park & Tank Bund
The Hussain Sagar lakefront provides serene water backgrounds and the iconic Buddha statue. Early morning sessions here catch beautiful mist and golden light.

## Natural & Scenic

### 7. Ananthagiri Hills
Just 80 km from Hyderabad, these hills offer misty forests, coffee plantations, and dramatic elevation. The drive itself through winding roads provides multiple shooting spots.

### 8. KBR National Park
The green lung of Hyderabad offers lush forest paths, rocky outcrops, and dappled sunlight — perfect for nature-loving couples who want an earthy, organic feel.

## Pro Tips for Hyderabad Pre-Wedding Shoots

- **Permissions**: Most heritage locations require photography permits. Book at least 2 weeks in advance.
- **Best Months**: October to February for pleasant weather and golden light.
- **Golden Hour**: Hyderabad's golden hour is particularly dramatic. Plan your most important shots for 4:30-6:00 PM.
- **Traffic**: Start early or shoot on Sundays to avoid Hyderabad traffic delays.

At Pro Shoot, we handle all location permissions, timing, and logistics so you can focus on being in love while we focus on capturing it.`,
  },
  {
    slug: 'seemantham-photography-ideas',
    title: 'Seemantham Photography Ideas: Capture the Celebration',
    excerpt: 'Creative ideas and tips for documenting the beautiful Seemantham ceremony — from traditional rituals to modern celebration styles.',
    category: 'Maternity',
    date: '2026-05-01',
    readTime: '7 min read',
    image: CATEGORY_IMAGES.maternity[0],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Seemantham', 'Maternity', 'South Indian', 'Traditions'],
    content: `The Seemantham (also known as Valaikappu in Tamil Nadu or Seemantham in Andhra/Telangana) is one of the most joyous and colorful celebrations in a South Indian woman's pregnancy journey. It's the equivalent of a baby shower but deeply rooted in cultural significance and ritual beauty.

## Understanding the Ceremony

Seemantham is typically performed in the 7th or 9th month of pregnancy. The ceremony involves applying sindoor to the mother-to-be's hair parting, adorning her with bangles, and blessing her with prayers for a safe delivery. The visual richness of this ceremony — the flowers, the kumkum, the silk sarees, the glass bangles — makes it a photographer's paradise.

## Must-Capture Moments

### The Preparation
- The mother-to-be getting dressed in her finest silk saree (usually green or yellow)
- The intricate kolam/rangoli designs at the entrance
- The decorated pooja thali with turmeric, kumkum, and flowers
- Family members arriving with gifts and bangles

### The Rituals
- The applying of sindoor by elder women
- The bangle-wearing ceremony — the sound and color of glass bangles being slid onto the wrists
- Aarti being performed around the expectant mother
- The exchange of gifts between families

### The Celebrations
- The mother-to-be surrounded by her closest women
- Games and fun activities (popular in modern Seemanthams)
- The blessing moments — elders placing their hands on the mother's head
- Group photos with family and friends

## Creative Photography Ideas

**1. Bangle Detail Shots**: Close-up of the green and red glass bangles on the mother's wrists, with shallow depth of field. This is the quintessential Seemantham image.

**2. Saree Draping Sequence**: A behind-the-scenes style documentation of the saree draping process — it tells a story of preparation and anticipation.

**3. Mehendi Close-ups**: If the mother has had mehendi done, capture the intricate patterns on her hands cradling her belly.

**4. Floral Compositions**: Use the abundant flowers (jasmine, marigold, roses) as framing elements in portraits.

**5. Emotional Moments**: The most treasured images are always the candid emotional ones — the mother's tear of joy, the grandmother's proud smile, the husband's protective gaze.

**6. Flat-lay of Offerings**: A top-down composition of all the pooja items arranged artistically makes for a beautiful memory.

## Modern Seemantham Trends

Today's Seemanthams often blend traditional rituals with modern celebrations:
- Custom photo booths with traditional props
- Gender reveal integrated into the ceremony
- Professional videography with same-day reels
- Themed decorations (tropical, garden, royal)
- Coordinated family outfits for group portraits

At Pro Shoot, we bring cultural sensitivity and artistic excellence to every Seemantham we cover. We understand the significance of each ritual and ensure every meaningful moment is preserved beautifully.`,
  },
  {
    slug: 'maternity-photography-traditional-sarees',
    title: 'Maternity Photography in Traditional Sarees',
    excerpt: 'How to create stunning maternity portraits in Kanjeevaram, Banarasi, and other traditional sarees — styling tips, poses, and inspiration.',
    category: 'Maternity',
    date: '2026-04-18',
    readTime: '8 min read',
    image: CATEGORY_IMAGES.maternity[1],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Maternity', 'Saree', 'Traditional', 'Photography Tips'],
    content: `There's something profoundly beautiful about maternity photography in a traditional saree. The way the silk drapes over the baby bump, the rich colors framing the mother's glow, the cultural significance woven into every thread — it creates imagery that is both timeless and deeply personal.

## Why Sarees Work Beautifully for Maternity

The saree is perhaps the most flattering garment for maternity photography. Unlike structured western outfits, a saree naturally accommodates the changing body, can be draped in multiple ways to showcase or gently cover the bump, and its flowing fabric creates beautiful movement in photographs.

## Best Sarees for Maternity Photography

### Kanjeevaram Silk
The queen of South Indian sarees. The rich, heavy silk with gold zari creates a regal, premium look. Best for studio sessions where the weight won't be tiring. The deep reds, greens, and purples photograph magnificently.

### Banarasi Silk
Lighter than Kanjeevaram but equally ornate. The intricate brocade patterns add texture and visual interest. Excellent for both studio and outdoor sessions.

### Chiffon & Georgette
Lighter fabrics that create beautiful flowing effects, especially in outdoor sessions with wind. The sheer quality allows for creative draping that suggests the bump without revealing it fully.

### Cotton Handloom
For a more earthy, organic maternity look. Ikat, Pochampally, and Mangalagiri sarees create a beautiful connection to Indian textile heritage.

## Styling Tips

**Draping**: The below-belly drape is most flattering for maternity. The pallu can be draped over one shoulder to create elegant lines, or loosely held to create movement.

**Jewelry**: Keep it elegant and traditional. Temple jewelry, vintage gold, or fresh flower jewelry all work beautifully. Heavy necklaces can help draw the eye upward for a balanced composition.

**Hair**: A loose side braid with flowers (jasmine gajra) is the classic South Indian maternity look. Or a soft bun with mogra for a more modern feel.

**Makeup**: Dewy, natural makeup with a focus on glowing skin. The pregnancy glow is real — enhance it, don't mask it.

## Posing Guide

1. **Profile Silhouette**: Standing sideways with the saree pallu flowing — this classic pose beautifully showcases the bump
2. **Cradling**: Both hands gently cradling the bump with the saree draped to frame the gesture
3. **Looking Down**: Mother looking down at her bump — a universally emotional pose
4. **Walking Away**: The mother walking away from camera, looking over her shoulder — the saree creates beautiful trailing lines
5. **Seated**: Cross-legged on the floor with the saree spread around — a grounded, peaceful pose
6. **With Partner**: The partner behind, hands on the bump over the saree — intimate and warm

## Our Approach at Pro Shoot

We maintain a curated collection of sarees in our studio for clients who want to experiment. Our styling team helps with draping, and we use warm, directional lighting to complement the silk's natural sheen. Every session is unhurried, with breaks for comfort, and our gentle direction helps even camera-shy mothers feel confident and beautiful.`,
  },
  {
    slug: 'baby-photography-tips',
    title: '10 Essential Baby Photography Tips for New Parents',
    excerpt: 'Expert advice for capturing beautiful baby photos — from the best timing and lighting to safety precautions and creative setup ideas.',
    category: 'Baby',
    date: '2026-04-05',
    readTime: '7 min read',
    image: CATEGORY_IMAGES.baby[0],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Baby Photography', 'Tips', 'Newborn', 'Parents Guide'],
    content: `Bringing home a new baby is one of life's most magical experiences, and those tiny fingers, sleepy yawns, and peaceful expressions deserve to be preserved in stunning photographs. Whether you're planning a professional session or want to capture beautiful images at home, here are our top 10 tips.

## 1. Timing is Everything

For newborn photography, the ideal window is 5-14 days after birth. During this period, babies are naturally sleepy, curly, and easy to pose. They haven't yet developed the startle reflex that makes older babies harder to photograph in certain poses. For milestone sessions, we recommend 3, 6, 9, and 12 months — each age brings new expressions and abilities.

## 2. Keep the Room Warm

Babies lose body heat quickly, especially when undressed for photos. We maintain our studio at 28-30°C for newborn sessions. If you're doing photos at home, ensure the room is warm enough that the baby stays comfortable and sleepy throughout the session.

## 3. Feed Before the Session

A well-fed baby is a happy baby. We always recommend feeding your baby just before the session. A full tummy helps them sleep more soundly and stay content during the shoot. Don't worry about burp cloths and extra feedings during the session — we plan for breaks.

## 4. White Noise is Your Friend

The sound of shushing, a white noise machine, or even a hair dryer (from a safe distance) can work wonders in keeping newborns calm and asleep. Our studio uses continuous white noise during sessions.

## 5. Natural Light is Best

Soft, natural window light creates the most beautiful, flattering portraits of babies. Position the baby near a large window with sheer curtains for diffused light. Avoid direct sunlight and flash photography, which can be harsh and startling.

## 6. Focus on Details

Some of the most treasured baby photos are the extreme close-ups: tiny toes, curled fingers, rosebud lips, wispy hair, the belly button. These details change so quickly — within weeks they'll look completely different.

## 7. Include the Family

While solo baby portraits are beautiful, the images that families treasure most are often the ones showing connection — mom's hand supporting the baby's head, dad's arms cradling the tiny body, siblings meeting the baby for the first time.

## 8. Keep It Simple

Simple backgrounds and minimal props keep the focus on your beautiful baby. A plain white or cream blanket, a simple wrap, or a wooden bowl are all you need. Avoid busy patterns and too many props that distract from the main subject.

## 9. Be Patient

Baby photography requires extraordinary patience. Babies operate on their own schedule — they'll need to be fed, changed, soothed, and sometimes they simply won't cooperate. Our sessions are never rushed; we allow 2-3 hours with plenty of breaks.

## 10. Safety First, Always

Never leave a baby unattended on an elevated surface. Always have a spotter within arm's reach. Use beanbags and soft surfaces. Composite images (baby in a hanging basket, for example) should only be attempted by trained professionals using composite techniques — the baby is never actually suspended.

At Pro Shoot, baby safety is our absolute priority. Our photographers are trained in newborn handling, and we maintain the highest safety standards in our studio.`,
  },
  {
    slug: 'fashion-photography-trends-2026',
    title: 'Fashion Photography Trends That Are Defining 2026',
    excerpt: 'From sustainable fashion shoots to AI-assisted styling — explore the trends transforming fashion photography in India and globally.',
    category: 'Fashion',
    date: '2026-03-22',
    readTime: '9 min read',
    image: CATEGORY_IMAGES.fashion[0],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Fashion', 'Trends', '2026', 'Editorial'],
    content: `The fashion photography industry is undergoing a renaissance. New technologies, changing aesthetics, and evolving social media platforms are reshaping how we create and consume fashion imagery. Here are the trends defining 2026.

## 1. Raw Authenticity Over Perfection

The era of heavily retouched, unattainable beauty standards is fading. Brands and agencies are increasingly requesting images that celebrate natural beauty — real skin textures, diverse body types, and genuine expressions. This doesn't mean unprofessional photography; it means technically excellent work that celebrates authenticity.

## 2. Heritage Textiles in Modern Contexts

Indian fashion photography is experiencing a beautiful fusion of heritage textiles with contemporary styling. Kanjeevaram sarees styled with sneakers, Bandhani prints in urban settings, handloom fabrics in minimalist compositions — this cultural-modern blend is creating some of the most compelling fashion imagery.

## 3. Motion and Video-First

Static lookbooks are being replaced by dynamic content. Fashion clients now expect a mix of still photography and motion content — cinemagraphs, short video loops, and behind-the-scenes reels. We shoot with this dual-output approach from the start.

## 4. Sustainable and Eco-Conscious Shoots

Brands are asking for shoots that reflect their sustainability values. This means natural locations over elaborate sets, reusable props, minimal waste, and even carbon-neutral production planning. The aesthetic result is often more organic and compelling.

## 5. Inclusive Representation

Fashion photography in India is finally embracing true diversity — different ages, body types, skin tones, and abilities. This isn't just a trend; it's a permanent shift that makes fashion imagery more relatable and impactful.

## 6. Bold Color Storytelling

After years of muted, desaturated aesthetics, bold colors are back. Vibrant backgrounds, saturated clothing, and dramatic color grading create images that stop the scroll on social media.

## 7. Location as Character

The shooting location is no longer just a background — it's a character in the story. Fashion photographers are choosing locations that add narrative depth: factories, historical monuments, marketplaces, and natural landscapes that tell a story beyond the garment.

## 8. AI-Assisted Creative Direction

AI tools are being used for mood board creation, color palette suggestions, and even virtual try-on previews before the shoot. This pre-visualization saves time and budget while enabling more creative experimentation.

At Pro Shoot, we stay at the intersection of these trends while maintaining our commitment to timeless imagery that serves both the brand's immediate needs and their long-term visual legacy.`,
  },
  {
    slug: 'drone-wedding-coverage-benefits',
    title: 'Why Drone Coverage is Essential for Your Wedding',
    excerpt: 'Discover how professional drone photography and videography can elevate your wedding documentation to cinematic heights.',
    category: 'Drone',
    date: '2026-03-10',
    readTime: '6 min read',
    image: CATEGORY_IMAGES.drone[0],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Drone', 'Wedding', 'Aerial Photography', 'Coverage'],
    content: `There's a moment in every drone wedding video that takes your breath away — when the camera lifts above the venue and reveals the full grandeur of the celebration that's invisible from ground level. This single perspective has made drone coverage one of the most requested additions to wedding packages in 2026.

## The Perspectives Only Drones Can Capture

### Venue Grandeur
Whether it's a heritage palace in Rajasthan, a beach resort in Goa, or a beautifully decorated function hall in Hyderabad, a drone reveals the complete scale and beauty of your venue. The mandapam decorations, the seating arrangements, the floral installations — all come together in one breathtaking frame.

### The Baraat
A drone following the groom's procession from above captures the energy, the dancing, the horse or car, and the entire entourage in a way that no ground-level camera can. This is consistently one of our most popular drone shots.

### Group Portraits with a Twist
Imagine your entire family and guest list looking up at the camera from a beautiful formation, with the venue as the backdrop. Drone group shots have replaced traditional ground-level group photos as the must-have image.

### Departure Shot
The couple driving away after the reception, filmed from above as the car disappears down a tree-lined road — this is cinema, not just photography.

## Technical Excellence

At Pro Shoot, we use professional-grade DJI drones equipped with Hasselblad cameras capable of 20MP stills and 5.1K video. Our pilots are DGCA licensed and insured, ensuring full regulatory compliance and safety.

## Safety and Regulations

- We only fly in approved airspace
- We maintain safe distances from people and structures
- We carry comprehensive insurance
- We always have a visual observer alongside the pilot
- We check weather conditions and cancel if unsafe

## When Drones Don't Work

We're honest about limitations:
- Indoor ceremonies (most mandapam ceremonies)
- Heavy rain or high winds
- Airport proximity restrictions
- Very crowded, enclosed spaces

For these situations, we use elevated photography from building tops or crane-mounted cameras to achieve similar perspectives.

## Investment

Drone coverage typically adds ₹15,000-25,000 to your package, depending on the duration and complexity. For the unique perspectives it provides, it's one of the best value-additions to any wedding package.`,
  },
  {
    slug: 'wedding-cinematography-guide',
    title: 'The Complete Guide to Wedding Cinematography',
    excerpt: 'Everything you need to know about wedding films — from choosing a cinematographer to understanding different styles and deliverables.',
    category: 'Wedding',
    date: '2026-02-25',
    readTime: '11 min read',
    image: CATEGORY_IMAGES.wedding[2],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Wedding', 'Cinematography', 'Video', 'Guide'],
    content: `Wedding cinematography has evolved from simple video recording to a sophisticated art form that rivals feature film production. Today's wedding films are cinematic experiences that combine storytelling, music, and emotion into something families treasure for generations.

## Photography vs. Cinematography

While photography captures decisive moments in still frames, cinematography captures motion, sound, and the flow of time. The sound of the mantras, the movement of the bride walking down the aisle, the burst of confetti — these experiences need motion to be fully preserved.

## Styles of Wedding Cinematography

### Documentary
Unscripted, unobtrusive coverage that captures events as they unfold naturally. The cinematographer is a fly on the wall, documenting without directing. This style feels authentic and real.

### Cinematic
Directed, story-driven films with planned sequences, creative angles, and narrative structure. Think of it as a short film about your wedding day. This style is more produced and dramatic.

### Hybrid
The most popular approach in 2026 — a blend of documentary coverage during the ceremony and directed cinematic sequences during the couple's portraits and key moments.

## Essential Deliverables

### Highlight Film (5-8 minutes)
The emotional centerpiece — a carefully edited, music-driven film that captures the essence of your wedding day. This is what you'll share on social media and watch most often.

### Ceremony Film (Full Length)
Complete documentation of the ceremony — Muhurtham, vows, mantras, Saptapadi. This is the archival record that future generations will watch.

### Reception Highlights (3-5 minutes)
The party! Toasts, dances, cake cutting, and the exit — edited to capture the celebration energy.

### Social Media Reels (60-90 seconds)
Quick-cut, vertical-format edits optimized for Instagram Reels, YouTube Shorts, and WhatsApp stories.

## Audio Matters

Great wedding films have great audio. This means:
- Wireless lapel mics on the couple and officiant
- Ambient audio recorders near the ceremony
- Licensed music for the highlight film
- Clean audio mixing in post-production

## Choosing Your Cinematographer

Ask these questions:
1. Can I see a full wedding film (not just a highlight reel)?
2. How many camera operators will be on-site?
3. What equipment do you use?
4. How do you handle audio recording?
5. What's the turnaround time?
6. How do you coordinate with the photographer?

At Pro Shoot, our photography and cinematography teams are integrated, ensuring seamless coverage where no camera blocks another and both teams work in harmony to capture your day completely.`,
  },
  {
    slug: 'destination-wedding-photography-guide',
    title: 'Destination Wedding Photography: A Complete Planning Guide',
    excerpt: 'Planning a destination wedding? Here\'s everything you need to know about photography logistics, locations, and making the most of your stunning venue.',
    category: 'Wedding',
    date: '2026-02-10',
    readTime: '9 min read',
    image: CATEGORY_IMAGES.drone[1],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Destination Wedding', 'Planning', 'Photography', 'Travel'],
    content: `Destination weddings combine the magic of travel with the joy of celebration, creating extraordinary settings for photography. From the lakeside palaces of Udaipur to the beaches of Goa, from the tea gardens of Munnar to international destinations — here's how to plan the photography for your dream destination wedding.

## Choosing a Destination-Ready Photographer

Not every great studio photographer can handle destination weddings. You need a team that's experienced with:
- Adapting to unfamiliar venues quickly
- Working in varying light conditions
- Managing equipment during travel
- Coordinating across time zones
- Creating a backup plan for weather

## Top Destination Wedding Locations in India

### Udaipur, Rajasthan
The "City of Lakes" offers palatial venues like Oberoi Udaivilas, Taj Lake Palace, and City Palace. The architecture, the lakes, the golden desert light — it's photography paradise.

### Goa
Beach weddings with sunset ceremonies, Portuguese-era churches, and lush tropical settings. The casual elegance of Goa creates a relaxed, joyful atmosphere.

### Kerala
Backwater ceremonies, lush green landscapes, and cultural richness. Kumarakom, Alleppey, and Munnar offer diverse natural backdrops.

### Jaipur, Rajasthan
The Pink City's forts and palaces (Amer Fort, Samode Palace) provide majestic backdrops that make every couple look like royalty.

### Mahabalipuram, Tamil Nadu
Heritage temples, beach settings, and the Shore Temple at sunset create a uniquely South Indian destination experience.

## Planning Timeline for Destination Photography

**6 Months Before**: Book your photographer, discuss vision, begin planning
**3 Months Before**: Venue recce visit (or virtual recce via video call)
**1 Month Before**: Finalize shot list, timeline, and logistics
**1 Week Before**: Final coordination with venue, planner, and photo team
**Day Before**: Scout lighting conditions, plan ceremony positions

## Budget Considerations

Destination wedding photography typically costs 20-40% more than local coverage due to:
- Travel and accommodation for the team (2-4 people)
- Equipment insurance for travel
- Additional shooting days (most destinations = multi-day events)
- Location-specific permits

## Weather Backup Plans

Always have an indoor backup plan. We've had destination weddings where:
- Beach ceremonies were moved indoors due to rain
- Outdoor receptions were shifted to covered areas
- We've used dramatic weather as a creative advantage (rain photos can be stunning!)

At Pro Shoot, we've covered destination weddings across 25+ cities and 3 countries. We handle all our own logistics, equipment backup, and creative planning so you can focus on enjoying your celebration.`,
  },
  {
    slug: 'traditional-telugu-wedding-rituals',
    title: 'Traditional Telugu Wedding Rituals — A Visual Guide',
    excerpt: 'An illustrated guide to every ritual in a traditional Telugu wedding — from Nischitartham to Grihapravesham.',
    category: 'Wedding',
    date: '2026-01-28',
    readTime: '10 min read',
    image: CATEGORY_IMAGES.wedding[3],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Telugu Wedding', 'Rituals', 'Traditions', 'Guide'],
    content: `A traditional Telugu wedding is a multi-day celebration that follows ancient Vedic traditions passed down through generations. Each ritual carries deep spiritual significance and offers unique photographic opportunities.

## Pre-Wedding Ceremonies

### Nischitartham (Engagement)
The formal betrothal ceremony where the families exchange gifts and the couple exchanges rings. The highlight is the akshata ceremony — the showering of turmeric rice on the couple. Photography focus: the ring exchange, family blessings, the joy of both families coming together.

### Pellikuthuru (Bride's Preparation)
This ceremony is exclusively for the bride and her female relatives. Turmeric paste (pasupu) is applied to the bride's skin. Photography focus: the intimate women's gathering, the turmeric application, the bride's emotional moments with her mother and grandmother.

### Snathakam (Groom's Ceremony)
The groom undergoes a sacred thread ceremony and a ritual "Kashi Yatra" where he pretends to leave for a life of asceticism, only to be convinced by the bride's family to return for marriage. Photography focus: the mock dramatic departure, the family's playful convincing, the groom's playful expressions.

## Wedding Day

### Mangala Snanam (Holy Bath)
An early morning ritual bath for both bride and groom at their respective homes. Photography focus: the sacred water pouring, the turmeric and sandalwood preparation.

### Kanya Daan & Kanyadanam
The father of the bride formally gives his daughter's hand to the groom. This is often the most emotional moment of the wedding. Photography focus: the father's tears, the hand-giving gesture, the mother's emotions.

### Muhurtham (Auspicious Time)
The most sacred moment — the groom ties the Mangalsutra (Thaali) around the bride's neck at the exact auspicious time. Three knots are tied — two by the groom and one by his sister. Photography focus: THE moment — multiple angles, continuous burst shooting, family reactions.

### Talambralu (Rice Ceremony)
The couple showers each other with jeelakarra bellam (cumin and jaggery) mixed rice. This competitive, joyful ceremony symbolizes the couple's playful companionship. Photography focus: the flying rice, the competitive spirit, the laughter.

### Saptapadi (Seven Steps)
The couple takes seven steps together around the sacred fire, each step representing a vow. Photography focus: the fire reflections on their faces, the circling movement, the sacred flames.

## Post-Wedding

### Arundhati Darshana
The couple is shown the twin stars Arundhati and Vasishtha, symbolizing an ideal marriage. Photography focus: the couple looking up at the sky, the intimate moment of shared viewing.

### Grihapravesham (Welcoming Home)
The bride enters her new home, kicking a pot of rice at the entrance (symbolizing prosperity). Photography focus: the ceremonial entrance, the rice pot, the family's welcoming.

Each of these rituals deserves respectful, knowledgeable coverage. At Pro Shoot, our photographers are trained in Telugu wedding traditions to ensure no meaningful moment is missed.`,
  },
  {
    slug: 'luxury-wedding-planning-guide',
    title: 'The Luxury Wedding Planning Guide for South Indian Families',
    excerpt: 'A comprehensive guide to planning a luxury South Indian wedding — from venue selection and décor to photography and entertainment.',
    category: 'Wedding',
    date: '2026-01-15',
    readTime: '12 min read',
    image: CATEGORY_IMAGES.wedding[4],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Luxury', 'Wedding Planning', 'South Indian', 'Guide'],
    content: `Planning a luxury South Indian wedding is an art that balances opulence with tradition, grandeur with intimacy, and modern aesthetics with cultural heritage. This guide covers everything you need to create an unforgettable celebration.

## Setting the Budget

Luxury weddings in South India typically range from ₹50 lakhs to ₹5 crores+. Key budget allocations:
- Venue & Hospitality: 30-40%
- Décor & Florals: 15-20%
- Photography & Videography: 8-12%
- Catering: 15-20%
- Entertainment & Music: 5-8%
- Outfits & Jewelry: 10-15%
- Miscellaneous: 5-10%

## Venue Selection

### Heritage Properties
Taj Falaknuma Palace (Hyderabad), ITC Grand Chola (Chennai), Leela Palace (Bangalore) — these venues provide built-in grandeur that reduces décor needs while providing world-class hospitality.

### Temple Complexes
For traditional families, temple weddings at Tirumala, Srirangam, or Meenakshi Temple offer unparalleled spiritual significance. Photography planning here requires advance permissions and an understanding of temple protocols.

### Resort Destinations
Kumarakom Lake Resort, Vivanta Coorg, and Evolve Back Hampi offer natural beauty combined with luxury amenities. These venues are perfect for multi-day celebrations.

## The Décor Philosophy

Luxury South Indian wedding décor is moving toward:
- Abundant fresh flowers (jasmine, marigold, roses, orchids)
- Traditional banana leaf and kolam elements elevated with modern design
- Brass and gold accents throughout the venue
- Statement mandapam with traditional and contemporary elements
- Lighting that creates ambiance without overpowering

## Photography & Videography Planning

For a luxury wedding, expect:
- Lead photographer + 2-3 second shooters
- Dedicated videography team (2-3 camera operators)
- Drone operator for aerial coverage
- Same-day edit for reception screening
- Full coverage from getting ready to vidaai

## Timeline Management

A well-planned timeline is the secret to great photography at luxury weddings:
- 6:00 AM — Mangala Snanam coverage begins
- 7:00 AM — Getting ready documentation
- 9:00 AM — Pre-ceremony rituals (Kashi Yatra, etc.)
- 10:00 AM — Main ceremony (Muhurtham)
- 12:00 PM — Post-ceremony couple portraits
- 1:00 PM — Lunch reception
- 6:00 PM — Evening reception setup
- 7:00 PM — Grand reception entry and celebrations
- 10:00 PM — Vidaai and departure

## Vendor Coordination

The mark of a truly luxury wedding is seamless vendor coordination:
- All vendors should have a shared timeline
- A wedding planner should coordinate between vendors
- Photography and videography teams need advance venue access
- Makeup and styling should be completed 30 minutes before photography begins

At Pro Shoot, we work closely with South India's top wedding planners to ensure our coverage integrates seamlessly with every other element of your luxury celebration.`,
  },
  {
    slug: 'choosing-wedding-photographers-india',
    title: 'How to Choose the Right Wedding Photographer in India',
    excerpt: 'A practical guide to finding and selecting the perfect wedding photographer — what to look for, questions to ask, and red flags to avoid.',
    category: 'Wedding',
    date: '2025-12-20',
    readTime: '8 min read',
    image: CATEGORY_IMAGES.preWedding[1],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Wedding Photography', 'Guide', 'Hiring', 'India'],
    content: `Choosing the right wedding photographer is one of the most important decisions in your wedding planning process. Your flowers will wilt, the food will be eaten, and the décor will be dismantled — but your photographs will be the lasting legacy of your wedding day.

## Start Early

For peak wedding season (October-February), top photographers are booked 6-12 months in advance. Begin your search at least 6 months before your wedding date. For off-season dates, 3-4 months is usually sufficient.

## Where to Find Photographers

1. **Instagram**: Search location-specific hashtags like #HyderabadWeddingPhotographer or #BangaloreWeddingPhotography
2. **Wedding platforms**: WedMeGood, Shaadi Saga, and WeddingWire India
3. **Referrals**: Ask recently married friends and family
4. **Google**: Search for "[city] wedding photographer" and look at Google reviews

## What to Look for in Their Portfolio

- **Consistency**: Don't just look at the best images. Look at full wedding galleries to see if the quality is consistent throughout.
- **Similar Weddings**: Have they shot weddings similar to yours? Telugu, Tamil, Kannada weddings all have different rituals.
- **Emotion**: Do their photos make you feel something? Technical excellence is important, but emotional storytelling is what makes photography great.
- **Lighting**: Look at how they handle challenging lighting — dark temples, outdoor ceremonies, mixed lighting at receptions.

## Questions to Ask

1. How many weddings have you covered?
2. How many photographers will be at my wedding?
3. What's your backup plan if you're sick or have an emergency?
4. Can I see a complete wedding gallery (not just highlights)?
5. What's your editing turnaround time?
6. Do you provide RAW files?
7. How do you handle low-light situations?
8. What equipment do you use and do you carry backups?

## Red Flags

- **No full galleries available**: If they can only show you 20-30 "best" images, the rest might be inconsistent.
- **Very cheap pricing**: Quality photography requires expensive equipment, years of training, and professional editing. Extremely low prices often mean compromised quality.
- **No contract**: A professional photographer should always work with a written contract.
- **Unwilling to share equipment details**: Professionals are proud of their gear and happy to discuss it.
- **No backup equipment plan**: What happens if a camera fails during your Muhurtham?

## Budget Expectations

In India's major cities:
- **Budget**: ₹25,000-50,000 (1-2 photographers, basic editing)
- **Mid-range**: ₹50,000-1,50,000 (2-3 photographers, professional editing, album)
- **Premium**: ₹1,50,000-5,00,000+ (Full team, cinematic coverage, luxury album, drone)

Remember, your photographs are not an expense — they're an investment in memories that appreciate in emotional value every single year.`,
  },
  {
    slug: 'wedding-album-design-trends',
    title: 'Wedding Album Design Trends: From Classic to Contemporary',
    excerpt: 'Explore the latest trends in luxury wedding album design — materials, layouts, storytelling approaches, and preservation techniques.',
    category: 'Albums',
    date: '2025-12-05',
    readTime: '7 min read',
    image: CATEGORY_IMAGES.wedding[0],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Wedding Album', 'Design', 'Trends', 'Luxury'],
    content: `A wedding album is more than a collection of photographs — it's a physical artifact that tells the story of your most important day. In an age of digital everything, the tactile experience of turning album pages has become even more meaningful and precious.

## Material Trends

### Covers
- **Premium Leather**: Italian full-grain leather remains the gold standard for luxury albums. Popular colors: deep brown, burgundy, navy, and black.
- **Velvet**: Making a major comeback, especially in jewel tones — emerald green, royal blue, and deep purple.
- **Linen**: For a more contemporary, minimalist aesthetic. Light gray, cream, and natural tones.
- **Acrylic/Glass**: A modern statement with a cover image visible through crystal-clear acrylic.

### Pages
- **Flush Mount**: Pages that lay completely flat, with images printed edge-to-edge. The premium standard.
- **Lay-Flat**: Similar to flush mount but with a different binding technique. The pages open 180° flat.
- **Fine Art**: Thick, textured paper with a matte finish for a gallery-quality feel.

## Design Approaches

### The Cinematic Story
Pages are designed like film stills, with wide panoramic images, dramatic crops, and a strong narrative arc from getting ready to departure.

### Minimalist Editorial
Clean layouts with generous white space, one or two images per spread, and elegant typography. Lets each photograph breathe and commands attention.

### Magazine Style
Multiple images per spread with varied sizes and layouts. This approach works well for weddings with many events and creates a comprehensive record.

### Chronological Documentary
A faithful, sequential documentation of the day from start to finish. Every ceremony, every transition captured in order.

## Personalization

Modern couples are requesting:
- **Custom embossing**: Names, dates, and monograms in gold or silver foil
- **Handwritten elements**: Calligraphy of vows or special messages incorporated into the design
- **QR codes**: Linking to the wedding video or digital gallery on a page
- **Milestone pages**: Dedicated pages for the first dance, the first look, the family portrait

## Preservation

A luxury album should last 100+ years:
- UV-protective coating on all pages
- Acid-free paper and adhesives
- Climate-controlled storage recommended
- Presentation box for protection
- Avoid direct sunlight display

## Our Album Process at Pro Shoot

1. **Curation**: We select the 150-200 best images from your wedding gallery
2. **Design**: Our designers create a first draft with 40-60 pages
3. **Review**: You review and request changes (up to 3 revision rounds)
4. **Production**: Handcrafted by artisan bookbinders over 3-4 weeks
5. **Delivery**: Presented in a premium linen presentation box

Every album we create is a one-of-a-kind heirloom that tells your unique love story through the art of design and the craft of fine bookmaking.`,
  },
  {
    slug: 'south-indian-bridal-photography-guide',
    title: 'South Indian Bridal Photography: Capturing Tradition & Elegance',
    excerpt: 'A complete guide to photographing the South Indian bride — from the muhurtham look to jewelry details, saree draping, and emotional moments.',
    category: 'Wedding',
    date: '2025-11-20',
    readTime: '9 min read',
    image: CATEGORY_IMAGES.maternity[2],
    featured: false,
    author: 'Pro Shoot Studios',
    tags: ['Bridal', 'South Indian', 'Wedding', 'Photography Guide'],
    content: `The South Indian bride is a vision of elegance — draped in rich silk, adorned with temple jewelry, and radiating a timeless beauty that has been celebrated for centuries. Photographing her requires understanding the cultural significance of every element and the artistry to present it all in its full glory.

## The South Indian Bridal Look

### The Saree
The Kanjeevaram silk saree is the crown jewel of South Indian bridal wear. The rich silk, the gold zari work, the vibrant colors (predominantly red, with variations in maroon, green, and gold) — each element has been perfected over centuries. Photography should capture:
- The saree's texture and zari work in detail shots
- The draping style (varies by region — Tamil, Telugu, Kannada, Malayalam)
- The full-length silhouette showing the saree's grandeur

### Temple Jewelry
The distinctive temple jewelry of South Indian brides — the maang tikka, necklaces (manga malai, kasu malai), waistbelt (oddiyanam), nose ring, and jhumkas — each piece is a work of art. We dedicate specific time in our shot list for:
- Individual jewelry detail shots
- The jewelry adorning the bride (in-context shots)
- The jeweler's box with all pieces arranged

### The Metti and Kolam
Often overlooked but deeply meaningful — the silver toe rings (metti) and the kolam patterns at the doorstep. These cultural details add authenticity and depth to the bridal story.

## Photographing Key Moments

### Getting Ready
The South Indian bride's getting ready ritual is elaborate and beautiful:
- The tying of the saree (each regional variation is different)
- The application of kumkum and jasmine in the hair
- The final look in the mirror
- The mother's blessing before leaving for the mandapam

### The Muhurtham
This is the most important moment. Our approach:
- Lead photographer positioned for the Mangalsutra tying moment
- Second shooter capturing the family's reactions
- Third angle for the wide mandapam shot
- 10 fps burst shooting to capture the exact moment

### Garland Exchange (Jai Mala)
The playful garland exchange, often with the groom and bride being lifted by friends, is one of the most energetic and photogenic moments.

## Lighting Challenges

South Indian weddings present unique lighting challenges:
- **Temple/Mandapam**: Often dim with mixed lighting (tungsten, natural, LED). We use bounce flash and LED panels to supplement without overpowering the ambient mood.
- **Outdoor Ceremonies**: The bright South Indian sun can create harsh shadows. We use diffusers and reflectors, and time our formal portraits for golden hour.
- **Evening Receptions**: Typically well-lit but with colored event lighting that can affect skin tones. We custom white balance for accuracy.

## Cultural Sensitivity

Every great South Indian bridal photographer must:
- Know which moments are sacred and should be captured respectfully from a distance
- Understand when to blend in and when to direct
- Respect the bride's comfort — these ceremonies are physically demanding (heavy saree, jewelry, heat)
- Coordinate with the pandit on timing without disrupting the ceremony

At Pro Shoot, our photographers have deep roots in South Indian culture. We don't just photograph weddings — we celebrate the traditions that make each one unique and sacred.`,
  },
];

// ──────────────────────────────────────
// Albums
// ──────────────────────────────────────

export interface AlbumData {
  id: string;
  title: string;
  category: CategoryKey;
  description: string;
  coverImage: string;
  images: string[];
  imageCount: number;
}

export const ALBUMS: AlbumData[] = [
  {
    id: 'wedding-album',
    title: 'Wedding Collection',
    category: 'wedding',
    description: 'Sacred vows, golden moments, and timeless celebrations captured with cinematic elegance.',
    coverImage: CATEGORY_IMAGES.wedding[0],
    images: CATEGORY_IMAGES.wedding,
    imageCount: CATEGORY_IMAGES.wedding.length,
  },
  {
    id: 'pre-wedding-album',
    title: 'Pre-Wedding Stories',
    category: 'preWedding',
    description: 'Romantic love stories told through stunning locations and intimate chemistry.',
    coverImage: CATEGORY_IMAGES.preWedding[0],
    images: CATEGORY_IMAGES.preWedding,
    imageCount: CATEGORY_IMAGES.preWedding.length,
  },
  {
    id: 'maternity-album',
    title: 'Maternity Portraits',
    category: 'maternity',
    description: 'The extraordinary beauty of motherhood celebrated in every glowing portrait.',
    coverImage: CATEGORY_IMAGES.maternity[0],
    images: CATEGORY_IMAGES.maternity,
    imageCount: CATEGORY_IMAGES.maternity.length,
  },
  {
    id: 'baby-album',
    title: 'Baby & Newborn',
    category: 'baby',
    description: 'Precious milestones and tender moments of your little one\'s journey.',
    coverImage: CATEGORY_IMAGES.baby[0],
    images: CATEGORY_IMAGES.baby,
    imageCount: CATEGORY_IMAGES.baby.length,
  },
  {
    id: 'fashion-album',
    title: 'Fashion Portfolio',
    category: 'fashion',
    description: 'Editorial excellence and modern styling that defines and inspires.',
    coverImage: CATEGORY_IMAGES.fashion[0],
    images: CATEGORY_IMAGES.fashion,
    imageCount: CATEGORY_IMAGES.fashion.length,
  },
  {
    id: 'drone-album',
    title: 'Aerial Perspectives',
    category: 'drone',
    description: 'Breathtaking bird\'s-eye views that reveal the grandeur of celebrations.',
    coverImage: CATEGORY_IMAGES.drone[0],
    images: CATEGORY_IMAGES.drone,
    imageCount: CATEGORY_IMAGES.drone.length,
  },
  {
    id: 'corporate-album',
    title: 'Corporate & Professional',
    category: 'corporate',
    description: 'Professional imagery that elevates brand presence and executive identity.',
    coverImage: CATEGORY_IMAGES.corporate[0],
    images: CATEGORY_IMAGES.corporate,
    imageCount: CATEGORY_IMAGES.corporate.length,
  },
  {
    id: 'products-album',
    title: 'Product Showcase',
    category: 'products',
    description: 'Luxury product photography that makes every item irresistible.',
    coverImage: CATEGORY_IMAGES.products[0],
    images: CATEGORY_IMAGES.products,
    imageCount: CATEGORY_IMAGES.products.length,
  },
  {
    id: 'bts-album',
    title: 'Behind The Scenes',
    category: 'bts',
    description: 'A glimpse into our creative process and the passion behind every shot.',
    coverImage: CATEGORY_IMAGES.bts[0],
    images: CATEGORY_IMAGES.bts,
    imageCount: CATEGORY_IMAGES.bts.length,
  },
];

// ──────────────────────────────────────
// Insights
// ──────────────────────────────────────

export interface InsightData {
  id: string;
  title: string;
  excerpt: string;
  category: 'Wedding' | 'Pre Wedding' | 'Maternity' | 'Drone' | 'Cinematography' | 'Albums' | 'Photography Tips';
  image: string;
  date: string;
  readTime: string;
}

export const INSIGHTS: InsightData[] = [
  {
    id: 'luxury-wedding-timeline',
    title: 'How to Build a Wedding Photography Timeline That Breathes',
    excerpt: 'A practical timeline for relaxed portraits, complete ritual coverage, and cinematic reception moments without rushing the couple.',
    category: 'Wedding',
    image: CATEGORY_IMAGES.wedding[1],
    date: '2026-06-12',
    readTime: '8 min',
  },
  {
    id: 'golden-hour-couple-portraits',
    title: 'Golden Hour Couple Portraits: What Actually Makes Them Work',
    excerpt: 'How direction, lens choice, fabric movement, and backlight combine to create natural portraits with a premium editorial feel.',
    category: 'Photography Tips',
    image: CATEGORY_IMAGES.preWedding[2],
    date: '2026-06-05',
    readTime: '5 min',
  },
  {
    id: 'pre-wedding-location-planning',
    title: 'Pre Wedding Location Planning for Natural Chemistry',
    excerpt: 'A photographer-friendly guide to choosing locations that give couples movement, privacy, flattering light, and visual variety.',
    category: 'Pre Wedding',
    image: CATEGORY_IMAGES.preWedding[3],
    date: '2026-05-29',
    readTime: '6 min',
  },
  {
    id: 'drone-venue-reveal',
    title: 'Drone Venue Reveals: The Shots Couples Remember',
    excerpt: 'From mandapam top-downs to procession flyovers, here are the aerial sequences that add scale without overwhelming the story.',
    category: 'Drone',
    image: CATEGORY_IMAGES.drone[1],
    date: '2026-05-22',
    readTime: '7 min',
  },
  {
    id: 'maternity-session-comfort',
    title: 'Designing a Comfortable Maternity Photography Session',
    excerpt: 'Timing, poses, saree draping, breaks, and lighting choices that keep maternity portraits elegant and genuinely comfortable.',
    category: 'Maternity',
    image: CATEGORY_IMAGES.maternity[1],
    date: '2026-05-14',
    readTime: '5 min',
  },
  {
    id: 'cinematic-wedding-film-structure',
    title: 'What Makes a Wedding Film Feel Cinematic',
    excerpt: 'The structure behind emotionally rich wedding films: audio, pacing, transitions, scene selection, and color consistency.',
    category: 'Cinematography',
    image: CATEGORY_IMAGES.bts[1],
    date: '2026-05-04',
    readTime: '7 min',
  },
  {
    id: 'album-paper-guide',
    title: 'A Simple Guide to Premium Album Paper and Finishes',
    excerpt: 'Matte, lustre, archival paper, UV coating, and flush-mount spreads explained in plain language before you approve your album.',
    category: 'Albums',
    image: CATEGORY_IMAGES.products[1],
    date: '2026-04-27',
    readTime: '6 min',
  },
  {
    id: 'bridal-details-checklist',
    title: 'The Bridal Detail Checklist Photographers Love',
    excerpt: 'Jewelry, invitations, heirlooms, perfume, florals, and textiles to keep ready for refined getting-ready photographs.',
    category: 'Wedding',
    image: CATEGORY_IMAGES.wedding[2],
    date: '2026-04-18',
    readTime: '5 min',
  },
  {
    id: 'pre-wedding-outfit-palette',
    title: 'Pre Wedding Outfit Palettes That Photograph Beautifully',
    excerpt: 'How to coordinate color, texture, and silhouette across two locations without making the session look over-styled.',
    category: 'Pre Wedding',
    image: CATEGORY_IMAGES.preWedding[4],
    date: '2026-04-06',
    readTime: '6 min',
  },
  {
    id: 'newborn-album-storytelling',
    title: 'Building a Newborn Album That Feels Like a Story',
    excerpt: 'A thoughtful album flow for newborn sessions, from tiny details and parent portraits to quiet nursery moments.',
    category: 'Albums',
    image: CATEGORY_IMAGES.baby[2],
    date: '2026-03-26',
    readTime: '6 min',
  },
  {
    id: 'drone-safety-weddings',
    title: 'Drone Safety at Weddings: What Couples Should Ask',
    excerpt: 'The questions that separate professional aerial coverage from risky flying, including permissions, crowd safety, and backup plans.',
    category: 'Drone',
    image: CATEGORY_IMAGES.drone[2],
    date: '2026-03-18',
    readTime: '5 min',
  },
  {
    id: 'maternity-saree-portraits',
    title: 'Maternity Saree Portraits: Styling for Grace and Movement',
    excerpt: 'How fabric, pleats, jewelry, and posing create timeless maternity portraits rooted in personal style.',
    category: 'Maternity',
    image: CATEGORY_IMAGES.maternity[3],
    date: '2026-03-09',
    readTime: '7 min',
  },
  {
    id: 'low-light-ceremony-lighting',
    title: 'Low-Light Ceremony Photography Without Harsh Flash',
    excerpt: 'Techniques for preserving ambience while keeping skin tones clean during indoor rituals and evening ceremonies.',
    category: 'Photography Tips',
    image: CATEGORY_IMAGES.bts[0],
    date: '2026-02-28',
    readTime: '6 min',
  },
  {
    id: 'cinematography-audio-vows',
    title: 'Why Clean Audio Matters More Than Another Camera Angle',
    excerpt: 'A look at vows, ambient sound, speeches, and music beds that make wedding films feel personal instead of generic.',
    category: 'Cinematography',
    image: CATEGORY_IMAGES.bts[2],
    date: '2026-02-16',
    readTime: '5 min',
  },
  {
    id: 'album-layout-mistakes',
    title: 'Album Layout Mistakes That Make Beautiful Photos Feel Busy',
    excerpt: 'How image count, white space, sequencing, and spread hierarchy affect the emotional rhythm of a premium album.',
    category: 'Albums',
    image: CATEGORY_IMAGES.wedding[3],
    date: '2026-02-03',
    readTime: '6 min',
  },
  {
    id: 'portrait-object-positioning',
    title: 'Cropping Portraits for Web Without Losing Faces',
    excerpt: 'A web-ready guide to aspect ratios, object positioning, negative space, and responsive crops for people-focused images.',
    category: 'Photography Tips',
    image: CATEGORY_IMAGES.fashion[2],
    date: '2026-01-21',
    readTime: '5 min',
  },
  {
    id: 'wedding-reception-lighting',
    title: 'Reception Lighting Setups That Still Feel Luxurious',
    excerpt: 'Balancing stage LEDs, dance-floor movement, and skin tones for reception images that feel polished and alive.',
    category: 'Wedding',
    image: CATEGORY_IMAGES.wedding[4],
    date: '2026-01-12',
    readTime: '7 min',
  },
  {
    id: 'pre-wedding-rain-plan',
    title: 'A Rain Plan for Pre Wedding Shoots',
    excerpt: 'How transparent umbrellas, indoor alternates, lens choices, and wardrobe backups turn uncertain weather into atmosphere.',
    category: 'Pre Wedding',
    image: CATEGORY_IMAGES.preWedding[5],
    date: '2025-12-18',
    readTime: '5 min',
  },
  {
    id: 'maternity-family-portraits',
    title: 'Including Partners and Children in Maternity Portraits',
    excerpt: 'Simple direction for family maternity images that feel intimate, balanced, and focused on connection.',
    category: 'Maternity',
    image: CATEGORY_IMAGES.maternity[4],
    date: '2025-12-04',
    readTime: '5 min',
  },
  {
    id: 'cinematic-drone-transitions',
    title: 'Cinematic Drone Transitions for Wedding Films',
    excerpt: 'How aerial shots can connect locations, establish scale, and add calm pacing between emotional scenes.',
    category: 'Cinematography',
    image: CATEGORY_IMAGES.drone[3],
    date: '2025-11-22',
    readTime: '5 min',
  },
];
