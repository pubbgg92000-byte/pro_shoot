'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 300;
const FRAME_PATH = '/sequences/dslr_assembly';

const TEXT_SLIDES = [
  {
    label: 'Our Craft',
    heading: 'Precision',
    headingClass: 'text-text-primary',
    sub: null,
  },
  {
    label: null,
    heading: 'Craftsmanship',
    headingClass: 'text-gold-gradient',
    sub: null,
  },
  {
    label: null,
    heading: 'Excellence',
    headingClass: 'text-text-primary',
    sub: 'Every frame is a masterpiece',
    cta: { label: 'Rent This Camera', href: '/rentals' },
  },
];

export function DSLRShowcase() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const textRefs = useRef<(HTMLDivElement | null)[]>([]);
  const [imagesLoaded, setImagesLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameIndexRef = useRef({ value: 0 });

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let loadedCount = 0;

    const framesToLoad = Math.min(TOTAL_FRAMES, 150);
    const step = Math.ceil(TOTAL_FRAMES / framesToLoad);

    for (let i = 0; i < TOTAL_FRAMES; i += step) {
      const img = new window.Image();
      const frameNum = String(i).padStart(6, '0');
      img.src = `${FRAME_PATH}/frame_${frameNum}.png`;
      img.onload = () => {
        loadedCount++;
        if (loadedCount >= Math.floor(framesToLoad * 0.3)) {
          setImagesLoaded(true);
        }
      };
      images[i] = img;
    }

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (!images[i]) {
        const prev = Math.floor(i / step) * step;
        images[i] = images[prev];
      }
    }

    imagesRef.current = images;
  }, []);

  useEffect(() => {
    if (!imagesLoaded || !canvasRef.current || !sectionRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const updateCanvas = () => {
      const currentIndex = Math.round(frameIndexRef.current.value);
      const img = imagesRef.current[currentIndex];
      if (!img || !img.complete) return;

      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const scale = Math.min(
        canvas.width / img.width,
        canvas.height / img.height
      );
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    updateCanvas();

    const gsapCtx = gsap.context(() => {
      // Scrub through frames
      gsap.to(frameIndexRef.current, {
        value: TOTAL_FRAMES - 1,
        ease: 'none',
        snap: { value: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: true,
          pin: false,
        },
        onUpdate: updateCanvas,
      });

      // Text reveals — each fades IN then fades OUT before the next appears
      const ranges = [
        { fadeIn: 0.02, peak: 0.15, fadeOut: 0.30 },
        { fadeIn: 0.32, peak: 0.45, fadeOut: 0.60 },
        { fadeIn: 0.62, peak: 0.75, fadeOut: 0.95 },
      ];

      ranges.forEach(({ fadeIn, peak, fadeOut }, i) => {
        const el = textRefs.current[i];
        if (!el) return;

        // Fade in
        gsap.fromTo(
          el,
          { opacity: 0, y: 30, scale: 0.95 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `${fadeIn * 100}% top`,
              end: `${peak * 100}% top`,
              scrub: true,
            },
          }
        );

        // Fade out (except last slide — keep it visible)
        if (i < ranges.length - 1) {
          gsap.to(el, {
            opacity: 0,
            y: -20,
            scale: 1.02,
            ease: 'power2.in',
            scrollTrigger: {
              trigger: sectionRef.current,
              start: `${peak * 100}% top`,
              end: `${fadeOut * 100}% top`,
              scrub: true,
            },
          });
        }
      });
    }, sectionRef);

    const handleResize = () => updateCanvas();
    window.addEventListener('resize', handleResize);

    return () => {
      gsapCtx.revert();
      window.removeEventListener('resize', handleResize);
    };
  }, [imagesLoaded]);

  return (
    <section ref={sectionRef} className="relative h-[300vh] bg-bg-primary" id="dslr-showcase">
      {/* Sticky Canvas Container */}
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ imageRendering: 'auto' }}
        />

        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5,5,5,0.6) 100%)',
        }} />

        {/* Text Overlays — positioned absolutely, each fades in/out independently */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {TEXT_SLIDES.map((slide, i) => (
            <div
              key={i}
              ref={(el) => { textRefs.current[i] = el; }}
              className="absolute inset-0 flex items-center justify-center opacity-0"
            >
              <div className="text-center container-luxury px-6">
                {slide.label && (
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4"
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
                    {slide.label}
                  </p>
                )}
                <h2
                  className={`font-heading text-4xl md:text-6xl lg:text-7xl ${slide.headingClass}`}
                  style={{ textShadow: '0 4px 24px rgba(0,0,0,0.6)' }}
                >
                  {slide.heading}
                </h2>
                {slide.sub && (
                  <p className="font-subheading text-lg md:text-xl text-text-secondary mt-4"
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.6)' }}>
                    {slide.sub}
                  </p>
                )}
                {slide.cta && (
                  <Link
                    href={slide.cta.href}
                    className="pointer-events-auto inline-flex items-center gap-2 mt-8 px-8 py-4 border border-gold/30 rounded-full text-gold text-sm uppercase tracking-wider hover:bg-gold/10 transition-all duration-300"
                  >
                    {slide.cta.label} →
                  </Link>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
