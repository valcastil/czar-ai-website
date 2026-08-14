import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Marketplace' };

const CATEGORIES = [
  { icon: '🏠', label: 'Home', color: 'from-amber-500 to-yellow-600' },
  { icon: '🚗', label: 'Vehicles', color: 'from-red-500 to-orange-600' },
  { icon: '🔌', label: 'Electronics', color: 'from-blue-500 to-indigo-600' },
  { icon: '🚲', label: 'Bicycle', color: 'from-green-500 to-teal-600' },
];

export default function MarketplacePage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="order-2 lg:order-1 flex justify-center">
              <PhoneMockup className="w-64" imageSrc="/marketplace_01.jpg" imageAlt="Marketplace app preview" />
            </div>
            <div className="order-1 lg:order-2">
              <span className="inline-block px-3 py-1 text-xs font-medium text-green-400 bg-green-500/10 rounded-full mb-4">
                Marketplace
              </span>
              <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                Buy, Sell &amp;{' '}
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-emerald-400">
                  Raffle
                </span>
              </h1>
              <p className="text-lg text-gray-400 mb-8 leading-relaxed">
                Browse listings across Home, Vehicles, Electronics, and Bicycle categories.
                Enter raffles for exciting items with ticket-based draws. All within the Czar AI ecosystem.
              </p>
              <Link
                href="/download"
                className="inline-flex px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all"
              >
                Explore Marketplace
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {CATEGORIES.map((c) => (
              <div key={c.label} className="glass-card p-6 text-center hover:border-gold-500/30 transition-colors cursor-pointer">
                <span className="text-3xl block mb-3">{c.icon}</span>
                <p className="text-white font-semibold text-sm">{c.label}</p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
