import type { Metadata } from 'next';
import DashboardMock from '@/components/DashboardMock';

export const metadata: Metadata = {
  title: 'Dashboard - Clarityflow',
  description: 'View your analytics dashboard and insights',
};

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container-custom">
        <div className="mb-8">
          <h1 className="heading-lg mb-2">Dashboard</h1>
          <p className="text-gray-600">
            Welcome back! Here&apos;s what&apos;s happening with your product.
          </p>
        </div>

        <DashboardMock />
      </div>
    </div>
  );
}
