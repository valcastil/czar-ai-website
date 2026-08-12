import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Blog' };

const POSTS = [
  { title: '5 Daily Habits to Boost Your Charisma', date: 'Aug 5, 2026', slug: 'daily-habits-boost-charisma', excerpt: 'Small consistent actions that compound into magnetic presence.' },
  { title: 'How AI is Transforming Personal Development', date: 'Jul 28, 2026', slug: 'ai-transforming-personal-development', excerpt: 'The role of artificial intelligence in modern self-improvement.' },
  { title: 'Understanding the 12 Types of Charisma', date: 'Jul 15, 2026', slug: 'understanding-12-types-charisma', excerpt: 'Discover your dominant charisma type and how to leverage it.' },
];

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-extrabold text-white mb-4">Czar AI Blog</h1>
            <p className="text-gray-400 max-w-xl mx-auto">
              Tips, insights, and updates about charisma, personal growth, and the Czar AI platform.
            </p>
          </div>

          <div className="space-y-6">
            {POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="block glass-card p-6 hover:border-gold-500/30 transition-all group">
                <p className="text-xs text-gray-500 mb-2">{post.date}</p>
                <h2 className="text-xl font-bold text-white mb-2 group-hover:text-gold-500 transition-colors">{post.title}</h2>
                <p className="text-gray-400 text-sm">{post.excerpt}</p>
                <span className="inline-block mt-3 text-gold-500 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Read more →
                </span>
              </Link>
            ))}
          </div>

          {POSTS.length === 0 && (
            <div className="text-center py-20">
              <span className="text-5xl block mb-4">📝</span>
              <p className="text-gray-500">No posts yet. Check back soon!</p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
}
