import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { PricingCard } from '@/components/ui/PricingCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { PRICING_PLANS } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Pricing' };

const FAQS = [
  { q: 'Is there really no credit card required?', a: 'Yes! Your 3-month free trial requires no payment information. Just sign up and start using all features.' },
  { q: 'What happens after the 3-month trial?', a: 'Core features like Home, messaging, profile, and Czareels remain free forever. Czar AI Chat requires a PRO subscription to continue.' },
  { q: 'Can I cancel anytime?', a: 'Absolutely. You can cancel your PRO subscription at any time. You\'ll continue to have access until the end of your billing period.' },
  { q: 'What payment methods do you accept?', a: 'We use RevenueCat and Stripe for secure payment processing. All major credit cards and regional payment methods are supported.' },
  { q: 'Is my data secure?', a: 'Yes! All messages are AES-256 end-to-end encrypted. We use Supabase with Row-Level Security (RLS) for complete data isolation.' },
];

export default function PricingPage() {
  return (
    <>
      <Navbar />
      <main className="pt-8 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Pricing"
            title="Simple, transparent pricing"
            description="Start with 3 months free. No credit card required. Only upgrade when you're ready."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <PricingCard key={plan.name} {...plan} index={i} />
            ))}
          </div>

          {/* FAQ */}
          <div className="mt-24 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {FAQS.map((faq, i) => (
                <details key={i} className="glass-card group">
                  <summary className="p-5 cursor-pointer flex items-center justify-between text-white font-medium">
                    {faq.q}
                    <span className="text-gray-500 group-open:rotate-45 transition-transform">+</span>
                  </summary>
                  <p className="px-5 pb-5 text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
