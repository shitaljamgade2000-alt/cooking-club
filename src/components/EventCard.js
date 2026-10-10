import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

export default function EventCard({ title, description, date, category, image }) {
  return (
    <div className="group h-full">
      <div className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 h-full flex flex-col hover:-translate-y-1">
        {/* Image Container */}
        <div className="relative h-64 md:h-72 overflow-hidden bg-gray-200">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <span className="bg-tomato-red text-white px-3 py-1 rounded-full text-xs font-bold tracking-wide">
              {category}
            </span>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
          <div>
            <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-3">
              {title}
            </h3>
            <p className="text-gray-600 font-light leading-relaxed mb-6">
              {description}
            </p>
          </div>

          {/* Footer */}
          <div className="flex items-center justify-between pt-6 border-t border-gray-200">
            <div className="flex items-center gap-2 text-gray-600">
              <Calendar size={18} className="text-burnt-orange" />
              <span className="text-sm font-medium">{date}</span>
            </div>
            <button className="text-tomato-red hover:text-red-700 transition-colors">
              <ArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
