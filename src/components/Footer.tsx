import React from 'react';
import { ArrowUp, Mail, Phone, MapPin, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Profile } from '../types';

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const links = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#expertise' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#EFECE3] dark:bg-[#141311] text-[#141311] dark:text-white border-t border-[#EDE7D9] dark:border-stone-800 py-16 md:py-20 no-print">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#EDE7D9] dark:border-stone-800">
          {/* Brand & Positioning */}
          <div className="md:col-span-6 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#FF9F0A] text-[#141311] font-extrabold text-sm flex items-center justify-center shadow-xs">
                ATV
              </div>
              <span className="text-2xl font-extrabold tracking-tight text-[#141311] dark:text-white">
                {profile.name}
              </span>
            </div>
            <p className="text-xs font-bold uppercase tracking-wider text-[#FF9F0A]">
              {profile.title}
            </p>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 max-w-sm leading-relaxed font-sans">
              I Build, Manage & Grow E-Commerce Businesses across Amazon, Flipkart, Meesho, noon, and Shopify.
            </p>

            {/* Social Media Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-9 h-9 rounded-full bg-white dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-white hover:bg-[#0077b5] transition-all hover:scale-110 shadow-xs"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Profile"
                className="w-9 h-9 rounded-full bg-white dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-white hover:bg-[#E4405F] transition-all hover:scale-110 shadow-xs"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href={profile.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Profile"
                className="w-9 h-9 rounded-full bg-white dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-800 flex items-center justify-center text-stone-600 dark:text-stone-300 hover:text-white hover:bg-[#1877F2] transition-all hover:scale-110 shadow-xs"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF9F0A] mb-4">
              Quick Links
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 text-xs font-semibold">
              {links.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-stone-600 dark:text-stone-400 hover:text-[#FF9F0A] transition-colors inline-block hover:translate-x-0.5"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct Contact Channels */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF9F0A] mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2 text-xs text-stone-600 dark:text-stone-400">
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#FF9F0A]" />
                <a href={`mailto:${profile.email}`} className="hover:text-[#141311] dark:hover:text-white hover:underline">
                  {profile.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#FF9F0A]" />
                <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="hover:text-[#141311] dark:hover:text-white hover:underline">
                  {profile.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-[#FF9F0A]" />
                <span>Malappuram, Kerala, India</span>
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-500">
          <p>
            © {new Date().getFullYear()} {profile.name}. All rights reserved.
          </p>

          <button
            type="button"
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-stone-900 hover:bg-[#FF9F0A] hover:text-[#141311] text-stone-700 dark:text-stone-300 font-bold border border-[#EDE7D9] dark:border-stone-800 shadow-xs transition-all transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};
