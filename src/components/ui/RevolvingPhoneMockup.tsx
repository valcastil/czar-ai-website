'use client';

import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Sparkles } from 'lucide-react';

export interface MockupSlide {
  id: string;
  title: string;
  category: string;
  icon: string;
  description: string;
  imageSrc?: string; // Add background image path here (e.g. '/mockups/screen1.jpg')
  accentColor: string;
  gradient: string;
}

export const MOCKUP_SLIDES: MockupSlide[] = [
  {
    id: 'home-feed',
    title: 'Czar AI Feed',
    category: 'Home & Explore',
    icon: '👑',
    description: 'Community AI creations, daily insights, and Czar Coin rewards.',
    imageSrc: '/czar-app-preview.jpg',
    accentColor: '#D4AF37',
    gradient: 'from-amber-500/20 via-dark-100 to-dark-300',
  },
  {
    id: 'ai-coach',
    title: 'AI Charisma Coach',
    category: 'Gemini AI',
    icon: '🤖',
    description: 'Personalized voice coaching, charisma simulation, and feedback.',
    imageSrc: '/czar-ai-chat.jpg',
    accentColor: '#A855F7',
    gradient: 'from-purple-900/40 via-dark-100 to-dark-300',
  },
  {
    id: 'czareels',
    title: 'Czareels Hub',
    category: 'Short-Form Video',
    icon: '🎬',
    description: 'Vertical 4K video clips tagged by charisma type and emotion.',
    imageSrc: '/czareels_01.jpg',
    accentColor: '#F97316',
    gradient: 'from-orange-900/40 via-dark-100 to-dark-300',
  },
  {
    id: 'journal',
    title: 'Charisma Journal',
    category: 'Growth & Reflection',
    icon: '📝',
    description: 'Track daily social interactions across 12+ charisma types.',
    imageSrc: '/charisma_entries.jpg',
    accentColor: '#3B82F6',
    gradient: 'from-blue-900/40 via-dark-100 to-dark-300',
  },
  {
    id: 'marketplace',
    title: 'Marketplace & Raffles',
    category: 'Ecosystem Commerce',
    icon: '🛍️',
    description: 'Trade, buy, and enter item raffles with community tokens.',
    imageSrc: '/marketplace_01.jpg',
    accentColor: '#10B981',
    gradient: 'from-emerald-900/40 via-dark-100 to-dark-300',
  },
  {
    id: 'messaging',
    title: 'Secure Messaging',
    category: 'AES-256 Encrypted',
    icon: '💬',
    description: 'End-to-end encrypted 1:1 chat with instant rich attachments.',
    imageSrc: '/chat_01.jpg',
    accentColor: '#6366F1',
    gradient: 'from-indigo-900/40 via-dark-100 to-dark-300',
  },
  {
    id: 'settings',
    title: 'Profile Page',
    category: 'Profiles',
    icon: '📊',
    description: 'Live calendar heatmap, contributions, and stats.',
    imageSrc: '/profile_page.jpg',
    accentColor: '#EC4899',
    gradient: 'from-pink-900/40 via-dark-100 to-dark-300',
  },
  {
    id: 'wallet',
    title: 'Czar Coins & VIP',
    category: 'Rewards & Streaks',
    icon: '🏛️',
    description: 'Manage your wallet balance, streak multipliers, and PRO perks.',
    imageSrc: '/czar-ai-coin.jpg',
    accentColor: '#EAB308',
    gradient: 'from-yellow-900/40 via-dark-100 to-dark-300',
  },
];

interface RevolvingPhoneMockupProps {
  slides?: MockupSlide[];
  className?: string;
  autoPlayInterval?: number; // In ms, 0 to disable
}

