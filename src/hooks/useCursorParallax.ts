'use client';

import { useEffect, useRef } from 'react';

export function useCursorParallax(enabled = true) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled || !containerRef.current) return;

    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const container = containerRef.current;
    let rafId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (rafId) {
        cancelAnimationFrame(rafId);
      }

      rafId = requestAnimationFrame(() => {
        const rect = container.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;

        // Apply parallax to different layers
        const bgLayer = container.querySelector<HTMLElement>('.parallax-bg');
        const midLayer = container.querySelector<HTMLElement>('.parallax-mid');
        const fgLayer = container.querySelector<HTMLElement>('.parallax-fg');

        if (bgLayer) {
          bgLayer.style.transform = `translate3d(${x * 80}px, ${y * 80}px, 0)`;
        }
        if (midLayer) {
          midLayer.style.transform = `translate3d(${x * 40}px, ${y * 40}px, 0)`;
        }
        if (fgLayer) {
          fgLayer.style.transform = `translate3d(${x * 12}px, ${y * 12}px, 0)`;
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      if (rafId) {
        cancelAnimationFrame(rafId);
      }
    };
  }, [enabled]);

  return containerRef;
}
