'use client';

import { useEffect, useRef } from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { BRAND } from '@/lib/constants';
import { Camera, Award, Heart, MapPin } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const STATS = [
  { icon: Heart, value: BRAND.stats.weddings, suffix: '+', label: 'Weddings Captured' },
  { icon: Award, value: BRAND.stats.awards, suffix: '+', label: 'Awards Won' },
  { icon: Camera, value: BRAND.stats.projects, suffix: '+', label: 'Projects Delivered' },
  { icon: MapPin, value: BRAND.stats.cities, suffix: '+', label: 'Cities Covered' },
];

export function StatsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const counterRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {

    const ctx = gsap.context(() => {
      counterRefs.current.forEach((el, i) => {
        if (!el) return;

        const obj = { val: 0 };
        gsap.to(obj, {
          val: STATS[i].value,
          duration: 2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
          onUpdate: function () {
            if (el) {
              el.textContent = Math.floor(obj.val).toLocaleString();
            }
          },
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="section-padding bg-bg-primary relative overflow-hidden" id="stats">
      {/* Background decorative image */}
      <div className="absolute right-0 top-0 bottom-0 w-1/2 opacity-10 hidden lg:block">
        <Image
          src="/images/shoot-2.png"
          alt=""
          fill
          className="object-cover"
          sizes="50vw"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-bg-primary via-bg-primary/80 to-transparent" />
      </div>

      <div className="container-luxury relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left — Text */}
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Why Choose Us</p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl mb-6">
              A Decade of <span className="text-gold-gradient">Excellence</span>
            </h2>
            <p className="text-text-secondary text-lg leading-relaxed mb-8">
              With over {BRAND.stats.years} years of experience and {BRAND.stats.clients.toLocaleString()}+ satisfied clients,
              Pro Shoot has established itself as one of India&apos;s most trusted luxury photography studios.
              Our commitment to artistry, innovation, and client satisfaction drives every project we undertake.
            </p>
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gold" />
              <p className="font-subheading text-gold italic text-lg">
                &ldquo;Where vision meets perfection&rdquo;
              </p>
            </div>
          </div>

          {/* Right — Stats Grid */}
          <div className="grid grid-cols-2 gap-6">
            {STATS.map((stat, i) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.label}
                  className="glass-light rounded-2xl p-6 md:p-8 text-center hover-lift group"
                >
                  <Icon className="w-6 h-6 text-gold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300" />
                  <div className="font-heading text-4xl md:text-5xl text-text-primary mb-2">
                    <span ref={(el) => { counterRefs.current[i] = el; }}>0</span>
                    <span className="text-gold">{stat.suffix}</span>
                  </div>
                  <p className="text-text-muted text-sm uppercase tracking-wider">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
