import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Gem, BookOpen } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Albums',
  description: 'Explore Pro Shoot\'s luxury photography albums — handcrafted coffee-table books, wedding albums, and premium photo collections.',
};

const ALBUM_CATEGORIES = [
  { title: 'Wedding Albums', desc: 'Luxury coffee-table albums that preserve your wedding story in exquisite detail.', image: '/images/shoot-3.png', price: 'Starting from ₹15,000+' },
  { title: 'Baby Albums', desc: 'Tender milestone albums capturing every precious moment of your little one\'s journey.', image: '/images/baby-shoot-1.png', price: 'Starting from ₹8,000+' },
  { title: 'Family Albums', desc: 'Heritage-quality family portraits and celebrations preserved for generations.', image: '/images/shoot-2.png', price: 'Starting from ₹10,000+' },
  { title: 'Fashion Lookbooks', desc: 'Editorial-grade lookbooks for designers, models, and fashion brands.', image: '/images/shoot-3.png', price: 'Starting from ₹20,000+' },
  { title: 'Corporate Albums', desc: 'Professional brand documentation and event coverage in premium presentation.', image: '/images/shoot-2.png', price: 'Starting from ₹12,000+' },
  { title: 'Product Catalogs', desc: 'High-end product photography catalogs for luxury and e-commerce brands.', image: '/images/baby-shoot-1.png', price: 'Starting from ₹15,000+' },
];

const FEATURES = [
  'Premium leather & linen covers', 'Archival-quality paper', 'Flush-mount pages',
  'Custom embossing & foil stamping', 'Multiple size options', 'Presentation box included',
  'UV-protective coating', 'Handcrafted binding',
];

export default function AlbumsPage() {
  return (
    <>
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/images/shoot-3.png" alt="Pro Shoot luxury albums" fill className="object-cover" priority sizes="100vw" />
          <div className="absolute inset-0 bg-bg-primary/75" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg-primary via-transparent to-bg-primary/50" />
        </div>
        <div className="relative z-10 text-center container-luxury">
          <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Heirlooms Crafted By Hand</p>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl mb-6">
            Premium <span className="text-gold-gradient">Albums</span>
          </h1>
          <p className="font-subheading text-xl text-text-secondary max-w-2xl mx-auto">
            Every album is a masterpiece you can hold — meticulously designed, impeccably crafted
          </p>
        </div>
      </section>

      {/* Album Grid */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ALBUM_CATEGORIES.map((album) => (
              <div key={album.title} className="group glass-light rounded-2xl overflow-hidden hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={album.image} alt={album.title} fill className="object-cover transition-transform duration-700 group-hover:scale-110" sizes="33vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                </div>
                <div className="p-6">
                  <h3 className="font-heading text-xl mb-2">{album.title}</h3>
                  <p className="text-text-secondary text-sm mb-4 line-clamp-2">{album.desc}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-gold text-sm font-medium">{album.price}</span>
                    <Link href="/booking" className="text-xs text-gold uppercase tracking-wider hover:text-gold-light transition-colors">
                      Inquire →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="section-padding bg-bg-secondary">
        <div className="container-luxury max-w-4xl">
          <div className="text-center mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Premium Materials</p>
            <h2 className="font-heading text-4xl md:text-5xl">
              Crafted With <span className="text-gold-gradient">Care</span>
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {FEATURES.map((f) => (
              <div key={f} className="text-center p-4 rounded-xl border border-border hover:border-border-gold transition-colors duration-300">
                <Gem className="w-5 h-5 text-gold mx-auto mb-3" />
                <p className="text-text-secondary text-sm">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-bg-primary">
        <div className="container-luxury text-center max-w-3xl">
          <BookOpen className="w-12 h-12 text-gold mx-auto mb-6" />
          <h2 className="font-heading text-4xl md:text-5xl mb-6">
            Design Your <span className="text-gold-gradient">Album</span>
          </h2>
          <p className="text-text-secondary text-lg mb-8">
            Every album is custom designed to reflect your unique story. Let&apos;s create something you&apos;ll treasure forever.
          </p>
          <Link href="/booking" className="inline-flex px-10 py-5 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105">
            Start Your Album
          </Link>
        </div>
      </section>
    </>
  );
}