export function RevolvingPhoneMockup({
  slides = MOCKUP_SLIDES,
  className = '',
  autoPlayInterval = 6000,
}: RevolvingPhoneMockupProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const total = slides.length;

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % total);
  }, [total]);

  const handlePrev = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  }, [total]);

  const goToSlide = (idx: number) => {
    setCurrentIndex((idx + total) % total);
  };

  // Keyboard navigation
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [handleNext, handlePrev]);

  // Optional auto-play
  useEffect(() => {
    if (!autoPlayInterval || isPaused) return;
    const timer = setInterval(handleNext, autoPlayInterval);
    return () => clearInterval(timer);
  }, [autoPlayInterval, isPaused, handleNext]);

  const currentSlide = slides[currentIndex];

  // Helper to calculate circular distance relative to current
  const getOffset = (idx: number) => {
    let diff = idx - currentIndex;
    while (diff > total / 2) diff -= total;
    while (diff < -total / 2) diff += total;
    return diff;
  };

  return (
    <div
      className={`relative flex flex-col items-center justify-center w-full select-none ${className}`}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      {/* Active slide badge */}
      <div className="mb-2.5 flex items-center gap-2">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide.id}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.25 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-dark-200/90 border border-gold-500/30 text-white shadow-lg backdrop-blur-md"
          >
            <span className="text-base">{currentSlide.icon}</span>
            <span className="text-xs font-semibold text-gold-400">{currentSlide.category}</span>
            <span className="text-gray-500 text-xs">•</span>
            <span className="text-xs font-medium text-gray-200">{currentSlide.title}</span>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* 3D Revolving Deck Stage */}
      <div className="relative w-full max-w-[500px] h-[460px] sm:h-[500px] flex items-start justify-center [perspective:1200px] pt-1">
        {/* Ambient gold glow behind center phone */}
        <div className="absolute top-12 w-72 h-72 rounded-full bg-gold-500/15 blur-3xl -z-10 pointer-events-none transition-all duration-700" />

        {slides.map((slide, idx) => {
          const offset = getOffset(idx);
          const isCurrent = offset === 0;
          const isVisible = Math.abs(offset) <= 2; // Show 5 phones: -2, -1, 0, 1, 2

          if (!isVisible) return null;

          // Compute 3D transformation values
          let x = 0;
          let scale = 1;
          let rotateY = 0;
          let zIndex = 30;
          let opacity = 1;
          let brightness = 1;

          if (offset === 0) {
            x = 0;
            scale = 1;
            rotateY = 0;
            zIndex = 30;
            opacity = 1;
            brightness = 1;
          } else if (offset === 1) {
            x = 135;
            scale = 0.86;
            rotateY = -18;
            zIndex = 20;
            opacity = 0.8;
            brightness = 0.75;
          } else if (offset === -1) {
            x = -135;
            scale = 0.86;
            rotateY = 18;
            zIndex = 20;
            opacity = 0.8;
            brightness = 0.75;
          } else if (offset === 2) {
            x = 230;
            scale = 0.72;
            rotateY = -30;
            zIndex = 10;
            opacity = 0.45;
            brightness = 0.5;
          } else if (offset === -2) {
            x = -230;
            scale = 0.72;
            rotateY = 30;
            zIndex = 10;
            opacity = 0.45;
            brightness = 0.5;
          }

          return (
            <motion.div
              key={slide.id}
              onClick={() => !isCurrent && goToSlide(idx)}
              animate={{
                x,
                scale,
                rotateY,
                opacity,
                zIndex,
                filter: `brightness(${brightness})`,
              }}
              transition={{
                type: 'spring',
                stiffness: 260,
                damping: 28,
              }}
              className={`absolute top-1 w-56 sm:w-64 cursor-pointer transition-shadow ${
                isCurrent ? 'cursor-default' : 'hover:scale-90 hover:opacity-95'
              }`}
              style={{
                transformStyle: 'preserve-3d',
                zIndex,
              }}
            >
              {/* Phone Frame */}
              <div
                className={`phone-frame w-full rounded-[1.75rem] border-2 ${
                  isCurrent ? 'border-gold-500/50 shadow-2xl shadow-gold-500/20' : 'border-gray-700/80 shadow-xl'
                } bg-dark-400 overflow-hidden relative`}
              >
                {/* Notch */}
                <div className="phone-notch" />

                {/* Phone screen content */}
                <div className="absolute inset-0 rounded-[1.75rem] overflow-hidden bg-dark-400">
                  {slide.imageSrc ? (
                    <div className="relative w-full h-full">
                      <Image
                        src={slide.imageSrc}
                        alt={slide.title}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 768px) 100vw, 320px"
                        priority={isCurrent}
                      />
                    </div>
                  ) : (
                    /* Fallback screen mockup until user adds imageSrc */
                    <div
                      className={`w-full h-full bg-gradient-to-br ${slide.gradient} flex flex-col justify-between p-4 pt-10 text-white`}
                    >
                      {/* Mockup Mini Status Bar & Header */}
                      <div>
                        <div className="flex items-center justify-between pb-3 border-b border-white/10">
                          <div className="flex items-center gap-1.5">
                            <span className="text-xs">{slide.icon}</span>
                            <span className="text-[11px] font-bold text-gold-400">Czar AI</span>
                          </div>
                          <span className="text-[9px] px-2 py-0.5 rounded-full bg-white/10 text-gray-300 font-mono">
                            {idx + 1}/{total}
                          </span>
                        </div>

                        {/* Title & Category */}
                        <div className="mt-4">
                          <span
                            className="inline-block px-2 py-0.5 rounded-full text-[9px] font-medium mb-1.5"
                            style={{ backgroundColor: `${slide.accentColor}25`, color: slide.accentColor }}
                          >
                            {slide.category}
                          </span>
                          <h4 className="text-sm font-bold text-white leading-tight">{slide.title}</h4>
                          <p className="text-[11px] text-gray-400 mt-1 leading-snug">{slide.description}</p>
                        </div>
                      </div>

                      {/* Mockup Visual Card */}
                      <div className="my-auto py-2">
                        <div className="p-3.5 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-inner">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl mb-2 shadow-lg"
                            style={{
                              background: `radial-gradient(circle, ${slide.accentColor}40 0%, ${slide.accentColor}10 100%)`,
                              border: `1px solid ${slide.accentColor}50`,
                            }}
                          >
                            {slide.icon}
                          </div>
                          <p className="text-[11px] font-semibold text-white">{slide.title}</p>
                          <span className="text-[9px] text-gray-400 mt-0.5 flex items-center gap-1">
                            <Sparkles className="w-2.5 h-2.5 text-gold-400" />
                            Interactive Preview
                          </span>
                        </div>
                      </div>

                      {/* Mockup Mini Navigation Bar */}
                      <div className="pt-2 border-t border-white/10 flex items-center justify-around text-gray-400 text-[10px]">
                        <span className="text-gold-400 font-bold">● Feed</span>
                        <span>Coach</span>
                        <span>Reels</span>
                        <span>Chat</span>
                      </div>
                    </div>
                  )}
                </div>

                {/* Subtle glass reflection overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-tr from-transparent via-white/[0.04] to-transparent" />
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* ─── CONTROLS: Forward & Back Buttons + Dots + Counter ─── */}
      <div className="mt-3 sm:mt-4 flex flex-col items-center gap-3.5 z-40">
        {/* Navigation buttons and counter */}
        <div className="flex items-center gap-4">
          <button
            onClick={handlePrev}
            aria-label="Previous mockup"
            className="w-11 h-11 rounded-full bg-dark-200/80 hover:bg-gold-500 hover:text-black border border-white/10 hover:border-gold-400 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg active:scale-95 group"
          >
            <ChevronLeft className="w-5 h-5 transition-transform group-hover:-translate-x-0.5" />
          </button>

          {/* Current slide indicator pill */}
          <div className="px-4 py-2 rounded-full bg-dark-200/90 border border-white/10 text-center min-w-[120px] backdrop-blur-md">
            <span className="text-xs font-mono font-bold text-gold-400">
              {String(currentIndex + 1).padStart(2, '0')}
            </span>
            <span className="text-xs text-gray-500 font-mono"> / {String(total).padStart(2, '0')}</span>
          </div>

          <button
            onClick={handleNext}
            aria-label="Next mockup"
            className="w-11 h-11 rounded-full bg-dark-200/80 hover:bg-gold-500 hover:text-black border border-white/10 hover:border-gold-400 text-white flex items-center justify-center transition-all duration-200 hover:scale-110 shadow-lg active:scale-95 group"
          >
            <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-0.5" />
          </button>
        </div>

        {/* Thumbnail Dots */}
        <div className="flex items-center gap-2">
          {slides.map((slide, idx) => (
            <button
              key={slide.id}
              onClick={() => goToSlide(idx)}
              aria-label={`Go to slide ${idx + 1}: ${slide.title}`}
              className={`transition-all duration-300 rounded-full ${
                idx === currentIndex
                  ? 'w-7 h-2 bg-gradient-to-r from-gold-400 to-gold-600 shadow-md shadow-gold-500/50'
                  : 'w-2 h-2 bg-gray-600 hover:bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
