import React from 'react';
import { User, Briefcase, Globe, Cpu, Award, CheckCircle2, ArrowUpRight, Sparkles } from 'lucide-react';
import { Profile } from '../types';

interface AboutSectionProps {
  profile: Profile;
  commercialSnapshotIconUrl?: string;
}

export const AboutSection: React.FC<AboutSectionProps> = ({
  profile,
  commercialSnapshotIconUrl,
}) => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F4F2E8] border-t border-[#111111]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] border border-[#111111] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#F5A400]"></span>
          <span>Professional Background</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight mb-8">
          E-Commerce & <span className="text-[#F5A400]">Digital Trading</span> Specialist
          <span className="text-[#F5A400] ml-2">✦</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative text (Left column) */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-[#222222] leading-relaxed font-sans font-medium">
            {(profile.aboutText || []).map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Brand Philosophy Quote block in Black Card style */}
            <div className="mt-8 p-6 sm:p-8 rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-2xl relative overflow-hidden">
              <div className="absolute top-2 right-4 text-5xl text-[#F5A400]/20 font-serif">“</div>
              <p className="font-serif italic text-base sm:text-xl text-white leading-snug">
                &ldquo;{profile.brandStatement}&rdquo;
              </p>
              <div className="flex items-center justify-between mt-4 pt-3 border-t border-white/10">
                <span className="text-xs font-black text-[#F5A400] uppercase tracking-wider">
                  — Arshad TV Philosophy
                </span>
                <span className="text-[11px] text-stone-400 font-mono">Operations • Tech • Growth</span>
              </div>
            </div>
          </div>

          {/* Quick Profile Overview Card (Right column) - Card Black with Thin Black Border */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-2xl space-y-6">
              
              {/* Card Header with monogram badge */}
              <div className="flex items-center gap-3 pb-4 border-b border-white/10">
                <div className="w-10 h-10 rounded-xl bg-[#F5A400] text-[#111111] font-black text-xs flex items-center justify-center shadow-xs shrink-0 border border-white/10">
                  <span>ATV</span>
                </div>
                <div>
                  <h3 className="text-base font-black text-white">
                    Commercial Snapshot
                  </h3>
                  <p className="text-xs text-stone-400 font-medium">
                    Core platforms & technical toolkit
                  </p>
                </div>
              </div>

              {/* Current Role */}
              <div>
                <span className="text-[11px] font-black text-[#F5A400] uppercase tracking-wider block mb-1">
                  Current Role
                </span>
                <p className="text-base font-black text-white">
                  {profile.quickProfile.currentRole}
                </p>
                <p className="text-xs text-stone-400 font-medium mt-0.5">
                  Independent E-Commerce Business
                </p>
              </div>

              {/* Experience Areas */}
              <div>
                <span className="text-[11px] font-black text-stone-400 uppercase tracking-wider block mb-1">
                  Experience Areas
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-200 leading-normal">
                  {profile.quickProfile.experienceAreas}
                </p>
              </div>

              {/* Platforms */}
              <div>
                <span className="text-[11px] font-black text-stone-400 uppercase tracking-wider block mb-2">
                  Marketplace & Store Platforms
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(profile.quickProfile?.platforms || []).map((plat) => (
                    <span
                      key={plat}
                      className="px-3 py-1 text-xs font-bold rounded-full bg-[#111111] text-stone-200 border border-white/10 hover:border-[#F5A400] hover:text-[#F5A400] transition-colors"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <span className="text-[11px] font-black text-stone-400 uppercase tracking-wider block mb-2">
                  Tools & Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(profile.quickProfile?.tools || []).map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-bold rounded-full bg-[#F5A400]/15 text-[#F5A400] border border-[#F5A400]/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status footer inside card */}
              <div className="pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                <span className="text-stone-400 font-medium">Malappuram • GCC Ready</span>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#111111] text-[#F5A400] border border-white/10 font-bold text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#25D366] animate-pulse"></span>
                  Active for Hire
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
