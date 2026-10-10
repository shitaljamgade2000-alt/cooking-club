import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Button({ children, variant = 'primary', icon = false, className = '', ...props }) {
  const baseClasses = 'px-6 py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2';
  
  const variants = {
    primary: 'bg-tomato-red text-white hover:bg-red-700 hover:shadow-lg hover:scale-105 active:scale-95',
    secondary: 'border-2 border-tomato-red text-tomato-red hover:bg-tomato-red hover:text-white',
    light: 'bg-white text-charcoal border border-gray-200 hover:shadow-md',
    outline: 'border-2 border-charcoal text-charcoal hover:bg-charcoal hover:text-white',
  };

  return (
    <button
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
      {icon && <ArrowRight size={20} />}
    </button>
  );
}
