import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Profile } from '../types';

interface EducationSectionProps {
  education: Profile['education'];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  if (!education) return null;

  return (
    <section id="education" className="py-20 md:py-28 bg-[#F4F2E8] border-t border-[#111111]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] border border-[#111111] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#F5A400]"></span>
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight mb-4">
          Academic <span className="text-[#F5A400]">Education</span>
          <span className="text-[#F5A400] ml-2">✦</span>
        </h2>
        <p className="text-sm sm:text-base text-[#777777] font-medium max-w-2xl mb-10">
          Undergraduate technical foundation in computer science, software programming, and information systems.
        </p>

        {/* Education Card in Card Black (#171717) with Thin Black Border */}
        <div className="p-6 sm:p-8 rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-2xl hover:shadow-2xl transition-all duration-300 ease-out hover:scale-[1.015] max-w-3xl">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#111111] text-[#F5A400] border border-white/10 flex items-center justify-center shrink-0 shadow-xs">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-black text-white">
                  {education.degree}
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#F5A400]/15 text-[#F5A400] border border-[#F5A400]/30">
                  Calicut University
                </span>
              </div>
              <p className="text-sm font-bold text-[#F5A400]">
                Major in {education.field}
              </p>
              <p className="text-xs sm:text-sm text-stone-300 leading-relaxed pt-1 font-medium">
                {education.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
