'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 240;
const FRAME_PATH = '/sequences/drone_hover';

export function DroneExperience() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [loaded, setLoaded] = useState(false);
  const imagesRef = useRef<HTMLImageElement[]>([]);
  const frameRef = useRef({ value: 0 });

  useEffect(() => {
    const images: HTMLImageElement[] = [];
    let count = 0;
    const step = 3; // Load every 3rd frame for performance

    for (let i = 0; i < TOTAL_FRAMES; i += step) {
      const img = new window.Image();
      img.src = `${FRAME_PATH}/frame_${String(i).padStart(6, '0')}.png`;
      img.onload = () => {
        count++;
        if (count >= 20) setLoaded(true);
      };
      images[i] = img;
    }

    for (let i = 0; i < TOTAL_FRAMES; i++) {
      if (!images[i]) {
        images[i] = images[Math.floor(i / step) * step];
      }
    }

    imagesRef.current = images;
  }, []);

  useEffect(() => {
    if (!loaded || !canvasRef.current || !sectionRef.current) return;
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const img = imagesRef.current[frameRef.current.value];
      if (!img?.complete) return;
      canvas.width = canvas.offsetWidth * window.devicePixelRatio;
      canvas.height = canvas.offsetHeight * window.devicePixelRatio;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const scale = Math.min(canvas.width / img.width, canvas.height / img.height);
      const x = (canvas.width - img.width * scale) / 2;
      const y = (canvas.height - img.height * scale) / 2;
      ctx.drawImage(img, x, y, img.width * scale, img.height * scale);
    };

    draw();

    const gsapCtx = gsap.context(() => {
      gsap.to(frameRef.current, {
        value: TOTAL_FRAMES - 1,
        ease: 'none',
        snap: { value: 1 },
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom bottom',
          scrub: 0.5,
        },
        onUpdate: draw,
      });
    }, sectionRef);

    const onResize = () => draw();
    window.addEventListener('resize', onResize);

    return () => {
      gsapCtx.revert();
      window.removeEventListener('resize', onResize);
    };
  }, [loaded]);

  return (
    <section ref={sectionRef} className="relative h-[250vh] bg-bg-primary" id="drone">
      <div className="sticky top-0 h-screen flex items-center justify-center overflow-hidden">
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
        <div className="relative z-10 text-center container-luxury">
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
    </section>
  );
}
