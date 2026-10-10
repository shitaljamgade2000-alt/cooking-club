import React from 'react';

export default function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`${centered ? 'text-center' : ''} mb-12 md:mb-16 px-4 md:px-0`}>
      <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-charcoal mb-4 md:mb-6">
        {title}
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto font-light leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  );
}
