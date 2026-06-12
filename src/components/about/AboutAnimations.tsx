'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger);

export function AboutAnimations() {
  const scopeRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const hero = document.querySelector<HTMLElement>('[data-about-hero]');
    const heroImage = document.querySelector<HTMLElement>('[data-about-hero-image]');
    const heroContent = document.querySelector<HTMLElement>('[data-about-hero-content]');

    if (hero && heroImage && heroContent) {
      gsap.fromTo(heroImage, { scale: 1.12 }, { scale: 1, duration: 2, ease: 'power2.out' });
      gsap.fromTo(
        heroContent.children,
        { autoAlpha: 0, y: 44, filter: 'blur(8px)' },
        {
          autoAlpha: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 1,
          stagger: 0.16,
          ease: 'power3.out',
        }
      );
      gsap.to(heroImage, {
        yPercent: 10,
        ease: 'none',
        scrollTrigger: { trigger: hero, start: 'top top', end: 'bottom top', scrub: 1 },
      });
    }

    gsap.utils.toArray<HTMLElement>('[data-about-reveal]').forEach((element) => {
      gsap.fromTo(
        element,
        { autoAlpha: 0, y: 70 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 78%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    const timelineLine = document.querySelector<HTMLElement>('[data-timeline-line]');
    const timelineSection = document.querySelector<HTMLElement>('[data-timeline-section]');
    if (timelineLine && timelineSection) {
      gsap.fromTo(
        timelineLine,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: timelineSection,
            start: 'top 65%',
            end: 'bottom 60%',
            scrub: 1,
          },
        }
      );
    }

    gsap.utils.toArray<HTMLElement>('[data-timeline-item]').forEach((item, index) => {
      gsap.fromTo(
        item,
        { autoAlpha: 0, x: index % 2 === 0 ? -70 : 70 },
        {
          autoAlpha: 1,
          x: 0,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 82%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });

    const valueCards = gsap.utils.toArray<HTMLElement>('[data-value-card]');
    if (valueCards.length) {
      gsap.fromTo(
        valueCards,
        { autoAlpha: 0, y: 80, scale: 0.94 },
        {
          autoAlpha: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: valueCards[0].parentElement,
            start: 'top 75%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }

    const cta = document.querySelector<HTMLElement>('[data-about-cta]');
    const ctaImage = document.querySelector<HTMLElement>('[data-about-cta-image]');
    const ctaContent = document.querySelector<HTMLElement>('[data-about-cta-content]');
    if (cta && ctaImage && ctaContent) {
      gsap.fromTo(
        ctaImage,
        { scale: 1.12 },
        {
          scale: 1,
          ease: 'none',
          scrollTrigger: { trigger: cta, start: 'top bottom', end: 'bottom top', scrub: 1 },
        }
      );
      gsap.fromTo(
        ctaContent.children,
        { autoAlpha: 0, y: 42 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.9,
          stagger: 0.14,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cta,
            start: 'top 72%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    }
  }, { scope: scopeRef });

  return <div ref={scopeRef} className="hidden" aria-hidden="true" />;
}
