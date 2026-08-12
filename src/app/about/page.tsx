import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'About' };

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-6xl mb-6 block">👑</span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
              About <span className="gradient-text">Czar AI</span>
            </h1>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              We believe everyone has untapped charisma waiting to be unleashed. Czar AI combines cutting-edge
              artificial intelligence with proven personal development techniques to help you become the most
              charismatic version of yourself.
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
