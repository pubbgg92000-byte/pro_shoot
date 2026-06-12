import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import { Clock, ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Photography tips, behind-the-scenes stories, and expert insights from Pro Shoot Studios.',
};

export default function BlogPage() {
  const featured = BLOG_POSTS.find((p) => p.featured) || BLOG_POSTS[0];
  const rest = BLOG_POSTS.filter((p) => p.slug !== featured.slug);

  return (
    <>
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-luxury text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Journal</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-gold-gradient">Blog</span>
          </h1>
          <p className="font-subheading text-xl text-text-secondary max-w-2xl mx-auto">
            Photography insights, tips, and behind-the-scenes stories from our studio
          </p>
        </div>
      </section>

      {/* Featured Post */}
      <section className="pb-16 bg-bg-primary">
        <div className="container-luxury">
          <Link href={`/blog/${featured.slug}`} className="group grid grid-cols-1 lg:grid-cols-2 gap-8 glass-light rounded-2xl overflow-hidden">
            <div className="relative aspect-[16/10]">
              <Image src={featured.image} alt={featured.title} fill className="object-cover transition-transform duration-700 group-hover:scale-105" sizes="50vw" />
            </div>
            <div className="p-8 lg:p-12 flex flex-col justify-center">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] uppercase tracking-[0.2em] text-gold px-3 py-1 border border-gold/20 rounded-full">{featured.category}</span>
                <span className="flex items-center gap-1 text-xs text-text-muted"><Clock className="w-3 h-3" />{featured.readTime}</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl mb-4 group-hover:text-gold transition-colors duration-300">{featured.title}</h2>
              <p className="text-text-secondary leading-relaxed mb-6">{featured.excerpt}</p>
              <div className="flex items-center gap-2 text-gold text-sm">
                <span>Read Article</span>
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Rest */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6">
                  <Image src={post.image} alt={post.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="33vw" />
                </div>
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-[10px] uppercase tracking-[0.2em] text-gold px-3 py-1 border border-gold/20 rounded-full">{post.category}</span>
                  <span className="text-xs text-text-muted">{post.readTime}</span>
                </div>
                <h3 className="font-heading text-xl mb-2 group-hover:text-gold transition-colors">{post.title}</h3>
                <p className="text-text-secondary text-sm line-clamp-2 mb-3">{post.excerpt}</p>
                <p className="text-text-muted text-xs">{formatDate(post.date)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
