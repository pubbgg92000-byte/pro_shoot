'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Star, Quote } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function TestimonialsCarousel() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!trackRef.current) return;

    const track = trackRef.current;

    const ctx = gsap.context(() => {
      // Infinite scroll animation
      const totalWidth = track.scrollWidth / 2; // We duplicated items
      gsap.to(track, {
        x: -totalWidth,
        duration: 40,
        ease: 'none',
        repeat: -1,
        modifiers: {
          x: gsap.utils.unitize((x: number) => x % totalWidth),
        },
      });
    });

    // Pause on hover
    const pause = () => gsap.globalTimeline.pause();
    const resume = () => gsap.globalTimeline.resume();
    track.addEventListener('mouseenter', pause);
    track.addEventListener('mouseleave', resume);

    return () => {
      ctx.revert();
      track.removeEventListener('mouseenter', pause);
      track.removeEventListener('mouseleave', resume);
    };
  }, []);

  // Duplicate items for infinite scroll
  const items = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section ref={sectionRef} className="section-padding bg-bg-secondary overflow-hidden" id="testimonials">
      <div className="container-luxury mb-16">
        <div className="text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Client Stories</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            Words of <span className="text-gold-gradient">Trust</span>
          </h2>
          <p className="font-subheading text-lg text-text-secondary max-w-xl mx-auto">
            Every testimonial is a story of trust, artistry, and unforgettable moments
          </p>
        </div>
      </div>

      {/* Scrolling Track */}
      <div className="overflow-hidden">
        <div ref={trackRef} className="flex gap-6" style={{ width: 'max-content' }}>
          {items.map((testimonial, i) => (
            <div
              key={`${testimonial.id}-${i}`}
              className="w-[400px] md:w-[450px] flex-shrink-0 glass-light rounded-2xl p-8 hover-lift"
            >
              {/* Quote Icon */}
              <Quote className="w-8 h-8 text-gold/30 mb-4" />

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-gold text-gold" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-text-secondary text-sm leading-relaxed mb-6 line-clamp-4">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full overflow-hidden border border-gold/20">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-sm font-medium text-text-primary">{testimonial.name}</p>
                  <p className="text-xs text-text-muted">{testimonial.event} • {testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
