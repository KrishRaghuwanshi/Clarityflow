import { NextResponse } from 'next/server';
import type { JobPosition } from '@/lib/types';

// Mock job positions - in production, would come from database or ATS
const openPositions: JobPosition[] = [
  {
    id: 'pos-001',
    title: 'Senior Frontend Engineer',
    department: 'Engineering',
    location: 'Remote (US/EU)',
    type: 'Full-time',
    description: 'Build beautiful, performant user interfaces with React and TypeScript.',
  },
  {
    id: 'pos-002',
    title: 'Product Designer',
    department: 'Design',
    location: 'San Francisco, CA',
    type: 'Full-time',
    description: 'Design intuitive experiences that help users understand their data.',
  },
  {
    id: 'pos-003',
    title: 'Data Scientist',
    department: 'AI/ML',
    location: 'Remote',
    type: 'Full-time',
    description: 'Build ML models that power our AI insights engine.',
  },
  {
    id: 'pos-004',
    title: 'Customer Success Manager',
    department: 'Customer Success',
    location: 'New York, NY',
    type: 'Full-time',
    description: 'Help our customers get the most value from Clarityflow.',
  },
  {
    id: 'pos-005',
    title: 'Technical Writer',
    department: 'Product',
    location: 'Remote',
    type: 'Full-time',
    description: 'Create clear, helpful documentation for our users.',
  },
];

export async function GET() {
  // Simulate database latency
  await new Promise((resolve) => setTimeout(resolve, 100));

  return NextResponse.json({
    positions: openPositions,
    total: openPositions.length,
  });
}
