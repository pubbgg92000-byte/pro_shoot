'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import { ArrowUpRight, Clock } from 'lucide-react';

export function BlogHighlights() {
  return (
    <section className="section-padding bg-bg-secondary" id="blog">
      <div className="container-luxury">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">From Our Journal</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl">
              Latest <span className="text-gold-gradient">Insights</span>
            </h2>
          </div>
          <Link
            href="/blog"
            className="text-sm text-gold hover:text-gold-light transition-colors duration-300 uppercase tracking-wider"
          >
            View All Articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {BLOG_POSTS.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              <div className="flex items-center gap-3 mb-3">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold px-3 py-1 border border-gold/20 rounded-full">
                  {post.category}
                </span>
                <span className="flex items-center gap-1 text-xs text-text-muted">
                  <Clock className="w-3 h-3" />
                  {post.readTime}
                </span>
              </div>

              <h3 className="font-heading text-xl text-text-primary mb-2 group-hover:text-gold transition-colors duration-300 line-reveal">
                {post.title}
              </h3>

              <p className="text-text-secondary text-sm leading-relaxed mb-3 line-clamp-2">
                {post.excerpt}
              </p>

              <div className="flex items-center gap-1 text-xs text-text-muted">
                <span>{formatDate(post.date)}</span>
                <ArrowUpRight className="w-3 h-3 ml-2 text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
