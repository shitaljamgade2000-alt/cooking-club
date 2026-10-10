import React from 'react';
import SectionHeading from './SectionHeading';

const activities = [
  {
    number: '01',
    title: 'Cooking Workshops',
    description: 'Learn new recipes, techniques, and cuisines through hands-on cooking experiences.',
    image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80',
    color: 'from-tomato-red/10 to-orange-50',
  },
  {
    number: '02',
    title: 'Baking & Sweets',
    description: 'Discover the joy of baking, decorating, experimenting, and sharing something delicious.',
    image: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=600&q=80',
    color: 'from-warm-yellow/10 to-orange-50',
  },
  {
    number: '03',
    title: 'Food Events',
    description: 'From themed gatherings to student-led food experiences, there is always something happening.',
    image: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&q=80',
    color: 'from-burnt-orange/10 to-amber-50',
  },
  {
    number: '04',
    title: 'Community',
    description: 'Meet fellow students, exchange ideas, make friends, and build a community around food.',
    image: 'https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=80',
    color: 'from-deep-green/10 to-emerald-50',
  },
];

export default function WhatWeDo() {
  return (
    <section className="py-16 md:py-24 bg-white" id="about">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="More Than Just Cooking"
          subtitle="An inclusive space to learn, experiment, meet new people, and share unforgettable food experiences."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {activities.map((activity, index) => (
            <div
              key={index}
              className="group rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-md hover:shadow-xl transition-all duration-500 hover:-translate-y-2 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image Container */}
              <div className={`h-64 md:h-72 overflow-hidden relative bg-gradient-to-br ${activity.color}`}>
                <img
                  src={activity.image}
                  alt={activity.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <p className="text-sm font-bold text-tomato-red tracking-widest mb-3">
                  {activity.number}
                </p>
                <h3 className="font-display text-2xl md:text-3xl font-bold text-charcoal mb-3">
                  {activity.title}
                </h3>
                <p className="text-gray-600 font-light leading-relaxed">
                  {activity.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
