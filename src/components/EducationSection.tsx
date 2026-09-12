import React from 'react';
import { GraduationCap } from 'lucide-react';
import { Profile } from '../types';

interface EducationSectionProps {
  education: Profile['education'];
}

export const EducationSection: React.FC<EducationSectionProps> = ({ education }) => {
  if (!education) return null;

  return (
    <section id="education" className="py-20 md:py-28 border-t border-[#EDE7D9] dark:border-stone-800 bg-[#F7F4EC] dark:bg-[#12110F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
          <span>Academic Background</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141311] dark:text-[#FAF6EE] tracking-tight mb-4">
          Academic <span className="text-[#FF9F0A]">Education</span>
          <span className="text-[#FF9F0A] ml-2">✦</span>
        </h2>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl mb-10">
          Undergraduate technical foundation in computer science, software programming, and information systems.
        </p>

        {/* Education Card */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 shadow-xs hover:shadow-xl transition-all duration-300 ease-out hover:scale-[1.015] max-w-3xl">
          <div className="flex items-start gap-4 sm:gap-6">
            <div className="w-14 h-14 rounded-2xl bg-[#F7F4EC] dark:bg-stone-800 text-[#FF9F0A] border border-[#EDE7D9] dark:border-stone-700 flex items-center justify-center shrink-0 shadow-xs">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div className="space-y-2 flex-1">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#141311] dark:text-stone-100">
                  {education.degree}
                </h3>
                <span className="text-xs font-bold px-3 py-1 rounded-full bg-[#FF9F0A]/15 text-[#141311] dark:text-[#FF9F0A] border border-[#FF9F0A]/30">
                  Calicut University
                </span>
              </div>
              <p className="text-sm font-bold text-[#FF9F0A]">
                Major in {education.field}
              </p>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed pt-1 font-sans">
                {education.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
