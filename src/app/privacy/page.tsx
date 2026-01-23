'use client';

import { motion } from 'framer-motion';
import { Shield, FileText, Users, Database } from 'lucide-react';
import Card from '@/components/ui/Card';

const sections = [
  {
    icon: FileText,
    title: 'Information We Collect',
    items: [
      {
        subtitle: 'Account Information',
        content: 'Name, email, company details when you register',
      },
      {
        subtitle: 'Usage Data',
        content: 'How you interact with our platform to improve your experience',
      },
      {
        subtitle: 'End User Data',
        content: 'Data you send us about your users (processed on your behalf)',
      },
    ],
  },
  {
    icon: Database,
    title: 'How We Use Your Data',
    items: [
      {
        subtitle: 'Provide Services',
        content: 'Power your dashboard, generate insights, and deliver reports',
      },
      {
        subtitle: 'Improve Platform',
        content: 'Analyze usage patterns to build better features',
      },
      {
        subtitle: 'Communicate',
        content: 'Send product updates, support responses, and billing info',
      },
    ],
  },
  {
    icon: Shield,
    title: 'Data Protection',
    items: [
      {
        subtitle: 'Encryption',
        content: 'AES-256 at rest, TLS 1.3 in transit',
      },
      {
        subtitle: 'Storage',
        content: 'SOC 2 certified data centers in US and EU',
      },
      {
        subtitle: 'Retention',
        content: 'Kept while your account is active; deleted upon request',
      },
    ],
  },
  {
    icon: Users,
    title: 'Your Rights',
    items: [
      {
        subtitle: 'Access',
        content: 'Request a copy of your personal data anytime',
      },
      {
        subtitle: 'Deletion',
        content: 'Request we delete your data and account',
      },
      {
        subtitle: 'Portability',
        content: 'Export your data in a machine-readable format',
      },
    ],
  },
];

export default function PrivacyPage() {
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
              <Shield className="h-8 w-8 text-indigo-600" />
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-xl mb-6"
            >
              Privacy Policy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              We believe in transparency. Here&apos;s exactly how we handle your data.
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
            <Card className="bg-gradient-to-br from-indigo-50 to-violet-50 p-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-3">Quick Summary</h2>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  We collect only what&apos;s needed to provide our service
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  We never sell your data to third parties
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  You can request deletion of your data at any time
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 mt-1">•</span>
                  We&apos;re fully GDPR and CCPA compliant
                </li>
              </ul>
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
            <h2 className="heading-md mb-4">Questions about your privacy?</h2>
            <p className="text-gray-600 mb-4">
              Contact our Data Protection Officer at{' '}
              <a
                href="mailto:privacy@clarityflow.com"
                className="text-indigo-600 hover:text-indigo-700"
              >
                privacy@clarityflow.com
              </a>
            </p>
            <p className="text-sm text-gray-500">
              We respond to all privacy inquiries within 48 hours.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
