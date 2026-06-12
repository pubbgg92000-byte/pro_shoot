'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ChevronDown } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Image scale in
    tl.fromTo(
      imageRef.current,
      { scale: 1.2, opacity: 0 },
      { scale: 1, opacity: 1, duration: 1.8 }
    );

    // Overlay fade
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      0.3
    );

    // Split heading animation — word by word
    const headingEl = headingRef.current;
    if (headingEl) {
      const lines = headingEl.querySelectorAll('.hero-line');
      tl.fromTo(
        lines,
        { y: 100, opacity: 0, rotateX: -40 },
        {
          y: 0,
          opacity: 1,
          rotateX: 0,
          duration: 1,
          stagger: 0.15,
        },
        0.6
      );
    }

    // Subheading
    tl.fromTo(
      subRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      1.2
    );

    // CTAs
    tl.fromTo(
      ctaRef.current,
      { y: 30, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8 },
      1.5
    );

    // Scroll indicator
    tl.fromTo(
      scrollRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 0.6 },
      2
    );

    // Parallax on scroll
    gsap.to(imageRef.current, {
      y: 150,
      scale: 1.1,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
      },
    });
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden"
      id="hero"
    >
      {/* Background Image */}
      <div ref={imageRef} className="absolute inset-0 opacity-0">
        <Image
          src="/images/shoot-3.png"
          alt="Luxury wedding photography — bride at ceremony with golden confetti"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
      </div>

      {/* Gradient Overlays */}
      <div ref={overlayRef} className="absolute inset-0 opacity-0">
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/80 via-transparent to-bg-primary" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/40 via-transparent to-bg-primary/40" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,rgba(0,0,0,0.4)_100%)]" />
      </div>

      {/* Floating Gold Particles */}
      <div className="absolute inset-0 pointer-events-none z-[5]">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-gold/40 animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${4 + i}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center container-luxury px-6">
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gold/30 bg-black/30 backdrop-blur-sm mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
          <span className="text-xs uppercase tracking-[0.2em] text-gold font-medium">
            Premium Photography Studio
          </span>
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl mb-8"
          style={{ perspective: '1000px', textShadow: '0 4px 24px rgba(0,0,0,0.6)' }}
        >
          <span className="hero-line block overflow-hidden leading-tight">
            <span className="inline-block text-white">Capture Moments.</span>
          </span>
          <span className="hero-line block overflow-hidden leading-tight">
            <span className="inline-block text-gold-gradient">Create Stories.</span>
          </span>
          <span className="hero-line block overflow-hidden leading-tight">
            <span className="inline-block text-white">Preserve Forever.</span>
          </span>
        </h1>

        {/* Subheading */}
        <p
          ref={subRef}
          className="font-subheading text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-10 opacity-0"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
        >
          Premium photography and cinematic storytelling crafted for life&apos;s most meaningful moments.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col sm:flex-row items-center justify-center gap-4 opacity-0">
          <Link
            href="/booking"
            className="px-8 py-4 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105 gold-shine"
          >
            Book a Session
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 border border-white/30 rounded-full text-sm uppercase tracking-wider text-white hover:border-gold/50 hover:text-gold transition-all duration-500 backdrop-blur-sm bg-black/20"
          >
            Explore Portfolio
          </Link>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        ref={scrollRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 z-10"
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-gray-400">Scroll</span>
        <ChevronDown className="w-4 h-4 text-gold animate-scroll-indicator" />
      </div>
    </section>
  );
}
