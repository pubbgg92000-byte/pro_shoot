'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Search, X, Share2, Maximize2, ChevronLeft, ChevronRight } from 'lucide-react';

const CATEGORIES = ['All', 'Wedding', 'Pre-Wedding', 'Baby', 'Events', 'Corporate', 'Fashion', 'Drone'];

const PORTFOLIO_ITEMS = [
  { id: 1, src: '/images/shoot-3.png', title: 'The Golden Hour', category: 'Wedding', location: 'Udaipur' },
  { id: 2, src: '/images/shoot-2.png', title: 'Eternal Vows', category: 'Pre-Wedding', location: 'Kerala' },
  { id: 3, src: '/images/baby-shoot-1.png', title: 'First Light', category: 'Baby', location: 'Studio' },
  { id: 4, src: '/images/shoot-3.png', title: 'Sacred Bonds', category: 'Wedding', location: 'Goa' },
  { id: 5, src: '/images/shoot-2.png', title: 'Forest Dreams', category: 'Pre-Wedding', location: 'Coorg' },
  { id: 6, src: '/images/baby-shoot-1.png', title: 'Tender Bloom', category: 'Baby', location: 'Studio' },
  { id: 7, src: '/images/shoot-3.png', title: 'Royal Celebration', category: 'Wedding', location: 'Jaipur' },
  { id: 8, src: '/images/shoot-2.png', title: 'Monsoon Love', category: 'Pre-Wedding', location: 'Munnar' },
  { id: 9, src: '/sequences/drone_hover/frame_000120.png', title: 'Aerial Perspectives', category: 'Drone', location: 'Bangalore' },
  { id: 10, src: '/images/shoot-3.png', title: 'Timeless Grace', category: 'Wedding', location: 'Mumbai' },
  { id: 11, src: '/images/baby-shoot-1.png', title: 'Sweet Dreams', category: 'Baby', location: 'Studio' },
  { id: 12, src: '/images/shoot-2.png', title: 'Garden Romance', category: 'Pre-Wedding', location: 'Ooty' },
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
      <section className="py-8 bg-bg-primary border-b border-border sticky top-20 z-30 glass">
        <div className="container-luxury">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Category Tabs */}
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs uppercase tracking-wider transition-all duration-300 ${
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
            <div className="relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-text-muted pointer-events-none" />
              <input
                type="text"
                placeholder="Search portfolio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-bg-card border border-border rounded-full text-sm text-text-primary placeholder:text-text-muted outline-none w-64 transition-all duration-300 focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
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
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {filtered.map((item, idx) => (
                <div
                  key={item.id}
                  className="break-inside-avoid group relative rounded-2xl overflow-hidden cursor-pointer hover-lift"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className={idx % 3 === 0 ? 'aspect-[3/4]' : idx % 3 === 1 ? 'aspect-square' : 'aspect-[4/3]'}>
                    <Image
                      src={item.src}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">{item.category} • {item.location}</p>
                    <h3 className="font-heading text-lg text-text-primary">{item.title}</h3>
                  </div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Maximize2 className="w-5 h-5 text-white/80" />
                  </div>
                </div>
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
