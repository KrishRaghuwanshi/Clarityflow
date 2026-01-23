'use client';

import { motion } from 'framer-motion';
import { Users, Target, Heart, Zap } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const values = [
  {
    icon: Users,
    title: 'Customer First',
    description: 'Every decision we make starts with our customers. Their success is our success.',
  },
  {
    icon: Target,
    title: 'Clarity Over Complexity',
    description: 'We believe powerful tools should be simple. Complexity is the enemy of adoption.',
  },
  {
    icon: Heart,
    title: 'Transparency',
    description: 'We share openly—with our team, our customers, and our community.',
  },
  {
    icon: Zap,
    title: 'Continuous Improvement',
    description: 'We practice what we preach. Every week, we ship improvements.',
  },
];

const team = [
  { name: 'Sarah Chen', role: 'CEO & Co-founder', image: null },
  { name: 'Marcus Johnson', role: 'CTO & Co-founder', image: null },
  { name: 'Emily Rodriguez', role: 'Head of Product', image: null },
  { name: 'David Kim', role: 'Head of Engineering', image: null },
  { name: 'Lisa Thompson', role: 'Head of Customer Success', image: null },
  { name: 'James Wilson', role: 'Head of Design', image: null },
];

export default function AboutPage() {
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
              Making product analytics <span className="text-indigo-600">actually useful</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              We started Clarityflow because we were tired of analytics tools that show data but
              don&apos;t tell you what to do about it.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="heading-lg mb-8">Our Story</h2>
            <div className="prose prose-lg text-gray-600">
              <p className="mb-6">
                In 2023, our founders Sarah and Marcus were leading product teams at fast-growing
                startups. They had access to every analytics tool on the market, but still spent
                hours each week trying to figure out why users weren&apos;t converting.
              </p>
              <p className="mb-6">
                The problem wasn&apos;t data—it was insight. Traditional analytics tools are great
                at showing you what happened, but terrible at telling you what to do about it.
              </p>
              <p className="mb-6">
                So they built Clarityflow: an analytics platform that doesn&apos;t just visualize
                your funnel, but actually tells you where to focus and what to fix.
              </p>
              <p>
                Today, Clarityflow helps hundreds of product teams turn user behavior into clear,
                prioritized improvements—without the analytics complexity.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Our Values</h2>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="rounded-lg bg-indigo-100 p-3 w-fit mx-auto mb-4">
                    <value.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{value.title}</h3>
                  <p className="text-gray-600 text-sm">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Meet the Team</h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-indigo-400 to-violet-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {member.name
                        .split(' ')
                        .map((n) => n[0])
                        .join('')}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900">{member.name}</h3>
                  <p className="text-gray-600">{member.role}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-lg mb-4">Join us on our mission</h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re always looking for talented people who share our passion for making
              analytics accessible.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/careers">
                <Button size="lg">View open positions</Button>
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
