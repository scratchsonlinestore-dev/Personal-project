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
  imageConfig: HeroImageConfig;
  onOpenCustomizer: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  profile,
  onOpenResume,
  onOpenProjects,
  imageConfig,
  onOpenCustomizer,
}) => {
  const handleDownloadCV = () => {
    downloadOfficialResume();
    onOpenResume();
  };

  // Shadow class mappings
  const getShadowClass = () => {
    switch (imageConfig.shadow) {
      case 'none':
        return 'shadow-none';
      case 'soft':
        return 'shadow-lg';
      case 'amber':
        return 'shadow-[0_20px_45px_rgba(245,164,0,0.3)]';
      case 'deep':
      default:
        return 'shadow-2xl';
    }
  };

  // Border class mappings
  const getBorderClass = () => {
    switch (imageConfig.border) {
      case 'none':
        return 'border-0';
      case 'amber':
        return 'border-2 border-[#F5A400]';
      case 'bold':
        return 'border-4 border-[#111111]';
      case 'thin':
      default:
        return 'border-2 border-white/20';
    }
  };

  // Dynamic Image Component with manual size, offsets, and styles
  const renderHeroImage = () => {
    return (
      <div
        className="relative group transition-all duration-200"
        style={{
          transform: `translate(${imageConfig.offsetX}px, ${imageConfig.offsetY}px) scale(${imageConfig.scale})`,
        }}
      >
        {/* Ambient Subtle Backdrop Glow */}
        <div
          className="absolute -inset-2 bg-gradient-to-tr from-[#F5A400]/20 via-transparent to-[#111111]/10 blur-xl pointer-events-none"
          style={{ borderRadius: `${imageConfig.borderRadius + 8}px` }}
        ></div>

        {/* Card Frame */}
        <div
          className={`relative bg-[#111111] overflow-hidden ${getBorderClass()} ${getShadowClass()} transition-all duration-200 max-w-full`}
          style={{
            width: `${imageConfig.width}px`,
            height: `${imageConfig.height}px`,
            borderRadius: `${imageConfig.borderRadius}px`,
          }}
        >
          {/* Status Badge Over Image */}
          {imageConfig.showBadge && (
            <div className="absolute top-3.5 inset-x-3.5 z-20 flex items-center justify-between pointer-events-none">
              <span className="px-3 py-1 rounded-full bg-[#111111]/90 backdrop-blur-md border border-white/20 text-[10px] font-black uppercase tracking-wider text-[#F5A400] flex items-center gap-1.5 shadow-md">
                <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                {imageConfig.badgeText || 'Specialist'}
              </span>
              <span className="px-2.5 py-1 rounded-full bg-[#111111]/85 backdrop-blur-md border border-white/15 text-[10px] font-bold text-white shadow-md">
                BCA Graduate
              </span>
            </div>
          )}

          {/* Main Portrait Image */}
          <img
            src={imageConfig.imageUrl || '/arshad-portrait.jpg'}
            alt="Arshad TV - E-Commerce Operations & Digital Trading Specialist"
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
            style={{
              objectFit: imageConfig.objectFit,
              objectPosition: `center ${imageConfig.objectPositionY}%`,
            }}
            onError={(e) => {
              const target = e.currentTarget;
              target.src = '/arshad-portrait.jpg';
            }}
          />

          {/* Bottom subtle gradient scrim */}
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#111111] via-[#111111]/60 to-transparent pointer-events-none"></div>

          {/* Bottom Card Title */}
          <div className="absolute inset-x-0 bottom-0 p-3.5 z-10 text-left bg-gradient-to-t from-[#111111] to-transparent">
            <div className="flex items-center justify-between">
              <span className="text-sm font-black text-white">{profile.name}</span>
              <span className="text-[10px] font-bold text-[#F5A400] flex items-center gap-1">
                <Star className="w-3 h-3 fill-[#F5A400]" /> 5.0 Rated
              </span>
            </div>
            <p className="text-[11px] text-stone-300 font-medium leading-tight mt-0.5">
              Shopify • Amazon • Flipkart • Meesho • noon
            </p>
          </div>

          {/* Quick Edit Overlay for Owner */}
          <button
            type="button"
            onClick={onOpenCustomizer}
            title="Adjust image, size, position or upload new photo"
            className="absolute top-3.5 right-3.5 z-30 opacity-0 group-hover:opacity-100 transition-opacity px-2.5 py-1 rounded-lg bg-[#F5A400] text-[#111111] text-[10px] font-black uppercase tracking-wider shadow-lg flex items-center gap-1 cursor-pointer"
          >
            <Sliders className="w-3 h-3" />
            <span>Edit</span>
          </button>
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

        {/* Main Title */}
        <div>
          <h1
            id="hero-heading"
            className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-[#111111] leading-[1.08]"
          >
            I&apos;m {profile.name}
            <span className="text-[#F5A400] ml-2">✦</span>
          </h1>
          <p className="mt-3 text-xl sm:text-2xl font-extrabold text-[#222222] tracking-tight">
            {profile.tagline}
          </p>
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#777777] mt-2">
            {profile.secondaryPositioning}
          </p>
        </div>

        {/* Introduction Paragraph */}
        <p className="text-base sm:text-lg text-[#444444] font-medium leading-relaxed max-w-xl">
          Building and scaling multi-channel digital retail operations. Ex-Founder of Scratch, driving vendor sourcing, catalog optimization, and high-performance ad conversions across India and GCC markets.
        </p>

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

        {/* HERO CONTENT: DYNAMICALLY ADAPTING TO ALIGNMENT (LEFT / CENTER / RIGHT) */}
        {imageConfig.alignment === 'right' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-7">
              {renderHeroTextContent(false)}
            </div>
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              {renderHeroImage()}
            </div>
          </div>
        )}

        {imageConfig.alignment === 'left' && (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            <div className="lg:col-span-5 flex justify-center lg:justify-start order-2 lg:order-1">
              {renderHeroImage()}
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              {renderHeroTextContent(false)}
            </div>
          </div>
        )}

        {imageConfig.alignment === 'center' && (
          <div className="space-y-10 text-center">
            {renderHeroTextContent(true)}
            <div className="flex justify-center">
              {renderHeroImage()}
            </div>
          </div>
        )}

        {/* OWNER ACCESS CONTROLS BAR LOCATED BELOW */}
        <div className="mt-12 pt-6 border-t border-[#111111]/10 flex flex-wrap items-center justify-between gap-4">
          
          {/* Supporting Keywords Pill Row */}
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

          {/* Dedicated Owner Access Button ("its access on below, use credential access") */}
          <div className="ml-auto">
            <button
              type="button"
              onClick={onOpenCustomizer}
              title="Upload new image, adjust alignment (left/right) or manual size/position"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] hover:bg-[#F5A400] text-white hover:text-[#111111] border border-white/10 text-xs font-bold transition-all shadow-md cursor-pointer group"
            >
              <Lock className="w-3.5 h-3.5 text-[#F5A400] group-hover:text-[#111111]" />
              <span>Owner Access: Adjust Image & Layout</span>
              <Sliders className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
