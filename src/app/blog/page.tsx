'use client';

import { motion } from 'framer-motion';
import { Calendar, Clock } from 'lucide-react';
import Card from '@/components/ui/Card';
import Button from '@/components/ui/Button';

const blogPosts = [
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

const categories = [
  'All',
  'Product Analytics',
  'AI & ML',
  'Best Practices',
  'Segmentation',
  'Engineering',
];

export default function BlogPage() {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-b from-indigo-50 to-white">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="heading-xl mb-6"
            >
              Clarityflow Blog
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl text-gray-600"
            >
              Insights, best practices, and updates from the Clarityflow team.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="container-custom">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  category === 'All'
                    ? 'bg-indigo-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white">
        <div className="container-custom">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post, index) => (
              <motion.article
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card hover className="h-full flex flex-col">
                  <div className="aspect-video bg-gradient-to-br from-indigo-100 to-violet-100 rounded-lg mb-4" />
                  <span className="inline-block text-xs font-semibold text-indigo-600 mb-2">
                    {post.category}
                  </span>
                  <h2 className="text-xl font-semibold text-gray-900 mb-2 hover:text-indigo-600 transition-colors cursor-pointer">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 mb-4 flex-grow">{post.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      {new Date(post.date).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-4          w-4" />
                      {post.readTime}
                    </span>
                  </div>
                </Card>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-gray-50">
        <div className="container-custom">
          <Card className="max-w-2xl mx-auto text-center p-8 bg-gradient-to-br from-indigo-50 to-violet-50">
            <h2 className="heading-md mb-4">Subscribe to our newsletter</h2>
            <p className="text-gray-600 mb-6">
              Get the latest articles, insights, and product updates delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
              />
              <Button>Subscribe</Button>
            </div>
            <p className="mt-4 text-sm text-gray-500">No spam. Unsubscribe anytime.</p>
          </Card>
        </div>
      </section>
    </>
  );
}
