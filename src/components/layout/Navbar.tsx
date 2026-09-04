'use client';

import { NAV_LINKS } from '@/lib/constants';
import { GoogleAdBanner } from '@/components/ui/GoogleAdBanner';
import { AnimatePresence, motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-dark-400/90 backdrop-blur-xl border-b border-white/5 shadow-lg shadow-black/20'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <Image
              src="/czarai logo 1024.png"
              alt="Czar AI Logo"
              width={32}
              height={32}
              className="w-8 h-8 rounded-full object-contain group-hover:scale-105 transition-transform duration-200"
              priority
            />
            <span className="text-xl font-bold tracking-tight">
              <span className="gradient-text">Czar</span>
              <span className="text-white"> AI</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-gray-400 hover:text-gold-500 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/download"
              className="px-5 py-2 bg-gold-500 hover:bg-gold-400 text-black font-semibold rounded-full text-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold-500/25"
            >
              Download
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-white p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-dark-300 border-t border-white/5 overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-4">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-gray-400 hover:text-gold-500 transition-colors py-2"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/download"
                  onClick={() => setIsOpen(false)}
                  className="px-5 py-3 bg-gold-500 hover:bg-gold-400 text-black font-semibold rounded-full text-center transition-all"
                >
                  Download
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Google Ads Banner below navbar */}
      <div className="pt-16 w-full relative z-40">
        <GoogleAdBanner />
      </div>
    </>
  );
}
