'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function ServicePageAnimations() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const hero = document.querySelector<HTMLElement>('[data-service-hero]');
    const heroImage = document.querySelector<HTMLElement>('[data-service-hero-image]');
    const heroContent = document.querySelector<HTMLElement>('[data-service-hero-content]');

    if (hero && heroImage && heroContent) {
      gsap.fromTo(
        heroImage,
        { scale: 1.12, filter: 'brightness(0.75)' },
        { scale: 1, filter: 'brightness(1)', duration: 1.8, ease: 'power2.out' }
      );
      gsap.fromTo(
        heroContent.children,
        { autoAlpha: 0, y: 42, filter: 'blur(8px)' },
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.9,
          stagger: 0.13,
          ease: 'power3.out',
        }
      );
      gsap.to(heroImage, {
        yPercent: 9,
        scale: 1.04,
        ease: 'none',
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }

    gsap.utils.toArray<HTMLElement>('[data-service-heading]').forEach((heading) => {
      gsap.fromTo(
        heading.children,
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: heading,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>('[data-process-step]').forEach((step, index) => {
      gsap.fromTo(
        step,
        { autoAlpha: 0, x: index % 2 === 0 ? -60 : 60 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: step,
            start: 'top 84%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    const revealGroups = gsap.utils.toArray<HTMLElement>('[data-service-stagger]');
    revealGroups.forEach((group) => {
      gsap.fromTo(
        group.children,
        { autoAlpha: 0, y: 54, scale: 0.97 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.75,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: group,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    gsap.utils.toArray<HTMLElement>('[data-service-reveal]').forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 48 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.85,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, { scope: scopeRef });

  return <div ref={scopeRef} className="hidden" aria-hidden="true" />;
}
