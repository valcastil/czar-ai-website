import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Secure Messaging' };

const SECURITY_FEATURES = [
  { icon: '🔐', title: 'AES-256 Encryption', desc: 'All messages are protected with military-grade end-to-end encryption.' },
  { icon: '⚡', title: 'Real-Time Delivery', desc: 'Powered by Supabase real-time subscriptions for instant message delivery.' },
  { icon: '📎', title: 'Rich Attachments', desc: 'Share images, videos, audio, documents, locations, and contacts.' },
  { icon: '🔄', title: 'Message Forwarding', desc: 'Forward messages with full chain tracking and attribution.' },
  { icon: '✅', title: 'Read Receipts', desc: 'Know when your messages have been delivered and read.' },
  { icon: '😊', title: 'Emoji Reactions', desc: 'React to any message with emoji. Quick, fun, expressive.' },
  { icon: '🟢', title: 'Online Status', desc: 'See who&apos;s online and their last seen timestamp.' },
  { icon: '🛡️', title: 'Rate Limited', desc: '30 messages per minute to prevent spam and abuse.' },
];

export default function MessagingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium text-indigo-400 bg-indigo-500/10 rounded-full mb-4">
                Communication
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-violet-400">
                  Secure
                </span>{' '}
                Messaging
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Real-time 1:1 chat with AES-256 end-to-end encryption. Share attachments,
                react with emoji, forward messages, and stay connected — privately and securely.
              </p>
              <Link
                href="/download"
                className="inline-flex px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all"
              >
                Start Chatting
              </Link>
            </div>
            <div className="flex justify-center">
              <PhoneMockup className="w-64">
                <div className="w-full h-full bg-gradient-to-br from-indigo-900/30 to-dark-100 flex flex-col p-3 pt-12">
                  <p className="text-white font-bold text-xs mb-3 border-b border-white/10 pb-2">💬 Chat</p>
                  <div className="flex-1 flex flex-col gap-2">
                    <div className="self-end bg-indigo-500/20 rounded-2xl rounded-br-sm px-3 py-1.5 max-w-[75%]">
                      <p className="text-white text-[10px]">Hey! How was the event?</p>
                    </div>
                    <div className="self-start bg-white/10 rounded-2xl rounded-bl-sm px-3 py-1.5 max-w-[75%]">
                      <p className="text-white text-[10px]">Amazing! Used the tips you shared 🙌</p>
                    </div>
                    <div className="self-end bg-indigo-500/20 rounded-2xl rounded-br-sm px-3 py-1.5 max-w-[75%]">
                      <p className="text-white text-[10px]">That&apos;s great! 🔥</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between text-[10px] text-gray-500 mt-2">
                    <span>🔒 End-to-end encrypted</span>
                    <span>✅ Read</span>
                  </div>
                </div>
              </PhoneMockup>
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {SECURITY_FEATURES.map((f) => (
              <div key={f.title} className="glass-card p-5">
                <span className="text-2xl block mb-3">{f.icon}</span>
                <h3 className="text-white font-semibold text-sm mb-1">{f.title}</h3>
                <p className="text-gray-400 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
