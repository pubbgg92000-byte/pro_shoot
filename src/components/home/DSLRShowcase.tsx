'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 300;
const DESKTOP_FRAME_PATH = '/sequences/dslr_assembly';
const MOBILE_FRAME_PATH = '/sequences/dslr_mobile';
const INITIAL_PRELOAD_FRAMES = 20;
const FRAME_LOOKAHEAD = 12;
const START_HOLD = 24;
const END_HOLD = 36;
const PIXELS_PER_TIMELINE_UNIT = 18;

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
  const loadedFramesRef = useRef<boolean[]>([]);
  const loadingFramesRef = useRef<Set<number>>(new Set());
  const loadFrameRef = useRef<(index: number) => Promise<void>>(() => Promise.resolve());
  const renderFrameRef = useRef<() => void>(() => undefined);
  const frameIndexRef = useRef({ value: 0 });
  const lastFrameRef = useRef(-1);

  useEffect(() => {
    const images = Array.from({ length: TOTAL_FRAMES }) as HTMLImageElement[];
    const loadedFrames = Array.from({ length: TOTAL_FRAMES }, () => false);
    let isCancelled = false;
    const framePath = window.matchMedia('(max-width: 767px)').matches
      ? MOBILE_FRAME_PATH
      : DESKTOP_FRAME_PATH;

    const loadFrame = (index: number) => {
      if (index < 0 || index >= TOTAL_FRAMES) return Promise.resolve();
      if (loadedFrames[index] || loadingFramesRef.current.has(index)) {
        return Promise.resolve();
      }

      loadingFramesRef.current.add(index);

      return new Promise<void>((resolve) => {
        const img = new window.Image();
        const frameNum = String(index).padStart(6, '0');

        img.onload = () => {
          loadedFrames[index] = true;
          loadingFramesRef.current.delete(index);
          renderFrameRef.current();
          resolve();
        };
        img.onerror = () => {
          loadingFramesRef.current.delete(index);
          resolve();
        };
        img.src = `${framePath}/frame_${frameNum}.png`;
        images[index] = img;
      });
    };

    imagesRef.current = images;
    loadedFramesRef.current = loadedFrames;
    loadingFramesRef.current = new Set();
    loadFrameRef.current = loadFrame;

    Promise.all(
      Array.from({ length: INITIAL_PRELOAD_FRAMES }, (_, index) => loadFrame(index))
    ).then(async () => {
      if (isCancelled) return;
      setImagesLoaded(true);

      for (let i = INITIAL_PRELOAD_FRAMES; i < TOTAL_FRAMES && !isCancelled; i += 1) {
        await loadFrame(i);
      }
    });

    return () => {
      isCancelled = true;
      images.forEach((img) => {
        if (img) {
          img.onload = null;
          img.onerror = null;
        }
      });
    };
  }, []);

  useGSAP(() => {
    if (!imagesLoaded || !canvasRef.current || !sectionRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const queueNearbyFrames = (frame: number) => {
      for (
        let index = frame;
        index <= Math.min(TOTAL_FRAMES - 1, frame + FRAME_LOOKAHEAD);
        index += 1
      ) {
        void loadFrameRef.current(index);
      }
    };

    const findRenderableFrame = (frame: number) => {
      if (loadedFramesRef.current[frame]) return frame;

      for (let distance = 1; distance < TOTAL_FRAMES; distance += 1) {
        const previous = frame - distance;
        const next = frame + distance;

        if (previous >= 0 && loadedFramesRef.current[previous]) return previous;
        if (next < TOTAL_FRAMES && loadedFramesRef.current[next]) return next;
      }

      return -1;
    };

    const updateCanvas = () => {
      const currentIndex = Math.round(frameIndexRef.current.value);
      const clamped = Math.max(0, Math.min(currentIndex, TOTAL_FRAMES - 1));
      queueNearbyFrames(clamped);

      const renderableFrame = findRenderableFrame(clamped);
      if (renderableFrame < 0) return;

      const img = imagesRef.current[renderableFrame];
      if (!img || !img.complete || !img.naturalWidth) return;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const widthRatio = canvas.offsetWidth / img.width;
      const heightRatio = canvas.offsetHeight / img.height;
      const scale = window.innerWidth < 768
        ? Math.max(widthRatio, heightRatio)
        : Math.min(widthRatio, heightRatio);
      const x = (canvas.offsetWidth - img.width * scale) / 2;
      const y = (canvas.offsetHeight - img.height * scale) / 2;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };
    renderFrameRef.current = updateCanvas;

    resizeCanvas();
    updateCanvas();
    gsap.set(textRefs.current, { autoAlpha: 0, y: 30, scale: 0.96 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () =>
          `+=${Math.max(
            window.innerHeight * 5,
            (START_HOLD + TOTAL_FRAMES - 1 + END_HOLD) * PIXELS_PER_TIMELINE_UNIT
          )}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 3,
      },
    });

    timeline
      .to({}, { duration: START_HOLD })
      .to(frameIndexRef.current, {
        value: TOTAL_FRAMES - 1,
        duration: TOTAL_FRAMES - 1,
        ease: 'none',
        snap: { value: 1 },
        onUpdate: () => {
          const frame = Math.round(frameIndexRef.current.value);

          if (frame !== lastFrameRef.current) {
            lastFrameRef.current = frame;
            updateCanvas();
          }
        },
      })
      .to({}, { duration: END_HOLD });

    const addTextReveal = (
      index: number,
      start: number,
      visibleDuration: number,
      fadeOut = true
    ) => {
      const el = textRefs.current[index];
      if (!el) return;

      timeline
        .to(
          el,
          {
            autoAlpha: 1,
            y: 0,
            scale: 1,
            duration: 18,
            ease: 'power2.out',
          },
          start
        )
        .to({}, { duration: visibleDuration }, start + 18);

      if (fadeOut) {
        timeline.to(
          el,
          {
            autoAlpha: 0,
            y: -24,
            scale: 1.02,
            duration: 18,
            ease: 'power2.in',
          },
          start + 18 + visibleDuration
        );
      }
    };

    addTextReveal(0, START_HOLD + 8, 48);
    addTextReveal(1, START_HOLD + 108, 48);
    addTextReveal(2, START_HOLD + 208, END_HOLD + 46, false);

    const handleResize = () => {
      resizeCanvas();
      updateCanvas();
    };
    window.addEventListener('resize', handleResize);

    const refreshCanvas = () => {
      const frame = Math.round(frameIndexRef.current.value);
      if (frame !== lastFrameRef.current) {
        lastFrameRef.current = frame;
      }
      updateCanvas();
    };
    ScrollTrigger.addEventListener('refresh', refreshCanvas);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('resize', handleResize);
      ScrollTrigger.removeEventListener('refresh', refreshCanvas);
    };
  }, { scope: sectionRef, dependencies: [imagesLoaded] });

  return (
    <section
      ref={sectionRef}
      className="relative h-[100svh] min-h-[620px] overflow-hidden bg-bg-primary md:h-dvh md:min-h-0"
      id="dslr-showcase"
    >
      <div className="relative flex h-[100svh] min-h-[620px] w-full items-center justify-center overflow-hidden md:h-dvh md:min-h-0">
        {/* Canvas */}
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
          style={{ imageRendering: 'auto' }}
        />

        {/* Subtle vignette overlay */}
        <div className="absolute inset-0 pointer-events-none" style={{
          background: 'radial-gradient(ellipse at center, transparent 55%, rgba(5,5,5,0.55) 100%)',
        }} />

        {/* Text Overlays */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
          {TEXT_SLIDES.map((slide, i) => (
            <div
              key={i}
              ref={(el) => { textRefs.current[i] = el; }}
              className="invisible absolute inset-0 flex items-center justify-center opacity-0"
            >
              <div className="container-luxury px-5 text-center sm:px-6">
                {slide.label && (
                  <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4"
                    style={{ textShadow: '0 2px 12px rgba(0,0,0,0.8)' }}>
                    {slide.label}
                  </p>
                )}
                <h2
                  className={`font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl ${slide.headingClass}`}
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
                    className="pointer-events-auto mt-8 inline-flex w-full max-w-[290px] items-center justify-center gap-2 rounded-full border border-gold/30 px-8 py-4 text-sm uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold/10 sm:w-auto"
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
