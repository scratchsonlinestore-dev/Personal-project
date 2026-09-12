import React, { useState, useEffect } from 'react';
import { Download, Sun, Moon, Menu, X, Linkedin, Instagram, Facebook } from 'lucide-react';
import { Profile } from '../types';
import { downloadOfficialResume } from '../utils/downloadCV';

interface NavbarProps {
  profile: Profile;
  onOpenResume: () => void;
  isDark: boolean;
  onToggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  profile,
  onOpenResume,
  isDark,
  onToggleTheme,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'experience', 'expertise', 'skills', 'projects', 'education', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 160 && rect.bottom >= 160) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadCV = () => {
    downloadOfficialResume();
    onOpenResume();
  };

  const navLinks = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Services', href: '#expertise', id: 'expertise' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className="fixed top-4 left-0 right-0 z-50 px-4 sm:px-6 transition-all duration-300 no-print"
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white/90 dark:bg-[#181715]/95 backdrop-blur-md text-[#141311] dark:text-white rounded-full px-4 sm:px-6 py-2.5 flex items-center justify-between border border-[#EDE7D9] dark:border-stone-800 shadow-lg">
          {/* Brand Identity with circular orange badge */}
          <a
            href="#home"
            id="navbar-brand"
            className="flex items-center gap-2.5 group focus:outline-hidden"
          >
            <div className="w-8 h-8 rounded-full bg-[#FF9F0A] text-[#141311] font-extrabold text-xs flex items-center justify-center tracking-wider transition-all duration-300 group-hover:scale-110 shadow-xs">
              ATV
            </div>
            <div className="flex flex-col">
              <span className="text-sm font-bold text-[#141311] dark:text-white tracking-tight group-hover:text-[#FF9F0A] transition-colors leading-none">
                {profile.name}
              </span>
              <span className="text-[10px] text-stone-500 dark:text-stone-400 font-medium hidden sm:inline leading-tight mt-0.5">
                E-Commerce Specialist
              </span>
            </div>
          </a>

          {/* Center Navigation Links */}
          <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-semibold tracking-wide transition-all duration-200 transform hover:scale-105 active:scale-95 ${
                    isActive
                      ? 'text-[#141311] bg-[#FF9F0A] font-bold shadow-xs'
                      : 'text-stone-700 dark:text-stone-300 hover:text-[#141311] dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/10'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Social Icons & Action Controls */}
          <div className="flex items-center gap-2">
            {/* Social Media Links with Icons */}
            <div className="hidden sm:flex items-center gap-1.5 pr-2 border-r border-[#EDE7D9] dark:border-stone-800">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                title="LinkedIn Profile"
                className="w-7 h-7 rounded-full flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-[#0077b5] hover:bg-stone-100 dark:hover:bg-white/10 transition-all hover:scale-110"
              >
                <Linkedin className="w-3.5 h-3.5" />
              </a>
              <a
                href={profile.instagram}
                target="_blank"
                rel="noopener noreferrer"
                title="Instagram Profile"
                className="w-7 h-7 rounded-full flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-[#E4405F] hover:bg-stone-100 dark:hover:bg-white/10 transition-all hover:scale-110"
              >
                <Instagram className="w-3.5 h-3.5" />
              </a>
              <a
                href={profile.facebook}
                target="_blank"
                rel="noopener noreferrer"
                title="Facebook Profile"
                className="w-7 h-7 rounded-full flex items-center justify-center text-stone-500 dark:text-stone-400 hover:text-[#1877F2] hover:bg-stone-100 dark:hover:bg-white/10 transition-all hover:scale-110"
              >
                <Facebook className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Primary CTA: Download CV */}
            <button
              type="button"
              id="btn-download-cv-nav"
              onClick={handleDownloadCV}
              className="inline-flex items-center gap-1.5 px-4 py-1.5 text-xs font-bold text-[#141311] bg-[#FF9F0A] hover:bg-[#ffaa2b] rounded-full shadow-xs transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
              title="Download Arshad TV Resume"
            >
              <Download className="w-3.5 h-3.5" />
              <span className="whitespace-nowrap">Download CV</span>
            </button>

            {/* Theme toggle */}
            <button
              type="button"
              id="btn-toggle-theme-nav"
              onClick={onToggleTheme}
              aria-label="Toggle theme"
              className="p-1.5 text-stone-600 dark:text-stone-400 hover:text-[#141311] dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/10 rounded-full transition-all duration-200 transform hover:scale-110 active:scale-90 cursor-pointer"
            >
              {isDark ? <Sun className="w-4 h-4 text-[#FF9F0A]" /> : <Moon className="w-4 h-4 text-stone-700" />}
            </button>

            {/* Mobile menu trigger */}
            <button
              type="button"
              id="btn-mobile-menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle navigation menu"
              className="lg:hidden p-1.5 text-stone-700 dark:text-stone-300 hover:text-[#141311] dark:hover:text-white hover:bg-stone-100 dark:hover:bg-white/10 rounded-full transition-transform active:scale-90 cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="lg:hidden mt-2 max-w-md mx-auto bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 rounded-3xl p-5 space-y-4 shadow-2xl animate-in fade-in zoom-in-95 duration-200"
        >
          <div className="grid grid-cols-2 gap-2">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3.5 py-2.5 text-xs font-bold rounded-full bg-[#F7F4EC] dark:bg-white/5 hover:bg-[#FF9F0A] hover:text-[#141311] text-[#141311] dark:text-white transition-all text-center border border-[#EDE7D9] dark:border-stone-800"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Mobile Social Links */}
          <div className="flex items-center justify-center gap-3 pt-2 border-t border-[#EDE7D9] dark:border-stone-800">
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-800 text-[#0077b5]"
              title="LinkedIn"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a
              href={profile.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-800 text-[#E4405F]"
              title="Instagram"
            >
              <Instagram className="w-4 h-4" />
            </a>
            <a
              href={profile.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-800 text-[#1877F2]"
              title="Facebook"
            >
              <Facebook className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2">
            <button
              type="button"
              onClick={() => {
                setMobileMenuOpen(false);
                handleDownloadCV();
              }}
              className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-bold text-[#141311] bg-[#FF9F0A] hover:bg-[#ffaa2b] rounded-full shadow-md transition-transform active:scale-95 cursor-pointer"
            >
              <Download className="w-4 h-4" />
              <span>Download CV (Official PDF)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
