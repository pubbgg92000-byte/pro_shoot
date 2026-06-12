import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { BRAND } from '@/lib/constants';
import { Award, Target, Eye, Gem, Users, Star } from 'lucide-react';
import { AboutAnimations } from '@/components/about/AboutAnimations';

export const metadata: Metadata = {
  title: 'About Us',
  description: `Discover the story behind ${BRAND.name} — India's premier luxury photography studio. ${BRAND.stats.years}+ years of crafting timeless imagery for weddings, families, and brands.`,
};

const TIMELINE = [
  { year: '2014', title: 'The Beginning', desc: 'Founded with a single camera and an unwavering vision for cinematic storytelling.' },
  { year: '2016', title: 'First Award', desc: 'Recognized by the Indian Photography Association for excellence in wedding photography.' },
  { year: '2018', title: 'Studio Launch', desc: 'Opened our flagship studio in Bangalore with state-of-the-art equipment and lighting.' },
  { year: '2020', title: 'Going National', desc: 'Expanded to cover destination weddings across 15 cities in India.' },
  { year: '2022', title: '500+ Weddings', desc: 'Crossed the milestone of 500 weddings, each one a unique visual masterpiece.' },
  { year: '2024', title: 'International Reach', desc: 'First international wedding coverage, expanding into destination shoots worldwide.' },
];

const VALUES = [
  { icon: Gem, title: 'Artistry', desc: 'Every frame is crafted with intentional composition, lighting, and emotion.' },
  { icon: Eye, title: 'Vision', desc: 'We see the story before it unfolds and capture moments others miss.' },
  { icon: Target, title: 'Precision', desc: 'Technical excellence meets creative intuition in every single shot.' },
  { icon: Users, title: 'Connection', desc: 'We build genuine relationships with our clients to capture authentic emotions.' },
  { icon: Star, title: 'Excellence', desc: 'We never settle for good enough — only extraordinary will do.' },
  { icon: Award, title: 'Innovation', desc: 'Continuously pushing boundaries with the latest technology and techniques.' },
];

export default function AboutPage() {
  return (
    <>
      <AboutAnimations />
      {/* Hero */}
      <section data-about-hero className="relative flex h-[72svh] min-h-[560px] items-center justify-center overflow-hidden md:h-[70vh] md:min-h-[500px]">
        <div data-about-hero-image className="absolute inset-0 will-change-transform">
          <Image
            src="/images/shoot-2.png"
            alt="Pro Shoot — our story"
            fill
            className="object-cover object-[45%_center] md:object-center"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-bg-primary/30 md:bg-bg-primary/45" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary/90 via-bg-primary/5 to-bg-primary/20 md:from-bg-primary md:via-transparent md:to-bg-primary/40" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_46%,rgba(0,0,0,0.24)_100%)]" />
        </div>
        <div data-about-hero-content className="relative z-10 container-luxury text-center">
          <p className="mb-4 text-xs uppercase tracking-[0.3em] text-gold" style={{ textShadow: '0 2px 10px rgba(0,0,0,0.75)' }}>Our Story</p>
          <h1 className="font-heading mb-6 text-[clamp(3.4rem,13vw,5rem)] md:text-6xl lg:text-7xl" style={{ textShadow: '0 4px 22px rgba(0,0,0,0.72)' }}>
            Behind The <span className="text-gold-gradient">Vision</span>
          </h1>
          <p className="font-subheading mx-auto max-w-2xl text-xl text-gray-100" style={{ textShadow: '0 2px 14px rgba(0,0,0,0.8)' }}>
            A decade of turning fleeting moments into timeless art
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div data-about-reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Mission</p>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                Crafting Visual <span className="text-gold-gradient">Legacies</span>
              </h2>
              <p className="text-text-secondary leading-relaxed">
                We exist to transform life&apos;s most precious moments into visual masterpieces that
                transcend time. Through artistic excellence, technical precision, and genuine human
                connection, we create photography that becomes family heritage.
              </p>
            </div>
            <div data-about-reveal>
              <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Vision</p>
              <h2 className="font-heading text-3xl md:text-4xl mb-6">
                Redefining <span className="text-gold-gradient">Premium</span>
              </h2>
              <p className="text-text-secondary leading-relaxed">
                To be recognized as India&apos;s most trusted and artistically acclaimed photography
                studio — setting the global standard for luxury visual storytelling while making
                premium photography accessible to every family that values their memories.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section data-timeline-section className="section-padding bg-bg-secondary overflow-hidden">
        <div className="container-luxury max-w-4xl">
          <div data-about-reveal className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Our Journey</p>
            <h2 className="font-heading text-4xl md:text-5xl">
              A Decade of <span className="text-gold-gradient">Growth</span>
            </h2>
          </div>

          <div className="relative">
            {/* Center line */}
            <div data-timeline-line className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gold/30 to-transparent hidden md:block" />

            <div className="space-y-16">
              {TIMELINE.map((item, i) => (
                <div data-timeline-item key={item.year} className={`flex items-center gap-8 will-change-transform ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  <div className={`flex-1 ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                    <span className="font-heading text-3xl text-gold">{item.year}</span>
                    <h3 className="font-heading text-xl mt-2 mb-2">{item.title}</h3>
                    <p className="text-text-secondary text-sm">{item.desc}</p>
                  </div>
                  <div className="w-4 h-4 rounded-full bg-gold border-4 border-bg-secondary flex-shrink-0 hidden md:block" />
                  <div className="flex-1 hidden md:block" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury">
          <div data-about-reveal className="text-center mb-20">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">What Drives Us</p>
            <h2 className="font-heading text-4xl md:text-5xl">
              Our <span className="text-gold-gradient">Values</span>
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {VALUES.map((val) => {
              const Icon = val.icon;
              return (
                <div data-value-card key={val.title} className="glass-light rounded-2xl p-8 hover-lift group text-center will-change-transform hover:border-gold/30">
                  <Icon className="w-8 h-8 text-gold mx-auto mb-4 group-hover:scale-125 group-hover:rotate-6 transition-transform duration-500" />
                  <h3 className="font-heading text-xl mb-3">{val.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed">{val.desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section data-about-cta className="relative py-32 overflow-hidden">
        <div data-about-cta-image className="absolute inset-0 will-change-transform">
          <Image src="/images/shoot-3.png" alt="" fill className="object-cover" sizes="100vw" aria-hidden="true" />
          <div className="absolute inset-0 bg-bg-primary/55" />
          <div className="absolute inset-0 bg-gradient-to-r from-bg-primary/45 via-transparent to-bg-primary/35" />
        </div>
        <div data-about-cta-content className="relative z-10 container-luxury text-center">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Let&apos;s Create Something <span className="text-gold-gradient">Beautiful</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8 max-w-xl mx-auto">
            Ready to experience the Pro Shoot difference? Let&apos;s start a conversation.
          </p>
          <Link
            href="/booking"
            className="inline-flex px-10 py-5 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>
    </>
  );
}
