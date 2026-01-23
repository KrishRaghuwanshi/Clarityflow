'use client';

import { motion } from 'framer-motion';
import { Book, Target, Zap, Users, ArrowRight } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const sections = [
  {
    icon: Book,
    title: 'Getting Started',
    description: 'New to Clarityflow? Learn the basics in 5 minutes.',
    items: [
      'Create your first funnel',
      'Understanding your dashboard',
      'Reading AI insights',
      'Setting up alerts',
    ],
  },
  {
    icon: Target,
    title: 'Funnel Analysis',
    description: 'Master the art of tracking user journeys.',
    items: [
      'Building multi-step funnels',
      'Identifying drop-off points',
      'Comparing time periods',
      'Filtering by user segment',
    ],
  },
  {
    icon: Zap,
    title: 'AI Insights',
    description: 'Get the most from intelligent recommendations.',
    items: [
      'How AI detects patterns',
      'Prioritizing suggestions',
      'Creating action plans',
      'Measuring improvements',
    ],
  },
  {
    icon: Users,
    title: 'Team Collaboration',
    description: 'Work together to improve your product.',
    items: [
      'Inviting team members',
      'Sharing dashboards',
      'Setting up notifications',
      'Role permissions',
    ],
  },
];

export default function GuidesPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="heading-xl mb-6"
            >
              User Guides
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Everything you need to get the most out of Clarityflow—no technical skills required.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-indigo-100 p-3">
                      <section.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <h2 className="text-xl font-semibold text-gray-900 mb-2">{section.title}</h2>
                      <p className="text-gray-600 mb-4">{section.description}</p>
                      <ul className="space-y-2">
                        {section.items.map((item) => (
                          <li
                            key={item}
                            className="text-indigo-600 text-sm flex items-center gap-2"
                          >
                            <ArrowRight className="h-3 w-3" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick Start Video */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Watch: Getting Started in 3 Minutes</h2>
            <p className="text-gray-600 mb-8">
              See how easy it is to set up your first funnel and start getting insights.
            </p>
            <div className="aspect-video bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl flex items-center justify-center">
              <div className="text-center text-white">
                <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-4">
                  <div className="w-0 h-0 border-t-8 border-t-transparent border-l-12 border-l-white border-b-8 border-b-transparent ml-1" />
                </div>
                <p className="text-sm text-gray-400">Video tutorial coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Help CTA */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <Card className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-br from-indigo-50 to-violet-50">
            <h2 className="heading-md mb-4">Still have questions?</h2>
            <p className="text-gray-600 mb-6">Our support team is here to help you succeed.</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/help">
                <Button size="lg">Visit Help Center</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact Support
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
