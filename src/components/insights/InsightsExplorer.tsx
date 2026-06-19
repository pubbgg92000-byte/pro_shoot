'use client';

import { useMemo, useState } from 'react';
import Image from 'next/image';
import { ArrowUpRight, ChevronLeft, ChevronRight, Clock, Search } from 'lucide-react';
import { INSIGHTS } from '@/lib/constants';

const CATEGORIES = [
  'All',
  'Wedding',
  'Pre Wedding',
  'Maternity',
  'Drone',
  'Cinematography',
  'Albums',
  'Photography Tips',
];

const PAGE_SIZE = 6;

export function InsightsExplorer() {
  const [query, setQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [page, setPage] = useState(1);
  const featured = INSIGHTS[0];

  const filtered = useMemo(() => {
    const normalizedQuery = query.trim().toLowerCase();

    return INSIGHTS.slice(1).filter((item) => {
      const matchesCategory = activeCategory === 'All' || item.category === activeCategory;
      const matchesQuery =
        !normalizedQuery ||
        item.title.toLowerCase().includes(normalizedQuery) ||
        item.excerpt.toLowerCase().includes(normalizedQuery) ||
        item.category.toLowerCase().includes(normalizedQuery);

      return matchesCategory && matchesQuery;
    });
  }, [activeCategory, query]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const paginated = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  const setCategory = (category: string) => {
    setActiveCategory(category);
    setPage(1);
  };

  const setSearchQuery = (value: string) => {
    setQuery(value);
    setPage(1);
  };

  return (
    <>
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-luxury text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Studio Journal</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-gold-gradient">Insights</span>
          </h1>
          <p className="font-subheading text-xl text-text-secondary max-w-2xl mx-auto">
            Field-tested photography ideas for weddings, families, albums, films, and elevated visual storytelling.
          </p>
        </div>
      </section>

      <section className="pb-12 bg-bg-primary">
        <div className="container-luxury">
          <article className="grid grid-cols-1 overflow-hidden rounded-2xl border border-border bg-bg-card lg:grid-cols-2">
            <div className="relative aspect-[16/11] lg:aspect-auto">
              <Image
                src={featured.image}
                alt={featured.title}
                fill
                priority
                className="object-cover object-top"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <div className="mb-4 flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-gold/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                  Featured
                </span>
                <span className="text-[10px] uppercase tracking-[0.2em] text-text-muted">{featured.category}</span>
              </div>
              <h2 className="font-heading mb-4 text-3xl md:text-4xl">{featured.title}</h2>
              <p className="mb-6 leading-relaxed text-text-secondary">{featured.excerpt}</p>
              <div className="flex items-center gap-4 text-sm text-text-muted">
                <span className="flex items-center gap-1.5">
                  <Clock className="h-4 w-4 text-gold" />
                  {featured.readTime}
                </span>
                <span>{new Date(featured.date).toLocaleDateString('en-IN', { month: 'short', day: 'numeric', year: 'numeric' })}</span>
              </div>
            </div>
          </article>
        </div>
      </section>

      <section className="sticky top-16 z-30 border-y border-border bg-bg-primary/90 py-5 backdrop-blur-xl lg:top-20">
        <div className="container-luxury flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex gap-2 overflow-x-auto pb-1">
            {CATEGORIES.map((category) => (
              <button
                key={category}
                onClick={() => setCategory(category)}
                className={`shrink-0 rounded-full px-4 py-2 text-xs uppercase tracking-wider transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-gold text-bg-primary font-semibold'
                    : 'border border-border text-text-secondary hover:border-gold/50 hover:text-gold'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          <div className="relative w-full lg:w-80">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-text-muted" />
            <input
              type="search"
              value={query}
              onChange={(event) => setSearchQuery(event.target.value)}
              placeholder="Search insights..."
              className="w-full rounded-full border border-border bg-bg-card py-3 pl-11 pr-4 text-sm text-text-primary outline-none transition-all duration-300 placeholder:text-text-muted focus:border-gold focus:shadow-[0_0_0_3px_rgba(212,175,55,0.15)]"
            />
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-secondary">
        <div className="container-luxury">
          {paginated.length === 0 ? (
            <div className="py-20 text-center">
              <p className="text-lg text-text-muted">No insights match your search.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
              {paginated.map((item) => (
                <article key={item.id} className="group">
                  <div className="relative mb-6 aspect-[4/3] overflow-hidden rounded-2xl">
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="mb-3 flex items-center gap-3">
                    <span className="rounded-full border border-gold/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-gold">
                      {item.category}
                    </span>
                    <span className="text-xs text-text-muted">{item.readTime}</span>
                  </div>
                  <h3 className="font-heading mb-2 text-xl transition-colors group-hover:text-gold">{item.title}</h3>
                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-text-secondary">{item.excerpt}</p>
                  <div className="flex items-center gap-2 text-sm text-gold">
                    <span>Read Insight</span>
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1" />
                  </div>
                </article>
              ))}
            </div>
          )}

          {totalPages > 1 && (
            <div className="mt-14 flex items-center justify-center gap-3">
              <button
                onClick={() => setPage((value) => Math.max(1, value - 1))}
                disabled={currentPage === 1}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Previous page"
              >
                <ChevronLeft className="h-4 w-4" />
              </button>
              <span className="text-sm text-text-muted">
                Page {currentPage} of {totalPages}
              </span>
              <button
                onClick={() => setPage((value) => Math.min(totalPages, value + 1))}
                disabled={currentPage === totalPages}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border text-text-secondary transition-colors hover:border-gold hover:text-gold disabled:cursor-not-allowed disabled:opacity-40"
                aria-label="Next page"
              >
                <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
