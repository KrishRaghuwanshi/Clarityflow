'use client';

import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { TrendingUp, TrendingDown, Clock, Users } from 'lucide-react';

import Card from './ui/Card';
import InsightCard from './InsightCard';

interface DashboardData {
  metrics: {
    activeUsers: number;
    conversionRate: number;
    dropoffPercentage: number;
    avgSessionDuration: number;
  };
  funnelSteps: Array<{
    step: string;
    users: number;
    conversionRate: number;
    dropoff: number;
  }>;
  insights: Array<{
    id: string;
    title: string;
    description: string;
    priority: 'high' | 'medium' | 'low';
    impact: string;
    effort: string;
    type: 'drop-off' | 'performance' | 'conversion';
  }>;
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

function AnimatedCounter({ value, suffix = '' }: { value: number; suffix?: string }) {
  return (
    <span className="text-3xl font-bold text-gray-900">
      {value.toLocaleString()}
      {suffix}
    </span>
  );
}

export default function DashboardMock() {
  const { data, isLoading } = useQuery<DashboardData>({
    queryKey: ['dashboard'],
    queryFn: async () => {
      const response = await fetch('/api/dashboard');
      if (!response.ok) {
        throw new Error('Failed to fetch dashboard data');
      }
      return response.json();
    },
  });

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-gray-300 border-t-indigo-600"></div>
          <p className="mt-4 text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (!data) return null;

  const metricCards = [
    {
      label: 'Active Users',
      value: data.metrics.activeUsers,
      change: '+12%',
      isPositive: true,
      icon: Users,
    },
    {
      label: 'Conversion Rate',
      value: data.metrics.conversionRate,
      suffix: '%',
      change: '+3.2%',
      isPositive: true,
      icon: TrendingUp,
    },
    {
      label: 'Drop-off Rate',
      value: data.metrics.dropoffPercentage,
      suffix: '%',
      change: '+2.1%',
      isPositive: false,
      icon: TrendingDown,
    },
    {
      label: 'Avg. Session',
      value: Math.floor(data.metrics.avgSessionDuration / 60),
      suffix: 'm',
      change: '-8s',
      isPositive: false,
      icon: Clock,
    },
  ];

  return (
    <motion.div
      className="space-y-8"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Metrics Grid */}
      <motion.div variants={itemVariants} className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {metricCards.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.2 }}
          >
            <Card hover className="relative overflow-hidden">
              <div className="flex items-start justify-between">
                <div>
                  <div className="text-sm font-medium text-gray-600 mb-2">{metric.label}</div>
                  <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                  <div
                    className={`text-sm font-medium mt-2 ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}
                  >
                    {metric.change} from last week
                  </div>
                </div>
                <div
                  className={`rounded-lg p-2 ${metric.isPositive ? 'bg-green-100' : 'bg-red-100'}`}
                >
                  <metric.icon
                    className={`h-5 w-5 ${metric.isPositive ? 'text-green-600' : 'text-red-600'}`}
                  />
                </div>
              </div>
            </Card>
          </motion.div>
        ))}
      </motion.div>

      {/* Funnel Visualization */}
      <motion.div variants={itemVariants}>
        <Card>
          <h3 className="text-lg font-semibold text-gray-900 mb-6">Conversion Funnel</h3>
          <div className="space-y-4">
            {data.funnelSteps.map((step, index) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.15 + 0.5 }}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-800">{step.step}</span>
                  <div className="flex items-center gap-4">
                    <span className="text-sm text-gray-600">
                      {step.users.toLocaleString()} users
                    </span>
                    {step.dropoff > 0 && (
                      <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-1 rounded">
                        -{step.dropoff}% drop
                      </span>
                    )}
                  </div>
                </div>
                <div className="relative h-10 bg-gray-100 rounded-lg overflow-hidden">
                  <motion.div
                    className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg"
                    initial={{ width: 0 }}
                    animate={{ width: `${step.conversionRate}%` }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.6, ease: 'easeOut' }}
                  />
                  <div className="absolute inset-0 flex items-center justify-center text-sm font-semibold text-gray-700">
                    {step.conversionRate}%
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Insights */}
      <motion.div variants={itemVariants}>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Insights</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.insights.map((insight, idx) => (
            <motion.div
              key={insight.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 + 1 }}
            >
              <InsightCard {...insight} index={idx} />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
