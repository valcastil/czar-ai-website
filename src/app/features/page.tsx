import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FEATURES } from '@/lib/constants';
import type { Metadata } from 'next';

export const metadata: Metadata = { title: 'Features' };

export default function FeaturesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-24 pb-16">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Features"
            title="Powerful tools for personal growth"
            description="Explore every feature Czar AI offers to help you become more charismatic, confident, and connected."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {FEATURES.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>

          {/* Comparison table */}
          <div className="mt-24">
            <SectionHeading
              title="Why Czar AI?"
              description="See how we compare to other self-improvement apps."
            />
            <div className="mt-12 overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="border-b border-white/10">
                    <th className="py-4 pr-8 text-sm font-medium text-gray-400">Feature</th>
                    <th className="py-4 px-4 text-sm font-bold text-gold-500">Czar AI</th>
                    <th className="py-4 px-4 text-sm text-gray-500">Others</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  {[
                    ['AI-Powered Coach', '✓', '✗'],
                    ['Charisma Types (12+)', '✓', 'Limited'],
                    ['Short-Form Video (Czareels)', '✓', '✗'],
                    ['Integrated Marketplace', '✓', '✗'],
                    ['E2E Encrypted Messaging', '✓', 'Sometimes'],
                    ['3-Month Free Trial', '✓', '7-day only'],
                    ['Multi-language Support', '5 languages', '1-2'],
                  ].map(([feature, czar, others]) => (
                    <tr key={feature} className="border-b border-white/5">
                      <td className="py-3 pr-8 text-white">{feature}</td>
                      <td className="py-3 px-4 text-gold-500">{czar}</td>
                      <td className="py-3 px-4 text-gray-500">{others}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
