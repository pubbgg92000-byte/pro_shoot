'use client';

import { useState } from 'react';
import { FAQ_DATA } from '@/lib/constants';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

export function FAQPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  // Flatten and take first 5 questions
  const questions = FAQ_DATA.flatMap((cat) =>
    cat.questions.map((q) => ({ ...q, category: cat.category }))
  ).slice(0, 5);

  return (
    <section className="section-padding bg-bg-primary" id="faq">
      <div className="container-luxury max-w-3xl">
        <div className="text-center mb-16">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Common Questions</p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Frequently <span className="text-gold-gradient">Asked</span>
          </h2>
        </div>

        <div className="space-y-3">
          {questions.map((item, i) => (
            <div
              key={i}
              className="border border-border rounded-xl overflow-hidden transition-colors duration-300 hover:border-border-gold"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
                aria-expanded={openIndex === i}
              >
                <span className="text-text-primary font-medium text-sm md:text-base">{item.q}</span>
                <ChevronDown
                  className={`w-5 h-5 text-gold flex-shrink-0 transition-transform duration-300 ${
                    openIndex === i ? 'rotate-180' : ''
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
                  openIndex === i ? 'max-h-96' : 'max-h-0'
                }`}
              >
                <p className="px-6 pb-6 text-text-secondary text-sm leading-relaxed">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/faq"
            className="inline-flex items-center gap-2 text-gold text-sm uppercase tracking-wider hover:text-gold-light transition-colors"
          >
            View All Questions →
          </Link>
        </div>
      </div>
    </section>
  );
}
