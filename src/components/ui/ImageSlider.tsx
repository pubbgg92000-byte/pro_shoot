'use client';

import { useState, useEffect, useCallback, useRef } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageSliderProps {
  images: string[];
  alt?: string;
  interval?: number;
  showArrows?: boolean;
  showDots?: boolean;
  showOverlay?: boolean;
  overlayClassName?: string;
  className?: string;
  imageClassName?: string;
  priority?: boolean;
  sizes?: string;
  effect?: 'fade' | 'zoom' | 'kenburns';
  aspectRatio?: string;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
}

export function ImageSlider({
  images,
  alt = 'Pro Shoot photography',
  interval = 4000,
  showArrows = true,
  showDots = true,
  showOverlay = false,
  overlayClassName = '',
  className = '',
  imageClassName = '',
  priority = false,
  sizes = '100vw',
  effect = 'fade',
  aspectRatio,
  pauseOnHover = true,
  children,
}: ImageSliderProps) {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const total = images.length;

  const goTo = useCallback(
    (index: number) => {
      if (isTransitioning) return;
      setIsTransitioning(true);
      setCurrent((index + total) % total);
      setTimeout(() => setIsTransitioning(false), 800);
    },
    [total, isTransitioning]
  );

  const next = useCallback(() => goTo(current + 1), [current, goTo]);
  const prev = useCallback(() => goTo(current - 1), [current, goTo]);

  // Auto-advance
  useEffect(() => {
    if (isPaused || total <= 1) return;
    timerRef.current = setInterval(next, interval);
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [isPaused, next, interval, total]);

  // Keyboard navigation
  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') next();
      if (e.key === 'ArrowLeft') prev();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [next, prev]);

  // Touch/swipe support
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    let startX = 0;
    let startY = 0;

    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
      startY = e.touches[0].clientY;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      const dy = e.changedTouches[0].clientY - startY;
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 50) {
        if (dx > 0) prev();
        else next();
      }
    };

    el.addEventListener('touchstart', handleTouchStart, { passive: true });
    el.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      el.removeEventListener('touchstart', handleTouchStart);
      el.removeEventListener('touchend', handleTouchEnd);
    };
  }, [next, prev]);

  if (total === 0) return null;

  const effectClasses: Record<string, { active: string; inactive: string }> = {
    fade: {
      active: 'opacity-100 scale-100',
      inactive: 'opacity-0 scale-100',
    },
    zoom: {
      active: 'opacity-100 scale-100',
      inactive: 'opacity-0 scale-110',
    },
    kenburns: {
      active: 'opacity-100 animate-kenburns',
      inactive: 'opacity-0 scale-100',
    },
  };

  const { active, inactive } = effectClasses[effect] || effectClasses.fade;

  return (
    <div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      style={aspectRatio ? { aspectRatio } : undefined}
      onMouseEnter={pauseOnHover ? () => setIsPaused(true) : undefined}
      onMouseLeave={pauseOnHover ? () => setIsPaused(false) : undefined}
    >
      {/* Slides */}
      {images.map((src, i) => (
        <div
          key={`${src}-${i}`}
          className={`absolute inset-0 transition-all duration-[1200ms] ease-out ${
            i === current ? active : inactive
          }`}
          aria-hidden={i !== current}
        >
          <Image
            src={src}
            alt={`${alt} ${i + 1}`}
            fill
            className={`object-cover ${imageClassName}`}
            sizes={sizes}
            priority={priority && i === 0}
            loading={i === 0 && priority ? 'eager' : 'lazy'}
          />
        </div>
      ))}

      {/* Optional overlay */}
      {showOverlay && <div className={`absolute inset-0 z-[2] pointer-events-none ${overlayClassName}`} />}

      {/* Children (text content overlaying the slider) */}
      {children && <div className="relative z-[5]">{children}</div>}

      {/* Arrows */}
      {showArrows && total > 1 && (
        <>
          <button
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[6] w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 hover:border-gold/30 transition-all duration-300 opacity-0 group-hover:opacity-100 sm:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <button
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[6] w-10 h-10 rounded-full bg-black/30 backdrop-blur-sm border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-black/50 hover:border-gold/30 transition-all duration-300 opacity-0 group-hover:opacity-100 sm:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </>
      )}

      {/* Dots */}
      {showDots && total > 1 && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-[6] flex items-center gap-2">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`transition-all duration-300 rounded-full ${
                i === current
                  ? 'w-6 h-2 bg-gold'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      )}
    </div>
  );
}
