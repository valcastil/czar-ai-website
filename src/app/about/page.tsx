import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'About' };

const WHAT_YOU_CAN_DO = [
  {
    icon: '💬',
    title: 'Chat like WhatsApp, grow like a pro',
    desc: 'Message friends and mentors in a familiar, WhatsApp-style interface while AI coaches you on tone, timing, and influence in real time.',
  },
  {
    icon: '🎬',
    title: 'Showcase your presence with CzarReels',
    desc: 'Record, edit, and share short “charisma videos” that highlight your confidence, storytelling, and social skills. Get feedback, track progress, and go viral within the Czar community.',
  },
  {
    icon: '🎟️',
    title: 'Buy, sell, and compete with raffle tickets',
    desc: 'Access exclusive content, coaching sessions, and community challenges through raffle tickets. List your own offers, join high-value draws, and turn your charisma into real opportunities.',
  },
  {
    icon: '🪙',
    title: 'Earn while you engage',
    desc: 'Every message, reel, and interaction can earn you Czar AI coins. Use them to unlock premium features, enter special raffles, or trade within the ecosystem.',
  },
];

const WHY_CZAR = [
  {
    icon: '🧠',
    title: 'AI-Powered Feedback',
    desc: 'Personalized guidance on your communication style, tone, and delivery.',
  },
  {
    icon: '🎯',
    title: 'Daily Micro-Challenges',
    desc: 'Actionable, bite-sized tasks to build real-world social confidence step by step.',
  },
  {
    icon: '🚀',
    title: 'Rewarding Social Economy',
    desc: 'A thriving ecosystem that actively rewards your personal growth and creativity.',
  },
];

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          {/* Header */}
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">👑</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
              About <span className="gradient-text">Czar AI</span>
            </h1>
            <p className="text-xl font-semibold text-gold-400 mb-4">
              Unlock the charisma you already have.
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Czar AI believes everyone has untapped charisma waiting to be unleashed. We combine cutting-edge
              artificial intelligence with proven personal development techniques to help you become the most
              charismatic version of yourself — confident, magnetic, and in control of every conversation.
            </p>
          </div>

          {/* Mission */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">🎯 Our Mission</h2>
            <p className="text-gray-400 leading-relaxed">
              To democratize personal charisma development through AI-powered coaching, making
              world-class social skills training accessible to everyone, everywhere.
            </p>
          </div>

          {/* What you can do on Czar AI */}
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">✨ What You Can Do on Czar AI</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {WHAT_YOU_CAN_DO.map((item) => (
                <div key={item.title} className="glass-card p-6 hover:border-gold-500/30 transition-all duration-300">
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <h3 className="text-lg font-semibold text-white mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Why Czar AI? */}
          <div className="glass-card p-8 mb-12 border-gold-500/20">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">💎 Why Czar AI?</h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {WHY_CZAR.map((item) => (
                <div key={item.title} className="bg-white/5 rounded-xl p-5 text-center">
                  <span className="text-3xl block mb-3">{item.icon}</span>
                  <h3 className="text-white font-semibold text-sm mb-2">{item.title}</h3>
                  <p className="text-xs text-gray-400 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-gold-500/10 border border-gold-500/20 rounded-2xl p-6 text-center">
              <p className="text-white font-medium text-base md:text-lg italic mb-3">
                “Czar AI isn’t just another social app — it’s your personal charisma gym, your stage, and your marketplace, all in one.”
              </p>
              <p className="text-gray-400 text-sm mb-6">
                Download Czar AI and start turning your hidden magnetism into visible influence.
              </p>
              <Link
                href="/download"
                className="inline-flex px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all shadow-lg shadow-gold-500/20"
              >
                Get Started Free
              </Link>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="glass-card p-8 mb-8">
            <h2 className="text-2xl font-bold text-white mb-4">⚙️ Tech Stack</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                { label: 'Framework', value: 'React Native + Expo SDK 54' },
                { label: 'AI Engine', value: 'Google Gemini AI' },
                { label: 'Backend', value: 'Supabase (PostgreSQL + Realtime)' },
                { label: 'Auth', value: 'Supabase Auth + Firebase Auth' },
                { label: 'Payments', value: 'RevenueCat + Stripe' },
                { label: 'Storage', value: 'Cloudflare R2' },
                { label: 'Encryption', value: 'AES-256 E2E' },
                { label: 'Platforms', value: 'iOS, Android, Web' },
              ].map((t) => (
                <div key={t.label} className="flex justify-between items-center py-2 border-b border-white/5">
                  <span className="text-gray-400 text-sm">{t.label}</span>
                  <span className="text-white text-sm font-medium">{t.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Languages */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-4">🌍 Supported Languages</h2>
            <div className="flex flex-wrap gap-3">
              {['🇺🇸 English', '🇵🇭 Cebuano', '🇵🇭 Tagalog', '🇪🇸 Spanish', '🇷🇺 Russian'].map((lang) => (
                <span key={lang} className="px-4 py-2 bg-white/5 rounded-full text-sm text-gray-300">
                  {lang}
                </span>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
