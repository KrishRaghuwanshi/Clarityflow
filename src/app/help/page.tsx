'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Search, MessageCircle, Mail, FileText } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'How do I install the Clarityflow SDK?',
        a: 'You can install our SDK via npm with `npm install @clarityflow/sdk` or include our script tag directly in your HTML. See our Getting Started guide for detailed instructions.',
      },
      {
        q: 'How long does setup take?',
        a: 'Most teams are up and running within 15 minutes. Our SDK auto-tracks page views and basic events. Custom event tracking takes a bit more time depending on your needs.',
      },
    ],
  },
  {
    category: 'Billing',
    questions: [
      {
        q: 'How does usage-based billing work?',
        a: 'You are billed based on the number of unique tracked users per month. Each plan includes a base number of users, with additional users billed at a per-user rate.',
      },
      {
        q: 'Can I change my plan mid-cycle?',
        a: 'Yes! You can upgrade or downgrade at any time. Changes are prorated based on your remaining billing cycle.',
      },
    ],
  },
  {
    category: 'Data & Privacy',
    questions: [
      {
        q: 'Is Clarityflow GDPR compliant?',
        a: 'Yes, we are fully GDPR compliant. We offer data processing agreements (DPAs) and can help you configure consent-based tracking.',
      },
      {
        q: 'Where is my data stored?',
        a: 'All data is stored in SOC 2 Type II certified data centers. We offer both US and EU data residency options.',
      },
    ],
  },
];

export default function HelpPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [openFaq, setOpenFaq] = useState<string | null>(null);

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
              How can we help?
            </motion.h1>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="relative max-w-xl mx-auto"
            >
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="search"
                placeholder="Search for help..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-indigo-500 focus:border-transparent text-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="grid gap-6 md:grid-cols-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Card hover className="text-center h-full">
                <div className="rounded-lg bg-indigo-100 p-3 w-fit mx-auto mb-4">
                  <FileText className="h-6 w-6 text-indigo-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Documentation</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Comprehensive guides and API references.
                </p>
                <Link href="/docs">
                  <Button variant="secondary" className="w-full">
                    Browse docs
                  </Button>
                </Link>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <Card hover className="text-center h-full">
                <div className="rounded-lg bg-green-100 p-3 w-fit mx-auto mb-4">
                  <MessageCircle className="h-6 w-6 text-green-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Live Chat</h3>
                <p className="text-gray-600 text-sm mb-4">
                  Chat with our support team in real-time.
                </p>
                <Button variant="secondary" className="w-full">
                  Start chat
                </Button>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Card hover className="text-center h-full">
                <div className="rounded-lg bg-violet-100 p-3 w-fit mx-auto mb-4">
                  <Mail className="h-6 w-6 text-violet-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Email Support</h3>
                <p className="text-gray-600 text-sm mb-4">Get a response within 24 hours.</p>
                <Link href="/contact">
                  <Button variant="secondary" className="w-full">
                    Send email
                  </Button>
                </Link>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Frequently Asked Questions</h2>
          <div className="max-w-3xl mx-auto space-y-8">
            {faqs.map((category) => (
              <div key={category.category}>
                <h3 className="text-lg font-semibold text-gray-900 mb-4">{category.category}</h3>
                <div className="space-y-3">
                  {category.questions.map((faq) => (
                    <Card
                      key={faq.q}
                      className="cursor-pointer"
                      onClick={() => setOpenFaq(openFaq === faq.q ? null : faq.q)}
                    >
                      <div className="flex items-start justify-between">
                        <h4 className="font-medium text-gray-900 pr-4">{faq.q}</h4>
                        <span className="text-gray-400 text-xl">
                          {openFaq === faq.q ? '−' : '+'}
                        </span>
                      </div>
                      {openFaq === faq.q && (
                        <motion.p
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: 'auto' }}
                          className="text-gray-600 mt-3"
                        >
                          {faq.a}
                        </motion.p>
                      )}
                    </Card>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
