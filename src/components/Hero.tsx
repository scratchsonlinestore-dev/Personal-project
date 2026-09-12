import React from 'react';
import {
  Download,
  ArrowUpRight,
  Mail,
  Phone,
  MessageSquare,
  Linkedin,
  Instagram,
  Facebook,
  Star,
  Sparkles,
  TrendingUp,
  ShoppingBag,
  Store,
  CheckCircle2,
  Layers,
  BarChart3,
  Globe
} from 'lucide-react';
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
    <section id="home" className="pt-28 sm:pt-32 pb-16 md:pt-36 md:pb-24 overflow-hidden relative bg-[#F4F2E8]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Top Centered Status Pill */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] border border-[#111111] shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#F5A400] animate-pulse"></span>
            <span className="text-xs font-bold tracking-wider uppercase text-[#FFFFFF]">
              {profile.badge}
            </span>
          </div>
        </div>

        {/* Main Large Typography Header */}
        <div className="text-center max-w-4xl mx-auto mb-8 sm:mb-12">
          <h1
            id="hero-heading"
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tight text-[#111111] leading-[1.05]"
          >
            I&apos;m{' '}
            <span className="text-[#F5A400] relative inline-block">
              {profile.name}
              <span className="text-[#F5A400] ml-1">✦</span>
            </span>
          </h1>
          <p className="mt-4 text-xl sm:text-2xl md:text-3xl font-extrabold text-[#222222] tracking-tight">
            {profile.tagline}
          </p>
          <p className="text-xs sm:text-sm font-bold tracking-widest uppercase text-[#777777] mt-3 max-w-2xl mx-auto">
            {profile.secondaryPositioning}
          </p>
        </div>

        {/* Hero Showcase Centerpiece with Layered Website Panels & Personal Profile Photo */}
        <div className="relative max-w-5xl mx-auto my-6 sm:my-10">

          {/* Rotating Circular Stamp Badge */}
          <div className="absolute -top-6 -right-2 sm:-top-8 sm:right-2 z-30 pointer-events-none">
            <div className="relative w-24 h-24 sm:w-28 sm:h-28 rounded-full bg-[#111111] text-[#FFFFFF] p-2 flex items-center justify-center shadow-2xl border-2 border-[#F5A400]">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 100 100">
                <path
                  id="stampPath"
                  d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0"
                  fill="none"
                />
                <text className="text-[9.5px] font-black uppercase tracking-[2.6px] fill-[#FFFFFF]">
                  <textPath href="#stampPath" startOffset="0%">
                    ✦ OPEN TO WORK ✦ E-COMMERCE SPECIALIST ✦
                  </textPath>
                </text>
              </svg>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-9 h-9 rounded-full bg-[#F5A400] text-[#111111] flex items-center justify-center font-black text-xs shadow-xs">
                  ATV
                </div>
              </div>
            </div>
          </div>

          {/* Small Floating Labels around the composition */}
          <div className="hidden md:block absolute -top-4 left-4 z-30 animate-float-slow">
            <div className="px-3.5 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] border border-[#111111] shadow-lg text-xs font-bold flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#F5A400]"></span>
              <span>Shopify Liquid Specialist</span>
            </div>
          </div>

          <div className="hidden md:block absolute -top-4 right-32 z-30 animate-float-reverse">
            <div className="px-3.5 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] border border-[#111111] shadow-lg text-xs font-bold flex items-center gap-1.5">
              <span className="text-[#F5A400]">✦</span>
              <span>Meta Ads ROAS 4.2x</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -bottom-5 left-8 z-30 animate-float-slow">
            <div className="px-3.5 py-1.5 rounded-full bg-[#F5A400] text-[#111111] border border-[#111111] shadow-lg text-xs font-black flex items-center gap-1.5">
              <span>✦</span>
              <span>Amazon • Flipkart • Meesho • noon</span>
            </div>
          </div>

          <div className="hidden lg:block absolute -bottom-5 right-8 z-30 animate-float-reverse">
            <div className="px-3.5 py-1.5 rounded-full bg-[#FFFFFF] text-[#111111] border border-[#111111] shadow-lg text-xs font-black flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-[#25D366]"></span>
              <span>Open to Relocation: GCC / Qatar</span>
            </div>
          </div>

          {/* Main Card Container in Card Black (#171717) with Thin Black Border */}
          <div className="relative rounded-3xl bg-[#171717] text-[#FFFFFF] p-6 sm:p-8 lg:p-10 border border-[#111111] shadow-2xl overflow-hidden">
            
            {/* Background Subtle Gradient Glow */}
            <div className="absolute -right-24 -top-24 w-96 h-96 rounded-full bg-[#F5A400]/10 pointer-events-none blur-3xl"></div>
            <div className="absolute -left-24 -bottom-24 w-96 h-96 rounded-full bg-[#F5A400]/5 pointer-events-none blur-3xl"></div>

            {/* Showcase Composition: Layered Panels & Central Profile Photo */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
              
              {/* Left Column: Overlapping Website Panel (Shopify Store Ops) */}
              <div className="lg:col-span-4 order-2 lg:order-1">
                {/* Layered Website Panel 1: Shopify E-Commerce Store */}
                <div className="rounded-2xl bg-[#111111] border border-white/10 p-4 sm:p-5 shadow-xl transition-all duration-300 hover:scale-[1.02] transform lg:-rotate-1">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5">
                      scratchsmartbuilt.com
                    </span>
                    <Store className="w-3.5 h-3.5 text-[#F5A400]" />
                  </div>

                  {/* Panel Content */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Shopify Operations</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F5A400] text-[#111111]">
                        LIVE STORE
                      </span>
                    </div>

                    {/* Stats Grid inside panel */}
                    <div className="grid grid-cols-2 gap-2 text-left">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-[10px] text-stone-400 uppercase font-semibold block">
                          Conversion Rate
                        </span>
                        <span className="text-sm font-black text-[#F5A400]">3.8% ↑</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5">
                        <span className="text-[10px] text-stone-400 uppercase font-semibold block">
                          Catalog Health
                        </span>
                        <span className="text-sm font-black text-white">100% Valid</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-300 leading-relaxed font-medium">
                      End-to-end Shopify store build, Liquid theme styling, custom payment gateway integration and checkout optimization.
                    </p>
                  </div>
                </div>

                {/* Direct Social Channels Pill */}
                <div className="mt-4 p-3 rounded-2xl bg-[#111111] border border-white/10 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-stone-400">
                    Connect:
                  </span>
                  <div className="flex items-center gap-2">
                    <a
                      href={profile.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="LinkedIn Profile"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#0077b5] text-white flex items-center justify-center transition-all hover:scale-110"
                    >
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={profile.instagram}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Instagram Profile"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#E4405F] text-white flex items-center justify-center transition-all hover:scale-110"
                    >
                      <Instagram className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={profile.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="Facebook Profile"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#1877F2] text-white flex items-center justify-center transition-all hover:scale-110"
                    >
                      <Facebook className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`https://wa.me/${profile.phone.replace(/[^0-9]/g, '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      title="WhatsApp Chat"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#25D366] text-white flex items-center justify-center transition-all hover:scale-110"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                    </a>
                    <a
                      href={`mailto:${profile.email}`}
                      title="Direct Email"
                      className="w-8 h-8 rounded-full bg-white/10 hover:bg-[#F5A400] hover:text-[#111111] text-white flex items-center justify-center transition-all hover:scale-110"
                    >
                      <Mail className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Central Column: PERSONAL PROFILE PHOTO AS THE CENTRAL HERO ELEMENT */}
              <div className="lg:col-span-4 order-1 lg:order-2 flex flex-col items-center text-center">
                <div className="relative group">
                  
                  {/* Decorative Amber Ring Around Photo */}
                  <div className="absolute -inset-2 rounded-3xl bg-gradient-to-tr from-[#F5A400] via-[#F5A400]/40 to-[#111111] opacity-75 blur-sm group-hover:opacity-100 transition-opacity duration-300"></div>

                  {/* Central Portrait Card Container */}
                  <div className="relative w-64 sm:w-72 h-80 sm:h-88 rounded-3xl bg-gradient-to-b from-[#222222] to-[#111111] border-2 border-[#F5A400] overflow-hidden shadow-2xl flex flex-col justify-between p-4">
                    
                    {/* Top Portrait Header Tag */}
                    <div className="flex items-center justify-between z-10">
                      <span className="px-2.5 py-1 rounded-full bg-[#111111]/80 backdrop-blur-sm border border-white/10 text-[10px] font-black uppercase tracking-wider text-[#F5A400] flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                        SPECIALIST
                      </span>
                      <span className="px-2.5 py-1 rounded-full bg-[#111111]/80 backdrop-blur-sm border border-white/10 text-[10px] font-bold text-white">
                        Founder @ Scratch
                      </span>
                    </div>

                    {/* Central High-Resolution Stylized Profile Visual */}
                    <div className="relative flex-1 flex items-center justify-center my-2">
                      <div className="relative w-36 h-36 sm:w-40 sm:h-40 rounded-2xl bg-gradient-to-tr from-[#111111] via-[#1c1a16] to-[#2b2518] border border-[#F5A400]/40 flex items-center justify-center overflow-hidden shadow-inner group-hover:scale-105 transition-transform duration-300">
                        {/* High-End Portrait Vector & Monogram */}
                        <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-3">
                          <div className="w-16 h-16 rounded-full bg-[#F5A400] text-[#111111] flex items-center justify-center font-black text-2xl shadow-lg border-2 border-white/20 mb-2">
                            ATV
                          </div>
                          <span className="text-sm font-black text-white tracking-wide">
                            {profile.name}
                          </span>
                          <span className="text-[10px] font-semibold text-[#F5A400] uppercase tracking-wider mt-0.5">
                            E-Commerce Director
                          </span>
                        </div>

                        {/* Subtle Grid / Circuit Lines in Avatar Background */}
                        <div className="absolute inset-0 bg-[radial-gradient(#F5A400_1px,transparent_1px)] [background-size:12px_12px] opacity-20 pointer-events-none"></div>
                      </div>
                    </div>

                    {/* Bottom Profile Details Pill */}
                    <div className="p-3 rounded-2xl bg-[#111111]/90 backdrop-blur-sm border border-white/10 text-left z-10">
                      <div className="flex items-center justify-between">
                        <span className="text-xs font-black text-white">{profile.name}</span>
                        <span className="text-[10px] font-bold text-[#F5A400]">BCA Graduate</span>
                      </div>
                      <p className="text-[11px] text-stone-300 font-medium leading-tight mt-0.5">
                        E-Commerce Operations & Digital Trading Specialist
                      </p>
                    </div>
                  </div>
                </div>

                {/* Experience Rating Pill beneath the portrait */}
                <div className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#111111] border border-white/10 text-xs text-white shadow-md">
                  <div className="flex items-center text-[#F5A400]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3 h-3 fill-[#F5A400]" />
                    ))}
                  </div>
                  <span className="font-bold text-white">5.0</span>
                  <span className="text-stone-400 font-medium">• India & GCC Operations</span>
                </div>
              </div>

              {/* Right Column: Overlapping Website Panel (Multi-Channel Marketplaces) */}
              <div className="lg:col-span-4 order-3">
                {/* Layered Website Panel 2: Marketplace Trading Hub */}
                <div className="rounded-2xl bg-[#111111] border border-white/10 p-4 sm:p-5 shadow-xl transition-all duration-300 hover:scale-[1.02] transform lg:rotate-1">
                  {/* Browser Bar */}
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></span>
                    </div>
                    <span className="text-[10px] font-mono text-stone-400 bg-white/5 px-2.5 py-0.5 rounded-md border border-white/5">
                      trading-hub.noon-gcc
                    </span>
                    <BarChart3 className="w-3.5 h-3.5 text-[#F5A400]" />
                  </div>

                  {/* Panel Content */}
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">Marketplaces & Ads</span>
                      <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-[#F5A400] text-[#111111]">
                        4.2x ROAS
                      </span>
                    </div>

                    {/* Metrics List */}
                    <div className="space-y-2">
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <span className="text-xs text-stone-300 font-medium">Amazon & Flipkart</span>
                        <span className="text-xs font-black text-[#F5A400]">Full Sourcing</span>
                      </div>
                      <div className="p-2.5 rounded-xl bg-white/5 border border-white/5 flex items-center justify-between">
                        <span className="text-xs text-stone-300 font-medium">noon Marketplace (GCC)</span>
                        <span className="text-xs font-black text-white">Catalog & FBN</span>
                      </div>
                    </div>

                    <p className="text-xs text-stone-300 leading-relaxed font-medium">
                      Multi-platform execution covering vendor procurement, keywords, margin calculations, and inventory fulfillment.
                    </p>
                  </div>
                </div>

                {/* Primary Action Buttons Bar */}
                <div className="mt-4 flex flex-col sm:flex-row gap-2.5">
                  <button
                    type="button"
                    onClick={onOpenProjects}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#F5A400] text-[#111111] font-black text-xs uppercase tracking-wider hover:bg-[#e59900] shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>View Projects</span>
                    <ArrowUpRight className="w-4 h-4" />
                  </button>

                  <button
                    type="button"
                    onClick={handleDownloadCV}
                    className="flex-1 inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full bg-[#FFFFFF] text-[#111111] border border-[#111111] font-black text-xs uppercase tracking-wider hover:bg-[#E8E5D8] shadow-md transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
                    title="Download Arshad TV Resume (PDF)"
                  >
                    <span>Download CV</span>
                    <Download className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Supporting Tags Row in warm off-white and black borders */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 max-w-4xl mx-auto text-center mt-8">
          {(profile.supportingKeywords || []).map((keyword) => (
            <span
              key={keyword}
              className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#FFFFFF] text-[#222222] border border-[#111111] shadow-xs hover:bg-[#F5A400] hover:text-[#111111] transition-all hover:scale-105 cursor-default"
            >
              ✦ {keyword}
            </span>
          ))}
          <span className="px-4 py-1.5 rounded-full text-xs font-bold bg-[#111111] text-[#FFFFFF] border border-[#111111] shadow-xs">
            GCC & India Ready
          </span>
        </div>
      </div>
    </section>
  );
};
