import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = { title: 'Contact' };

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8 pb-16">
        <div className="max-w-2xl mx-auto px-6 text-center">
          <span className="text-5xl block mb-6">📧</span>
          <h1 className="text-4xl font-extrabold text-white mb-4">Contact Us</h1>
          <p className="text-gray-400 mb-12">
            Have questions or feedback? We&apos;d love to hear from you.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {[
              { icon: '💻', label: 'Developer', value: 'developer@openanaios.com', href: 'mailto:developer@openanaios.com' },
              { icon: '💡', label: 'Support', value: 'support@openanaios.com', href: 'mailto:support@openanaios.com' },
              { icon: '🌐', label: 'Website', value: 'www.openanaios.com', href: 'https://www.openanaios.com', external: true },
              { icon: '📞', label: 'Phone', value: '+63 966 073 8395', href: 'tel:+639660738395' },
            ].map((c) => (
              <div key={c.label} className="glass-card p-6">
                <span className="text-2xl block mb-2">{c.icon}</span>
                <p className="text-white font-semibold text-sm mb-1">{c.label}</p>
                <a
                  href={c.href}
                  target={c.external ? '_blank' : undefined}
                  rel={c.external ? 'noopener noreferrer' : undefined}
                  className="text-gold-500 text-sm hover:text-gold-400 transition-colors"
                >
                  {c.value}
                </a>
              </div>
            ))}
          </div>

          <Link href="/" className="text-gold-500 hover:text-gold-400 text-sm transition-colors">
            ← Back to Home
          </Link>
        </div>
      </main>
      <Footer />
    </>
  );
}
