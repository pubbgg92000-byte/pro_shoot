import type { Metadata } from 'next';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/constants';
import { Star, Quote } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Testimonials',
  description: 'Read what our clients say about their experience with Pro Shoot Studios. Real stories from real couples, families, and brands.',
};

export default function TestimonialsPage() {
  return (
    <>
      <section className="pt-32 pb-16 bg-bg-primary">
        <div className="container-luxury text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Client Love</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            <span className="text-gold-gradient">Testimonials</span>
          </h1>
          <p className="font-subheading text-xl text-text-secondary max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from the families, couples, and brands we&apos;ve had the privilege of working with
          </p>
        </div>
      </section>

      <section className="section-padding bg-bg-primary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map((t) => (
              <div key={t.id} className="glass-light rounded-2xl p-8 hover-lift group">
                <Quote className="w-8 h-8 text-gold/20 mb-4" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: t.rating }).map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-text-secondary text-sm leading-relaxed mb-6">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20">
                    <Image src={t.image} alt={t.name} width={48} height={48} className="object-cover w-full h-full" />
                  </div>
                  <div>
                    <p className="text-sm font-medium">{t.name}</p>
                    <p className="text-xs text-text-muted">{t.event} • {t.location}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
