import Link from 'next/link';
import { Camera } from 'lucide-react';

export default function NotFound() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="container-luxury text-center">
        <Camera className="w-16 h-16 text-gold mx-auto mb-8 opacity-50" />
        <h1 className="font-heading text-8xl md:text-9xl text-gold-gradient mb-4">404</h1>
        <h2 className="font-heading text-3xl md:text-4xl mb-4">Frame Not Found</h2>
        <p className="text-text-secondary text-lg mb-8 max-w-md mx-auto">
          The page you&apos;re looking for seems to have wandered out of frame.
          Let us guide you back to something beautiful.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/"
            className="px-8 py-4 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
          >
            Return Home
          </Link>
          <Link
            href="/portfolio"
            className="px-8 py-4 border border-white/20 rounded-full text-sm uppercase tracking-wider hover:border-gold/50 hover:text-gold transition-all duration-500"
          >
            View Portfolio
          </Link>
        </div>
      </div>
    </section>
  );
}
