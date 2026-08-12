'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

interface FeatureCardProps {
  icon: string;
  title: string;
  description: string;
  href: string;
  color: string;
  index?: number;
}

export function FeatureCard({ icon, title, description, href, color, index = 0 }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
    >
      <Link href={href} className="block group">
        <div className="glass-card p-6 h-full hover:border-gold-500/30 transition-all duration-300 hover:gold-glow">
          <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 text-2xl group-hover:scale-110 transition-transform duration-300`}>
            {icon}
          </div>
          <h3 className="text-lg font-semibold text-white mb-2 group-hover:text-gold-500 transition-colors">
            {title}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
          <span className="inline-flex items-center gap-1 mt-4 text-xs text-gold-500 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Learn more <span aria-hidden="true">→</span>
          </span>
        </div>
      </Link>
    </motion.div>
  );
}
