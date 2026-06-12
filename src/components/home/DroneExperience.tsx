'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 300;
const DESKTOP_FRAME_PATH = '/sequences/drone_hover';
const MOBILE_FRAME_PATH = '/sequences/drone_mobile';
const INITIAL_PRELOAD_FRAMES = 20;
const FRAME_LOOKAHEAD = 12;
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
  const loadedFramesRef = useRef<boolean[]>([]);
  const loadingFramesRef = useRef<Set<number>>(new Set());
  const loadFrameRef = useRef<(index: number) => Promise<void>>(() => Promise.resolve());
  const renderFrameRef = useRef<() => void>(() => undefined);
  const frameRef = useRef({ value: 0 });
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
        img.src = `${framePath}/frame_${String(index).padStart(6, '0')}.png`;
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
      setLoaded(true);

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

    const draw = () => {
      const currentIndex = Math.round(frameRef.current.value);
      const clamped = Math.max(0, Math.min(currentIndex, TOTAL_FRAMES - 1));
      queueNearbyFrames(clamped);

      const renderableFrame = findRenderableFrame(clamped);
      if (renderableFrame < 0) return;

      const img = imagesRef.current[renderableFrame];
      if (!img?.complete || !img.naturalWidth) return;

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
    renderFrameRef.current = draw;

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
    <section ref={sectionRef} className="relative h-[100svh] min-h-[620px] overflow-hidden bg-bg-primary md:h-dvh md:min-h-0" id="drone">
      <div className="relative flex h-[100svh] min-h-[620px] w-full items-center justify-center overflow-hidden md:h-dvh md:min-h-0">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 w-full h-full"
        />

        {/* Vignette */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: 'radial-gradient(ellipse at center, transparent 50%, rgba(5,5,5,0.6) 100%)' }}
        />

        {/* Content overlay */}
        <div
          ref={contentRef}
          className="pointer-events-none invisible absolute bottom-0 left-0 right-0 z-10 flex flex-col items-center bg-gradient-to-t from-bg-primary via-bg-primary/75 to-transparent pb-10 pt-28 text-center opacity-0 md:pb-32"
        >
          <div className="container-luxury pointer-events-auto w-full">
            <p className="mb-3 text-[11px] uppercase tracking-[0.3em] text-gold sm:mb-4 sm:text-xs">Aerial Photography</p>
            <h2 className="font-heading mb-4 text-4xl text-text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Elevated <span className="text-gold-gradient">Perspectives</span>
            </h2>
            <p className="font-subheading mx-auto mb-7 max-w-lg text-lg text-text-secondary md:text-xl">
              Professional aerial photography and cinematography that reveals the grandeur invisible to the human eye
            </p>
            <Link
              href="/services/drone-photography"
              className="inline-flex w-full max-w-[330px] items-center justify-center gap-2 rounded-full border border-gold/30 px-8 py-4 text-sm uppercase tracking-wider text-gold transition-all duration-300 hover:bg-gold/10 sm:w-auto"
            >
              Explore Aerial Services
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
