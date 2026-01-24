'use client';

import { motion } from 'framer-motion';
import { Check, Target, Zap, Users, ArrowRight, Calendar, Brain, TrendingUp, BarChart3 } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';
import Link from 'next/link';

const plans = [
  {
    category: 'Funnel Optimization',
    icon: TrendingUp,
    description: 'Streamline your conversion funnels for maximum efficiency',
    improvements: [
      'Reduce checkout drop-off by 25% through simplified payment flows',
      'Implement progress indicators in multi-step forms',
      'Add exit-intent modals with targeted offers',
      'A/B test form field labels and placeholder text',
      'Optimize mobile checkout experience',
    ],
    insights: [
      'Current drop-off rate: 42.3%',
      'Average time to convert: 3.2 minutes',
      'Top abandonment point: Step 3',
    ],
    timeline: '4-6 weeks',
    priority: 'high',
    roi: '+35% conversion improvement',
  },
  {
    category: 'User Experience',
    icon: Users,
    description: 'Create seamless, intuitive experiences across all touchpoints',
    improvements: [
      'Redesign navigation menu with user behavior data',
      'Implement predictive search functionality',
      'Add contextual tooltips and onboarding guides',
      'Optimize page load times by 40%',
      'Create personalized dashboard layouts',
    ],
    insights: [
      'Average session duration: 4.1 minutes',
      'Pages per session: 3.8',
      'Bounce rate improvement potential: 12%',
    ],
    timeline: '6-8 weeks',
    priority: 'high',
    roi: '+28% user satisfaction',
  },
  {
    category: 'AI-Powered Insights',
    icon: Brain,
    description: 'Leverage artificial intelligence to predict user needs',
    improvements: [
      'Deploy machine learning for user segmentation',
      'Implement predictive churn detection',
      'Add smart recommendations engine',
      'Create automated A/B testing framework',
      'Build behavioral anomaly detection',
    ],
    insights: [
      'User segments identified: 8',
      'Churn prediction accuracy: 87%',
      'Opportunity for 50+ personalizations',
    ],
    timeline: '8-10 weeks',
    priority: 'medium',
    roi: '+42% engagement boost',
  },
  {
    category: 'Data Analytics',
    icon: BarChart3,
    description: 'Turn raw data into actionable business intelligence',
    improvements: [
      'Implement real-time analytics dashboard',
      'Create automated weekly performance reports',
      'Set up custom event tracking for key actions',
      'Build cohort analysis visualization',
      'Integrate third-party data sources',
    ],
    insights: [
      'Currently tracking 124 metrics',
      'Data completeness: 93%',
      'Average decision time: 2.3 days',
    ],
    timeline: '3-5 weeks',
    priority: 'medium',
    roi: '+15% operational efficiency',
  },
];

export default function ImprovementPlansPage() {
  const getPriorityBadge = (priority: string) => {
    switch (priority) {
      case 'high':
        return 'bg-red-100 text-red-700';
      case 'medium':
        return 'bg-yellow-100 text-yellow-700';
      case 'low':
        return 'bg-green-100 text-green-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <>
      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex justify-center mb-6"
            >
              <div className="rounded-2xl bg-indigo-100 p-4">
                <Target className="h-8 w-8 text-indigo-600" />
              </div>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="heading-2xl mb-6"
            >
              Data-Driven Improvement Plans
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-gray-600 mb-8"
            >
              Turn insights into action with comprehensive, prioritized improvement strategies
              designed to maximize your ROI and accelerate growth.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Plans Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid gap-8 lg:grid-cols-2">
            {plans.map((plan, index) => (
              <motion.div
                key={plan.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow">
                  <div className="flex items-start gap-4 mb-6">
                    <div className="rounded-lg bg-indigo-100 p-3">
                      <plan.icon className="h-6 w-6 text-indigo-600" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-gray-900">{plan.category}</h3>
                        <span className={`text-xs font-semibold px-2 py-1 rounded-full ${getPriorityBadge(plan.priority)}`}>
                          {plan.priority.toUpperCase()} PRIORITY
                        </span>
                      </div>
                      <p className="text-gray-600">{plan.description}</p>
                    </div>
                  </div>

                  {/* ROI Highlight */}
                  <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 mb-6">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-semibold text-green-700">{plan.roi}</span>
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    {/* Key Improvements */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <Zap className="h-4 w-4 text-yellow-500" />
                        Key Improvements
                      </h4>
                      <ul className="space-y-2">
                        {plan.improvements.map((improvement, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="h-4 w-4 text-green-600 mt-0.5 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{improvement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Insights */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                        <BarChart3 className="h-4 w-4 text-indigo-500" />
                        Current Insights
                      </h4>
                      <ul className="space-y-2">
                        {plan.insights.map((insight, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <div className="w-2 h-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0" />
                            <span className="text-sm text-gray-700">{insight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-6 pt-4 border-t border-gray-200">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">Timeline:</span>
                      <span className="text-sm font-semibold text-gray-900">{plan.timeline}</span>
                    </div>
                    <Link href="/book">
                      <Button size="sm">
                        Start Implementation
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ROI Calculator */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="heading-xl mb-6">Projected Impact</h2>
            <p className="text-xl text-gray-600 mb-12">
              Based on your current metrics, implementing these improvement plans could result in:
            </p>
            
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="p-8 text-center bg-gradient-to-br from-indigo-50 to-white">
                <div className="text-4xl font-bold text-indigo-600 mb-2">+127%</div>
                <div className="text-sm text-gray-600">Overall Conversion Rate</div>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-green-50 to-white">
                <div className="text-4xl font-bold text-green-600 mb-2">$2.4M</div>
                <div className="text-sm text-gray-600">Additional Annual Revenue</div>
              </Card>
              <Card className="p-8 text-center bg-gradient-to-br from-purple-50 to-white">
                <div className="text-4xl font-bold text-purple-600 mb-2">85%</div>
                <div className="text-sm text-gray-600">Customer Satisfaction</div>
              </Card>
            </div>

            <div className="mt-12">
              <p className="text-gray-600 mb-8">
                These projections are based on industry benchmarks and your current performance metrics.
                Individual results may vary based on implementation quality and market conditions.
              </p>
              <Link href="/book">
                <Button size="lg">
                  Get Your Custom Improvement Plan
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Implementation Process */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center mb-12">
            <h2 className="heading-xl mb-6">Our Implementation Process</h2>
            <p className="text-xl text-gray-600">
              We follow a proven methodology to ensure successful implementation and measurable results
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-4">
            {[
              { step: '1', title: 'Discovery', description: 'Analyze your current performance and identify opportunities' },
              { step: '2', title: 'Strategy', description: 'Create a tailored improvement plan based on your data' },
              { step: '3', title: 'Implementation', description: 'Execute improvements with our team of experts' },
              { step: '4', title: 'Optimization', description: 'Continuously monitor and refine for maximum impact' },
            ].map((phase, i) => (
              <motion.div
                key={phase.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center"
              >
                <Card className="h-full p-6">
                  <div className="text-3xl font-bold text-indigo-600 mb-4">{phase.step}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">{phase.title}</h3>
                  <p className="text-sm text-gray-600">{phase.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}