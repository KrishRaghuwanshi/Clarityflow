'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Hero from '@/components/Hero';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import { BarChart3, Target, Zap, Users, ArrowRight } from 'lucide-react';

export default function Home() {
  const features = [
    {
      icon: BarChart3,
      title: 'Visual Funnels',
      description: 'See your entire user journey at a glance with intuitive funnel visualizations.',
    },
    {
      icon: Target,
      title: 'Drop-off Detection',
      description: 'Automatically identify where users leave and why they abandon your flow.',
    },
    {
      icon: Zap,
      title: 'AI Insights',
      description: 'Get plain-English recommendations on what to fix and how to prioritize.',
    },
    {
      icon: Users,
      title: 'Smart Segmentation',
      description: 'Understand different user cohorts and their unique behaviors.',
    },
  ];

  const socialProof = ['Company A', 'Company B', 'Company C', 'Company D', 'Company E'];

  const steps = [
    {
      number: '01',
      title: 'Connect your data',
      description: 'Integrate with your existing analytics in minutes.',
    },
    {
      number: '02',
      title: 'AI analyzes behavior',
      description: 'Our algorithms identify patterns and opportunities.',
    },
    {
      number: '03',
      title: 'Get clear actions',
      description: 'Receive prioritized, actionable improvement plans.',
    },
  ];

  return (
    <>
      <Hero />

      {/* Social Proof */}
      <section className="py-12 bg-white border-y border-gray-200">
        <div className="container-custom">
          <p className="text-center text-sm font-medium text-gray-600 mb-8">
            Trusted by leading companies
          </p>
          <div className="flex flex-wrap items-center justify-center gap-12">
            {socialProof.map((company) => (
              <div key={company} className="text-xl font-semibold text-gray-400">
                {company}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem → Solution */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-lg mb-4"
            >
              Stop guessing. Start improving.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Most analytics tools show you what happened. Clarityflow tells you what to do about
              it.
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover>
                  <div className="rounded-lg bg-indigo-100 p-3 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Preview */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-lg mb-4"
            >
              Everything you need in one dashboard
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              From data to insights to action—all in one place.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-2xl shadow-2xl overflow-hidden border border-gray-200"
          >
            <div className="aspect-video bg-gradient-to-br from-gray-900 to-gray-800 flex items-center justify-center">
              <div className="text-center text-white p-8">
                <BarChart3 className="h-24 w-24 mx-auto mb-4 opacity-50" />
                <p className="text-lg">Interactive dashboard preview</p>
                <Link href="/dashboard">
                  <Button size="lg" className="mt-4">
                    View Full Dashboard
                  </Button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="heading-lg mb-4"
            >
              How it works
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              From setup to insights in three simple steps
            </motion.p>
          </div>

          <div className="grid gap-8 md:grid-cols-3">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                <Card>
                  <div className="text-5xl font-bold text-indigo-600 mb-4">{step.number}</div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-gray-600">{step.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Teaser */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <Card className="text-center p-12 bg-gradient-to-br from-indigo-50 to-violet-50">
              <h2 className="heading-md mb-4">Ready to improve your product?</h2>
              <p className="text-xl text-gray-600 mb-8">
                Start turning user behavior into clear improvements today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/book">
                  <Button size="lg" className="group">
                    Book a demo
                    <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </Button>
                </Link>
                <Link href="/pricing">
                  <Button size="lg" variant="secondary">
                    View pricing
                  </Button>
                </Link>
              </div>
              <p className="mt-6 text-sm text-gray-600">No credit card required • Cancel anytime</p>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
}
