'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';

export { RevolvingPhoneMockup, MOCKUP_SLIDES } from './RevolvingPhoneMockup';
export type { MockupSlide } from './RevolvingPhoneMockup';

interface PhoneMockupProps {
  children?: React.ReactNode;
  className?: string;
  imageSrc?: string;
  imageAlt?: string;
}

export function PhoneMockup({
  children,
  className = '',
  imageSrc,
  imageAlt = 'Czar AI App Preview',
}: PhoneMockupProps) {
  // If no children and no imageSrc specified, default to the Czar AI app preview screenshot
  const effectiveImage = imageSrc ?? (children ? undefined : '/czar-app-preview.jpg');

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`phone-frame ${className}`}
    >
      <div className="phone-notch" />
      <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden bg-black">
        {effectiveImage && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={effectiveImage}
              alt={imageAlt}
              fill
              className="object-cover object-top"
              sizes="(max-width: 768px) 100vw, 320px"
              priority
            />
          </div>
        )}
        {children && (
          <div className="relative z-10 w-full h-full">
            {children}
          </div>
        )}
        {!effectiveImage && !children && (
          <div className="w-full h-full bg-gradient-to-br from-dark-100 via-dark-50 to-dark-300 flex items-center justify-center">
            <div className="text-center p-6">
              <span className="text-5xl mb-4 block">👑</span>
              <p className="text-gold-500 font-bold text-lg">Czar AI</p>
              <p className="text-gray-500 text-xs mt-2">App Preview</p>
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
}

export function DualPhoneMockup({ className = '' }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Back phone */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="phone-frame w-56 scale-90 absolute -right-8 top-4 -rotate-6 opacity-60"
      >
        <div className="phone-notch" />
        <div className="w-full h-full bg-gradient-to-br from-dark-100 to-dark-200 flex items-center justify-center">
          <div className="text-center p-4">
            <span className="text-3xl mb-2 block">🎬</span>
            <p className="text-gold-500 font-semibold text-sm">Czareels</p>
          </div>
        </div>
      </motion.div>

      {/* Front phone */}
      <PhoneMockup className="w-60 z-10" imageSrc="/czar-app-preview.jpg" />

      {/* Third phone */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="phone-frame w-56 scale-90 absolute -left-8 bottom-4 rotate-6 opacity-60"
      >
        <div className="phone-notch" />
        <div className="w-full h-full bg-gradient-to-br from-dark-200 to-dark-100 flex items-center justify-center">
          <div className="text-center p-4">
            <span className="text-3xl mb-2 block">📝</span>
            <p className="text-gold-500 font-semibold text-sm">Journal</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
