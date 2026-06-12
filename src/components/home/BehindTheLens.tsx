'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function BehindTheLens() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(imageRef.current, { x: -80, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      });
      gsap.fromTo(textRef.current, { x: 80, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1.2, ease: 'power3.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%', toggleActions: 'play none none reverse' },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-bg-primary" id="behind-the-lens">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div ref={imageRef} className="relative aspect-[4/5] rounded-2xl overflow-hidden">
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
          <div ref={textRef}>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Behind The Lens</p>
            <h2 className="font-heading text-4xl md:text-5xl mb-8">
              Every Frame Tells a <span className="text-gold-gradient">Story</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-6">
              Behind every stunning photograph is a process of patience, vision, and relentless pursuit of perfection.
              We don&apos;t just point cameras — we orchestrate light, emotion, and atmosphere to create imagery
              that transcends the ordinary.
            </p>
            <p className="text-text-secondary leading-relaxed mb-8">
              Our team combines decades of combined experience with cutting-edge technology and an unwavering commitment
              to artistic excellence. From the initial consultation to the final delivery, every step is designed to exceed
              your expectations.
            </p>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-16 h-px bg-gold" />
              <p className="font-subheading text-gold italic text-lg">
                &ldquo;Every story deserves perfection&rdquo;
              </p>
            </div>
            <Link
              href="/about"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 rounded-full text-gold text-sm uppercase tracking-wider hover:bg-gold/5 transition-all duration-300"
            >
              Our Story
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
