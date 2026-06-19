'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface LightboxImage {
  src: string;
  alt?: string;
  title?: string;
  category?: string;
  location?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  initialIndex: number;
  isOpen: boolean;
  onClose: () => void;
}

export function Lightbox({ images, initialIndex, isOpen, onClose }: LightboxProps) {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);

  const goNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  const goPrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  }, [images.length]);

  // Keyboard navigation
  useEffect(() => {
    if (!isOpen) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowRight') goNext();
      if (e.key === 'ArrowLeft') goPrev();
    };
    window.addEventListener('keydown', handleKey);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleKey);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose, goNext, goPrev]);

  // Touch/swipe
  useEffect(() => {
    if (!isOpen) return;
    let startX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const dx = e.changedTouches[0].clientX - startX;
      if (Math.abs(dx) > 60) {
        if (dx > 0) goPrev();
        else goNext();
      }
    };
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchend', handleTouchEnd, { passive: true });
    return () => {
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchend', handleTouchEnd);
    };
  }, [isOpen, goNext, goPrev]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/95 backdrop-blur-sm animate-fade-in"
      onClick={onClose}
    >
      {/* Close */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 sm:top-6 sm:right-6"
        aria-label="Close lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Previous */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goPrev(); }}
          className="absolute left-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 sm:left-6 sm:w-12 sm:h-12"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Next */}
      {images.length > 1 && (
        <button
          onClick={(e) => { e.stopPropagation(); goNext(); }}
          className="absolute right-2 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-white/10 border border-white/10 flex items-center justify-center text-white/80 hover:text-white hover:bg-white/20 transition-all duration-300 sm:right-6 sm:w-12 sm:h-12"
          aria-label="Next image"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Image */}
      <div
        className="relative w-[92vw] h-[75vh] sm:w-[88vw] sm:h-[80vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <Image
          src={current.src}
          alt={current.alt || current.title || 'Pro Shoot photography'}
          fill
          className="object-contain transition-opacity duration-300"
          sizes="90vw"
          priority
        />
      </div>

      {/* Metadata */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-center z-10 sm:bottom-8">
        {current.title && (
          <h3 className="font-heading text-lg text-white mb-1 sm:text-xl">{current.title}</h3>
        )}
        <div className="flex items-center justify-center gap-2 text-white/60 text-xs sm:text-sm">
          {current.category && <span>{current.category}</span>}
          {current.category && current.location && <span>•</span>}
          {current.location && <span>{current.location}</span>}
          <span className="ml-2 text-white/40">
            {currentIndex + 1} / {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}
