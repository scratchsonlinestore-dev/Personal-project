import React, { useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, Sparkles, CheckCircle2 } from 'lucide-react';
import { ExpertiseItem } from '../types';

interface ExpertiseSectionProps {
  expertise: ExpertiseItem[];
}

export const ExpertiseSection: React.FC<ExpertiseSectionProps> = ({ expertise }) => {
  const [activeId, setActiveId] = useState<string>(expertise[1]?.id || expertise[0]?.id || '');

  const toggleService = (id: string) => {
    setActiveId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="expertise" className="py-20 md:py-28 bg-[#F4F2E8] border-t border-[#111111]/10">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] border border-[#111111] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F5A400]"></span>
              <span>Services & Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight">
              How I Bring <span className="text-[#F5A400]">Stores to Life</span>
              <span className="text-[#F5A400] ml-2">✦</span>
            </h2>
            <p className="text-sm sm:text-base text-[#777777] mt-2 max-w-xl font-medium">
              From multi-platform catalog expansion and Shopify theme styling to performance advertising and end-to-end profitability.
            </p>
          </div>

          <a
            href="#contact"
            className="self-start sm:self-auto inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#F5A400] text-[#111111] font-black text-xs uppercase tracking-wider hover:bg-[#e59900] transition-all transform hover:scale-105 active:scale-95 shadow-md"
          >
            <span>Discuss a Project</span>
            <div className="w-5 h-5 rounded-full bg-[#111111] text-[#F5A400] flex items-center justify-center">
              <ArrowUpRight className="w-3 h-3" />
            </div>
          </a>
        </div>

        {/* Stacked Services Accordion Pattern in Card Black (#171717) with Thin Black Borders */}
        <div className="space-y-4">
          {expertise.map((item) => {
            const isActive = activeId === item.id;
            return (
              <div
                key={item.id}
                onClick={() => toggleService(item.id)}
                className={`transition-all duration-300 ease-out cursor-pointer overflow-hidden border border-[#111111] ${
                  isActive
                    ? 'rounded-3xl bg-[#171717] text-white p-6 sm:p-8 shadow-2xl ring-2 ring-[#F5A400]'
                    : 'rounded-full bg-[#171717] text-white px-6 sm:px-8 py-4 sm:py-5 hover:bg-[#111111] shadow-md transform hover:scale-[1.01]'
                }`}
              >
                {/* Header Row */}
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-3 sm:gap-4">
                    <span
                      className={`text-xs font-mono font-bold px-2.5 py-1 rounded-full ${
                        isActive
                          ? 'bg-[#F5A400] text-[#111111]'
                          : 'bg-[#111111] text-[#F5A400] border border-white/10'
                      }`}
                    >
                      {item.number}
                    </span>
                    <h3 className="text-lg sm:text-xl font-black tracking-tight text-white">
                      {item.title}
                    </h3>
                  </div>

                  {/* Circular expand/collapse trigger with orange accent */}
                  <div
                    className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                      isActive
                        ? 'bg-[#F5A400] text-[#111111] rotate-45 shadow-sm'
                        : 'bg-[#F5A400] text-[#111111] hover:bg-[#e59900] shadow-xs'
                    }`}
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Expanded Details */}
                {isActive && (
                  <div className="mt-6 pt-6 border-t border-white/10 space-y-5 animate-in fade-in duration-300">
                    <p className="text-sm sm:text-base text-stone-300 leading-relaxed max-w-3xl font-medium">
                      {item.description}
                    </p>

                    {item.focusAreas && item.focusAreas.length > 0 && (
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-[#F5A400] block mb-2.5">
                          Focus Areas & Deliverables
                        </span>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                          {item.focusAreas.map((area, aIdx) => (
                            <div
                              key={aIdx}
                              className="text-xs text-stone-200 flex items-center gap-2 p-3 rounded-2xl bg-[#111111] border border-white/10"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#F5A400]"></span>
                              <span className="font-medium">{area}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {item.platforms && item.platforms.length > 0 && (
                      <div className="flex flex-wrap items-center gap-2 pt-2">
                        <span className="text-xs text-stone-400 font-bold mr-1">
                          Platforms & Tools:
                        </span>
                        {item.platforms.map((plat) => (
                          <span
                            key={plat}
                            className="px-3 py-1 text-xs font-bold rounded-full bg-[#F5A400]/15 text-[#F5A400] border border-[#F5A400]/30"
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
