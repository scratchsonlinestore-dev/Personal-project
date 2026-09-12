import React, { useState } from 'react';
import { CheckCircle2, Sparkles } from 'lucide-react';
import { SkillCategory } from '../types';

interface SkillsSectionProps {
  categories: SkillCategory[];
}

export const SkillsSection: React.FC<SkillsSectionProps> = ({ categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const filteredCategories =
    selectedCategory === 'All'
      ? categories
      : categories.filter((c) => c.category === selectedCategory);

  return (
    <section id="skills" className="py-20 md:py-28 border-t border-[#EDE7D9] dark:border-stone-800 bg-[#F7F4EC] dark:bg-[#12110F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
              <span>Capabilities & Tools</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141311] dark:text-[#FAF6EE] tracking-tight mb-2">
              Technical & Commercial <span className="text-[#FF9F0A]">Skills</span>
              <span className="text-[#FF9F0A] ml-2">✦</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-xl">
              An all-round balance of marketplace execution, Shopify theme engineering, performance ad campaigns, and analytical rigor.
            </p>
          </div>

          {/* Category Filter Pills in Reference Style */}
          <div className="flex flex-wrap gap-2 self-start md:self-end">
            <button
              type="button"
              onClick={() => setSelectedCategory('All')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer ${
                selectedCategory === 'All'
                  ? 'bg-[#FF9F0A] text-[#141311] shadow-xs'
                  : 'bg-white dark:bg-stone-800 text-[#141311] dark:text-stone-300 border border-[#EDE7D9] dark:border-stone-700 hover:border-[#FF9F0A]'
              }`}
            >
              All Skills ({(categories || []).reduce((acc, c) => acc + (c.items?.length || 0), 0)})
            </button>
            {(categories || []).map((cat) => (
              <button
                key={cat.category}
                type="button"
                onClick={() => setSelectedCategory(cat.category)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer ${
                  selectedCategory === cat.category
                    ? 'bg-[#FF9F0A] text-[#141311] shadow-xs'
                    : 'bg-white dark:bg-stone-800 text-[#141311] dark:text-stone-300 border border-[#EDE7D9] dark:border-stone-700 hover:border-[#FF9F0A]'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {(filteredCategories || []).map((cat) => (
            <div
              key={cat.category}
              className="p-6 sm:p-7 rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 shadow-sm hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-[1.015] flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between pb-3 mb-5 border-b border-[#EDE7D9] dark:border-stone-800">
                  <h3 className="text-base sm:text-lg font-bold text-[#141311] dark:text-stone-100">
                    {cat.category}
                  </h3>
                  <span className="text-[11px] font-mono font-bold px-2.5 py-0.5 rounded-full bg-[#FF9F0A]/15 text-[#141311] dark:text-[#FF9F0A]">
                    {cat.items?.length || 0} skills
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  {(cat.items || []).map((skill) => (
                    <span
                      key={skill}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-[#F7F4EC] dark:bg-stone-900 text-stone-800 dark:text-stone-200 text-xs font-semibold border border-[#EDE7D9] dark:border-stone-700 hover:border-[#FF9F0A] transition-colors"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
                      <span>{skill}</span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
