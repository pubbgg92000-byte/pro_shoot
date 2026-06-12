import type { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { SERVICES } from '@/lib/constants';
import { ArrowUpRight } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our premium photography services — from luxury weddings and cinematic pre-wedding shoots to baby photography, fashion editorials, drone coverage, and more.',
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/shoot-3.png" alt="Pro Shoot services" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-bg-primary/70" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/50" />
        </div>
        <div className="relative z-10 text-center container-luxury">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">What We Offer</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            Our <span className="text-gold-gradient">Services</span>
          </h1>
          <p className="font-subheading text-xl text-text-secondary max-w-2xl mx-auto">
            Every service is a carefully crafted experience designed to exceed your expectations
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group relative aspect-[3/4] rounded-2xl overflow-hidden hover-lift"
              >
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
                <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-gold/30 transition-colors duration-500" />

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-[10px] uppercase tracking-[0.2em] text-gold mb-1">{service.price}</p>
                  <h3 className="font-heading text-2xl text-text-primary mb-1">{service.title}</h3>
                  <p className="text-text-secondary text-sm line-clamp-2 mb-3">{service.tagline}</p>
                  <div className="flex items-center gap-2 text-sm text-text-secondary group-hover:text-gold transition-colors duration-300">
                    <span>Learn More</span>
                    <ArrowUpRight className="w-4 h-4 transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-luxury text-center max-w-3xl">
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Can&apos;t Find What You <span className="text-gold-gradient">Need</span>?
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            We offer bespoke photography solutions tailored to your unique requirements. Let&apos;s discuss your vision.
          </p>
          <Link
            href="/contact"
            className="inline-flex px-10 py-5 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
          >
            Get Custom Quote
          </Link>
        </div>
      </section>
    </>
  );
}
