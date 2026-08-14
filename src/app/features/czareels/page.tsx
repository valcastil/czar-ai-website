import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Czareels' };

const SPECS = [
  { icon: '⏱️', label: 'Duration', value: 'Up to 30 seconds' },
  { icon: '📹', label: 'Quality', value: 'Up to 4K resolution' },
  { icon: '🏷️', label: 'Tags', value: '10+ charisma tags' },
  { icon: '😊', label: 'Moods', value: 'Emoji mood tagging' },
  { icon: '📊', label: 'Analytics', value: 'Views, likes, comments' },
  { icon: '🛡️', label: 'Safety', value: 'Content moderation' },
];

export default function CzareelsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneMockup className="w-64" imageSrc="/czareels_01.jpg" imageAlt="Czareels app preview" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 text-xs font-medium text-orange-400 bg-orange-500/10 rounded-full mb-4">
                Video Platform
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Share Your{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-400">
                  Czareels
                </span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Create short-form vertical videos that showcase your charisma. Tag them with charisma types,
                add mood emojis, and share with the Czar AI community. Up to 30 seconds, 4K quality.
              </p>
              <Link
                href="/download"
                className="inline-flex px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all"
              >
                Start Creating
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
            {SPECS.map((s) => (
              <div key={s.label} className="glass-card p-4 text-center">
                <span className="text-2xl block mb-2">{s.icon}</span>
                <p className="text-xs text-gray-500">{s.label}</p>
                <p className="text-sm text-white font-semibold">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
