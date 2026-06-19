'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { CATEGORY_IMAGES } from '@/lib/imageData';

gsap.registerPlugin(ScrollTrigger);

const PORTFOLIO_ITEMS = [
  { src: CATEGORY_IMAGES.wedding[1],    title: 'The Golden Hour',    category: 'Wedding' },
  { src: CATEGORY_IMAGES.preWedding[1], title: 'Tea Garden Romance', category: 'Pre-Wedding' },
  { src: CATEGORY_IMAGES.baby[0],       title: 'First Light',        category: 'Baby' },
  { src: CATEGORY_IMAGES.fashion[1],    title: 'Royal Heritage',     category: 'Fashion' },
  { src: CATEGORY_IMAGES.maternity[1],  title: 'Cherry Blossom',     category: 'Maternity' },
  { src: CATEGORY_IMAGES.drone[1],      title: 'Skyline Dreams',     category: 'Drone' },
];

export function PortfolioShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement[]>([]);

  useGSAP(() => {
    if (!containerRef.current || !sectionRef.current) return;

    const getTravelDistance = () =>
      Math.max(0, containerRef.current!.scrollWidth - window.innerWidth);
    const getHoldDistance = () => Math.max(120, window.innerWidth * 0.12);

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () => `+=${getTravelDistance() + getHoldDistance() * 2}`,
        pin: true,
        pinSpacing: true,
        anticipatePin: 1,
        scrub: 1,
        invalidateOnRefresh: true,
        refreshPriority: 2,
      },
    });

    timeline
      .to({}, { duration: 0.12 })
      .to(
        containerRef.current,
        {
          x: () => -getTravelDistance(),
          duration: 0.76,
          ease: 'none',
        },
        0.12
      )
      .to({}, { duration: 0.12 });

    cardsRef.current.forEach((card) => {
      if (!card) return;
      gsap.fromTo(
        card,
        { opacity: 0.5, scale: 0.9 },
        {
          opacity: 1,
          scale: 1,
          scrollTrigger: {
            trigger: card,
            containerAnimation: timeline,
            start: 'left 85%',
            end: 'center 65%',
            scrub: true,
          },
        }
      );
    });

    ScrollTrigger.refresh();
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="relative flex min-h-dvh flex-col justify-center overflow-hidden bg-bg-secondary py-12 md:py-16" id="portfolio">
      <div className="container-luxury relative z-10 mb-8 w-full shrink-0 md:mb-10">
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
      <div className="relative flex w-full max-w-full items-center overflow-hidden">
        <div ref={containerRef} className="flex h-[52dvh] w-max items-center gap-4 px-[6vw] will-change-transform sm:gap-6 md:h-[58dvh]">
          {PORTFOLIO_ITEMS.map((item, i) => (
            <div
              key={`${item.src}-${i}`}
              ref={(el) => { if (el) cardsRef.current[i] = el; }}
              className="group relative h-full w-[78vw] shrink-0 cursor-pointer overflow-hidden rounded-2xl sm:w-[52vw] md:w-[36vw] lg:w-[26vw]"
            >
              <Image
                src={item.src}
                alt={item.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              {/* Always-on dark overlay to match dark theme */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20 transition-opacity duration-500 group-hover:from-black/95 group-hover:via-black/55" />
              <div className="absolute bottom-0 left-0 right-0 p-6 opacity-100 transition-all duration-500 md:translate-y-4 md:p-8 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100">
                <p className="text-xs uppercase tracking-[0.2em] text-gold mb-2">{item.category}</p>
                <h3 className="font-heading text-2xl text-text-primary">{item.title}</h3>
              </div>
            </div>
          ))}
          <div className="w-[6vw] shrink-0" aria-hidden="true" />
        </div>
      </div>
    </section>
  );
}
