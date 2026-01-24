'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, User } from 'lucide-react';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import Card from '@/components/ui/Card';

const blogContent: Record<
  string,
  {
    title: string;
    category: string;
    date: string;
    readTime: string;
    author: string;
    content: string[];
  }
> = {
  'understanding-user-dropoff': {
    title: 'Understanding User Drop-off: A Complete Guide',
    category: 'Product Analytics',
    date: '2026-01-15',
    readTime: '8 min read',
    author: 'Sarah Chen',
    content: [
      'User drop-off is one of the most critical metrics for any product team. It represents the moment when potential customers leave your funnel, taking their interest (and revenue) with them.',
      "In this comprehensive guide, we'll explore the key factors that contribute to user drop-off and provide actionable strategies to minimize it.",
      '## Why Users Drop Off',
      'There are several common reasons why users abandon your product:',
      "**1. Friction in the onboarding process** - Complex sign-up forms, too many required fields, or confusing UI can drive users away before they even experience your product's value.",
      "**2. Unclear value proposition** - If users can't quickly understand what your product does and how it benefits them, they'll leave.",
      '**3. Performance issues** - Slow load times and unresponsive interfaces create frustration that leads to abandonment.',
      '**4. Lack of trust signals** - Missing security badges, testimonials, or clear privacy policies can make users hesitant to continue.',
      '## How to Identify Drop-off Points',
      'Modern analytics tools like Clarityflow make it easy to visualize your conversion funnel and identify exactly where users are leaving. By analyzing this data, you can prioritize which issues to fix first based on their impact on your bottom line.',
      '## Actionable Strategies',
      "Once you've identified your drop-off points, here are proven strategies to address them:",
      '- Simplify forms and reduce required fields',
      '- Add progress indicators to multi-step processes',
      '- Implement social proof at key decision points',
      '- Optimize page load times',
      '- A/B test different approaches',
      'With the right data and tools, reducing user drop-off becomes a systematic process rather than guesswork.',
    ],
  },
  'ai-powered-product-insights': {
    title: 'How AI is Transforming Product Analytics',
    category: 'AI & ML',
    date: '2026-01-10',
    readTime: '6 min read',
    author: 'Marcus Johnson',
    content: [
      'Artificial intelligence is revolutionizing how product teams understand user behavior. Instead of spending hours analyzing data, AI can surface insights in seconds.',
      '## The Old Way vs. The New Way',
      'Traditional analytics required analysts to manually query databases, create visualizations, and interpret results. This process could take days or even weeks.',
      'With AI-powered analytics, the process is fundamentally different:',
      '**Automatic pattern detection** - AI algorithms continuously scan your data for anomalies and trends, alerting you to important changes before you even ask.',
      "**Natural language insights** - Instead of complex dashboards, AI explains what's happening in plain English that anyone can understand.",
      "**Predictive recommendations** - AI doesn't just tell you what happened—it predicts what will happen and suggests actions to improve outcomes.",
      '## Real-World Applications',
      'Companies using AI-powered analytics are seeing remarkable results:',
      '- 40% reduction in time spent on data analysis',
      '- 25% improvement in conversion rates',
      '- 3x faster identification of product issues',
      '## Getting Started',
      "The good news is that implementing AI analytics doesn't require a team of data scientists. Modern tools like Clarityflow bring enterprise-grade AI to teams of all sizes.",
      'The future of product analytics is intelligent, automated, and accessible to everyone.',
    ],
  },
  'funnel-optimization-strategies': {
    title: '5 Funnel Optimization Strategies That Actually Work',
    category: 'Best Practices',
    date: '2026-01-05',
    readTime: '10 min read',
    author: 'Emily Rodriguez',
    content: [
      "After analyzing thousands of conversion funnels, we've identified the strategies that consistently deliver results. Here are five approaches that actually work.",
      '## Strategy 1: Reduce Form Fields',
      "Every additional form field reduces conversion rates by approximately 4%. Audit your forms and ruthlessly eliminate anything that isn't absolutely necessary.",
      '## Strategy 2: Add Social Proof',
      'Place testimonials, customer logos, and trust badges at key decision points in your funnel. Users are more likely to convert when they see others have done so successfully.',
      '## Strategy 3: Implement Progress Indicators',
      'For multi-step processes, show users where they are and how much is left. This reduces abandonment by setting clear expectations.',
      '## Strategy 4: Optimize for Mobile',
      "Over 60% of web traffic is now mobile. If your funnel isn't optimized for smaller screens, you're losing conversions.",
      '## Strategy 5: Use Exit-Intent Offers',
      'When users show signs of leaving, present a compelling offer to keep them engaged. This can recover up to 15% of otherwise lost conversions.',
      '## Measuring Success',
      'Track your funnel metrics before and after implementing each strategy. Use tools like Clarityflow to get accurate data and prove ROI.',
      'Remember: optimization is an ongoing process, not a one-time project.',
    ],
  },
  'segmentation-for-growth': {
    title: 'User Segmentation: The Key to Personalized Experiences',
    category: 'Segmentation',
    date: '2025-12-28',
    readTime: '7 min read',
    author: 'Alex Kim',
    content: [
      'Not all users are the same, and treating them as if they were leaves significant value on the table. User segmentation is the foundation of personalized experiences.',
      '## What is User Segmentation?',
      'Segmentation is the practice of dividing your users into groups based on shared characteristics. These groups can be defined by:',
      '- Demographics (age, location, industry)',
      '- Behavior (frequency of use, features accessed)',
      '- Value (revenue generated, engagement level)',
      '- Lifecycle stage (new, activated, at-risk, churned)',
      '## Why Segmentation Matters',
      'Personalized experiences drive better results across every metric:',
      '**Higher engagement** - Users receive content relevant to their needs',
      '**Better retention** - Targeted interventions address specific pain points',
      '**Increased revenue** - Upsell and cross-sell opportunities are better targeted',
      '## Getting Started',
      'Start with simple segments based on obvious differences in your user base. As you gather more data, you can create increasingly sophisticated segments.',
      'Tools like Clarityflow make segmentation accessible by automatically identifying meaningful user groups and tracking how they behave differently.',
    ],
  },
  'privacy-first-analytics': {
    title: 'Building Privacy-First Analytics',
    category: 'Engineering',
    date: '2025-12-20',
    readTime: '12 min read',
    author: 'David Park',
    content: [
      "In an era of increasing privacy regulations and user awareness, building analytics that respect user privacy isn't just ethical—it's good business.",
      '## The Privacy Landscape',
      'GDPR, CCPA, and similar regulations have fundamentally changed how companies can collect and use data. Non-compliance can result in significant fines and reputational damage.',
      '## Privacy-First Principles',
      "At Clarityflow, we've built our platform on core privacy principles:",
      "**Data minimization** - We only collect what's necessary for the insights you need",
      '**Anonymization** - Personal identifiers are removed or encrypted',
      '**User control** - Users can opt out and request data deletion',
      '**Transparency** - Clear documentation of what we collect and why',
      '## Technical Implementation',
      'Building privacy-first analytics requires careful architecture decisions:',
      '- First-party data collection (no third-party cookies)',
      '- Server-side processing to minimize client-side exposure',
      '- Differential privacy techniques for aggregate statistics',
      '- Regular security audits and penetration testing',
      '## The Business Case',
      "Privacy-first analytics actually provide better data. When users trust your product, they're more likely to engage authentically.",
      'The future belongs to companies that earn and maintain user trust.',
    ],
  },
  'from-data-to-action': {
    title: 'From Data to Action: Closing the Analytics Loop',
    category: 'Product Analytics',
    date: '2025-12-15',
    readTime: '9 min read',
    author: 'Sarah Chen',
    content: [
      'Most analytics tools are great at showing you what happened. Few help you figure out what to do about it. This gap between insight and action is where value is lost.',
      '## The Analytics Gap',
      'Companies invest heavily in data collection and visualization, but often struggle to translate insights into improvements. Common challenges include:',
      '- Too much data, not enough focus',
      '- Unclear prioritization of opportunities',
      '- Lack of clear ownership for action items',
      '- No feedback loop to measure impact',
      '## Bridging the Gap',
      'Effective analytics close the loop by:',
      '**Prioritizing insights** - Not all insights are equally valuable. Focus on what moves the needle.',
      "**Providing clear recommendations** - Don't just show problems; suggest solutions.",
      '**Enabling easy action** - Integration with product management and engineering tools.',
      '**Measuring impact** - Track the results of changes to prove ROI.',
      '## The Clarityflow Approach',
      'We built Clarityflow specifically to close the analytics loop. Every insight comes with prioritized recommendations, and you can track the impact of changes over time.',
      'Stop collecting data for its own sake. Start turning insights into improvements.',
    ],
  },
};

