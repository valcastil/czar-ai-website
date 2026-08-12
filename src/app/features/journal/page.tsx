import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Charisma Journal' };

const TYPES = [
  'Authority', 'Visionary', 'Warmth', 'Focus/Presence', 'Magnetism',
  'First Impression', 'Boldness', 'Humility', 'Tough', 'Celebrity',
  'Inspirational', 'Servant Leadership',
];

export default function JournalPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-blue-400 bg-blue-500/10 rounded-full mb-4">
                Journaling
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Track Your{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
                  Charisma Journey
                </span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Log daily charisma experiences across 12+ categories. Tag emotions, add notes,
                and watch your social skills grow with detailed stats and streaks.
              </p>
              <Link
                href="/download"
                className="inline-flex px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all"
              >
                Start Journaling
              </Link>
            </div>
            <div className="flex justify-center">
              <PhoneMockup className="w-64">
                <div className="w-full h-full bg-gradient-to-br from-blue-900/30 to-dark-100 flex flex-col p-4 pt-12">
                  <div className="text-center mb-4">
                    <p className="text-white font-bold text-sm">Today&apos;s Entry</p>
                    <p className="text-gray-500 text-[10px]">Aug 8, 2026</p>
                  </div>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {['💪', '👑', '🤗'].map((e, i) => (
                      <span key={i} className="w-8 h-8 bg-white/5 rounded-full flex items-center justify-center text-sm">{e}</span>
                    ))}
                  </div>
                  <div className="bg-white/5 rounded-xl p-3 flex-1">
                    <p className="text-white text-xs font-semibold mb-1">Warmth</p>
                    <p className="text-gray-400 text-[10px]">Felt really connected during the team lunch today...</p>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          {/* Charisma types grid */}
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-white mb-4">12+ Charisma Types</h2>
            <p className="text-gray-400">Categorize every social experience with precision.</p>
          </div>
          <div className="flex flex-wrap gap-2 justify-center max-w-2xl mx-auto">
            {TYPES.map((t) => (
              <span key={t} className="px-4 py-2 bg-white/5 border border-white/10 rounded-full text-sm text-gray-300 hover:border-gold-500/30 hover:text-gold-500 transition-colors">
                {t}
              </span>
            ))}
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mt-16">
            {[
              { icon: '📊', label: 'Total Entries', value: 'Tracked' },
              { icon: '🔥', label: 'Streaks', value: 'Daily motivation' },
              { icon: '⭐', label: 'Top Type', value: 'Your strengths' },
              { icon: '📈', label: 'Weekly Avg', value: 'Growth insights' },
            ].map((s) => (
              <div key={s.label} className="glass-card p-6 text-center">
                <span className="text-2xl block mb-2">{s.icon}</span>
                <p className="text-xs text-gray-500 mb-1">{s.label}</p>
                <p className="text-white font-semibold text-sm">{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
