'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, X, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';
import { CATEGORY_IMAGES } from '@/lib/imageData';

const CATEGORIES = ['All', 'Weddings', 'Pre Wedding', 'Maternity', 'Baby Shoot', 'Family', 'Corporate', 'Fashion', 'Drone'];

const FRAME_RATIOS = [
  'aspect-[4/5]',
  'aspect-[5/4]',
  'aspect-[3/4]',
  'aspect-[4/5]',
  'aspect-[4/3]',
] as const;

const PORTFOLIO_ITEMS = [
  { id: 1, src: CATEGORY_IMAGES.wedding[0], title: 'Sacred Vows', category: 'Weddings', location: 'Udaipur', position: 'center' },
  { id: 2, src: CATEGORY_IMAGES.wedding[1], title: 'Golden Mandapam', category: 'Weddings', location: 'Dubai', position: 'center 42%' },
  { id: 3, src: CATEGORY_IMAGES.wedding[2], title: 'Royal Celebration', category: 'Weddings', location: 'Jaipur', position: 'center 38%' },
  { id: 4, src: CATEGORY_IMAGES.preWedding[0], title: 'Eternal Vows', category: 'Pre Wedding', location: 'Bali', position: 'center' },
  { id: 5, src: CATEGORY_IMAGES.preWedding[1], title: 'Tea Garden Romance', category: 'Pre Wedding', location: 'Sri Lanka', position: 'center 45%' },
  { id: 6, src: CATEGORY_IMAGES.preWedding[2], title: 'Garden Dreams', category: 'Pre Wedding', location: 'Lake Como', position: 'center' },
  { id: 7, src: CATEGORY_IMAGES.maternity[0], title: 'Radiant Glow', category: 'Maternity', location: 'Studio', position: 'center 36%' },
  { id: 8, src: CATEGORY_IMAGES.maternity[1], title: 'Mother Earth', category: 'Maternity', location: 'Bangalore', position: 'center 40%' },
  { id: 9, src: CATEGORY_IMAGES.maternity[2], title: 'Silk & Soul', category: 'Maternity', location: 'Singapore', position: 'center 36%' },
  { id: 10, src: CATEGORY_IMAGES.baby[0], title: 'First Light', category: 'Baby Shoot', location: 'Studio', position: 'center' },
  { id: 11, src: CATEGORY_IMAGES.baby[1], title: 'Tiny Miracle', category: 'Baby Shoot', location: 'Studio', position: 'center' },
  { id: 12, src: CATEGORY_IMAGES.baby[2], title: 'Sweet Dreams', category: 'Baby Shoot', location: 'Studio', position: 'center' },
  { id: 13, src: '/images/shoot-2.png', title: 'Family Heirloom', category: 'Family', location: 'Bangalore', position: 'center 35%' },
  { id: 14, src: '/generated/portfolio-maternity.png', title: 'Generations', category: 'Family', location: 'Chennai', position: 'center' },
  { id: 15, src: CATEGORY_IMAGES.corporate[0], title: 'Executive Presence', category: 'Corporate', location: 'Bangalore', position: 'center 35%' },
  { id: 16, src: CATEGORY_IMAGES.corporate[1], title: 'Brand Summit', category: 'Corporate', location: 'London', position: 'center' },
  { id: 17, src: CATEGORY_IMAGES.fashion[0], title: 'Editorial Elegance', category: 'Fashion', location: 'Paris', position: 'center 32%' },
  { id: 18, src: CATEGORY_IMAGES.fashion[1], title: 'Modern Muse', category: 'Fashion', location: 'Studio', position: 'center 36%' },
  { id: 19, src: CATEGORY_IMAGES.drone[0], title: 'Aerial Perspectives', category: 'Drone', location: 'Bangalore', position: 'center' },
  { id: 20, src: CATEGORY_IMAGES.drone[1], title: 'Above the Horizon', category: 'Drone', location: 'Maldives', position: 'center' },
];

export default function PortfolioPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filtered = PORTFOLIO_ITEMS.filter((item) => {
    const matchCategory = activeCategory === 'All' || item.category === activeCategory;
    const matchSearch = item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-luxury text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Work</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-gold-gradient">Portfolio</span>
          </h1>
          <p className="font-subheading text-xl text-text-secondary max-w-2xl mx-auto">
            A curated collection of our finest work across weddings, portraits, and visual storytelling
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="sticky top-20 z-30 border-b border-border bg-bg-primary py-5 glass">
        <div className="container-luxury">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            {/* Category Tabs */}
            <div className="flex w-full gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:w-auto lg:pb-0">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`shrink-0 rounded-full px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                    activeCategory === cat
                      ? 'bg-gold text-bg-primary font-semibold'
                      : 'border border-border text-text-secondary hover:border-gold/50 hover:text-gold'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search */}
            <div className="relative w-full shrink-0 sm:w-64">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <input
                type="text"
                placeholder="Search portfolio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full rounded-full border border-border bg-bg-card text-sm text-text-primary outline-none transition-all duration-300 placeholder:text-text-muted focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
                style={{ padding: '10px 16px 10px 40px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury">
          {filtered.length === 0 ? (
            <div className="text-center py-20">
              <p className="text-text-muted text-lg">No projects found matching your criteria.</p>
            </div>
          ) : (
            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3">
              {filtered.map((item, idx) => (
                <button
                  type="button"
                  key={item.id}
                  className="group relative mb-5 block w-full break-inside-avoid overflow-hidden rounded-lg bg-bg-card text-left cursor-pointer hover-lift"
                  onClick={() => setLightboxIndex(idx)}
                  aria-label={`Open ${item.title} from ${item.location}`}
                >
                  <div className={`relative ${FRAME_RATIOS[(item.id - 1) % FRAME_RATIOS.length]}`}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                      style={{ objectPosition: item.position }}
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/5 to-transparent transition-opacity duration-500 group-hover:opacity-90" />
                  <div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-500 group-hover:-translate-y-1">
                    <p className="mb-1 text-[10px] uppercase tracking-[0.2em] text-gold">{item.category} • {item.location}</p>
                    <h3 className="font-heading text-xl text-white">{item.title}</h3>
                  </div>
                  <div className="absolute right-4 top-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                    <Maximize2 className="w-5 h-5 text-white/80" />
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center" onClick={() => setLightboxIndex(null)}>
          <button onClick={() => setLightboxIndex(null)} className="absolute top-6 right-6 text-white/80 hover:text-white z-10" aria-label="Close">
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(Math.max(0, lightboxIndex - 1)); }}
            className="absolute left-6 text-white/80 hover:text-white z-10"
            aria-label="Previous"
          >
            <ChevronLeft className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); setLightboxIndex(Math.min(filtered.length - 1, lightboxIndex + 1)); }}
            className="absolute right-6 text-white/80 hover:text-white z-10"
            aria-label="Next"
          >
            <ChevronRight className="w-8 h-8" />
          </button>

          <div className="relative w-[90vw] h-[80vh]" onClick={(e) => e.stopPropagation()}>
            <Image
              src={filtered[lightboxIndex].src}
              alt={filtered[lightboxIndex].title}
              fill
              className="object-contain"
              sizes="90vw"
              priority
            />
          </div>

          <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-center">
            <h3 className="font-heading text-xl text-white mb-1">{filtered[lightboxIndex].title}</h3>
            <p className="text-white/60 text-sm">{filtered[lightboxIndex].category} • {filtered[lightboxIndex].location}</p>
          </div>
        </div>
      )}
    </>
  );
}
