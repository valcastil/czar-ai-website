import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service',
  other: {
    'tiktok-developers-site-verification': 'sFkcpOr49aAXZj1wv3kK36peXUpJQqVk',
  },
};

export default function TermsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-4xl font-extrabold text-white mb-2">Terms of Service</h1>
          <p className="text-gray-500 mb-8">Last updated: August 2026</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Acceptance of Terms</h2>
              <p>By using Czar AI, you agree to these terms. If you do not agree, please do not use the service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. Free Trial & Subscription</h2>
              <p>New users receive a 3-month free trial after signing up. After the trial, core features remain free. Czar AI Chat requires a PRO subscription ($2.99/month or $29.99/year). You may cancel anytime.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. User Conduct</h2>
              <p>You agree not to misuse the platform, including harassment, spam, illegal content, or attempts to compromise security. We reserve the right to suspend accounts that violate these terms.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Content Ownership</h2>
              <p>You retain ownership of content you create. By posting, you grant Czar AI a license to display and distribute your content within the platform.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Limitation of Liability</h2>
              <p>Czar AI is provided &quot;as is&quot; without warranties. We are not liable for damages arising from use of the service.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Contact</h2>
              <p>For legal inquiries, contact us at support@openanaios.com.</p>
            </section>
          </div>

          <div className="mt-12 pt-6 border-t border-gray-800/60 text-xs text-gray-600 select-all">
            <p>sFkcpOr49aAXZj1wv3kK36peXUpJQqVk</p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
