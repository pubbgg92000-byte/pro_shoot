// Pro Shoot — Centralized Image Data & Mapping
// Maps each photography category to its local image files

export type CategoryKey =
  | 'wedding'
  | 'preWedding'
  | 'baby'
  | 'maternity'
  | 'fashion'
  | 'drone'
  | 'corporate'
  | 'products'
  | 'bts';

export interface CategoryImage {
  src: string;
  alt: string;
  category: CategoryKey;
  title: string;
}

// ──────────────────────────────────────
// Raw image paths per category
// ──────────────────────────────────────

export const CATEGORY_IMAGES: Record<CategoryKey, string[]> = {
  wedding: [
    '/images/wedding/image.png',
    '/images/wedding/image%20copy.png',
    '/images/wedding/image%20copy%202.png',
    '/images/wedding/image%20copy%203.png',
    '/images/wedding/image%20copy%204.png',
  ],
  preWedding: [
    '/images/pre_wedding/image.png',
    '/images/pre_wedding/image%20copy.png',
    '/images/pre_wedding/image%20copy%202.png',
    '/images/pre_wedding/image%20copy%203.png',
    '/images/pre_wedding/image%20copy%204.png',
    '/images/pre_wedding/image%20copy%205.png',
    '/images/pre_wedding/image%20copy%206.png',
  ],
  baby: [
    '/images/baby/image.png',
    '/images/baby/image%20copy.png',
    '/images/baby/image%20copy%202.png',
    '/images/baby/image%20copy%203.png',
    '/images/baby/image%20copy%204.png',
    '/images/baby/image%20copy%205.png',
    '/images/baby/image%20copy%206.png',
  ],
  maternity: [
    '/images/maternity/image.png',
    '/images/maternity/image%20copy.png',
    '/images/maternity/image%20copy%202.png',
    '/images/maternity/image%20copy%203.png',
    '/images/maternity/image%20copy%204.png',
    '/images/maternity/image%20copy%205.png',
    '/images/maternity/image%20copy%206.png',
  ],
  fashion: [
    '/images/fashion/image.png',
    '/images/fashion/image%20copy.png',
    '/images/fashion/image%20copy%202.png',
    '/images/fashion/image%20copy%203.png',
    '/images/fashion/image%20copy%204.png',
    '/images/fashion/image%20copy%205.png',
  ],
  drone: [
    '/images/drone/image.png',
    '/images/drone/image%20copy.png',
    '/images/drone/image%20copy%202.png',
    '/images/drone/image%20copy%203.png',
    '/images/drone/image%20copy%204.png',
    '/images/drone/image%20copy%205.png',
    '/images/drone/image%20copy%206.png',
  ],
  corporate: [
    '/images/coorparate/image.png',
    '/images/coorparate/image%20copy.png',
    '/images/coorparate/image%20copy%202.png',
    '/images/coorparate/image%20copy%203.png',
  ],
  products: [
    '/images/products/image.png',
    '/images/products/image%20copy.png',
    '/images/products/image%20copy%202.png',
    '/images/products/image%20copy%203.png',
    '/images/products/image%20copy%204.png',
  ],
  bts: [
    '/images/behind_the%20sceens/image.png',
    '/images/behind_the%20sceens/image%20copy.png',
    '/images/behind_the%20sceens/image%20copy%202.png',
    '/images/behind_the%20sceens/image%20copy%203.png',
  ],
};

// ──────────────────────────────────────
// Category display metadata
// ──────────────────────────────────────

export const CATEGORY_META: Record<CategoryKey, { label: string; description: string }> = {
  wedding: {
    label: 'Wedding',
    description: 'Timeless moments of love, tradition, and celebration captured with cinematic elegance.',
  },
  preWedding: {
    label: 'Pre-Wedding',
    description: 'Romantic stories told through stunning locations and intimate chemistry.',
  },
  baby: {
    label: 'Baby',
    description: 'Precious milestones of your little one preserved in tender, artistic frames.',
  },
  maternity: {
    label: 'Maternity',
    description: 'Celebrating the extraordinary beauty of motherhood in every glowing portrait.',
  },
  fashion: {
    label: 'Fashion',
    description: 'Editorial excellence that commands attention and defines style.',
  },
  drone: {
    label: 'Drone',
    description: 'Breathtaking aerial perspectives that reveal the grandeur of your celebrations.',
  },
  corporate: {
    label: 'Corporate',
    description: 'Professional imagery that elevates your brand presence and executive identity.',
  },
  products: {
    label: 'Products',
    description: 'Luxury product photography that makes every item irresistible.',
  },
  bts: {
    label: 'Behind The Scenes',
    description: 'A glimpse into our creative process, the artistry, and the passion behind every shot.',
  },
};

