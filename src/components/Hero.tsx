'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import Button from './ui/Button';
import { useCursorParallax } from '@/hooks/useCursorParallax';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);
  const parallaxRef = useCursorParallax(true);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion || !heroRef.current) return;

    const timeline = gsap.timeline();

    timeline
      .from('.hero-heading > span', {
        y: 24,
        opacity: 0,
        stagger: 0.06,
        duration: 0.48,
        ease: 'power2.out',
      })
      .from(
        '.hero-sub',
        {
          y: 12,
          opacity: 0,
          duration: 0.36,
        },
        '-=0.28'
      )
      .from(
        '.hero-cta',
        {
          y: 12,
          opacity: 0,
          duration: 0.36,
        },
        '-=0.24'
      )
      .from(
        '.dashboard-mock',
        {
          x: 60,
          opacity: 0,
          scale: 0.98,
          ease: 'power3.out',
          duration: 0.7,
        },
        '-=0.42'
      );
  }, []);

  return (
    <section
      ref={parallaxRef}
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white pt-20 pb-16 sm:pt-24 sm:pb-20"
    >
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div ref={heroRef} className="relative z-10">
            <h1 className="hero-heading heading-xl mb-6 text-balance">
              <span className="block">See exactly where</span>
              <span className="block text-indigo-600">users drop off</span>
              <span className="block">— and what to fix next.</span>
            </h1>

            <p className="hero-sub mb-8 text-xl text-gray-600 text-balance max-w-2xl">
              Clarityflow turns user behaviour into clear, prioritized product improvements —
              without analytics complexity.
            </p>

            <div className="hero-cta flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="group">
                Book a demo
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
              <Button size="lg" variant="secondary">
                View mock dashboard
              </Button>
            </div>

            <p className="mt-6 text-sm text-gray-500">
              No credit card required • Free 14-day trial
            </p>
          </div>

          <div className="relative parallax-fg dashboard-mock">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
            >
              <div className="bg-gradient-to-br from-indigo-500 to-violet-600 p-8 aspect-video flex items-center justify-center">
                <div className="text-center text-white">
                  <div className="text-6xl font-bold mb-2">42%</div>
                  <div className="text-lg">Drop-off detected</div>
                </div>
              </div>
            </motion.div>

            {/* Floating insight cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 max-w-xs border border-gray-100"
            >
              <div className="text-sm font-semibold text-gray-900 mb-1">Onboarding drop: 42%</div>
              <div className="text-xs text-gray-600">Simplify form at step 2</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
            >
              <div className="text-2xl font-bold text-indigo-600 mb-1">+18%</div>
              <div className="text-xs text-gray-600">Conversion increase</div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Background decoration */}
      <div className="parallax-bg absolute inset-0 -z-10 opacity-40">
        <div className="absolute top-0 right-0 w-96 h-96 bg-indigo-200 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-200 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
