'use client';

import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { gsap } from 'gsap';
import Link from 'next/link';
import Button from './ui/Button';

export default function InteractiveDashboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const barsRef = useRef<HTMLDivElement[]>([]);
  const chartBarRefs = useRef<HTMLDivElement[]>([]);
  const particlesRef = useRef<HTMLDivElement[]>([]);
  const metricRefs = useRef<HTMLDivElement[]>([]);
  const funnelTextsRef = useRef<HTMLDivElement[]>([]);
  const [hasAnimated, setHasAnimated] = useState(false);
  const [hoveredBar, setHoveredBar] = useState<number | null>(null);
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

    // Animate with timeline
    const tl = gsap.timeline({
      onComplete: () => setHasAnimated(true),
    });

    // Staggered animation for all elements
    if (metricRefs.current.length > 0) {
      tl.from(metricRefs.current, {
        opacity: 0,
        y: 20,
        duration: 0.6,
        stagger: 0.1,
        ease: 'power2.out',
      });
    }

    if (funnelTextsRef.current.length > 0) {
      tl.from(funnelTextsRef.current, {
        opacity: 0,
        x: -20,
        duration: 0.5,
        stagger: 0.08,
        ease: 'power2.out',
      }, '-=0.4');
    }

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

    // Animate chart bars
    if (chartBarRefs.current.length > 0) {
      tl.from(chartBarRefs.current, {
        scaleY: 0,
        opacity: 0,
        transformOrigin: 'bottom',
        duration: 0.8,
        stagger: 0.1,
        ease: 'back.out(1.7)',
      }, '-=0.5');
    }

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

  const getBarColor = () => {
    const colors = [
      'from-indigo-500 to-violet-500',
      'from-indigo-600 to-violet-600',
      'from-violet-500 to-pink-500',
      'from-indigo-500 to-pink-500',
    ];
    return colors[Math.floor(Math.random() * colors.length)];
  };

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
      <div className="relative flex items-center justify-between mb-6">
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

      {/* Graph-like visualization */}
      <div className="relative mb-8">
        <div className="text-sm font-semibold text-gray-700 mb-4">Weekly Performance</div>
        <div className="relative bg-gray-50 rounded-xl p-4 h-48 overflow-hidden">
          <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />
          <div className="absolute bottom-4 left-4 right-4 h-32 flex items-end justify-between gap-2">
            {[
              { height: 60, label: 'Mon', value: '2.8K' },
              { height: 85, label: 'Tue', value: '4.1K' },
              { height: 72, label: 'Wed', value: '3.5K' },
              { height: 95, label: 'Thu', value: '5.2K' },
              { height: 78, label: 'Fri', value: '3.8K' },
              { height: 92, label: 'Sat', value: '4.9K' },
              { height: 88, label: 'Sun', value: '4.6K' },
            ].map((bar, i) => (
              <motion.div
                key={bar.label}
                className="flex-1 flex flex-col items-center justify-end"
                onMouseEnter={() => setHoveredBar(i)}
                onMouseLeave={() => setHoveredBar(null)}
              >
                <motion.div
                  ref={(el) => {
                    if (el) chartBarRefs.current[i] = el;
                  }}
                  className={`w-full bg-gradient-to-t ${hoveredBar === i ? 'from-indigo-600 to-violet-600' : 'from-indigo-500 to-violet-500'} rounded-t-lg shadow-lg transition-all duration-300`}
                  style={{ height: `${bar.height}%` }}
                  whileHover={{ scaleY: 1.05 }}
                >
                  <div className={`absolute top-2 left-1/2 transform -translate-x-1/2 text-xs font-semibold text-white ${hoveredBar === i ? 'opacity-100' : 'opacity-0'} transition-opacity`}>
                    {bar.value}
                  </div>
                </motion.div>
                <div className="text-xs text-gray-500 mt-1">{bar.label}</div>
              </motion.div>
            ))}
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
