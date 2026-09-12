import React, { useState, useRef } from 'react';
import { Sparkles, ChevronLeft, ChevronRight, Layers, ArrowRight } from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const filteredCategories =
    selectedCategory === 'All'
      ? categories
      : categories.filter((c) => c.category === selectedCategory);

  // Flatten all skills for the horizontal ticker
  const allSkills = (categories || []).flatMap((cat) =>
    (cat.items || []).map((skill) => ({ skill, category: cat.category }))
  );

  const scrollHorizontally = (direction: 'left' | 'right') => {
    if (scrollContainerRef.current) {
      const scrollAmount = direction === 'left' ? -320 : 320;
      scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#F4F2E8] border-t border-[#111111]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-white border border-[#111111] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F5A400]"></span>
              <span>Capabilities & Mastery</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight mb-2">
              Skills & Core <span className="text-[#F5A400]">Expertise</span>
              <span className="text-[#F5A400] ml-2">✦</span>
            </h2>
            <p className="text-sm sm:text-base text-[#777777] max-w-xl font-medium">
              Multi-channel marketplace leadership, custom Shopify theme engineering, Meta ads scaling, and margin profitability.
            </p>
          </div>

          {/* Horizontal Scroll Controls for Categories */}
          <div className="flex items-center gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={() => scrollHorizontally('left')}
              className="p-2 rounded-full bg-[#111111] text-white hover:bg-[#F5A400] hover:text-[#111111] border border-[#111111] transition-all cursor-pointer shadow-xs"
              aria-label="Scroll left"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => scrollHorizontally('right')}
              className="p-2 rounded-full bg-[#111111] text-white hover:bg-[#F5A400] hover:text-[#111111] border border-[#111111] transition-all cursor-pointer shadow-xs"
              aria-label="Scroll right"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* 1. Horizontal Scrolling Category Pill Bar */}
        <div
          ref={scrollContainerRef}
          className="flex items-center gap-2 overflow-x-auto pb-4 scrollbar-none snap-x"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          <button
            type="button"
            onClick={() => setSelectedCategory('All')}
            className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wide whitespace-nowrap transition-all duration-200 snap-start cursor-pointer border ${
              selectedCategory === 'All'
                ? 'bg-[#111111] text-[#F5A400] border-[#111111] shadow-md scale-105'
                : 'bg-white text-[#222222] border-[#111111] hover:bg-[#E8E5D8]'
            }`}
          >
            ✦ ALL CATEGORIES ({allSkills.length})
          </button>
          {(categories || []).map((cat) => (
            <button
              key={cat.category}
              type="button"
              onClick={() => setSelectedCategory(cat.category)}
              className={`px-5 py-2.5 rounded-full text-xs font-black tracking-wide whitespace-nowrap transition-all duration-200 snap-start cursor-pointer border ${
                selectedCategory === cat.category
                  ? 'bg-[#111111] text-[#F5A400] border-[#111111] shadow-md scale-105'
                  : 'bg-white text-[#222222] border-[#111111] hover:bg-[#E8E5D8]'
              }`}
            >
              {cat.category} ({cat.items?.length || 0})
            </button>
          ))}
        </div>

        {/* 2. Seamless Horizontal Scrolling Marquee of Skills (Ticker) */}
        <div className="my-8 overflow-hidden rounded-2xl bg-[#111111] py-3.5 border border-[#111111] shadow-xl">
          <div className="flex w-max animate-marquee space-x-4">
            {/* Duplicated list for seamless infinite loop */}
            {[...allSkills, ...allSkills].map((item, idx) => (
              <div
                key={`${item.skill}-${idx}`}
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#171717] text-white border border-white/10 text-xs font-bold hover:border-[#F5A400] transition-colors"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[#F5A400]"></span>
                <span className="text-white">{item.skill}</span>
                <span className="text-[10px] text-stone-400 font-normal">({item.category})</span>
              </div>
            ))}
          </div>
        </div>

        {/* 3. Black Cards Grid with Thin Black Borders and Rounded Corners */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mt-6">
          {(filteredCategories || []).map((cat) => (
            <div
              key={cat.category}
              className="p-6 sm:p-8 rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-4 mb-5 border-b border-white/10">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#F5A400]"></span>
                    <h3 className="text-lg font-black text-white tracking-tight">
                      {cat.category}
                    </h3>
                  </div>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#F5A400] text-[#111111]">
                    {cat.items?.length || 0} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(cat.items || []).map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#111111] text-stone-200 text-xs font-semibold border border-white/10 hover:border-[#F5A400] hover:text-[#F5A400] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#F5A400]"></span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Summary Marker */}
              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400 font-medium">
                <span>Verified Commercial Competence</span>
                <span className="text-[#F5A400] font-bold">100% Active</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
