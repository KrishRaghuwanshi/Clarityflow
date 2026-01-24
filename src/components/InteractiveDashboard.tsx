'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import Button from './ui/Button';

export default function InteractiveDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    if (!containerRef.current || hasAnimated) return;

    const container = containerRef.current;

    // Track mouse position for particle effects
    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      mousePos.current = {
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      };

      // Move particles toward mouse
      particlesRef.current.forEach((particle) => {
        if (particle) {
          const particleRect = particle.getBoundingClientRect();
          const particleX = particleRect.left - rect.left + particleRect.width / 2;
          const particleY = particleRect.top - rect.top + particleRect.height / 2;

          const dx = mousePos.current.x - particleX;
          const dy = mousePos.current.y - particleY;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 150) {
            const force = (150 - distance) / 150;
            gsap.to(particle, {
              x: dx * force * 0.3,
              y: dy * force * 0.3,
              duration: 0.3,
              ease: 'power2.out',
            });
          } else {
            gsap.to(particle, {
              x: 0,
              y: 0,
              duration: 0.5,
              ease: 'power2.out',
            });
          }
        }
      });
    };

    container.addEventListener('mousemove', handleMouseMove);

    // Animate funnel bars ONCE
    const tl = gsap.timeline({
      onComplete: () => setHasAnimated(true),
    });

    // Enhanced funnel bars with gradient animation
    barsRef.current.forEach((bar, i) => {
      if (bar) {
        tl.fromTo(
          bar,
          { scaleX: 0, transformOrigin: 'left', opacity: 0 },
          { scaleX: 1, opacity: 1, duration: 0.9, ease: 'power2.out' },
          i * 0.15
        );
      }
    });

    // Gentle floating for particles
    particlesRef.current.forEach((particle, i) => {
      if (particle) {
        gsap.to(particle, {
          y: -10 + Math.random() * 20,
          x: -5 + Math.random() * 10,
          opacity: 0.4 + Math.random() * 0.4,
          duration: 2 + Math.random() * 2,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut',
          delay: i * 0.2,
        });
      }
    });

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      tl.kill();
    };
  }, [hasAnimated]);

  const funnelData = [
    { label: 'Visitors', value: '10,000', width: '100%', color: 'from-indigo-500 to-violet-500' },
    { label: 'Sign Up', value: '6,800', width: '68%', color: 'from-indigo-400 to-violet-400' },
    { label: 'Onboarding', value: '3,944', width: '39%', color: 'from-indigo-500 to-pink-500' },
    { label: 'Active', value: '1,795', width: '18%', color: 'from-violet-500 to-pink-500' },
  ];

  return (
    <div
      ref={containerRef}
      className="relative rounded-2xl overflow-hidden bg-white border border-gray-200 p-8 shadow-2xl"
    >
      {/* Subtle grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.02)_1px,transparent_1px)] bg-[size:24px_24px]" />

      {/* Mouse-following particles */}
      {[...Array(15)].map((_, i) => (
        <div
          key={i}
          ref={(el) => {
            if (el) particlesRef.current[i] = el;
          }}
          className="absolute w-2 h-2 rounded-full bg-indigo-400/30 pointer-events-none"
          style={{
            left: `${15 + Math.random() * 70}%`,
            top: `${15 + Math.random() * 70}%`,
          }}
        />
      ))}

      {/* Header */}
      <div className="relative flex items-center justify-between mb-8">
        <div className="flex items-center gap-3">
          <div className="h-2 w-2 rounded-full bg-green-500 animate-pulse shadow-lg shadow-green-400/50" />
          <span className="text-sm font-medium text-gray-700">Live Analytics</span>
        </div>
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/80" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/80" />
          <div className="w-3 h-3 rounded-full bg-green-400/80" />
        </div>
      </div>

      {/* Metrics row */}
      <div className="relative grid grid-cols-3 gap-4 mb-8">
        {[
          { label: 'Conversion', value: '3.42%', change: '+12%', positive: true },
          { label: 'Active Users', value: '12,847', change: '+8%', positive: true },
          { label: 'Drop-off', value: '42.3%', change: '-5%', positive: false },
        ].map((metric, i) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.1 }}
            className="rounded-xl bg-gray-50 border border-gray-100 p-4 hover:shadow-md transition-shadow"
          >
            <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
            <div
              className={`text-xs font-medium ${metric.positive ? 'text-green-600' : 'text-red-600'}`}
            >
              {metric.change}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Animated Graph Section */}
      <div className="relative mb-8">
        <div className="text-sm font-semibold text-gray-700 mb-4">Live Traffic</div>
        <div className="h-48 w-full bg-gray-50 rounded-xl border border-gray-100 relative overflow-hidden flex items-end px-4 pb-0">
          {/* Graph Lines */}
          <svg
            className="w-full h-full absolute inset-0 text-indigo-500"
            preserveAspectRatio="none"
            viewBox="0 0 100 50"
          >
            <motion.path
              d="M0,50 L0,30 C10,25 20,40 30,35 C40,30 50,10 60,15 C70,20 80,5 90,10 L100,5 L100,50 Z"
              fill="url(#gradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.2 }}
              transition={{ duration: 1, delay: 0.5 }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="currentColor" stopOpacity="0.5" />
                <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
              </linearGradient>
            </defs>
            <motion.path
              d="M0,30 C10,25 20,40 30,35 C40,30 50,10 60,15 C70,20 80,5 90,10 L100,5"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2, ease: 'easeInOut' }}
            />
          </svg>

          {/* Grid Lines */}
          <div className="absolute inset-0 w-full h-full pointer-events-none">
            <div className="w-full h-1/4 border-t border-gray-200/50" />
            <div className="w-full h-1/4 border-t border-gray-200/50" />
            <div className="w-full h-1/4 border-t border-gray-200/50" />
          </div>
        </div>
      </div>

      {/* Animated funnel */}
      <div className="relative space-y-3">
        <div className="text-sm font-semibold text-gray-700 mb-4">Conversion Funnel</div>
        {funnelData.map((step, i) => (
          <div key={step.label} className="relative">
            <div className="flex justify-between text-xs mb-1.5">
              <span className="text-gray-600 font-medium">{step.label}</span>
              <span className="text-gray-900 font-semibold">{step.value}</span>
            </div>
            <div className="relative h-10 bg-gray-100 rounded-lg overflow-hidden">
              <div
                ref={(el) => {
                  if (el) barsRef.current[i] = el;
                }}
                className={`absolute inset-y-0 left-0 rounded-lg bg-gradient-to-r ${step.color} shadow-lg`}
                style={{ width: step.width }}
              />
            </div>
            {i < funnelData.length - 1 && (
              <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 text-indigo-300 text-xs">
                ▼
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Floating AI insight card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 1.2, duration: 0.5 }}
        className="absolute -right-4 top-1/2 transform -translate-y-1/2 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl p-4 shadow-2xl max-w-[180px] border border-indigo-400/30"
      >
        <div className="flex items-center gap-2 mb-2">
          <div className="w-2 h-2 rounded-full bg-yellow-400 animate-pulse" />
          <span className="text-xs font-semibold text-white">AI Insight</span>
        </div>
        <div className="text-xs text-indigo-100">
          Simplify step 2 form to increase conversion by{' '}
          <span className="font-bold text-white">+18%</span>
        </div>
      </motion.div>

      {/* CTA Button */}
      <div className="relative text-center mt-8 pt-6 border-t border-gray-200">
        <Link href="/dashboard">
          <Button size="lg">View Full Dashboard</Button>
        </Link>
      </div>
    </div>
  );
}