export default function BlogPostPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = blogContent[slug];

  if (!post) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pt-20 pb-16">
        <div className="container-custom">
          <Card className="max-w-2xl mx-auto text-center p-12">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">Post Not Found</h1>
            <p className="text-gray-600 mb-6">
              The blog post you&apos;re looking for doesn&apos;t exist.
            </p>
            <Link href="/blog" className="text-indigo-600 hover:text-indigo-700 font-medium">
              ← Back to Blog
            </Link>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-50 to-white pt-20 pb-16">
      <article className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto"
        >
          {/* Back link */}
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-indigo-600 hover:text-indigo-700 font-medium mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="mb-8">
            <span className="inline-block bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
              {post.category}
            </span>
            <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <span className="flex items-center gap-1">
                <User className="h-4 w-4" />
                {post.author}
              </span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {new Date(post.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
            </div>
          </header>

          {/* Content */}
          <Card className="p-8">
            <div className="prose prose-lg max-w-none">
              {post.content.map((paragraph, index) => {
                if (paragraph.startsWith('## ')) {
                  return (
                    <h2 key={index} className="text-2xl font-bold text-gray-900 mt-8 mb-4">
                      {paragraph.replace('## ', '')}
                    </h2>
                  );
                }
                if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                  return (
                    <p key={index} className="font-semibold text-gray-900 mt-4">
                      {paragraph.replace(/\*\*/g, '')}
                    </p>
                  );
                }
                if (paragraph.startsWith('- ')) {
                  return (
                    <li key={index} className="text-gray-700 ml-4">
                      {paragraph.replace('- ', '')}
                    </li>
                  );
                }
                return (
                  <p key={index} className="text-gray-700 mb-4 leading-relaxed">
                    {paragraph
                      .split('**')
                      .map((part, i) => (i % 2 === 1 ? <strong key={i}>{part}</strong> : part))}
                  </p>
                );
              })}
            </div>
          </Card>

          {/* Share section */}
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Enjoyed this article? Share it with your team!</p>
            <div className="flex justify-center gap-4">
              <button className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">
                Share on Twitter
              </button>
              <button className="px-4 py-2 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition-colors">
                Share on LinkedIn
              </button>
            </div>
          </div>
        </motion.div>
      </article>
    </div>
  );
}
