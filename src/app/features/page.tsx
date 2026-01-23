'use client';

import { motion } from 'framer-motion';
import { BarChart3, Target, Zap, Users, FileText, Share2 } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const features = [
  {
    icon: BarChart3,
    title: 'Visual Funnels',
    description:
      'See your entire user journey at a glance with intuitive, beautiful funnel visualizations that make complex data simple.',
    details: [
      'Real-time funnel updates',
      'Multi-step journey mapping',
      'Conversion rate tracking',
      'Historical comparisons',
    ],
  },
  {
    icon: Target,
    title: 'Drop-off Detection',
    description:
      'Automatically identify critical points where users leave your product and understand the underlying causes.',
    details: [
      'AI-powered pattern recognition',
      'Behavioral anomaly detection',
      'Session replay integration',
      'Exit intent tracking',
    ],
  },
  {
    icon: Zap,
    title: 'AI Insight Cards',
    description:
      'Get plain-English recommendations that tell you exactly what to fix and how to prioritize improvements.',
    details: [
      'Natural language insights',
      'Priority scoring',
      'Impact estimation',
      'Effort assessment',
    ],
  },
  {
    icon: Users,
    title: 'Smart Segmentation',
    description:
      'Understand how different user cohorts behave and create targeted improvement strategies for each segment.',
    details: [
      'Automatic cohort creation',
      'Custom segment filters',
      'Comparative analysis',
      'Behavioral clustering',
    ],
  },
  {
    icon: FileText,
    title: 'Export & Reports',
    description:
      'Generate beautiful, shareable reports for stakeholders with all the insights they need to make decisions.',
    details: ['PDF export', 'Scheduled reports', 'Custom dashboards', 'White-label options'],
  },
  {
    icon: Share2,
    title: 'Team Collaboration',
    description: 'Work together on improvements with comments, annotations, and shared workspaces.',
    details: [
      'Real-time collaboration',
      'Comment threads',
      'Task assignments',
      'Slack/Teams integration',
    ],
  },
];

export default function FeaturesPage() {
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
              Everything you need to <span className="text-indigo-600">understand</span> and{' '}
              <span className="text-indigo-600">improve</span> user behavior
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Powerful features designed to turn complex data into clear, actionable improvements.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Link href="/book">
                <Button size="lg">Start free trial</Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full">
                  <div className="rounded-lg bg-indigo-100 p-3 w-fit mb-4">
                    <feature.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.details.map((detail) => (
                      <li key={detail} className="flex items-start gap-2 text-sm text-gray-600">
                        <span className="text-indigo-600 mt-0.5">✓</span>
                        {detail}
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">See it in action</h2>
            <p className="text-xl text-gray-600">
              Interactive insight cards that guide your product improvements
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
            >
              <Card className="cursor-pointer">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg p-3 bg-red-50 text-red-600">
                    <Target className="h-6 w-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Onboarding drop: 42%
                    </h3>
                    <p className="text-sm text-gray-600 mb-4">
                      Most users drop at step 2 — simplify form and add inline help.
                    </p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="inline-flex items-center rounded-full bg-red-50 px-3 py-1 text-xs font-medium text-red-700">
                        High priority
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        High impact
                      </span>
                      <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        Medium effort
                      </span>
                    </div>
                    <div className="p-4 bg-gray-50 rounded-lg">
                      <p className="text-sm text-gray-700">
                        <strong>Recommended actions:</strong>
                      </p>
                      <ul className="mt-2 space-y-1 text-sm text-gray-600">
                        <li>• Reduce form fields from 8 to 4</li>
                        <li>• Add inline validation feedback</li>
                        <li>• Include progress indicator</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Ready to get started?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join teams already improving their products with Clarityflow.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg">Start free trial</Button>
              </Link>
              <Link href="/book">
                <Button size="lg" variant="secondary">
                  Book a demo
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
