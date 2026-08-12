'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  index?: number;
}

export function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
  index = 0,
}: PricingCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className={`relative rounded-2xl p-8 ${
        highlighted
          ? 'bg-gradient-to-b from-dark-50 to-dark-100 border-2 border-gold-500 gold-glow'
          : 'glass-card'
      }`}
    >
      {highlighted && (
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 bg-gold-500 text-black text-xs font-bold rounded-full">
          MOST POPULAR
        </div>
      )}
      <h3 className="text-lg font-semibold text-white mb-2">{name}</h3>
      <div className="mb-1">
        <span className="text-4xl font-bold text-white">{price}</span>
        <span className="text-gray-400 ml-1">{period}</span>
      </div>
      <p className="text-sm text-gray-400 mb-6">{description}</p>
      <Link
        href="/download"
        className={`block w-full text-center py-3 rounded-full font-semibold text-sm transition-all duration-200 mb-6 ${
          highlighted
            ? 'bg-gold-500 hover:bg-gold-400 text-black'
            : 'bg-white/10 hover:bg-white/20 text-white'
        }`}
      >
        {cta}
      </Link>
      <ul className="space-y-3">
        {features.map((feature, i) => (
          <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
            <span className="text-gold-500 mt-0.5 shrink-0">✓</span>
            {feature}
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
