'use client';

import { Footer } from '@/components/layout/Footer';
import { Navbar } from '@/components/layout/Navbar';
import { FeatureCard } from '@/components/ui/FeatureCard';
import { RevolvingPhoneMockup } from '@/components/ui/RevolvingPhoneMockup';
import { PricingCard } from '@/components/ui/PricingCard';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { FEATURES, HOW_IT_WORKS, PRICING_PLANS, STATS } from '@/lib/constants';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <Navbar />

      {/* ─── HERO ─── */}
      <section className="relative min-h-[calc(100vh-120px)] flex items-center overflow-hidden pt-2 pb-12">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gold-500/5 via-dark-400 to-dark-400" />
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gold-500/5 rounded-full blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-6 w-full">
          <div className="grid lg:grid-cols-2 gap-8 items-center py-2 lg:py-4">
            {/* Left: Text */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gold-500/10 border border-gold-500/20 text-gold-500 text-sm font-medium mb-4">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-gold-500" />
                </span>
                Now available on iOS &amp; Android
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-4">
                Unique{' '}
                <span className="gradient-text">Social Platform</span>
                <br />
                with AI
              </h1>

              <p className="text-base sm:text-lg text-gray-400 max-w-lg mb-6 leading-relaxed">
                Your personal AI-powered charisma coach. Journal your experiences, get real-time coaching,
                share Czareels, and connect securely — while earning Czar AI coins all in one beautiful app.
              </p>

              <div className="flex flex-wrap gap-4">
                <Link
                  href="/download"
                  className="px-8 py-3.5 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/25 text-base sm:text-lg"
                >
                  Start Free Trial
                </Link>
                <Link
                  href="/features"
                  className="px-8 py-3.5 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-200 text-base sm:text-lg"
                >
                  Explore Features
                </Link>
              </div>

              {/* Stats row */}
              <div className="flex flex-wrap gap-8 mt-6">
                {STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-bold text-gold-500">{stat.value}</p>
                    <p className="text-xs text-gray-500">{stat.label}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Right: 3D Revolving Phone mockups */}
            <div className="flex justify-center items-center w-full min-h-[440px] lg:min-h-[480px] mt-4 lg:mt-0">
              <RevolvingPhoneMockup />
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-3 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 z-10"
        >
          <span className="text-xs text-gray-500">Scroll to explore</span>
          <div className="w-4 h-7 rounded-full border-2 border-gray-700 flex justify-center">
            <div className="w-1 h-2 bg-gold-500 rounded-full mt-1 animate-pulse-gold" />
          </div>
        </motion.div>
      </section>

      {/* ─── FEATURES GRID ─── */}
      <section id="features" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Features"
            title="Everything you need to grow"
            description="From AI coaching to secure messaging, Czar AI gives you all the tools to become your most charismatic self."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {FEATURES.map((feature, i) => (
              <FeatureCard key={feature.title} {...feature} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="py-24 relative bg-dark-300/50">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Get Started"
            title="How it works"
            description="Simple, transparent, and risk-free. Start your journey in three easy steps."
          />
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            {HOW_IT_WORKS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.15 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-gold-500/20 to-gold-500/5 border border-gold-500/20 flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl font-bold text-gold-500">{step.step}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── PRICING ─── */}
      <section id="pricing" className="py-24 relative">
        <div className="max-w-7xl mx-auto px-6">
          <SectionHeading
            label="Pricing"
            title="Simple, transparent pricing"
            description="Start with 3 months free. No credit card required. Upgrade to PRO when you're ready."
          />
          <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
            {PRICING_PLANS.map((plan, i) => (
              <PricingCard key={plan.name} {...plan} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA BANNER ─── */}
      <section className="py-24 relative">
        <div className="max-w-4xl mx-auto mx-6 text-center relative">
          <div className="absolute inset-0 bg-gradient-to-r from-gold-500/10 via-gold-500/5 to-gold-500/10 rounded-3xl blur-2xl" />
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative glass-card p-12 gold-glow"
          >
            <span className="text-5xl mb-6 block">👑</span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to level up your social skills?
            </h2>
            <p className="text-gray-400 text-lg mb-8 max-w-xl mx-auto">
              Join thousands of users transforming their charisma with AI-powered coaching.
              Start your 3-month free trial today.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href="/download"
                className="px-8 py-4 bg-gold-500 hover:bg-gold-400 text-black font-bold rounded-full transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/25"
              >
                Get Started Free
              </Link>
              <Link
                href="/pricing"
                className="px-8 py-4 border border-white/20 hover:border-white/40 text-white font-semibold rounded-full transition-all duration-200"
              >
                View Plans
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}
