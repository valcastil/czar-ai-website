'use client';

import Script from 'next/script';
import { useEffect } from 'react';

export function GoogleAdBanner() {
  useEffect(() => {
    try {
      if (typeof window !== 'undefined') {
        ((window as any).adsbygoogle = (window as any).adsbygoogle || []).push({});
      }
    } catch (err) {
      console.error('Google Ads error:', err);
    }
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-1 px-4 bg-dark-400/60 border-t border-b border-white/5 overflow-hidden max-h-[60px]">
      <Script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-6775482980999438"
        crossOrigin="anonymous"
        strategy="afterInteractive"
      />
      <ins
        className="adsbygoogle"
        style={{ display: 'inline-block', width: '100%', maxHeight: '50px', textAlign: 'center' }}
        data-ad-client="ca-pub-6775482980999438"
        data-ad-slot="auto"
        data-ad-format="horizontal"
        data-full-width-responsive="true"
      />
    </div>
  );
}
