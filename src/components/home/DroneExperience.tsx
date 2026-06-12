'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 300;
const FRAME_PATH = '/sequences/drone_hover';
const TEXT_REVEAL_FRAME = 150;
const TEXT_REVEAL_DURATION = 24;
const FINAL_HOLD_DURATION = 72;
const PIXELS_PER_TIMELINE_UNIT = 18;

export function DroneExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const [loaded, setLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ value: 0 });
  const lastFrameRef = useRef(-1);

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let settledCount = 0;
    let isCancelled = false;

    const markSettled = () => {
      settledCount += 1;
      if (!isCancelled && settledCount === TOTAL_FRAMES) {
        setLoaded(true);
      }
    };

    for (let i = 0; i < TOTAL_FRAMES; i += 1) {
      const img = new window.Image();
      img.src = `${FRAME_PATH}/frame_${String(i).padStart(6, '0')}.png`;
      img.onload = markSettled;
      img.onerror = markSettled;
      images[i] = img;
    }

    imagesRef.current = images;

    return () => {
      isCancelled = true;
      images.forEach((img) => {
        img.onload = null;
        img.onerror = null;
      });
    };
  }, []);

  useGSAP(() => {
    if (!loaded || !canvasRef.current || !contentRef.current || !sectionRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1;

      canvas.width = canvas.offsetWidth * dpr;
      canvas.height = canvas.offsetHeight * dpr;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = () => {
      const currentIndex = Math.round(frameRef.current.value);
      const clamped = Math.max(0, Math.min(currentIndex, TOTAL_FRAMES - 1));
      const img = imagesRef.current[clamped];
      if (!img?.complete || !img.naturalWidth) return;

      ctx.clearRect(0, 0, canvas.offsetWidth, canvas.offsetHeight);

      const scale = Math.min(
        canvas.offsetWidth / img.width,
        canvas.offsetHeight / img.height
      );
      const x = (canvas.offsetWidth - img.width * scale) / 2;
      const y = (canvas.offsetHeight - img.height * scale) / 2;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    resizeCanvas();
    draw();
    gsap.set(contentRef.current, { autoAlpha: 0, y: 36 });

    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: 'top top',
        end: () =>
          `+=${Math.max(
            window.innerHeight * 5,
            (TOTAL_FRAMES - 1 + TEXT_REVEAL_DURATION + FINAL_HOLD_DURATION) *
              PIXELS_PER_TIMELINE_UNIT
          )}`,
        pin: true,
        pinSpacing: true,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        refreshPriority: 1,
      },
    });

    timeline
      .to(
        frameRef.current,
        {
          value: TOTAL_FRAMES - 1,
          duration: TOTAL_FRAMES - 1,
          ease: 'none',
          snap: { value: 1 },
          onUpdate: () => {
            const frame = Math.round(frameRef.current.value);

            if (frame !== lastFrameRef.current) {
              lastFrameRef.current = frame;
              draw();
            }
          },
        },
        0
      )
      .to(
        contentRef.current,
        {
          autoAlpha: 1,
          y: 0,
          duration: TEXT_REVEAL_DURATION,
          ease: 'power2.out',
        },
        TEXT_REVEAL_FRAME
      )
      .to({}, { duration: FINAL_HOLD_DURATION }, TOTAL_FRAMES - 1);

    const onResize = () => {
      resizeCanvas();
      draw();
    };
    window.addEventListener('resize', onResize);

    const refreshCanvas = () => draw();
    ScrollTrigger.addEventListener('refresh', refreshCanvas);
    ScrollTrigger.refresh();

    return () => {
      window.removeEventListener('resize', onResize);
      ScrollTrigger.removeEventListener('refresh', refreshCanvas);
    };
  }, { scope: sectionRef, dependencies: [loaded] });

  return (
    <section ref={sectionRef} className="relative h-dvh overflow-hidden bg-bg-primary" id="drone">
      <div className="relative flex h-dvh w-full items-center justify-center overflow-hidden">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 40%, rgba(5,5,5,0.7) 100%)' }}
        />

        {/* Content overlay */}
        <div
          ref={contentRef}
          className="invisible absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent pb-16 pt-32 text-center opacity-0 pointer-events-none md:pb-32"
        >
          <div className="container-luxury w-full pointer-events-auto">
            <p className="text-xs uppercase tracking-[0.3em] text-gold mb-4">Aerial Photography</p>
            <h2 className="font-heading text-4xl md:text-6xl lg:text-7xl text-text-primary mb-4">
              Elevated <span className="text-gold-gradient">Perspectives</span>
            </h2>
            <p className="font-subheading text-lg md:text-xl text-text-secondary max-w-lg mx-auto mb-8">
              Professional aerial photography and cinematography that reveals the grandeur invisible to the human eye
            </p>
            <Link
              href="/services/drone-photography"
              className="inline-flex items-center gap-2 px-8 py-4 border border-gold/30 rounded-full text-gold text-sm uppercase tracking-wider hover:bg-gold/10 transition-all duration-300"
            >
              Explore Aerial Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
