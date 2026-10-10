import React from 'react';
import { Utensils, Users } from 'lucide-react';
import Button from './Button';

const foodColumns = [
  [
    {
      src: 'https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=700&q=85',
      alt: 'Freshly baked pizza with colorful toppings',
      height: 'h-[260px]',
    },
    {
      src: 'https://images.unsplash.com/photo-1551504734-5ee1c4a1479b?w=700&q=85',
      alt: 'Tacos filled with colorful fresh ingredients',
      height: 'h-[320px]',
    },
    {
      src: 'https://images.unsplash.com/photo-1488477181946-6428a0291777?w=700&q=85',
      alt: 'Golden fruit tart for dessert',
      height: 'h-[240px]',
    },
    {
      src: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=700&q=85',
      alt: 'Pasta served with fresh herbs',
      height: 'h-[300px]',
    },
  ],
  [
    {
      src: 'https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?w=700&q=85',
      alt: 'Breakfast pancakes topped with fresh fruit',
      height: 'h-[280px]',
    },
    {
      src: 'https://images.unsplash.com/photo-1525351484163-7529414344d8?w=700&q=85',
      alt: 'Breakfast with eggs and toast',
      height: 'h-[260px]',
    },
    {
      src: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?w=700&q=85',
      alt: 'A generous rice dish with chicken and vegetables',
      height: 'h-[360px]',
    },
    {
      src: 'https://images.unsplash.com/photo-1547592180-85f173990554?w=700&q=85',
      alt: 'A colorful bowl of freshly prepared food',
      height: 'h-[280px]',
    },
  ],
  [
    {
      src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=700&q=85',
      alt: 'Fresh salad bowl with vibrant ingredients',
      height: 'h-[300px]',
    },
    {
      src: 'https://images.unsplash.com/photo-1569718212165-3a8278d5f624?w=700&q=85',
      alt: 'A bowl of noodles with vegetables',
      height: 'h-[260px]',
    },
    {
      src: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=700&q=85',
      alt: 'Juicy burger with fresh toppings',
      height: 'h-[320px]',
    },
    {
      src: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=700&q=85',
      alt: 'A spread of fresh food and vegetables',
      height: 'h-[280px]',
    },
  ],
];

export default function Hero() {
  return (
    <section className="relative -mt-20 min-h-screen bg-cream overflow-hidden pt-40 pb-16 md:-mt-[92px] md:pt-[172px] md:pb-0" id="home">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center min-h-screen">
          {/* Left Content */}
          <div className="flex flex-col justify-center py-8 lg:py-0 animate-fade-in">
            {/* Badge */}
            <div className="mb-6 inline-flex items-center gap-2 w-fit">
              <div className="bg-tomato-red/10 px-4 py-2 rounded-full">
                <p className="text-sm font-semibold text-tomato-red tracking-wider">
                  EST. 2026 · AUB
                </p>
              </div>
            </div>

            {/* Main Headline */}
            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-charcoal mb-6 leading-tight">
              Cook.<span className="text-tomato-red">Connect.</span>
              <br />
              {/* <span className="text-tomato-red">Connect.</span>
              <br /> */}
              Create.
            </h1>

            {/* Supporting Text */}
            <p className="text-lg md:text-xl text-gray-600 mb-8 font-light leading-relaxed max-w-lg">
              Bringing AUB students together through cooking, baking, workshops, events, and unforgettable food experiences.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <Button variant="primary" icon>
                Join the Club
              </Button>
              <Button variant="secondary" icon>
                Explore Events
              </Button>
            </div>

            {/* Stats */}
            <div className="flex items-center gap-8 pt-8 border-t border-gray-300">
              <div>
                <p className="text-3xl font-bold text-tomato-red">400+</p>
                <p className="text-sm text-gray-600 font-medium">Interested Students</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-burnt-orange">2026</p>
                <p className="text-sm text-gray-600 font-medium">Founded</p>
              </div>
            </div>
          </div>

          {/* Right Food Collage */}
          <div className="absolute top-0 right-0 hidden h-[calc(100vh+172px)] w-[46vw] overflow-hidden lg:block">
            <div className="grid h-full grid-cols-[0.9fr_1.05fr_1.05fr] gap-3.5">
              {foodColumns.map((column, columnIndex) => (
                <div key={columnIndex} className="flex flex-col gap-3.5">
                  {column.map((image, imageIndex) => (
                    <div
                      key={image.src}
                      className={`${image.height} w-full shrink-0 overflow-hidden rounded-[18px] animate-slide-up`}
                      style={{
                        animationDelay: `${(columnIndex + imageIndex) * 100}ms`,
                      }}
                    >
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  ))}
                </div>
              ))}
            </div>

            {/* Floating Badge 1 */}
            {/* <div className="absolute top-12 right-6 md:right-12 bg-white rounded-2xl p-4 md:p-6 shadow-xl animate-float">
              <div className="flex items-center gap-2">
                <Users size={20} className="text-tomato-red" />
                <div>
                  <p className="text-sm font-bold text-charcoal">400+ Students</p>
                  <p className="text-xs text-gray-600">Interested</p>
                </div>
              </div>
            </div> */}

            {/* Floating Badge 2 */}
            {/* <div className="absolute bottom-12 left-6 md:left-12 bg-white rounded-2xl p-4 md:p-6 shadow-xl animate-float-slow">
              <div className="flex items-center gap-2">
                <Utensils size={20} className="text-burnt-orange" />
                <div>
                  <p className="text-sm font-bold text-charcoal">Cook • Bake</p>
                  <p className="text-xs text-gray-600">Create</p>
                </div>
              </div>
            </div> */}

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-warm-yellow/20 rounded-full blur-3xl"></div>
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-tomato-red/10 rounded-full blur-3xl"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
