'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import { getWhatsAppUrl } from '@/lib/utils';
import { MessageCircle } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function BookingCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const borderRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current || !backgroundRef.current || !contentRef.current) return;

    gsap.fromTo(
      backgroundRef.current,
      { scale: 1.14 },
      {
        scale: 1,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      }
    );

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top 72%',
        toggleActions: 'play none none reverse',
        invalidateOnRefresh: true,
      },
    });

    timeline
      .fromTo(
        borderRef.current,
        { autoAlpha: 0, scale: 0.96 },
        { autoAlpha: 1, scale: 1, duration: 1.1, ease: 'power2.out' }
      )
      .fromTo(
        contentRef.current.children,
        { autoAlpha: 0, y: 48, filter: 'blur(8px)' },
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          stagger: 0.14,
          ease: 'power3.out',
        },
        '-=0.7'
      );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative overflow-hidden py-24 md:py-40" id="booking-cta">
      {/* Background Image */}
      <div ref={backgroundRef} className="absolute inset-0 will-change-transform">
        <Image
          src="/images/shoot-3.png"
          alt="Book your photography session"
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-bg-primary/55 backdrop-blur-[1px] md:bg-bg-primary/65" />
        <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/80" />
      </div>

      {/* Gold border decorations */}
      <div ref={borderRef} className="absolute top-8 left-8 right-8 bottom-8 border border-gold/10 rounded-3xl pointer-events-none hidden md:block" />

      <div ref={contentRef} className="relative z-10 container-luxury text-center">
        <p className="text-xs uppercase tracking-[0.3em] text-gold mb-6">Ready?</p>
        <h2 className="font-heading mx-auto mb-6 max-w-4xl text-4xl md:text-5xl lg:text-7xl">
          Ready to Create Something{' '}
          <span className="text-gold-gradient">Extraordinary</span>?
        </h2>
        <p className="font-subheading mx-auto mb-10 max-w-2xl text-lg text-text-secondary md:mb-12 md:text-xl">
          Let&apos;s craft a visual story that will be treasured for generations.
          Your journey to timeless imagery begins with a single conversation.
        </p>

        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            href="/booking"
            className="gold-shine w-full max-w-[320px] rounded-full bg-gold-gradient px-10 py-5 text-sm font-semibold uppercase tracking-wider text-bg-primary transition-all duration-500 hover:scale-105 hover:shadow-xl hover:shadow-gold/20 sm:w-auto"
          >
            Book Your Session
          </Link>
          <a
            href={getWhatsAppUrl(BRAND.whatsapp, 'Hi! I\'d like to book a photography session.')}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full max-w-[320px] items-center justify-center gap-2 rounded-full border border-white/30 px-10 py-5 text-sm uppercase tracking-wider text-text-primary transition-all duration-500 hover:border-gold/50 hover:text-gold sm:w-auto"
          >
            <MessageCircle className="w-4 h-4" />
            WhatsApp Us
          </a>
        </div>
      </div>
    </section>
  );
}
