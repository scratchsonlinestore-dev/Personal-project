import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { ExpertiseItem } from '../types';

interface ExpertiseSectionProps {
  expertise: ExpertiseItem[];
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ expertise }) => {
  // Second item active by default, exactly mimicking the reference screenshot (where "Website Design" is open)
  const [activeId, setActiveId] = useState<string>(expertise[1]?.id || expertise[0]?.id || '');

  const toggleService = (id: string) => {
    setActiveId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="expertise" className="py-20 md:py-28 border-t border-[#EDE7D9] dark:border-stone-800 bg-[#F7F4EC] dark:bg-[#12110F]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        {/* Section Header with Reference Styling */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
              <span>My Services</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141311] dark:text-[#FAF6EE] tracking-tight">
              How I Bring <span className="text-[#FF9F0A]">Ideas to Life</span>
              <span className="text-[#FF9F0A] ml-2">✦</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-2 max-w-xl">
              From day-to-day operations and marketplace catalog scaling to custom Shopify themes, Meta ad campaigns, and data analysis.
            </p>
          </div>

          <a
            href="#contact"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#FF9F0A] text-[#141311] font-extrabold text-xs uppercase tracking-wider hover:bg-[#ffaa2b] transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            <span>View All Services</span>
            <div className="w-5 h-5 rounded-full bg-[#141311] text-[#FF9F0A] flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </a>
        </div>

        {/* Stacked Services Accordion Pattern */}
        <div className="space-y-3.5">
          {expertise.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleService(item.id)}
                className={`transition-all duration-300 ease-out cursor-pointer overflow-hidden ${
                  isActive
                    ? 'rounded-3xl bg-white dark:bg-[#181715] text-[#141311] dark:text-white p-6 sm:p-8 shadow-xl border-2 border-[#FF9F0A]'
                    : 'rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white px-6 sm:px-8 py-4 sm:py-5 border border-[#EDE7D9] dark:border-stone-800 hover:border-[#FF9F0A] shadow-xs hover:shadow-md transform hover:scale-[1.01]'
                }`}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                        isActive
                          ? 'bg-[#FF9F0A] text-[#141311]'
                          : 'bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300'
                      }`}
                    >
                      {item.number}
                    </span>
                    <h3
                      className={`text-lg sm:text-xl font-bold font-sans tracking-tight text-[#141311] dark:text-white`}
                    >
                      {item.title}
                    </h3>
                  </div>

                  {/* Circular expand/collapse trigger with orange accent */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-[#FF9F0A] text-[#141311] rotate-45 shadow-sm'
                        : 'bg-[#FF9F0A] text-[#141311] hover:bg-[#ffaa2b] shadow-xs'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Expanded Details */}
                {isActive && (
                  <div className="mt-6 pt-6 border-t border-[#EDE7D9] dark:border-stone-800 space-y-5 animate-in fade-in duration-300">
                    <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed max-w-3xl">
                      {item.description}
                    </p>

                    {item.focusAreas && item.focusAreas.length > 0 && (
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF9F0A] block mb-2.5">
                          Focus Areas & Deliverables
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {item.focusAreas.map((area, aIdx) => (
                            <div
                              key={aIdx}
                              className="text-xs text-stone-800 dark:text-stone-300 flex items-center gap-2 p-2.5 rounded-xl bg-[#F7F4EC] dark:bg-white/5 border border-[#EDE7D9] dark:border-white/10"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
                              <span>{area}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.platforms && item.platforms.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-xs text-stone-500 dark:text-stone-400 font-bold mr-1">
                          Platforms & Tools:
                        </span>
                        {item.platforms.map((plat) => (
                          <span
                            key={plat}
                            className="px-3 py-1 text-xs font-bold rounded-full bg-[#FF9F0A]/15 text-[#141311] dark:text-[#FF9F0A] border border-[#FF9F0A]/30"
                          >
                            {plat}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
