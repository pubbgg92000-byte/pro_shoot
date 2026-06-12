'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register plugins globally once
gsap.registerPlugin(ScrollTrigger);

/**
 * Centralized GSAP lifecycle manager.
 * - Kills all ScrollTriggers before React unmounts page DOM on route change
 *   (prevents "removeChild" errors from pin-spacer wrappers).
 * - Refreshes ScrollTrigger measurements after route change layout stabilizes.
 */
export function GSAPProvider() {
  const pathname = usePathname();

  useEffect(() => {
    // After route change, wait for layout to stabilize then refresh
    const id = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 100);

    return () => {
      clearTimeout(id);
      // Kill all ScrollTriggers BEFORE React unmounts the page DOM.
      // This un-wraps pin-spacer divs so React can cleanly removeChild.
      ScrollTrigger.getAll().forEach((st) => st.kill());
      // Kill all active tweens to prevent stale DOM references
      gsap.killTweensOf('*');
    };
  }, [pathname]);

  return null;
}
