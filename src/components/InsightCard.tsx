'use client';

import { motion } from 'framer-motion';
import { AlertCircle, TrendingUp, Zap } from 'lucide-react';
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

export default function InsightCard({
  title,
  description,
  priority,
  impact,
  effort,
  type,
  index = 0,
}: InsightCardProps) {
  const icons = {
    'drop-off': AlertCircle,
    performance: Zap,
    conversion: TrendingUp,
  };

  const Icon = icons[type];

  const priorityColors = {
    high: 'text-red-600 bg-red-50',
    medium: 'text-yellow-600 bg-yellow-50',
    low: 'text-blue-600 bg-blue-50',
  };

  return (
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

            <Button variant="ghost" size="sm" className="text-indigo-600 hover:text-indigo-700">
              Create improvement plan →
            </Button>
          </div>
        </div>
      </Card>
    </motion.div>
  );
}
