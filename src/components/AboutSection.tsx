import React from 'react';
import { User, Briefcase, Globe, Cpu, Award, CheckCircle2, ArrowUpRight } from 'lucide-react';
import { Profile } from '../types';

interface AboutSectionProps {
  profile: Profile;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ profile }) => {
  return (
    <section id="about" className="py-20 md:py-28 border-t border-[#EDE7D9] dark:border-stone-800 bg-[#F7F4EC] dark:bg-[#12110F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
          <span>About Me</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141311] dark:text-[#FAF6EE] tracking-tight mb-8">
          E-Commerce & <span className="text-[#FF9F0A]">Digital Trading</span> Specialist
          <span className="text-[#FF9F0A] ml-2">✦</span>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Narrative text (Left column) */}
          <div className="lg:col-span-7 space-y-5 text-base sm:text-lg text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
            {(profile.aboutText || []).map((paragraph, index) => (
              <p key={index} className="leading-relaxed">
                {paragraph}
              </p>
            ))}

            {/* Brand Philosophy Quote block in theme */}
            <div className="mt-8 p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 shadow-lg relative overflow-hidden">
              <div className="absolute top-3 right-4 text-4xl text-[#FF9F0A]/20 font-serif">“</div>
              <p className="font-serif italic text-base sm:text-xl text-[#141311] dark:text-white leading-snug">
                &ldquo;{profile.brandStatement}&rdquo;
              </p>
              <span className="inline-block mt-3 text-xs font-bold text-[#FF9F0A] uppercase tracking-wider">
                — Arshad TV Philosophy
              </span>
            </div>
          </div>

          {/* Quick Profile Overview Card (Right column) */}
          <div className="lg:col-span-5">
            <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 shadow-xl space-y-6">
              <div className="flex items-center gap-3 pb-4 border-b border-[#EDE7D9] dark:border-stone-800">
                <div className="w-11 h-11 rounded-full bg-[#FF9F0A] text-[#141311] flex items-center justify-center font-extrabold text-sm shadow-xs">
                  ATV
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#141311] dark:text-white">
                    Quick Profile Overview
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Capabilities snapshot & platforms
                  </p>
                </div>
              </div>

              {/* Current Role */}
              <div>
                <span className="text-[11px] font-bold text-[#FF9F0A] uppercase tracking-wider block mb-1">
                  Current Role
                </span>
                <p className="text-base font-bold text-[#141311] dark:text-white">
                  {profile.quickProfile.currentRole}
                </p>
                <p className="text-xs text-stone-500 dark:text-stone-400 mt-0.5">
                  Independent E-Commerce Business
                </p>
              </div>

              {/* Experience Areas */}
              <div>
                <span className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider block mb-1">
                  Experience Areas
                </span>
                <p className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200 leading-normal">
                  {profile.quickProfile.experienceAreas}
                </p>
              </div>

              {/* Platforms */}
              <div>
                <span className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider block mb-2">
                  Marketplace & Store Platforms
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(profile.quickProfile?.platforms || []).map((plat) => (
                    <span
                      key={plat}
                      className="px-3 py-1 text-xs font-bold rounded-full bg-[#F7F4EC] dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-[#EDE7D9] dark:border-stone-700 hover:border-[#FF9F0A] transition-colors"
                    >
                      {plat}
                    </span>
                  ))}
                </div>
              </div>

              {/* Tools */}
              <div>
                <span className="text-[11px] font-bold text-stone-500 dark:text-stone-400 uppercase tracking-wider block mb-2">
                  Tools & Technologies
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {(profile.quickProfile?.tools || []).map((tool) => (
                    <span
                      key={tool}
                      className="px-3 py-1 text-xs font-bold rounded-full bg-[#FF9F0A]/10 text-[#141311] dark:text-[#FF9F0A] border border-[#FF9F0A]/30"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status */}
              <div className="pt-4 border-t border-[#EDE7D9] dark:border-stone-800 flex items-center justify-between text-xs">
                <span className="text-stone-500 font-medium">Malappuram, Kerala, India</span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#141311] text-white font-bold text-[11px]">
                  <span className="w-2 h-2 rounded-full bg-[#FF9F0A] animate-pulse"></span>
                  Open to Opportunities
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
