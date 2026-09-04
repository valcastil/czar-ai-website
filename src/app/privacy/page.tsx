import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Privacy Policy' };

export default function PrivacyPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-3xl mx-auto px-6 prose prose-invert">
          <h1 className="text-4xl font-extrabold text-white mb-2">Privacy Policy</h1>
          <p className="text-gray-500 mb-8">Last updated: August 2026</p>

          <div className="space-y-8 text-gray-300 leading-relaxed">
            <section>
              <h2 className="text-xl font-bold text-white mb-3">1. Information We Collect</h2>
              <p>We collect information you provide directly: name, email, phone number, profile photo, date of birth, gender, location, bio, interests, and occupation. We also collect usage data to improve our services.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">2. How We Use Your Information</h2>
              <p>Your information is used to provide and improve Czar AI services, personalize your experience, communicate with you, and ensure platform security. We never sell your personal data.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">3. Message Encryption</h2>
              <p>All messages are protected with AES-256 end-to-end encryption. Message content is encrypted on your device before transmission and can only be decrypted by the intended recipient.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">4. Data Storage & Security</h2>
              <p>Your data is stored securely on Supabase with Row-Level Security (RLS) enabled. We use encrypted storage on-device and secure transmission protocols (HTTPS/TLS) for all network communication.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">5. Your Rights</h2>
              <p>You can access, update, or delete your data at any time through the app settings. You can also export all your data. Contact us at privacy@czarai.app for data requests.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">6. Third-Party Services</h2>
              <p>We use Google Gemini AI for AI coaching, RevenueCat/Stripe for payments, Supabase for backend services, and Vexo for analytics. Each service has its own privacy policy.</p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-white mb-3">7. Contact</h2>
              <p>For privacy-related questions, contact us at support@openanaios.com.</p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