// ──────────────────────────────────────
// Helper functions
// ──────────────────────────────────────

/** Get all images for a given category */
export function getCategoryImages(category: CategoryKey): string[] {
  return CATEGORY_IMAGES[category] || [];
}

/** Get the first (cover) image for a category */
export function getAlbumCover(category: CategoryKey): string {
  return CATEGORY_IMAGES[category]?.[0] || '/images/wedding/image.png';
}

/** ─────────────────────────────────────────────
 *  HERO IMAGES
 *  • 1 image  → static background (no slider)
 *  • 2+ images → auto-cycling slider (5 s each)
 *
 *  To add more: just append paths to the array.
 * ───────────────────────────────────────────── */
export const HERO_IMAGES: string[] = [
  '/images/shoot-3.png',    // original hero image
  // '/images/wedding/image.png',
  // '/images/pre_wedding/image.png',
  // '/images/maternity/image.png',
];

/** Get hero images (kept for backwards-compat) */
export function getHeroImages(): string[] {
  return HERO_IMAGES;
}

/** Map service slug to its category key */
export function slugToCategoryKey(slug: string): CategoryKey {
  const mapping: Record<string, CategoryKey> = {
    'wedding-photography': 'wedding',
    'pre-wedding-photography': 'preWedding',
    'maternity-photography': 'maternity',
    'baby-photography': 'baby',
    'fashion-photography': 'fashion',
    'drone-coverage': 'drone',
    'corporate-photography': 'corporate',
    'product-photography': 'products',
    'behind-the-scenes': 'bts',
  };
  return mapping[slug] || 'wedding';
}

/** Get all images for a service by its slug */
export function getServiceImages(slug: string): string[] {
  const key = slugToCategoryKey(slug);
  return getCategoryImages(key);
}

/** Get all portfolio items across all categories with metadata */
export function getAllPortfolioItems(): CategoryImage[] {
  const titles: Record<CategoryKey, string[]> = {
    wedding: ['Sacred Vows', 'Golden Hour', 'Eternal Bond', 'Divine Union', 'Royal Celebration'],
    preWedding: ['First Glance', 'Love Story', 'Starlit Romance', 'Garden Dreams', 'Sunset Promise', 'Timeless Two', 'Together Forever'],
    baby: ['First Light', 'Tiny Miracle', 'Sweet Dreams', 'Little Star', 'Tender Bloom', 'Angel Wings', 'Pure Joy'],
    maternity: ['Radiant Glow', 'Mother Earth', 'Graceful Wait', 'Silk & Soul', 'Blossoming Love', 'Golden Embrace', 'Celestial Bond'],
    fashion: ['Vogue Royale', 'Modern Muse', 'Editorial Edge', 'Style Statement', 'Haute Couture', 'Runway Dreams'],
    drone: ['Sky Canvas', 'Aerial Magic', 'Bird\'s Eye', 'Above & Beyond', 'Elevated Views', 'Cloud Nine', 'Panorama'],
    corporate: ['Executive Edge', 'Brand Vision', 'Corporate Soul', 'Professional Aura'],
    products: ['Product Story', 'Luxury Detail', 'Brand Essence', 'Visual Commerce', 'Art of Product'],
    bts: ['Behind the Magic', 'Making Of', 'Creative Process', 'The Studio'],
  };

  const items: CategoryImage[] = [];
  for (const [key, images] of Object.entries(CATEGORY_IMAGES)) {
    const categoryKey = key as CategoryKey;
    const categoryTitles = titles[categoryKey];
    images.forEach((src, i) => {
      items.push({
        src,
        alt: `${CATEGORY_META[categoryKey].label} photography — ${categoryTitles[i] || 'Pro Shoot'}`,
        category: categoryKey,
        title: categoryTitles[i] || `${CATEGORY_META[categoryKey].label} ${i + 1}`,
      });
    });
  }
  return items;
}

/** Get a subset of images for homepage category showcases */
export function getCategoryShowcaseData() {
  const showcaseCategories: CategoryKey[] = ['wedding', 'preWedding', 'maternity', 'baby', 'fashion', 'drone'];
  return showcaseCategories.map((key) => ({
    key,
    ...CATEGORY_META[key],
    images: CATEGORY_IMAGES[key],
  }));
}

/** All category keys (for iteration) */
export const ALL_CATEGORIES: CategoryKey[] = [
  'wedding', 'preWedding', 'baby', 'maternity', 'fashion', 'drone', 'corporate', 'products', 'bts',
];
