'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function BehindTheLens() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !imageRef.current || !textRef.current) return;

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 50%',
        end: 'top 10%',
        scrub: 1,
        invalidateOnRefresh: true,
      },
    });

    timeline
      .fromTo(
        imageRef.current,
        { autoAlpha: 0, xPercent: -12, scale: 0.94 },
        { autoAlpha: 1, xPercent: 0, scale: 1, duration: 1, ease: 'power2.out' },
        0
      )
      .fromTo(
        textRef.current,
        { autoAlpha: 0, xPercent: 12, y: 32 },
        { autoAlpha: 1, xPercent: 0, y: 0, duration: 1, ease: 'power2.out' },
        0.08
      );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding bg-bg-primary" id="behind-the-lens">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative aspect-[4/5] rounded-2xl overflow-hidden will-change-transform">
            <Image
              src="/images/shoot-2.png"
              alt="Behind the lens — our photography process"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/50 to-transparent" />
            {/* Gold corner accents */}
            <div className="absolute top-6 left-6 w-12 h-12 border-l-2 border-t-2 border-gold/40" />
            <div className="absolute bottom-6 right-6 w-12 h-12 border-r-2 border-b-2 border-gold/40" />
          </div>

          {/* Text */}
          <div ref={textRef} className="will-change-transform">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Behind The Lens</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-6">
              The Art of <span className="text-gold-gradient">Storytelling</span>
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed mb-8">
              <p>
                Every photograph we create is born from a deep understanding of light, emotion,
                and the subtle dance between moments. Our approach goes beyond traditional
                photography — we craft visual narratives that speak to the soul.
              </p>
              <p>
                With a team of passionate artists and state-of-the-art equipment, we transform
                ordinary moments into extraordinary memories that last generations.
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 rounded-full text-gold text-sm uppercase tracking-wider hover:bg-gold/5 transition-all duration-300"
            >
              Our Story →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
