'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const PORTFOLIO_ITEMS = [
  { id: 1, src: '/images/shoot-3.png', title: 'The Golden Hour', category: 'Wedding' },
  { id: 2, src: '/generated/portfolio-prewedding.png', title: 'Tea Garden Romance', category: 'Pre-Wedding' },
  { id: 3, src: '/images/baby-shoot-1.png', title: 'First Light', category: 'Baby' },
  { id: 4, src: '/generated/portfolio-fashion.png', title: 'Royal Heritage', category: 'Fashion' },
  { id: 5, src: '/generated/portfolio-maternity.png', title: 'Cherry Blossom', category: 'Maternity' },
  { id: 6, src: '/images/shoot-2.png', title: 'Eternal Vows', category: 'Wedding' },
];

export function PortfolioShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    if (!sectionRef.current || !containerRef.current) return;

    const ctx = gsap.context(() => {
      // Calculate how far to move left
      const getScrollAmount = () => {
        let containerWidth = containerRef.current?.scrollWidth || 0;
        return -(containerWidth - window.innerWidth);
      };

      const tween = gsap.to(containerRef.current, {
        x: getScrollAmount,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: () => `+=${getScrollAmount() * -1}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });

      // Animate individual cards as they come into view (if desired)
      cardsRef.current.forEach((card, i) => {
        if (!card) return;
        gsap.fromTo(card,
          { opacity: 0.5, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            scrollTrigger: {
              trigger: card,
              containerAnimation: tween,
              start: 'left 80%',
              end: 'left 20%',
              scrub: true,
            }
          }
        );
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="h-screen bg-bg-secondary flex flex-col justify-center overflow-hidden relative" id="portfolio">
      <div className="container-luxury mb-8 shrink-0 relative z-10 w-full pt-16">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Work</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl">
              Signature <span className="text-gold-gradient">Portfolio</span>
            </h2>
          </div>
          <Link
            href="/portfolio"
            className="text-sm text-gold hover:text-gold-light transition-colors duration-300 uppercase tracking-wider"
          >
            View Full Portfolio →
          </Link>
        </div>
      </div>

      {/* Horizontal Scroll Container */}
      <div className="w-full relative flex items-center">
        <div ref={containerRef} className="flex gap-6 px-[5vw] w-max items-center h-[50vh] md:h-[60vh]">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div
              key={item.id}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="relative rounded-2xl overflow-hidden group cursor-pointer h-full w-[70vw] sm:w-[50vw] md:w-[35vw] lg:w-[25vw] shrink-0"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{item.category}</p>
                <h3 className="font-heading text-2xl text-text-primary">{item.title}</h3>
              </div>
            </div>
          ))}
          {/* Extra spacing at the end so the last item isn't flush with the screen edge */}
          <div className="w-[5vw] shrink-0" />
        </div>
      </div>
    </section>
  );
}
