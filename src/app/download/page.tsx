import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PhoneMockup } from '@/components/ui/PhoneMockup';
import { SITE } from '@/lib/constants';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Download' };

export default function DownloadPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-6xl block mb-6">📱</span>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Get <span className="gradient-text">Czar AI</span>
          </h1>
          <p className="text-lg text-gray-400 mb-12 max-w-xl mx-auto">
            Available on iOS, Android, and Web. Start your 3-month free trial today.
          </p>

          {/* Store badges */}
          <div className="flex flex-wrap gap-6 justify-center mb-16">
            <a
              href={SITE.links.appStore}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-200 transition-all hover:scale-105"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/></svg>
              <div className="text-left">
                <p className="text-xs">Download on the</p>
                <p className="text-lg font-bold">App Store</p>
              </div>
            </a>
            <a
              href={SITE.links.googlePlay}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-2xl font-semibold hover:bg-gray-200 transition-all hover:scale-105"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor"><path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.199l2.807 1.626a1 1 0 010 1.732l-2.807 1.626L15.206 12l2.492-2.492zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/></svg>
              <div className="text-left">
                <p className="text-xs">GET IT ON</p>
                <p className="text-lg font-bold">Google Play</p>
              </div>
            </a>
          </div>

          {/* Phone mockup */}
          <div className="flex justify-center mb-16">
            <PhoneMockup className="w-64 sm:w-72" />
          </div>

          {/* Platform info */}
          <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
            {[
              { icon: '🍎', label: 'iOS', desc: 'iPhone & iPad. Requires iOS 15+.' },
              { icon: '🤖', label: 'Android', desc: 'All Android devices. Android 8+.' },
              { icon: '🌐', label: 'Web', desc: 'Available at app.czarai.app' },
            ].map((p) => (
              <div key={p.label} className="glass-card p-6 text-center">
                <span className="text-3xl block mb-3">{p.icon}</span>
                <h3 className="text-white font-semibold mb-1">{p.label}</h3>
                <p className="text-gray-400 text-xs">{p.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-12">
            <Link href="/" className="text-gold-500 hover:text-gold-400 text-sm transition-colors">
              ← Back to Home
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
