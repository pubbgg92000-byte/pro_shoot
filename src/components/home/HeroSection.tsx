'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ImageSlider } from '@/components/ui/ImageSlider';
import { HERO_IMAGES } from '@/lib/imageData';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  const isStatic = HERO_IMAGES.length === 1;

  useGSAP(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Image scale-in (only for static single image)
    if (isStatic) {
      tl.fromTo(
        imageRef.current,
        { scale: 1.2, opacity: 0 },
        { scale: 1, opacity: 1, duration: 1.8 }
      );
    }

    // Overlay fade
    tl.fromTo(
      overlayRef.current,
      { opacity: 0 },
      { opacity: 1, duration: 1 },
      isStatic ? 0.3 : 0
    );

    // Heading lines
    const headingEl = headingRef.current;
    if (headingEl) {
      const lines = headingEl.querySelectorAll('.hero-line');
      tl.fromTo(
        lines,
        { y: 100, opacity: 0, rotateX: -40 },
        { y: 0, opacity: 1, rotateX: 0, duration: 1, stagger: 0.15 },
        isStatic ? 0.6 : 0.4
      );
    }

    tl.fromTo(subRef.current,   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, isStatic ? 1.2 : 1.0);
    tl.fromTo(ctaRef.current,   { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, isStatic ? 1.5 : 1.3);

    // Gentle scroll parallax (static image only — no scale to avoid layout jumps)
    if (isStatic) {
      gsap.to(imageRef.current, {
        y: 80,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }
  }, { scope: sectionRef });

  return (
    <section
      ref={sectionRef}
      className="relative flex h-[100svh] min-h-[640px] items-center justify-center overflow-hidden sm:h-screen sm:min-h-[700px]"
      id="hero"
    >
      {/* ── Background ──
          • 1 image in HERO_IMAGES → static with scale-in + parallax
          • 2+ images              → auto-cycling kenburns slider
          Edit HERO_IMAGES in lib/imageData.ts to switch modes.      */}
      {isStatic ? (
        <div ref={imageRef} className="absolute inset-0 opacity-0">
          <Image
            src={HERO_IMAGES[0]}
            alt="Luxury wedding photography — bride at ceremony with golden confetti"
            fill
            className="object-cover object-[58%_center] md:object-center"
            priority
            sizes="100vw"
            quality={90}
          />
        </div>
      ) : (
        <div className="absolute inset-0">
          <ImageSlider
            images={HERO_IMAGES}
            alt="Pro Shoot photography"
            interval={5000}
            effect="kenburns"
            showArrows={false}
            showDots={false}
            pauseOnHover={false}
            priority
            className="h-full w-full"
            sizes="100vw"
          />
        </div>
      )}

      {/* Gradient Overlays — lighter so image is more visible */}
      <div ref={overlayRef} className="absolute inset-0 opacity-0">
        <div className="absolute inset-0 bg-black/25 md:bg-black/35" />
        <div className="absolute inset-0 bg-gradient-to-b from-bg-primary/35 via-transparent to-bg-primary/80 md:from-bg-primary/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/20 via-transparent to-bg-primary/15 md:from-bg-primary/25 md:to-bg-primary/25" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_40%,rgba(0,0,0,0.2)_100%)]" />
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
      <div className="relative z-10 container-luxury px-5 pt-12 text-center sm:px-6">
        {/* Badge */}
        <div className="mb-7 inline-flex max-w-[calc(100vw-48px)] items-center gap-2 rounded-full border border-gold/30 bg-black/30 px-4 py-2 backdrop-blur-sm sm:mb-8">
          <div className="w-1.5 h-1.5 rounded-full bg-gold animate-pulse-gold" />
          <span className="text-[10px] uppercase tracking-[0.2em] text-gold font-medium sm:text-xs">
            Luxury Photography. Worldwide.
          </span>
        </div>

        {/* Heading */}
        <h1
          ref={headingRef}
          className="font-heading mb-8 text-[clamp(2.85rem,12vw,4.25rem)] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl"
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
          className="font-subheading mx-auto mb-9 max-w-2xl text-base text-gray-200 opacity-0 sm:text-lg md:text-xl"
          style={{ textShadow: '0 2px 12px rgba(0,0,0,0.5)' }}
        >
          Premium photography and cinematic storytelling crafted for life&apos;s most meaningful moments.
        </p>

        {/* CTAs */}
        <div ref={ctaRef} className="flex flex-col items-center justify-center gap-4 opacity-0 sm:flex-row">
          <Link
            href="/booking"
            className="gold-shine w-full max-w-[290px] rounded-full bg-gold-gradient px-8 py-4 text-sm font-semibold uppercase tracking-wider text-bg-primary transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-gold/20 sm:w-auto"
          >
            Book a Session
          </Link>
          <Link
            href="/portfolio"
            className="w-full max-w-[290px] rounded-full border border-white/40 bg-black/20 px-8 py-4 text-sm uppercase tracking-wider text-white backdrop-blur-sm transition-all duration-500 hover:border-gold/50 hover:text-gold sm:w-auto"
          >
            Explore Portfolio
          </Link>
        </div>
      </div>


    </section>
  );
}
