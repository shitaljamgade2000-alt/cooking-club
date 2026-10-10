import React from 'react';

const galleryImages = [
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
    alt: 'Students cooking together in the kitchen',
  },
  {
    src: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=500&q=80',
    alt: 'Beautiful baked goods and pastries',
  },
  {
    src: 'https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=500&q=80',
    alt: 'Colorful food prepared for an event',
  },
  {
    src: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&q=80',
    alt: 'Group of students enjoying food together',
  },
  {
    src: 'https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80',
    alt: 'Close-up of delicious finished dish',
  },
  {
    src: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80',
    alt: 'Students preparing ingredients for cooking',
  },
];

export default function Gallery() {
  return (
    <section className="py-16 md:py-24 bg-white" id="gallery">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold text-charcoal mb-4">
            Made With Passion
          </h2>
          <p className="text-lg text-gray-600 font-light">
            Good food brings people together.
          </p>
        </div>

        {/* Even gallery grid prevents empty cells between images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-2xl md:rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 group"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
