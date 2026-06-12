'use client';

import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  const errorMessage = error.message || 'An unexpected error occurred';

  useEffect(() => {
    console.error('App error:', error);
  }, [error]);

  return (
    <section className="min-h-screen flex items-center justify-center bg-bg-primary">
      <div className="container-luxury text-center max-w-2xl">
        <div className="w-16 h-16 mx-auto mb-8 rounded-full border-2 border-red-500/30 flex items-center justify-center">
          <span className="text-3xl">⚠</span>
        </div>
        <h1 className="font-heading text-4xl md:text-5xl mb-4">
          Something Went <span className="text-gold-gradient">Wrong</span>
        </h1>
        <p className="text-text-secondary mb-4">
          We encountered an unexpected error while loading this page.
        </p>
        {errorMessage && (
          <p className="text-text-muted text-sm mb-8 font-mono bg-bg-card p-3 rounded-lg">
            {errorMessage}
          </p>
        )}
        <button
          onClick={reset}
          className="px-8 py-4 bg-gold-gradient text-bg-primary font-semibold rounded-full text-sm uppercase tracking-wider hover:shadow-xl hover:shadow-gold/20 transition-all duration-500 hover:scale-105"
        >
          Try Again
        </button>
      </div>
    </section>
  );
}
