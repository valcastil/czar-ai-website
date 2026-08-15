import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Earn Czar AI Coins' };

const EARNING_WAYS = [
  {
    icon: '🔥',
    title: 'Daily Streaks',
    desc: 'Log your charisma journal entries consistently to boost your streak multiplier and multiply your daily earnings.',
  },
  {
    icon: '🤖',
    title: 'AI Coach Sessions',
    desc: 'Engage with Google Gemini-powered charisma coach sessions to unlock learning milestones and reward drops.',
  },
  {
    icon: '🎬',
    title: 'Czareels Engagement',
    desc: 'Share valuable charisma moments, get community upvotes, and earn creator rewards for authentic content.',
  },
  {
    icon: '🏛️',
    title: 'VIP & Marketplace Perks',
    desc: 'Redeem coins for exclusive raffle tickets, premium avatar badges, and discounted PRO upgrades.',
  },
];

export default function CoinsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-amber-400 bg-amber-500/10 rounded-full mb-4">
                Rewards &amp; Economy
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Earn &amp; Grow with{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-400 to-yellow-400">
                  Czar AI Coins
                </span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Turn your self-improvement journey into rewarding progress. Earn Czar Coins by keeping up
                your daily streaks, completing coaching sessions, and inspiring others in the community.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="inline-flex px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all shadow-lg shadow-gold-500/20"
                >
                  Start Earning Coins
                </Link>
                <Link
                  href="/pricing"
                  className="inline-flex px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all"
                >
                  Explore VIP Perks
                </Link>
              </div>
            </div>

            <div className="flex justify-center">
              <PhoneMockup className="w-64">
                <div className="w-full h-full bg-gradient-to-br from-amber-900/30 to-dark-100 flex flex-col p-4 pt-12">
                  <div className="text-center mb-3">
                    <div className="w-10 h-10 mx-auto mb-1 rounded-full overflow-hidden flex items-center justify-center">
                      <Image
                        src="/czarai logo 1024.png"
                        alt="Czar Coin"
                        width={40}
                        height={40}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <p className="text-white font-extrabold text-lg">1,450 Coins</p>
                    <span className="inline-block px-2 py-0.5 bg-gold-500/20 text-gold-400 text-[10px] rounded-full font-semibold">
                      🔥 7-Day Streak Active (+20%)
                    </span>
                  </div>

                  <div className="bg-white/5 rounded-xl p-3 mb-2">
                    <p className="text-[11px] font-semibold text-gray-300 mb-2">Recent Earnings</p>
                    <div className="space-y-1.5 text-[10px]">
                      <div className="flex justify-between items-center text-gray-300">
                        <span>📝 Daily Journal Entry</span>
                        <span className="text-gold-400 font-bold">+50 🪙</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-300">
                        <span>🤖 AI Coach Milestone</span>
                        <span className="text-gold-400 font-bold">+100 🪙</span>
                      </div>
                      <div className="flex justify-between items-center text-gray-300">
                        <span>🎬 Czareel Upvotes</span>
                        <span className="text-gold-400 font-bold">+25 🪙</span>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gold-500/10 border border-gold-500/20 rounded-xl p-2.5 text-center mt-auto">
                    <p className="text-gold-400 text-[10px] font-bold">Raffle Tickets Available</p>
                    <p className="text-gray-400 text-[9px]">Use coins to enter monthly draws</p>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          {/* Earning Ways Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EARNING_WAYS.map((way) => (
              <div
                key={way.title}
                className="glass-card p-6 rounded-2xl hover:border-gold-500/30 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 to-yellow-500 flex items-center justify-center mb-4 text-2xl">
                  {way.icon}
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">{way.title}</h3>
                <p className="text-sm text-gray-400 leading-relaxed">{way.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
