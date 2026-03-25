'use client';

import { motion } from 'framer-motion';
import Button from './ui/Button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-indigo-50/50 via-white to-white pt-20 pb-0 sm:pt-24 sm:pb-20">
      {/* Animated background blobs for creative SaaS feel */}
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, 30, 0], y: [0, 50, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-96 h-96 lg:w-[500px] lg:h-[500px] lg:-left-20 lg:-top-10 bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:opacity-40 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.2, 1], x: [0, -40, 0], y: [0, 40, 0] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 right-10 w-96 h-96 lg:w-[600px] lg:h-[600px] lg:-right-10 lg:top-20 bg-indigo-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:opacity-40 pointer-events-none"
      />
      <motion.div
        animate={{ scale: [1, 1.1, 1], x: [0, 20, 0], y: [0, -30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute -bottom-10 left-32 w-96 h-96 lg:w-[500px] lg:h-[500px] lg:-bottom-32 lg:left-1/3 bg-blue-300 rounded-full mix-blend-multiply filter blur-3xl opacity-30 lg:opacity-40 pointer-events-none"
      />
      <div className="container-custom">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left side - Text content */}
          <div className="relative z-10 text-center lg:text-left flex flex-col items-center lg:items-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl sm:heading-xl mb-6 text-balance font-extrabold tracking-tight mx-auto lg:mx-0"
            >
              <span className="text-gray-900">See exactly where </span>
              <span className="text-indigo-600">users drop off </span>
              <span className="text-gray-900">and what to fix next.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-8 text-xl text-gray-600 text-balance max-w-2xl mx-auto lg:mx-0"
            >
              Clarityflow turns user behaviour into clear, prioritized product improvements
              without analytics complexity.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col gap-3 sm:flex-row w-full sm:w-auto justify-center lg:justify-start"
            >
              <Link href="/book" className="w-full sm:w-auto">
                <Button size="lg" className="group w-full sm:w-auto">
                  Book a demo
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </Button>
              </Link>
              <Link href="/dashboard" className="w-full sm:w-auto">
                <Button size="lg" variant="secondary" className="w-full sm:w-auto">
                  View mock dashboard
                </Button>
              </Link>
            </motion.div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mt-6 text-sm text-gray-500 mx-auto lg:mx-0"
            >
              No credit card required • Free 14-day trial
            </motion.p>
          </div>

          {/* Right side - Dashboard mockup */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="hidden lg:block relative"
          >
            <div className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200 bg-white max-w-full">
              {/* Dashboard Header */}
              <div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="bg-white rounded px-3 py-1 text-xs text-gray-500 border">
                    app.clarityflow.io/dashboard
                  </div>
                </div>
              </div>

              {/* Dashboard Content */}
              <div className="p-4 bg-gray-50">
                {/* Metrics Row */}
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Active Users</div>
                    <div className="text-lg font-bold text-gray-900">12,847</div>
                    <div className="text-xs text-green-600 font-medium">↑ 12%</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Conversion</div>
                    <div className="text-lg font-bold text-gray-900">3.42%</div>
                    <div className="text-xs text-green-600 font-medium">↑ 3.2%</div>
                  </div>
                  <div className="bg-white rounded-lg p-3 border border-gray-100 shadow-sm">
                    <div className="text-xs text-gray-500 mb-1">Drop-off</div>
                    <div className="text-lg font-bold text-red-600">42.3%</div>
                    <div className="text-xs text-red-600 font-medium">↑ 2.1%</div>
                  </div>
                </div>

                {/* Funnel Visualization */}
                <div className="bg-white rounded-lg p-4 border border-gray-100 shadow-sm">
                  <div className="text-sm font-semibold text-gray-900 mb-3">Conversion Funnel</div>
                  <div className="space-y-2">
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Landing</span>
                        <span className="text-gray-900 font-medium">10,000</span>
                      </div>
                      <div
                        className="h-6 bg-gradient-to-r from-indigo-500 to-violet-500 rounded"
                        style={{ width: '100%' }}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Sign Up</span>
                        <span className="text-gray-900 font-medium">6,800</span>
                      </div>
                      <div
                        className="h-6 bg-gradient-to-r from-indigo-500 to-violet-500 rounded"
                        style={{ width: '68%' }}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Onboarding</span>
                        <span className="text-gray-900 font-medium">3,944</span>
                      </div>
                      <div
                        className="h-6 bg-gradient-to-r from-indigo-500 to-violet-500 rounded"
                        style={{ width: '39%' }}
                      />
                    </div>
                    <div>
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-600">Active User</span>
                        <span className="text-gray-900 font-medium">1,795</span>
                      </div>
                      <div
                        className="h-6 bg-gradient-to-r from-indigo-500 to-violet-500 rounded"
                        style={{ width: '18%' }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating insight cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="hidden sm:block absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 max-w-xs border border-gray-100"
            >
              <div className="flex items-center gap-2 mb-1">
                <div className="w-2 h-2 rounded-full bg-red-500" />
                <div className="text-sm font-semibold text-gray-900">Onboarding drop: 42%</div>
              </div>
              <div className="text-xs text-gray-600">AI suggests: Simplify form at step 2</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="hidden sm:block absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100"
            >
              <div className="text-2xl font-bold text-green-600 mb-1">+18%</div>
              <div className="text-xs text-gray-600">Predicted conversion increase</div>
            </motion.div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
