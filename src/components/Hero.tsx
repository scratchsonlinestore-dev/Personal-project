import React from 'react';
import { Download, ArrowUpRight, Mail, Phone, MessageSquare, Linkedin, Instagram, Facebook, Star, Sparkles } from 'lucide-react';
import { Profile } from '../types';
import { downloadOfficialResume } from '../utils/downloadCV';

interface HeroProps {
  profile: Profile;
  onOpenResume: () => void;
  onOpenProjects: () => void;
}

export const Hero: React.FC<HeroProps> = ({ profile, onOpenResume, onOpenProjects }) => {
  const handleDownloadCV = () => {
    downloadOfficialResume();
    onOpenResume();
  };

  return (
    <section id="home" className="pt-28 sm:pt-32 pb-16 md:pt-36 md:pb-20 overflow-hidden relative bg-[#F7F4EC] dark:bg-[#12110F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Top Centered Pill Badge */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-[#FAF6EE] border border-[#EDE7D9] dark:border-stone-800 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF9F0A] animate-pulse"></span>
            <span className="text-xs font-bold tracking-wide uppercase">
              {profile.badge}
            </span>
          </div>
        </div>

        {/* Main Hero Header Title */}
        <div className="text-center max-w-4xl mx-auto mb-6">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-[#141311] dark:text-[#FAF6EE] leading-[1.08] font-sans"
          >
            I&apos;m{' '}
            <span className="text-[#FF9F0A] relative inline-block">
              {profile.name}
              <span className="absolute -top-3 -right-5 text-xl text-[#FF9F0A]">✦</span>
            </span>
          </h1>
          <p className="mt-3 text-lg sm:text-2xl font-bold text-stone-800 dark:text-stone-200">
            {profile.tagline}
          </p>
          <p className="text-xs sm:text-sm font-semibold tracking-wider uppercase text-stone-600 dark:text-stone-400 mt-2">
            {profile.secondaryPositioning}
          </p>
        </div>

        {/* Hero Showcase Centerpiece with Floating Pills and Rotating Stamp */}
        <div className="relative max-w-4xl mx-auto my-8 sm:my-12">
          {/* Rotating Stamp Badge in Top Right */}
          <div className="absolute -top-6 -right-2 sm:-top-8 sm:right-6 z-20">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white p-2 flex items-center justify-center shadow-xl border-2 border-[#FF9F0A]">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path
                  id="stampPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9px] font-bold uppercase tracking-[2.5px] fill-[#141311] dark:fill-white">
                  <textPath href="#stampPath" startOffset="0%">
                    ✦ OPEN TO WORK ✦ E-COMMERCE SPECIALIST ✦
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-8 h-8 rounded-full bg-[#FF9F0A] text-[#141311] flex items-center justify-center font-bold text-xs shadow-xs">
                  ATV
                </div>
              </div>
            </div>
          </div>

          {/* Main Visual Center Card with Crisp White Backdrop Floating on Warm Canvas */}
          <div className="relative rounded-3xl bg-white dark:bg-[#181715] p-6 sm:p-10 border border-[#EDE7D9] dark:border-stone-800 shadow-xl overflow-hidden">
            {/* Background Decorative Rings */}
            <div className="absolute -right-20 -bottom-20 w-80 h-80 rounded-full bg-[#FF9F0A]/5 pointer-events-none blur-3xl"></div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center relative z-10">
              {/* Left Column: Direct Social & Channels */}
              <div className="md:col-span-4 space-y-6">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-600 dark:text-stone-400 block mb-2.5">
                    Follow Me On
                  </span>
                  {/* Social media icons grid with requested links */}
                  <div className="flex flex-wrap items-center gap-2">
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn: arshad-tv"
                      className="w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-[#0077b5] flex items-center justify-center hover:bg-[#0077b5] hover:text-white transition-all transform hover:scale-110 shadow-xs"
                    >
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a
                      href={profile.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram: @arshad_tv_777"
                      className="w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-[#E4405F] flex items-center justify-center hover:bg-[#E4405F] hover:text-white transition-all transform hover:scale-110 shadow-xs"
                    >
                      <Instagram className="w-4 h-4" />
                    </a>
                    <a
                      href={profile.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook: arshad.tv"
                      className="w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-[#1877F2] flex items-center justify-center hover:bg-[#1877F2] hover:text-white transition-all transform hover:scale-110 shadow-xs"
                    >
                      <Facebook className="w-4 h-4" />
                    </a>
                    <a
                      href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp: +91 6235944644"
                      className="w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-[#25D366] flex items-center justify-center hover:bg-[#25D366] hover:text-white transition-all transform hover:scale-110 shadow-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                    </a>
                    <a
                      href={`mailto:${profile.email}`}
                      title="Email: arshadtv777@gmail.com"
                      className="w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center hover:bg-[#FF9F0A] hover:text-[#141311] transition-all transform hover:scale-110 shadow-xs"
                    >
                      <Mail className="w-4 h-4" />
                    </a>
                    <a
                      href={`tel:${profile.phone.replace(/\s+/g, '')}`}
                      title="Phone: +91 6235944644"
                      className="w-9 h-9 rounded-full bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 flex items-center justify-center hover:bg-[#FF9F0A] hover:text-[#141311] transition-all transform hover:scale-110 shadow-xs"
                    >
                      <Phone className="w-4 h-4" />
                    </a>
                  </div>
                </div>

                {/* Rating & Trust Badge */}
                <div className="p-4 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900/80 border border-[#EDE7D9] dark:border-stone-800 shadow-2xs">
                  <div className="flex items-center gap-1 text-[#FF9F0A] mb-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-[#FF9F0A]" />
                    ))}
                    <span className="text-xs font-extrabold text-[#141311] dark:text-white ml-1.5">
                      5.0 Experience Rating
                    </span>
                  </div>
                  <p className="text-xs font-semibold text-stone-600 dark:text-stone-300 leading-tight">
                    End-to-end multi-channel operations across India & GCC marketplaces.
                  </p>
                </div>
              </div>

              {/* Center Column: Highlight Summary & Actions */}
              <div className="md:col-span-5 text-center md:text-left space-y-4">
                <div className="p-5 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900/80 border border-[#EDE7D9] dark:border-stone-800 shadow-xs space-y-3">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-full text-[10px] font-extrabold bg-[#FF9F0A] text-[#141311] uppercase tracking-wider">
                      Operations Scope
                    </span>
                    <span className="text-xs font-bold text-stone-600 dark:text-stone-400">
                      9-Step Framework
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
                    {profile.intro[0]}
                  </p>
                </div>

                {/* Pill Buttons as seen in the reference mockup */}
                <div className="flex flex-wrap items-center gap-3 pt-2 justify-center md:justify-start">
                  <button
                    type="button"
                    onClick={onOpenProjects}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#FF9F0A] text-[#141311] font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffaa2b] shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Portfolio</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadCV}
                    className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white dark:bg-stone-800 text-[#141311] dark:text-white border border-stone-300 dark:border-stone-700 font-extrabold text-xs uppercase tracking-wider hover:bg-stone-100 dark:hover:bg-stone-700 shadow-sm transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
                    title="Download Arshad TV Resume (PDF)"
                  >
                    <span>Download CV</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

              {/* Right Column: Floating Pill Tags */}
              <div className="md:col-span-3 flex flex-col gap-2.5">
                <div className="p-3 rounded-2xl bg-[#FF9F0A] text-[#141311] font-bold text-xs shadow-xs flex items-center justify-between hover:scale-105 transition-transform">
                  <span>Shopify & Liquid</span>
                  <span className="w-2 h-2 rounded-full bg-[#141311]"></span>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-stone-800 text-[#141311] dark:text-white font-bold text-xs shadow-xs border border-[#EDE7D9] dark:border-stone-700 flex items-center justify-between hover:scale-105 transition-transform">
                  <span>Amazon & Flipkart</span>
                  <span className="w-2 h-2 rounded-full bg-[#FF9F0A]"></span>
                </div>
                <div className="p-3 rounded-2xl bg-white dark:bg-stone-800 text-stone-900 dark:text-white font-bold text-xs shadow-xs border border-stone-200 dark:border-stone-700 flex items-center justify-between hover:scale-105 transition-transform">
                  <span>Meta Ads & ROAS</span>
                  <span className="w-2 h-2 rounded-full bg-[#FF9F0A]"></span>
                </div>
                <div className="p-3 rounded-2xl bg-[#FF9F0A] text-[#141311] font-bold text-xs shadow-xs flex items-center justify-between hover:scale-105 transition-transform">
                  <span>noon Trading (GCC)</span>
                  <span className="w-2 h-2 rounded-full bg-[#141311]"></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Supporting Tags Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 max-w-3xl mx-auto text-center">
          {(profile.supportingKeywords || []).map((keyword) => (
            <span
              key={keyword}
              className="px-3.5 py-1.5 rounded-full text-xs font-bold bg-white dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-[#EDE7D9] dark:border-stone-800 shadow-2xs hover:scale-105 transition-transform"
            >
              ✦ {keyword}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};
