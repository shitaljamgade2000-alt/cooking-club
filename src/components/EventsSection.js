import React from 'react';
import { Users, Calendar, Flame, Heart } from 'lucide-react';
import SectionHeading from './SectionHeading';
import EventCard from './EventCard';
import Button from './Button';

const events = [
  {
    title: 'Pasta Night',
    description: 'Learn, cook, and enjoy handmade pasta with fellow AUB students. A delicious evening of craftsmanship and community.',
    date: 'Coming Soon',
    category: 'WORKSHOP',
    image: 'https://images.unsplash.com/photo-1621996346565-e3dbc646d9a9?w=600&q=80',
  },
  {
    title: 'Baking Workshop',
    description: 'An evening of sweet creations, creativity, and good company. Perfect for beginners and experienced bakers alike.',
    date: 'Coming Soon',
    category: 'BAKING',
    image: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?w=600&q=80',
  },
  {
    title: 'Global Flavours',
    description: 'Explore dishes and flavours inspired by cuisines around the world. Journey through taste and culture with us.',
    date: 'Coming Soon',
    category: 'EVENT',
    image: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=600&q=80',
  },
];

const stats = [
  { number: '400+', label: 'Interested Students', icon: Users },
  { number: '2026', label: 'Founded', icon: Calendar },
  { number: '4+', label: 'Core Experiences', icon: Flame },
  { number: '∞', label: 'Food Memories', icon: Heart },
];

export default function EventsSection() {
  return (
    <section className="py-16 md:py-24 bg-cream" id="events">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <SectionHeading
          title="What's Cooking?"
          subtitle="Discover what we're preparing next."
        />

        {/* Event Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {events.map((event, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <EventCard {...event} />
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mb-20">
          <Button variant="outline" icon>
            View All Events
          </Button>
        </div>

        {/* Stats Strip */}
        <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-6">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className="text-center animate-fade-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex justify-center">
                    <div className="bg-tomato-red/10 p-3 rounded-full">
                      <Icon className="text-tomato-red" size={28} />
                    </div>
                  </div>
                  <p className="font-display text-3xl md:text-4xl font-bold text-charcoal mb-2">
                    {stat.number}
                  </p>
                  <p className="text-sm md:text-base text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
