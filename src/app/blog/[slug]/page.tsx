import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/constants';
import { formatDate } from '@/lib/utils';
import { Clock, ArrowLeft } from 'lucide-react';

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = BLOG_POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <>
      <section className="pt-32 pb-8 bg-bg-primary">
        <div className="container-luxury max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-2 text-text-muted text-sm hover:text-gold transition-colors mb-8">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold px-3 py-1 border border-gold/20 rounded-full">{post.category}</span>
            <span className="flex items-center gap-1 text-xs text-text-muted"><Clock className="w-3 h-3" />{post.readTime}</span>
            <span className="text-xs text-text-muted">{formatDate(post.date)}</span>
          </div>
          <h1 className="font-heading text-4xl md:text-5xl mb-8">{post.title}</h1>
        </div>
      </section>

      <section className="pb-8 bg-bg-primary">
        <div className="container-luxury max-w-4xl">
          <div className="relative aspect-[16/9] rounded-2xl overflow-hidden">
            <Image src={post.image} alt={post.title} fill className="object-cover" sizes="100vw" priority />
          </div>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container-luxury max-w-3xl">
          <article className="prose prose-invert prose-lg max-w-none">
            <p className="text-text-secondary text-lg leading-relaxed">{post.excerpt}</p>
            <p className="text-text-secondary leading-relaxed mt-6">
              Photography is more than just pressing a shutter button — it&apos;s about understanding light, emotion, and the
              perfect moment. At Pro Shoot, we believe every photograph should tell a story, evoke an emotion, and become
              a treasured memory for generations to come.
            </p>
            <h2 className="font-heading text-2xl mt-8 mb-4 text-gold-gradient">The Art of Seeing</h2>
            <p className="text-text-secondary leading-relaxed">
              Great photography begins long before the camera is raised. It starts with understanding your subjects,
              reading the environment, and anticipating those fleeting moments that define an experience.
              Our photographers train their eyes to see what others miss — the gentle touch, the stolen glance,
              the quiet tear of joy.
            </p>
            <h2 className="font-heading text-2xl mt-8 mb-4 text-gold-gradient">Technical Excellence</h2>
            <p className="text-text-secondary leading-relaxed">
              While artistry drives our vision, technical mastery enables it. We invest in the finest equipment,
              master advanced lighting techniques, and stay current with the latest post-production tools.
              This combination of art and science is what sets professional photography apart from snapshots.
            </p>
            <p className="text-text-secondary leading-relaxed mt-6">
              Whether you&apos;re planning a wedding, celebrating a new arrival, or building your brand,
              the right photographer makes all the difference. We invite you to explore our portfolio
              and discover the Pro Shoot difference for yourself.
            </p>
          </article>

          {/* CTA */}
          <div className="mt-16 p-8 glass-light rounded-2xl text-center">
            <p className="text-text-secondary mb-4">Ready to create your own visual story?</p>
            <Link
              href="/booking"
              className="inline-flex px-8 py-4 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
            >
              Book Your Session
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
