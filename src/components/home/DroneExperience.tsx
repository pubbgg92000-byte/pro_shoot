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

    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const draw = () => {
      const currentIndex = Math.round(frameRef.current.value);
      const img = imagesRef.current[currentIndex];
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
          scrub: true,
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
        <div className="absolute bottom-0 left-0 right-0 z-10 text-center container-luxury pb-16 md:pb-32 pt-32 bg-gradient-to-t from-bg-primary via-bg-primary/80 to-transparent pointer-events-none flex flex-col items-center">
          <div className="pointer-events-auto">
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
