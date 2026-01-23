'use client';

import { motion } from 'framer-motion';
import { FileText, Users, CreditCard, Shield, AlertTriangle } from 'lucide-react';
import Card from '@/components/ui/Card';

const sections = [
  {
    icon: FileText,
    title: 'Using Clarityflow',
    items: [
      {
        subtitle: 'Account Responsibilities',
        content: 'Keep your credentials secure. One account per person or entity.',
      },
      {
        subtitle: 'Acceptable Use',
        content:
          "Use the service lawfully. Don't attempt unauthorized access or reverse engineering.",
      },
      {
        subtitle: 'Your Data',
        content: 'You own your data. We process it only to provide our services.',
      },
    ],
  },
  {
    icon: Users,
    title: 'End User Data',
    items: [
      {
        subtitle: 'Your Responsibility',
        content: "Ensure you have proper consent to collect your users' data.",
      },
      {
        subtitle: 'Privacy Compliance',
        content: 'You must comply with applicable privacy laws (GDPR, CCPA, etc.).',
      },
      {
        subtitle: 'Data Processing',
        content: 'We act as a data processor on your behalf.',
      },
    ],
  },
  {
    icon: CreditCard,
    title: 'Billing',
    items: [
      {
        subtitle: 'Payment Terms',
        content: 'Fees billed monthly or annually in advance.',
      },
      {
        subtitle: 'Refunds',
        content: 'Non-refundable except as required by law.',
      },
      {
        subtitle: 'Price Changes',
        content: '30 days notice for any pricing changes.',
      },
    ],
  },
  {
    icon: Shield,
    title: 'Liability',
    items: [
      {
        subtitle: 'Service Availability',
        content: "We strive for 99.9% uptime but can't guarantee uninterrupted service.",
      },
      {
        subtitle: 'Limitation',
        content: "We're not liable for indirect or consequential damages.",
      },
      {
        subtitle: 'Indemnification',
        content: 'You agree to hold us harmless from claims arising from your use.',
      },
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6"
            >
              <FileText className="h-8 w-8 text-indigo-600" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-xl mb-6"
            >
              Terms of Service
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              The agreement between you and Clarityflow. Plain and simple.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-sm text-gray-500 mt-4"
            >
              Last updated: January 1, 2026
            </motion.p>
          </div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <Card className="bg-gradient-to-br from-amber-50 to-orange-50 p-6 border-amber-200">
              <div className="flex items-start gap-3">
                <AlertTriangle className="h-5 w-5 text-amber-600 mt-0.5 flex-shrink-0" />
                <div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">Key Points</h2>
                  <ul className="space-y-2 text-gray-700">
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      By using Clarityflow, you agree to these terms
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      You&apos;re responsible for your account and how you use the service
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      Either party can terminate with notice
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-amber-600 mt-1">•</span>
                      Governed by California law
                    </li>
                  </ul>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Sections */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto space-y-12">
            {sections.map((section, index) => (
              <motion.div
                key={section.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="rounded-lg bg-indigo-100 p-2">
                    <section.icon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">{section.title}</h2>
                </div>
                <div className="space-y-4 pl-12">
                  {section.items.map((item) => (
                    <div key={item.subtitle}>
                      <h3 className="font-semibold text-gray-900 mb-1">{item.subtitle}</h3>
                      <p className="text-gray-600">{item.content}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md mb-4">Questions about these terms?</h2>
            <p className="text-gray-600 mb-4">
              Contact our legal team at{' '}
              <a
                href="mailto:legal@clarityflow.com"
                className="text-indigo-600 hover:text-indigo-700"
              >
                legal@clarityflow.com
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
