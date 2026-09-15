import React from 'react';
import {
  Download,
  ArrowUpRight,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  MessageSquare,
  Sparkles,
  Sliders,
  CheckCircle2,
  TrendingUp,
  Store,
  Layers,
  ShoppingBag,
  Star,
  Settings,
  Lock,
} from 'lucide-react';
import { Profile, HeroImageConfig } from '../types';
import { downloadOfficialResume } from '../utils/downloadCV';

interface HeroProps {
  profile: Profile;
  onOpenResume: () => void;
  onOpenProjects: () => void;
  imageConfig?: HeroImageConfig;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenResume,
  onOpenProjects,
  imageConfig,
}) => {
  const handleDownloadCV = () => {
    downloadOfficialResume();
    onOpenResume();
  };

  // Main Founder Image Component (First image on main page left side)
  const renderHeroImage = () => {
    const imageUrl = imageConfig?.imageUrl || '/arshad-founder.jpg';
    return (
      <div className="relative group transition-all duration-300 w-full max-w-[420px] mx-auto lg:mx-0">
        {/* Ambient Subtle Backdrop Glow */}
        <div className="absolute -inset-3 bg-gradient-to-tr from-[#F5A400]/30 via-[#F5A400]/10 to-transparent blur-2xl pointer-events-none rounded-full"></div>

        {/* Hero Portrait Container (Displays clean cutout with golden sunburst circle and Founder badge) */}
        <div className="relative overflow-hidden rounded-3xl transition-all duration-300 hover:scale-[1.02] shadow-2xl border border-white/60 bg-white/40 backdrop-blur-xs aspect-square flex items-center justify-center p-2 sm:p-3">
          <img
            src={imageUrl}
            alt="Arshad TV - Founder, Multi-Channel E-Commerce Business"
            className="w-full h-full object-contain drop-shadow-md rounded-2xl"
            onError={(e) => {
              const target = e.currentTarget;
              target.src = '/arshad-portrait.jpg';
            }}
          />
        </div>
      </div>
    );
  };

  // Hero Copy & Action Controls Block
  const renderHeroTextContent = (isCentered: boolean = false) => {
    return (
      <div className={`space-y-6 ${isCentered ? 'text-center mx-auto max-w-3xl' : 'text-left'}`}>
        
        {/* Top Centered Status Pill */}
        <div className={`flex ${isCentered ? 'justify-center' : 'justify-start'}`}>
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] border border-[#111111] shadow-xs">
            <span className="w-2 h-2 rounded-full bg-[#F5A400] animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider uppercase text-[#FFFFFF]">
              {profile.badge}
            </span>
          </div>
        </div>

        {/* Main Title: I'm Arshad TV with Arshad in yellow, no star */}
        <div>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#111111] leading-[1.08]"
          >
            I&apos;m <span className="text-[#F5A400]">Arshad</span> TV
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-extrabold text-[#222222] tracking-tight">
            {profile.tagline}
          </p>
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#777777] mt-2">
            {profile.secondaryPositioning}
          </p>
        </div>

        {/* Key Operational Highlights */}
        <div className={`flex flex-wrap gap-2 pt-1 ${isCentered ? 'justify-center' : 'justify-start'}`}>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#111111]/15 text-xs font-bold text-[#222222] shadow-2xs">
            <Store className="w-3.5 h-3.5 text-[#F5A400]" />
            Shopify Liquid Store
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#111111]/15 text-xs font-bold text-[#222222] shadow-2xs">
            <TrendingUp className="w-3.5 h-3.5 text-[#F5A400]" />
            Meta Ads ROAS 4.2x
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-[#FFFFFF] border border-[#111111]/15 text-xs font-bold text-[#222222] shadow-2xs">
            <Layers className="w-3.5 h-3.5 text-[#F5A400]" />
            Amazon & noon GCC Hub
          </span>
        </div>

        {/* Action Buttons & Social Row */}
        <div className={`pt-2 flex flex-col sm:flex-row items-center gap-3 ${isCentered ? 'justify-center' : 'justify-start'}`}>
          <button
            type="button"
            onClick={onOpenProjects}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#111111] text-[#FFFFFF] font-black text-xs uppercase tracking-wider hover:bg-[#222222] shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            <span>View Projects</span>
            <ArrowUpRight className="w-4 h-4 text-[#F5A400]" />
          </button>

          <button
            type="button"
            onClick={handleDownloadCV}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#FFFFFF] text-[#111111] border-2 border-[#111111] font-black text-xs uppercase tracking-wider hover:bg-[#F5A400] shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
            title="Download Arshad TV Official Resume"
          >
            <span>Download CV</span>
            <Download className="w-4 h-4" />
          </button>

          <a
            href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-[#25D366] text-white font-black text-xs uppercase tracking-wider hover:bg-[#20ba59] shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95"
            title="Chat directly on WhatsApp"
          >
            <MessageSquare className="w-4 h-4" />
            <span>WhatsApp</span>
          </a>
        </div>

        {/* Social Links Row */}
        <div className={`flex items-center gap-3 pt-2 ${isCentered ? 'justify-center' : 'justify-start'}`}>
          <span className="text-xs font-bold uppercase tracking-wider text-[#777777]">
            Connect:
          </span>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            title="LinkedIn Profile"
            className="w-8 h-8 rounded-full bg-white border border-[#111111]/20 hover:bg-[#0077b5] hover:text-white text-[#222222] flex items-center justify-center transition-all hover:scale-110 shadow-2xs"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href={profile.instagram}
            target="_blank"
            rel="noopener noreferrer"
            title="Instagram Profile"
            className="w-8 h-8 rounded-full bg-white border border-[#111111]/20 hover:bg-[#E4405F] hover:text-white text-[#222222] flex items-center justify-center transition-all hover:scale-110 shadow-2xs"
          >
            <Instagram className="w-4 h-4" />
          </a>
          <a
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            title="Facebook Profile"
            className="w-8 h-8 rounded-full bg-white border border-[#111111]/20 hover:bg-[#1877F2] hover:text-white text-[#222222] flex items-center justify-center transition-all hover:scale-110 shadow-2xs"
          >
            <Facebook className="w-4 h-4" />
          </a>
          <a
            href={`mailto:${profile.email}`}
            title="Send Email"
            className="w-8 h-8 rounded-full bg-white border border-[#111111]/20 hover:bg-[#F5A400] hover:text-[#111111] text-[#222222] flex items-center justify-center transition-all hover:scale-110 shadow-2xs"
          >
            <Mail className="w-4 h-4" />
          </a>
        </div>
      </div>
    );
  };

  return (
    <section id="home" className="pt-28 sm:pt-32 pb-14 md:pt-36 md:pb-20 overflow-hidden relative bg-[#F4F2E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* HERO CONTENT: FIRST IMAGE ON MAIN PAGE LEFT SIDE */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <div className="lg:col-span-5 flex justify-center lg:justify-start order-1">
            {renderHeroImage()}
          </div>
          <div className="lg:col-span-7 order-2">
            {renderHeroTextContent(false)}
          </div>
        </div>

        {/* Supporting Keywords Pill Row (Clean section footer without owner control buttons) */}
        <div className="mt-12 pt-6 border-t border-[#111111]/10 flex flex-wrap items-center justify-between gap-4">
          <div className="flex flex-wrap items-center gap-2">
            {(profile.supportingKeywords || []).slice(0, 4).map((keyword) => (
              <span
                key={keyword}
                className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#FFFFFF] text-[#222222] border border-[#111111]/20 shadow-2xs hover:bg-[#F5A400] hover:text-[#111111] transition-all cursor-default"
              >
                ✦ {keyword}
              </span>
            ))}
            <span className="px-3.5 py-1 rounded-full text-xs font-bold bg-[#111111] text-[#FFFFFF]">
              India & GCC Operations
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};
