'use client';

import { useState } from 'react';
import { FAQ_DATA } from '@/lib/constants';
import { Search, ChevronDown } from 'lucide-react';

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [openIndex, setOpenIndex] = useState<string | null>(null);

  const categories = ['All', ...FAQ_DATA.map((c) => c.category)];
  const allQuestions = FAQ_DATA.flatMap((cat) =>
    cat.questions.map((q) => ({ ...q, category: cat.category }))
  );

  const filtered = allQuestions.filter((q) => {
    const matchCat = activeCategory === 'All' || q.category === activeCategory;
    const matchSearch = q.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.a.toLowerCase().includes(searchQuery.toLowerCase());
    return matchCat && matchSearch;
  });

  return (
    <>
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-luxury text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Help Center</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            Frequently <span className="text-gold-gradient">Asked</span>
          </h1>
          <p className="font-subheading text-xl text-text-secondary max-w-2xl mx-auto">
            Find answers to common questions about our services, process, and pricing
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container-luxury max-w-3xl">
          {/* Search */}
          <div className="relative mb-8">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-text-muted" />
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="form-input pl-12 py-4 rounded-xl"
            />
          </div>

          {/* Category Tabs */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
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

          {/* Questions */}
          <div className="space-y-3">
            {filtered.map((item, i) => {
              const key = `${item.category}-${i}`;
              return (
                <div key={key} className="border border-border rounded-xl overflow-hidden hover:border-border-gold transition-colors duration-300">
                  <button
                    onClick={() => setOpenIndex(openIndex === key ? null : key)}
                    className="w-full flex items-center justify-between gap-4 p-6 text-left"
                    aria-expanded={openIndex === key}
                  >
                    <div>
                      <span className="text-[10px] uppercase tracking-[0.2em] text-gold block mb-1">{item.category}</span>
                      <span className="text-text-primary font-medium text-sm md:text-base">{item.q}</span>
                    </div>
                    <ChevronDown className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${openIndex === key ? 'rotate-180' : ''}`} />
                  </button>
                  <div className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${openIndex === key ? 'max-h-96' : 'max-h-0'}`}>
                    <p className="px-6 pb-6 text-text-secondary text-sm leading-relaxed">{item.a}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-16">
              <p className="text-text-muted">No questions found matching your search.</p>
            </div>
          )}
        </div>
      </section>
    </>
  );
}
