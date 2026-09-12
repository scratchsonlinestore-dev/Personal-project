import React from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { WorkApproachStep, ValueProp, Profile } from '../types';

interface ApproachAndValuesSectionProps {
  profile: Profile;
  approachSteps: WorkApproachStep[];
  valueProps: ValueProp[];
}

export const ApproachAndValuesSection: React.FC<ApproachAndValuesSectionProps> = ({
  profile,
  approachSteps,
  valueProps,
}) => {
  return (
    <section id="approach" className="py-20 md:py-28 border-t border-[#EDE7D9] dark:border-stone-800 bg-[#F7F4EC] dark:bg-[#12110F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 space-y-20 md:space-y-24">
        {/* Section 11: Business Approach (How I Work) */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141311] dark:text-[#FAF6EE] tracking-tight mb-4">
            Business <span className="text-[#FF9F0A]">Approach</span>
            <span className="text-[#FF9F0A] ml-2">✦</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl mb-10">
            How I approach every marketplace catalog, performance ad budget, and operational improvement.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {(approachSteps || []).map((step, idx) => (
              <div
                key={step.title}
                className="p-6 rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 shadow-xs hover:shadow-xl transition-all duration-300 ease-out hover:scale-105 flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-xs font-bold text-[#141311] dark:text-stone-100 px-2.5 py-1 rounded-full bg-[#FF9F0A]/20 block w-fit mb-4">
                    0{idx + 1}
                  </span>
                  <h3 className="text-base font-bold text-[#141311] dark:text-stone-100 mb-2 font-sans">
                    {step.title}
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Section 12: Why Work With Me (Why Choose Arshad?) */}
        <div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
            <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
            <span>The Edge</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141311] dark:text-[#FAF6EE] tracking-tight mb-4">
            Why Choose <span className="text-[#FF9F0A]">Arshad?</span>
            <span className="text-[#FF9F0A] ml-2">✦</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl mb-10">
            Full commercial ownership, hands-on multi-channel execution, and real P&L accountability.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
            {(valueProps || []).map((vp) => (
              <div
                key={vp.title}
                className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 shadow-xs hover:shadow-xl transition-all duration-300 ease-out hover:scale-105"
              >
                <div className="w-10 h-10 rounded-full bg-[#141311] text-[#FF9F0A] dark:bg-stone-800 flex items-center justify-center mb-4 shadow-xs">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-[#141311] dark:text-stone-100 mb-2 font-sans">
                  {vp.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  {vp.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Section 13: Personal Brand (More Than E-Commerce) */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 shadow-xl relative overflow-hidden">
          <div className="max-w-3xl mb-8">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#FF9F0A] block mb-2">
              ✦ Philosophy & Core Standards
            </span>
            <blockquote className="text-2xl sm:text-3xl font-serif font-medium leading-snug text-[#141311] dark:text-white">
              &ldquo;{profile.brandStatement}&rdquo;
            </blockquote>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 pt-8 border-t border-[#EDE7D9] dark:border-stone-800">
            {(profile.brandPillars || []).map((pillar) => (
              <div
                key={pillar.title}
                className="space-y-1.5 p-4 rounded-2xl bg-[#F7F4EC] dark:bg-white/5 border border-[#EDE7D9] dark:border-white/10 hover:border-[#FF9F0A] transition-colors"
              >
                <h4 className="text-sm font-bold text-[#141311] dark:text-white tracking-tight flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#FF9F0A]"></span>
                  {pillar.title}
                </h4>
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
