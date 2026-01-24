'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { AlertCircle, TrendingUp, Zap, X, CheckCircle } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Card from './ui/Card';
import Button from './ui/Button';

interface InsightCardProps {
  title: string;
  description: string;
  priority: 'high' | 'medium' | 'low';
  impact: string;
  effort: string;
  type: 'drop-off' | 'performance' | 'conversion';
  index?: number;
}

const improvementPlans: Record<
  string,
  { steps: string[]; timeframe: string; expectedImpact: string }
> = {
  'drop-off': {
    steps: [
      'Analyze drop-off point user behavior with session recordings',
      'Identify friction points in the current flow',
      'Create A/B test variants with simplified steps',
      'Implement winning variant across all user segments',
      'Monitor metrics for 2 weeks post-implementation',
    ],
    timeframe: '2-3 weeks',
    expectedImpact: '+15-25% conversion at drop-off point',
  },
  performance: {
    steps: [
      'Run performance audit on affected pages',
      'Optimize image assets and lazy loading',
      'Implement code splitting for heavy components',
      'Add caching strategy for API responses',
      'Deploy to staging and verify improvements',
    ],
    timeframe: '1-2 weeks',
    expectedImpact: '40-60% faster page load times',
  },
  conversion: {
    steps: [
      'Review current conversion messaging and CTAs',
      'Gather user feedback through surveys',
      'Design new value proposition tests',
      'Implement social proof elements',
      'Run multivariate tests on key pages',
    ],
    timeframe: '3-4 weeks',
    expectedImpact: '+10-20% overall conversion rate',
  },
};

export default function InsightCard({
  title,
  description,
  priority,
  impact,
  effort,
  type,
  index = 0,
}: InsightCardProps) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const router = useRouter();

  const icons = {
    'drop-off': AlertCircle,
    performance: Zap,
    conversion: TrendingUp,
  };

  const Icon = icons[type];
  const plan = improvementPlans[type];

  const priorityColors = {
    high: 'text-red-600 bg-red-50',
    medium: 'text-yellow-600 bg-yellow-50',
    low: 'text-blue-600 bg-blue-50',
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20, rotateX: -15 }}
        whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.5, delay: index * 0.1 }}
      >
        <Card hover className="h-full">
          <div className="flex items-start gap-4">
            <div className={`rounded-lg p-3 ${priorityColors[priority]}`}>
              <Icon className="h-6 w-6" />
            </div>

            <div className="flex-1">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{title}</h3>
              <p className="text-sm text-gray-600 mb-4">{description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  {impact}
                </span>
                <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                  {effort}
                </span>
                <span
                  className={`inline-flex items-center rounded-full px-3 py-1 text-xs font-medium capitalize ${
                    priority === 'high'
                      ? 'bg-red-50 text-red-700'
                      : priority === 'medium'
                        ? 'bg-yellow-50 text-yellow-700'
                        : 'bg-blue-50 text-blue-700'
                  }`}
                >
                  {priority} priority
                </span>
              </div>

              <Button
                variant="ghost"
                size="sm"
                className="text-indigo-600 hover:text-indigo-700"
                onClick={() => setIsModalOpen(true)}
              >
                Create improvement plan →
              </Button>
            </div>
          </div>
        </Card>
      </motion.div>

      {/* Improvement Plan Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsModalOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="bg-white rounded-2xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between p-6 border-b border-gray-100">
                <div className="flex items-center gap-3">
                  <div className={`rounded-lg p-2 ${priorityColors[priority]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="text-xl font-bold text-gray-900">Improvement Plan</h2>
                </div>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                >
                  <X className="h-5 w-5 text-gray-500" />
                </button>
              </div>

              {/* Modal Body */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="font-semibold text-gray-900 mb-2">{title}</h3>
                  <p className="text-sm text-gray-600">{description}</p>
                </div>

                {/* Metrics */}
                <div className="grid grid-cols-2 gap-4 mb-6">
                  <div className="bg-indigo-50 rounded-lg p-4">
                    <div className="text-sm text-indigo-600 font-medium mb-1">Timeframe</div>
                    <div className="text-lg font-bold text-indigo-900">{plan.timeframe}</div>
                  </div>
                  <div className="bg-green-50 rounded-lg p-4">
                    <div className="text-sm text-green-600 font-medium mb-1">Expected Impact</div>
                    <div className="text-lg font-bold text-green-900">{plan.expectedImpact}</div>
                  </div>
                </div>

                {/* Steps */}
                <div className="mb-6">
                  <h4 className="font-semibold text-gray-900 mb-3">Action Steps</h4>
                  <div className="space-y-3">
                    {plan.steps.map((step, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-600">
                          {i + 1}
                        </div>
                        <p className="text-sm text-gray-700">{step}</p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button
                    className="flex-1"
                    onClick={() => {
                      setIsModalOpen(false);
                      router.push('/book');
                    }}
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Start Plan
                  </Button>
                  <Button variant="secondary" onClick={() => setIsModalOpen(false)}>
                    Save for Later
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
