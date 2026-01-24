'use client';

import { motion } from 'framer-motion';
import { Check, X } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';
import { useState } from 'react';

const plans = [
  {
    name: 'Starter',
    price: { monthly: 49, annual: 39 },
    description: 'Perfect for small teams getting started',
    features: [
      '10,000 monthly tracked users',
      '3 team members',
      'Basic funnels',
      'Email support',
      '7-day data retention',
    ],
    notIncluded: [
      'AI insights',
      'Advanced segmentation',
      'Priority support',
      'Custom integrations',
    ],
  },
  {
    name: 'Growth',
    price: { monthly: 149, annual: 119 },
    description: 'For growing teams that need more power',
    popular: true,
    features: [
      '100,000 monthly tracked users',
      '10 team members',
      'Advanced funnels',
      'AI insight cards',
      'Priority email support',
      '90-day data retention',
      'Slack integration',
      'Custom segments',
    ],
    notIncluded: ['White-label reports', 'Dedicated success manager'],
  },
  {
    name: 'Team',
    price: { monthly: 399, annual: 319 },
    description: 'For established teams with advanced needs',
    features: [
      'Unlimited tracked users',
      'Unlimited team members',
      'Everything in Growth',
      'White-label reports',
      '24/7 priority support',
      'Unlimited data retention',
      'Dedicated success manager',
      'Custom integrations',
      'SLA guarantee',
    ],
    notIncluded: [],
  },
];

const faqs = [
  {
    question: 'Can I change plans later?',
    answer:
      'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately.',
  },
  {
    question: 'What counts as a tracked user?',
    answer:
      'A tracked user is a unique visitor to your site or app within a billing period. We use privacy-friendly tracking.',
  },
  {
    question: 'Do you offer a free trial?',
    answer: 'Yes! All plans come with a 14-day free trial. No credit card required to start.',
  },
  {
    question: 'What payment methods do you accept?',
    answer: 'We accept all major credit cards and can invoice for annual plans.',
  },
  {
    question: 'Can I cancel anytime?',
    answer:
      'Absolutely. Cancel anytime with no penalties. Your data remains accessible for 30 days after cancellation.',
  },
];

export default function PricingPage() {
  const [isAnnual, setIsAnnual] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [loadingPlan, setLoadingPlan] = useState<string | null>(null);

  const handleCheckout = async (planName: string) => {
    setLoadingPlan(planName);
    
    // Simulate processing delay
    setTimeout(() => {
      // Instead of checkout, redirect to demo booking page
      window.location.href = '/book?plan=' + encodeURIComponent(planName);
      setLoadingPlan(null);
    }, 800);
  };

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
              Simple, transparent pricing
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600 mb-8"
            >
              Choose the plan that fits your team. All plans include a 14-day free trial.
            </motion.p>

            {/* Billing Toggle */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-4 bg-white rounded-full p-1 shadow-md"
            >
              <button
                onClick={() => setIsAnnual(false)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  !isAnnual ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsAnnual(true)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  isAnnual ? 'bg-indigo-600 text-white' : 'text-gray-700 hover:text-gray-900'
                }`}
              >
                Annual
                <span className="ml-2 text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-3">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="relative"
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-0 right-0 flex justify-center">
                    <span className="bg-indigo-600 text-white text-sm font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}
                <Card className={`h-full ${plan.popular ? 'border-2 border-indigo-600' : ''}`}>
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                    <p className="text-gray-600">{plan.description}</p>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-5xl font-bold text-gray-900">
                        ${isAnnual ? plan.price.annual : plan.price.monthly}
                      </span>
                      <span className="text-gray-600">/month</span>
                    </div>
                    {isAnnual && (
                      <p className="text-sm text-green-600 mt-1">
                        ${plan.price.annual * 12} billed annually
                      </p>
                    )}
                  </div>

                  <Button
                    size="lg"
                    variant={plan.popular ? 'primary' : 'secondary'}
                    className="w-full mb-6"
                    onClick={() => handleCheckout(plan.name)}
                    disabled={loadingPlan === plan.name}
                  >
                    {loadingPlan === plan.name ? 'Processing...' : 'Start free trial'}
                  </Button>

                  <div className="space-y-3">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-3">
                        <Check className="h-5 w-5 text-green-600 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-700">{feature}</span>
                      </div>
                    ))}
                    {plan.notIncluded.map((feature) => (
                      <div key={feature} className="flex items-start gap-3 opacity-50">
                        <X className="h-5 w-5 text-gray-400 flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-gray-500">{feature}</span>
                      </div>
                    ))}
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>

          <p className="text-center text-gray-600 mt-8">
            All plans include: SSL encryption • GDPR compliant • 99.9% uptime SLA
          </p>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Frequently asked questions</h2>
            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Card
                    className="cursor-pointer"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <div className="flex items-start justify-between">
                      <h3 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h3>
                      <span className="text-gray-400 text-2xl">
                        {openFaq === index ? '−' : '+'}
                      </span>
                    </div>
                    {openFaq === index && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="text-gray-600 mt-4"
                      >
                        {faq.answer}
                      </motion.p>
                    )}
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Still have questions?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Our team is here to help you find the right plan for your needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/book">
                <Button size="lg">Book a demo</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Contact sales
                </Button>
              </Link>
            </div>
            <p className="mt-6 text-sm text-gray-600">No credit card required • Cancel anytime</p>
          </div>
        </div>
      </section>
    </>
  );
}
