'use client';

import { motion } from 'framer-motion';
import { MapPin, Briefcase, Heart, Zap, Users, Coffee } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const openPositions = [
  {
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
  },
  {
    title: 'Product Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
  },
  {
    title: 'Data Scientist',
    department: 'AI/ML',
    location: 'Remote',
    type: 'Full-time',
  },
  {
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'New York, NY',
    type: 'Full-time',
  },
  {
    title: 'Technical Writer',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
  },
];

const benefits = [
  {
    icon: Heart,
    title: 'Health & Wellness',
    description: 'Comprehensive health, dental, and vision coverage for you and your family.',
  },
  {
    icon: Zap,
    title: 'Equity',
    description: 'Meaningful equity stake because we want everyone to share in our success.',
  },
  {
    icon: Users,
    title: 'Remote-First',
    description: 'Work from anywhere. We have team members across 12 countries.',
  },
  {
    icon: Coffee,
    title: 'Unlimited PTO',
    description: 'Take the time you need to recharge. We trust you to manage your time.',
  },
];

export default function CareersPage() {
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
              Join the <span className="text-indigo-600">Clarityflow</span> team
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Help us make product analytics accessible to everyone. We&apos;re building the future
              of user understanding.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-lg mb-4">Why work with us?</h2>
            <p className="text-xl text-gray-600">
              We&apos;re a small, focused team working on hard problems. Here&apos;s what makes
              Clarityflow different.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full text-center">
                  <div className="rounded-lg bg-indigo-100 p-3 w-fit mx-auto mb-4">
                    <benefit.icon className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-sm">{benefit.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <h2 className="heading-lg text-center mb-12">Open Positions</h2>
          <div className="max-w-3xl mx-auto space-y-4">
            {openPositions.map((position, index) => (
              <motion.div
                key={position.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card
                  hover
                  className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">{position.title}</h3>
                    <div className="flex flex-wrap gap-3 mt-2 text-sm text-gray-600">
                      <span className="flex items-center gap-1">
                        <Briefcase className="h-4 w-4" />
                        {position.department}
                      </span>
                      <span className="flex items-center gap-1">
                        <MapPin className="h-4 w-4" />
                        {position.location}
                      </span>
                      <span className="bg-gray-100 px-2 py-0.5 rounded">{position.type}</span>
                    </div>
                  </div>
                  <Button variant="secondary">Apply now</Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <Card className="max-w-3xl mx-auto text-center p-8 bg-gradient-to-br from-indigo-50 to-violet-50">
            <h2 className="heading-md mb-4">Don&apos;t see a perfect fit?</h2>
            <p className="text-gray-600 mb-6">
              We&apos;re always looking for talented people. Send us your resume and tell us how you
              could contribute.
            </p>
            <Button size="lg">Send open application</Button>
          </Card>
        </div>
      </section>
    </>
  );
}
