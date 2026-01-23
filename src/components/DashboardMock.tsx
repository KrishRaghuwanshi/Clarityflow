'use client';

import { useQuery } from '@tanstack/react-query';
import { Monitor, Smartphone } from 'lucide-react';
import { useUIStore } from '@/store/uiStore';
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

export default function DashboardMock() {
  const { activeDevice, setActiveDevice } = useUIStore();

  const { data, isLoading } = useQuery<DashboardData>({
    queryKey: ['dashboard'],
    queryFn: async () => {
      // Simulate API call with delay
      await new Promise((resolve) => setTimeout(resolve, 1000));
      const response = await fetch('/dashboard.json');
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

  return (
    <div className="space-y-6">
      {/* Device Selector */}
      <div className="flex justify-end">
        <div className="inline-flex rounded-lg border border-gray-300 p-1">
          <button
            onClick={() => setActiveDevice('desktop')}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeDevice === 'desktop'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Monitor className="h-4 w-4" />
            Desktop
          </button>
          <button
            onClick={() => setActiveDevice('mobile')}
            className={`inline-flex items-center gap-2 rounded-md px-4 py-2 text-sm font-medium transition-colors ${
              activeDevice === 'mobile'
                ? 'bg-indigo-600 text-white'
                : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <Smartphone className="h-4 w-4" />
            Mobile
          </button>
        </div>
      </div>

      {/* Metrics Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        <Card>
          <div className="text-sm font-medium text-gray-600 mb-1">Active Users</div>
          <div className="text-3xl font-bold text-gray-900">
            {data.metrics.activeUsers.toLocaleString()}
          </div>
          <div className="text-xs text-green-600 mt-1">↑ 12% from last week</div>
        </Card>

        <Card>
          <div className="text-sm font-medium text-gray-600 mb-1">Conversion Rate</div>
          <div className="text-3xl font-bold text-gray-900">{data.metrics.conversionRate}%</div>
          <div className="text-xs text-green-600 mt-1">↑ 3.2% from last week</div>
        </Card>

        <Card>
          <div className="text-sm font-medium text-gray-600 mb-1">Drop-off Rate</div>
          <div className="text-3xl font-bold text-gray-900">{data.metrics.dropoffPercentage}%</div>
          <div className="text-xs text-red-600 mt-1">↑ 2.1% from last week</div>
        </Card>

        <Card>
          <div className="text-sm font-medium text-gray-600 mb-1">Avg. Session</div>
          <div className="text-3xl font-bold text-gray-900">
            {Math.floor(data.metrics.avgSessionDuration / 60)}m{' '}
            {data.metrics.avgSessionDuration % 60}s
          </div>
          <div className="text-xs text-gray-600 mt-1">↓ 8s from last week</div>
        </Card>
      </div>

      {/* Funnel Visualization */}
      <Card>
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversion Funnel</h3>
        <div className="space-y-3">
          {data.funnelSteps.map((step) => (
            <div key={step.step}>
              <div className="flex items-center justify-between mb-1">
                <span className="text-sm font-medium text-gray-700">{step.step}</span>
                <span className="text-sm text-gray-600">{step.users.toLocaleString()} users</span>
              </div>
              <div className="relative h-8 bg-gray-100 rounded-full overflow-hidden">
                <div
                  className="absolute top-0 left-0 h-full bg-gradient-to-r from-indigo-500 to-violet-600 transition-all duration-500"
                  style={{ width: `${step.conversionRate}%` }}
                />
                <div className="absolute inset-0 flex items-center justify-center text-xs font-medium text-gray-700">
                  {step.conversionRate}% conversion
                  {step.dropoff > 0 && (
                    <span className="ml-2 text-red-600">({step.dropoff}% drop)</span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Insights */}
      <div>
        <h3 className="text-2xl font-bold text-gray-900 mb-6">AI-Powered Insights</h3>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {data.insights.map((insight, idx) => (
            <InsightCard key={insight.id} {...insight} index={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
