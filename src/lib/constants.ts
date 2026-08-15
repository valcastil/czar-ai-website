export const SITE = {
  name: 'Czar AI',
  tagline: 'Unlock Your Charisma with AI',
  description:
    'Czar AI is your personal AI-powered charisma coach. Journal your social experiences, get AI coaching, share Czareels, buy & sell in the marketplace, and chat securely — all in one app.',
  url: 'https://czarai.app',
  ogImage: '/og-image.png',
  links: {
    appStore: 'https://apps.apple.com/app/czar-ai/id1234567890',
    googlePlay: 'https://play.google.com/store/apps/details?id=com.openanaios.czarai',
  },
};

export const NAV_LINKS = [
  { label: 'Features', href: '/features' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'About', href: '/about' },
  { label: 'Blog', href: '/blog' },
];

export const FEATURES = [
  {
    icon: '🤖',
    title: 'AI Charisma Coach',
    description: 'Powered by Google Gemini AI. Get personalized guidance to improve your social skills through natural conversations.',
    href: '/features/ai-coach',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: '📝',
    title: 'Charisma Journal',
    description: 'Log daily experiences across 12+ charisma types. Track your growth with streaks, stats, and emotion tagging.',
    href: '/features/journal',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: '🎬',
    title: 'Czareels',
    description: 'Create and share short-form vertical videos tagged with charisma types. Build your presence through authentic content.',
    href: '/features/czareels',
    color: 'from-orange-500 to-red-500',
  },
  {
    icon: '🛍️',
    title: 'Marketplace',
    description: 'Buy and sell through raffle items across categories like Home, Vehicles, Electronics, and Bicycles.',
    href: '/features/marketplace',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: '💬',
    title: 'Secure Messaging',
    description: 'Real-time 1:1 chat with AES-256 end-to-end encryption. Share attachments, locations, reactions, and more.',
    href: '/features/messaging',
    color: 'from-indigo-500 to-violet-500',
  },
  {
    icon: '/czarai logo 1024.png',
    title: 'Earn Czar AI Coins',
    description: 'Earn Czar Coins by completing daily streaks, journaling, and engaging with AI coaching. Unlock VIP perks and exclusive rewards.',
    href: '/features/coins',
    color: 'from-amber-500 to-yellow-500',
  },
];

export const PRICING_PLANS = [
  {
    name: 'Free Trial',
    price: '$0',
    period: '3 months',
    description: 'Full access after sign-up. No credit card required.',
    features: [
      'All features unlocked',
      'AI Charisma Coach',
      'Unlimited journal entries',
      'Czareels creation',
      'Marketplace access',
      'Secure messaging',
    ],
    cta: 'Start Free',
    highlighted: false,
  },
  {
    name: 'PRO Monthly',
    price: '$2.99',
    period: '/month',
    description: 'Continue your journey after the trial.',
    features: [
      'Everything in Free',
      'All premium charisma types',
      'Priority AI coaching',
      'Advanced analytics',
      'No ads',
      'Cancel anytime',
    ],
    cta: 'Subscribe Monthly',
    highlighted: true,
  },
  {
    name: 'PRO Yearly',
    price: '$29.99',
    period: '/year',
    description: 'Best value — save 20% vs monthly.',
    features: [
      'Everything in PRO Monthly',
      '20% savings',
      'Early access to new features',
      'Priority support',
      'Exclusive content',
      'Annual badge',
    ],
    cta: 'Subscribe Yearly',
    highlighted: false,
  },
];

export const HOW_IT_WORKS = [
  {
    step: '1',
    title: 'Sign Up Free',
    description: 'Create your account in seconds. No credit card or payment information needed.',
  },
  {
    step: '2',
    title: '3 Months Free',
    description: 'Enjoy full access to all features for 3 months. No strings attached.',
  },
  {
    step: '3',
    title: 'Go PRO',
    description: 'After your trial, choose a PRO plan or keep using core features free forever.',
  },
];

export const STATS = [
  { value: '12+', label: 'Charisma Types' },
  { value: 'AI', label: 'Powered Coach' },
  { value: 'AES-256', label: 'Encryption' },
  { value: '30s', label: 'Czareels' },
];
