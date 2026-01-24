import { NextRequest, NextResponse } from 'next/server';
import type { BlogPost, BlogPostsResponse } from '@/lib/types';

// Mock blog posts - in production, would come from CMS or database
const blogPosts: BlogPost[] = [
  {
    slug: 'understanding-user-dropoff',
    title: 'Understanding User Drop-off: A Complete Guide',
    excerpt: 'Learn how to identify where users leave your product and what you can do about it.',
    category: 'Product Analytics',
    date: '2026-01-15',
    readTime: '8 min read',
  },
  {
    slug: 'ai-powered-product-insights',
    title: 'How AI is Transforming Product Analytics',
    excerpt:
      'Discover how machine learning is making it easier than ever to understand user behavior.',
    category: 'AI & ML',
    date: '2026-01-10',
    readTime: '6 min read',
  },
  {
    slug: 'funnel-optimization-strategies',
    title: '5 Funnel Optimization Strategies That Actually Work',
    excerpt: 'Practical tips from our team on improving conversion rates across your product.',
    category: 'Best Practices',
    date: '2026-01-05',
    readTime: '10 min read',
  },
  {
    slug: 'segmentation-for-growth',
    title: 'User Segmentation: The Key to Personalized Experiences',
    excerpt: 'How to create meaningful user segments that drive product decisions.',
    category: 'Segmentation',
    date: '2025-12-28',
    readTime: '7 min read',
  },
  {
    slug: 'privacy-first-analytics',
    title: 'Building Privacy-First Analytics',
    excerpt: 'How we built Clarityflow with user privacy at the core of our architecture.',
    category: 'Engineering',
    date: '2025-12-20',
    readTime: '12 min read',
  },
  {
    slug: 'from-data-to-action',
    title: 'From Data to Action: Closing the Analytics Loop',
    excerpt: 'Why most analytics tools fail and how to actually turn insights into improvements.',
    category: 'Product Analytics',
    date: '2025-12-15',
    readTime: '9 min read',
  },
];

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const category = searchParams.get('category');

  // Simulate database latency
  await new Promise((resolve) => setTimeout(resolve, 100));

  let filteredPosts = blogPosts;

  // Filter by category if provided
  if (category && category !== 'All') {
    filteredPosts = blogPosts.filter(
      (post) => post.category.toLowerCase() === category.toLowerCase()
    );
  }

  const response: BlogPostsResponse = {
    posts: filteredPosts,
    total: filteredPosts.length,
  };

  return NextResponse.json(response);
}
