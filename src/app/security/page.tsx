'use client';

import { motion } from 'framer-motion';
import { Shield, Lock, Server, Eye, CheckCircle } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const securityFeatures = [
  {
    icon: Lock,
    title: 'Encryption at Rest & In Transit',
    description: 'All data is encrypted using AES-256 at rest and TLS 1.3 in transit.',
  },
  {
    icon: Server,
    title: 'SOC 2 Type II Certified',
    description: 'Our infrastructure and processes are independently audited annually.',
  },
  {
    icon: Eye,
    title: 'Access Controls',
    description: 'Role-based access, SSO support, and detailed audit logs for all actions.',
  },
  {
    icon: Shield,
    title: 'Penetration Testing',
    description: 'Regular third-party security assessments and vulnerability scanning.',
  },
];

const certifications = [
  'SOC 2 Type II',
  'GDPR Compliant',
  'CCPA Compliant',
  'ISO 27001 (In Progress)',
  'HIPAA Ready',
];

export default function SecurityPage() {
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
              Security at Clarityflow
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600"
            >
              Your data security is our top priority. Learn how we protect your information.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Security Features */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">How We Protect Your Data</h2>
          <div className="grid gap-8 md:grid-cols-2">
            {securityFeatures.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full">
                  <div className="flex items-start gap-4">
                    <div className="rounded-lg bg-indigo-100 p-3">
                      <feature.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                      <p className="text-gray-600">{feature.description}</p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-8">Compliance & Certifications</h2>
            <div className="flex flex-wrap gap-4 justify-center mb-12">
              {certifications.map((cert) => (
                <div
                  key={cert}
                  className="flex items-center gap-2 bg-white px-4 py-2 rounded-full border border-gray-200"
                >
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="font-medium text-gray-900">{cert}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Infrastructure */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-lg text-center mb-12">Infrastructure Security</h2>
            <div className="grid gap-6 md:grid-cols-2">
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-indigo-100 p-3 flex-shrink-0">
                    <Server className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Data Centers</h3>
                    <p className="text-gray-600 text-sm">
                      Hosted on AWS and Google Cloud Platform in SOC 2 certified data centers. US
                      and EU data residency options available.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-indigo-100 p-3 flex-shrink-0">
                    <Lock className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Network Security</h3>
                    <p className="text-gray-600 text-sm">
                      All traffic encrypted with TLS 1.3. Strict firewall rules, DDoS protection,
                      and continuous threat monitoring.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-indigo-100 p-3 flex-shrink-0">
                    <Shield className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      Application Security
                    </h3>
                    <p className="text-gray-600 text-sm">
                      OWASP Top 10 secure coding practices. All code changes undergo security review
                      and automated vulnerability scanning.
                    </p>
                  </div>
                </div>
              </Card>
              <Card className="h-full">
                <div className="flex items-start gap-4">
                  <div className="rounded-lg bg-indigo-100 p-3 flex-shrink-0">
                    <Eye className="h-5 w-5 text-indigo-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Employee Access</h3>
                    <p className="text-gray-600 text-sm">
                      Production access limited to essential personnel. All access logged and
                      reviewed. Background checks and security training required.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <Card className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-br from-indigo-50 to-violet-50">
            <h2 className="heading-md mb-4">Have security questions?</h2>
            <p className="text-gray-600 mb-6">
              Our security team is happy to answer questions or discuss your specific compliance
              needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact">
                <Button size="lg">Contact Security Team</Button>
              </Link>
              <Link href="/contact">
                <Button size="lg" variant="secondary">
                  Request SOC 2 Report
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>
    </>
  );
}
