'use client';

import { useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { SERVICES } from '@/lib/constants';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { ArrowUpRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

export function FeaturedServices() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const headingRef = useRef<HTMLDivElement>(null);

  const featured = SERVICES.filter((s) => s.featured);

  useGSAP(() => {
    // Heading reveal
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 85%',
            once: true,
          },
        }
      );
    }

    // Stagger card reveals
    const cards = cardsRef.current.filter(Boolean);
    gsap.fromTo(
      cards,
      { y: 80, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      }
    );
  }, { scope: sectionRef });

  return (
    <section ref={sectionRef} className="section-padding bg-bg-primary relative" id="services">
      <div className="container-luxury">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-20">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">What We Do</p>
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
            Our <span className="text-gold-gradient">Services</span>
          </h2>
          <p className="font-subheading text-lg text-text-secondary max-w-xl mx-auto">
            From intimate portraits to grand celebrations, every service is crafted with artistry and intention
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featured.map((service, i) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              ref={(el) => { cardsRef.current[i] = el; }}
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden hover-lift"
            >
              {/* Image */}
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Gold border on hover */}
              <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold/30 transition-colors duration-500" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-2">
                  {service.tagline}
                </p>
                <h3 className="font-heading text-xl md:text-2xl text-text-primary mb-2">
                  {service.shortTitle}
                </h3>
                <div className="flex items-center gap-2 text-sm text-text-secondary group-hover:text-gold transition-colors duration-300">
                  <span>Explore</span>
                  <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All CTA */}
        <div className="text-center mt-16">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 rounded-full text-gold text-sm uppercase tracking-wider hover:bg-gold/5 transition-all duration-300"
          >
            View All Services
            <ArrowUpRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
