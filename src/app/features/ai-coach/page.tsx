import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'AI Coach' };

const HIGHLIGHTS = [
  { icon: '🧠', title: 'Google Gemini AI', desc: 'Powered by state-of-the-art conversational AI for natural, insightful coaching.' },
  { icon: '🗣️', title: 'Text-to-Speech', desc: 'Listen to AI responses with natural voice synthesis. Toggle on/off anytime.' },
  { icon: '🎯', title: 'Personalized Guidance', desc: 'Get advice tailored to your charisma type, mood, and personal goals.' },
  { icon: '🔒', title: 'Pro Feature', desc: 'Included free during your 3-month trial. Requires PRO subscription after trial ends.' },
];

export default function AiCoachPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          {/* Hero */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-purple-400 bg-purple-500/10 rounded-full mb-4">
                AI-Powered
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Your Personal{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
                  AI Charisma Coach
                </span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Powered by Google Gemini AI, your coach provides personalized guidance to help you
                improve social skills, build confidence, and develop your unique charisma style.
              </p>
              <Link
                href="/download"
                className="inline-flex px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all"
              >
                Try AI Coach Free
              </Link>
            </div>
            <div className="flex justify-center">
              <PhoneMockup className="w-64">
                <div className="w-full h-full bg-gradient-to-br from-purple-900/40 to-dark-100 flex flex-col p-4 pt-12">
                  <div className="flex-1 flex flex-col gap-2 mt-4">
                    <div className="self-end bg-purple-500/20 rounded-2xl rounded-br-sm px-4 py-2 max-w-[80%]">
                      <p className="text-white text-xs">How can I be more confident?</p>
                    </div>
                    <div className="self-start bg-gold-500/20 rounded-2xl rounded-bl-sm px-4 py-2 max-w-[80%]">
                      <p className="text-white text-xs">Great question! Confidence comes from preparation and practice. Let me share 3 techniques...</p>
                    </div>
                  </div>
                  <div className="flex gap-2 pb-2">
                    <div className="flex-1 bg-white/10 rounded-full px-4 py-2">
                      <p className="text-gray-500 text-xs">Type a message...</p>
                    </div>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIGHLIGHTS.map((h) => (
              <div key={h.title} className="glass-card p-6 text-center">
                <span className="text-3xl block mb-3">{h.icon}</span>
                <h3 className="text-white font-semibold mb-2">{h.title}</h3>
                <p className="text-sm text-gray-400">{h.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
