import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { Camera, Zap, Plane, ShieldCheck } from 'lucide-react';
import { DSLRShowcase } from '@/components/home/DSLRShowcase';
import { DroneExperience } from '@/components/home/DroneExperience';

export const metadata: Metadata = {
  title: 'Equipment Rentals | Pro Shoot',
  description: 'Rent premium professional photography and videography equipment including DSLRs, drones, and lighting setups. Be a pro, do your own shoot.',
};

const RENTAL_GEAR = [
  {
    id: 'cameras',
    title: 'Cinema & Mirrorless Cameras',
    description: 'Industry-leading bodies from Canon, Sony, and RED paired with premium L-series and G-Master lenses.',
    image: '/generated/camera-rental.png',
    features: ['8K RAW Video', 'Premium Glass', 'Dual Pixel AF', 'Fully Insured'],
    icon: Camera,
  },
  {
    id: 'drones',
    title: 'Professional Drones',
    description: 'DJI Mavic 3 Pro and Inspire series for breathtaking aerial cinematography and photography.',
    image: '/generated/drone-rental.png',
    features: ['Hasselblad Camera', '4K/120fps', 'Omnidirectional Sensing', 'Extra Batteries'],
    icon: Plane,
  },
  {
    id: 'lighting',
    title: 'Studio & Continuous Lighting',
    description: 'Profoto strobes, Aputure LED panels, and light modifiers for absolute creative control.',
    image: '/generated/lighting-rental.png',
    features: ['High CRI/TLCI', 'Wireless Sync', 'Softboxes Included', 'Battery Powered'],
    icon: Zap,
  },
];

export default function RentalsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 bg-bg-primary overflow-hidden">
        <div className="absolute inset-0 pointer-events-none opacity-20">
          <div className="absolute inset-0 bg-gold-gradient mix-blend-overlay" />
        </div>
        
        <div className="container-luxury relative z-10 text-center">
          <p className="text-sm md:text-base font-semibold tracking-[0.3em] text-gold uppercase mb-4">
            Pro Shoot Equipment Rentals
          </p>
          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl text-text-primary mb-6 leading-tight">
            Be a pro.<br />
            <span className="text-gold-gradient">Do your own shoot.</span>
          </h1>
          <p className="font-subheading text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10">
            Access the exact same world-class equipment used by our award-winning team. 
            From cinematic cameras to professional drones, everything you need to bring your vision to life.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              href="#inventory" 
              className="w-full sm:w-auto px-8 py-4 bg-gold-gradient text-bg-primary rounded-full font-semibold hover:shadow-lg hover:shadow-gold/20 transition-all duration-300"
            >
              View Inventory
            </Link>
            <Link 
              href="/contact" 
              className="w-full sm:w-auto px-8 py-4 border border-border text-text-primary rounded-full font-semibold hover:border-gold hover:text-gold transition-all duration-300"
            >
              Contact Rental Desk
            </Link>
          </div>
        </div>
      </section>

      {/* Animation Sections */}
      <div className="border-y border-border">
        <DSLRShowcase />
        <DroneExperience />
      </div>

      {/* Inventory Section */}
      <section id="inventory" className="section-padding bg-bg-secondary relative">
        <div className="container-luxury">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-text-primary mb-4">
              Our <span className="text-gold-gradient">Arsenal</span>
            </h2>
            <p className="text-text-secondary max-w-2xl mx-auto">
              Maintained to perfection. Tested before every rental. Ready for action.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {RENTAL_GEAR.map((gear) => (
              <div key={gear.id} className="glass rounded-2xl p-6 group hover:border-gold/30 transition-colors duration-500 flex flex-col h-full">
                <div className="relative aspect-square rounded-xl overflow-hidden mb-6 bg-bg-primary border border-border">
                  <Image
                    src={gear.image}
                    alt={gear.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="(max-width: 1024px) 100vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-bg-primary/80 backdrop-blur-md flex items-center justify-center border border-white/10 text-gold">
                    <gear.icon className="w-5 h-5" />
                  </div>
                </div>
                
                <div className="flex-1 flex flex-col">
                  <h3 className="font-heading text-2xl text-text-primary mb-3">{gear.title}</h3>
                  <p className="text-text-secondary text-sm leading-relaxed mb-6 flex-1">
                    {gear.description}
                  </p>
                  
                  <div className="grid grid-cols-2 gap-3 mb-8">
                    {gear.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <ShieldCheck className="w-4 h-4 text-gold shrink-0" />
                        <span className="text-xs text-text-muted font-medium">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <Link
                    href={`/contact?subject=Rental Inquiry: ${gear.title}`}
                    className="block w-full py-3 border border-border rounded-xl text-center text-sm font-semibold text-text-primary hover:border-gold hover:text-gold transition-all duration-300"
                  >
                    Check Availability
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ / Trust Section */}
      <section className="py-20 bg-bg-primary">
        <div className="container-luxury max-w-4xl text-center">
          <h2 className="font-heading text-3xl md:text-4xl mb-8">Why Rent From Us?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <ShieldCheck className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-heading text-xl mb-2">Fully Insured</h4>
              <p className="text-sm text-text-secondary">All gear comes with comprehensive rental coverage for peace of mind.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-heading text-xl mb-2">Expert Checked</h4>
              <p className="text-sm text-text-secondary">Cleaned, calibrated, and sensor-checked before every single rental.</p>
            </div>
            <div className="p-6">
              <div className="w-12 h-12 rounded-full bg-gold/10 flex items-center justify-center mx-auto mb-4">
                <Camera className="w-6 h-6 text-gold" />
              </div>
              <h4 className="font-heading text-xl mb-2">Pro Support</h4>
              <p className="text-sm text-text-secondary">Need technical help on set? Our technicians are just a call away.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
