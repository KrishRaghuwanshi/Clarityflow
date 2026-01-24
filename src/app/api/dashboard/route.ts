import { NextResponse } from 'next/server';
import type { DashboardData } from '@/lib/types';

// Mock dashboard data - in production, this would come from a database
const dashboardData: DashboardData = {
  metrics: {
    activeUsers: 12847,
    conversionRate: 3.42,
    dropoffPercentage: 42.3,
    avgSessionDuration: 324,
  },
  funnelSteps: [
    { step: 'Landing', users: 10000, conversionRate: 100, dropoff: 0 },
    { step: 'Sign Up', users: 6800, conversionRate: 68, dropoff: 32 },
    { step: 'Onboarding', users: 3944, conversionRate: 58, dropoff: 42 },
    { step: 'First Action', users: 2563, conversionRate: 65, dropoff: 35 },
    { step: 'Active User', users: 1795, conversionRate: 70, dropoff: 30 },
  ],
  insights: [
    {
      id: '1',
      title: 'Onboarding drop: 42%',
      description: 'Most users drop at step 2 — simplify form and add inline help.',
      priority: 'high',
      impact: 'High impact',
      effort: 'Medium effort',
      type: 'drop-off',
    },
    {
      id: '2',
      title: 'Mobile lag',
      description:
        'Mobile flows convert 18% less. Consider removing heavy visuals or delaying non-critical JS.',
      priority: 'medium',
      impact: 'Medium impact',
      effort: 'High effort',
      type: 'performance',
    },
    {
      id: '3',
      title: 'Checkout friction',
      description: 'Users spending 4.2min on checkout page. Reduce form fields from 12 to 6.',
      priority: 'high',
      impact: 'High impact',
      effort: 'Low effort',
      type: 'conversion',
    },
  ],
  timeSeriesData: [
    { date: '2024-01-01', users: 1200, conversions: 48 },
    { date: '2024-01-02', users: 1350, conversions: 52 },
    { date: '2024-01-03', users: 1180, conversions: 45 },
    { date: '2024-01-04', users: 1420, conversions: 58 },
    { date: '2024-01-05', users: 1580, conversions: 62 },
    { date: '2024-01-06', users: 980, conversions: 38 },
    { date: '2024-01-07', users: 890, conversions: 34 },
  ],
};

export async function GET() {
  // Simulate database latency
  await new Promise((resolve) => setTimeout(resolve, 100));

  return NextResponse.json(dashboardData);
}
