import React from 'react';
import { Instagram, Facebook, Linkedin, Utensils } from 'lucide-react';
import Button from './Button';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, label: 'Instagram', href: '#' },
    { icon: Facebook, label: 'Facebook', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  const quickLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Events', href: '#events' },
    { label: 'Gallery', href: '#gallery' },
    { label: 'Join Us', href: '#' },
  ];

  return (
    <footer className="bg-charcoal text-white pt-16 md:pt-20 pb-8 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 opacity-5">
        <Utensils size={200} className="rotate-45" />
      </div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 mb-12 md:mb-16">
          {/* Left Section */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <h2 className="font-display text-2xl font-bold">AUB COOKING CLUB</h2>
              <div className="h-1 w-12 bg-tomato-red mt-2"></div>
            </div>
            <p className="text-gray-300 font-light leading-relaxed text-sm">
              Cooking, community, and unforgettable experiences — one dish at a time.
            </p>
          </div>

          {/* Center Section - Quick Links */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-6 font-display">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-tomato-red transition-colors font-light"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Section - Follow Us */}
          <div className="md:col-span-1">
            <h3 className="font-semibold text-lg mb-6 font-display">Follow Us</h3>
            <div className="flex gap-4 mb-8">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    className="w-12 h-12 rounded-full bg-white/10 hover:bg-tomato-red flex items-center justify-center transition-colors duration-300"
                  >
                    <Icon size={20} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-tomato-red/10 to-burnt-orange/10 rounded-2xl p-8 md:p-12 mb-12 text-center border border-tomato-red/20">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-4">
            Ready to get cooking?
          </h3>
          <p className="text-gray-300 mb-6 font-light">
            Join AUB Cooking Club and become part of our vibrant community.
          </p>
          <div className="flex items-center justify-center">
          <Button variant="primary" icon>
            Join the Club
          </Button>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p>© {currentYear} AUB Cooking Club. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Made with <span className="text-tomato-red">❤️</span> for the AUB community.
          </p>
        </div>
      </div>
    </footer>
  );
}
