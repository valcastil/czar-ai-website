'use client';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeading({ label, title, description, centered = true, className = '' }: SectionHeadingProps) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {label && (
        <span className="inline-block px-3 py-1 text-xs font-medium text-gold-500 bg-gold-500/10 rounded-full mb-4">
          {label}
        </span>
      )}
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h2>
      {description && (
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">{description}</p>
      )}
    </div>
  );
}
