import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Experience, CareerStep } from '../types';

interface ExperienceSectionProps {
  experiences: Experience[];
  careerSteps: CareerStep[];
}

export const ExperienceSection: React.FC<ExperienceSectionProps> = ({
  experiences,
  careerSteps,
}) => {
  const [expandedId, setExpandedId] = useState<string>(experiences[0]?.id || '');

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? '' : id));
  };

  return (
    <section id="experience" className="py-20 md:py-28 border-t border-[#EDE7D9] dark:border-stone-800 bg-[#F7F4EC] dark:bg-[#12110F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
          <span>Track Record</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141311] dark:text-[#FAF6EE] tracking-tight mb-4">
          Professional <span className="text-[#FF9F0A]">Experience</span>
          <span className="text-[#FF9F0A] ml-2">✦</span>
        </h2>
        <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 max-w-2xl mb-12">
          From e-commerce data analytics and consultative sales to founding and operating an independent multi-channel business.
        </p>

        {/* Career Journey Banner */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-[#EDE7D9] dark:border-stone-800">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF9F0A] block">
                Career Journey
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#141311] dark:text-white mt-0.5">
                Data → Sales → E-Commerce Entrepreneurship
              </h3>
            </div>
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-[#F7F4EC] dark:bg-white/10 text-[#141311] dark:text-white font-bold border border-[#EDE7D9] dark:border-white/10 self-start md:self-auto">
              Progressive Evolution
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {careerSteps.map((step, idx) => (
              <div
                key={step.year}
                className="bg-[#F7F4EC] dark:bg-white/5 hover:bg-[#FAF7EE] dark:hover:bg-white/10 p-5 rounded-2xl border border-[#EDE7D9] dark:border-white/10 transition-all duration-200 hover:scale-105"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-bold rounded-full bg-[#FF9F0A] text-[#141311]">
                    {step.year}
                  </span>
                  {idx < careerSteps.length - 1 && (
                    <span className="hidden md:inline-flex text-[#FF9F0A]">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-bold text-[#141311] dark:text-white mb-0.5">
                  {step.role}
                </h4>
                {step.company && (
                  <p className="text-xs font-semibold text-stone-600 dark:text-stone-300 mb-2">
                    {step.company}
                  </p>
                )}
                <p className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Experience List */}
        <div className="space-y-6">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className="rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 hover:border-[#FF9F0A] shadow-sm hover:shadow-xl transition-all duration-300 ease-out transform hover:scale-[1.01] overflow-hidden"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 sm:p-8 cursor-pointer hover:bg-[#FAF7EE] dark:hover:bg-white/5 transition-colors flex flex-col md:flex-row md:items-start justify-between gap-4"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#141311] text-white dark:bg-stone-800">
                        {exp.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#141311] dark:text-stone-100">
                        {exp.role}
                      </h3>
                      <span className="text-stone-400 font-bold">•</span>
                      <span className="text-lg font-bold text-[#FF9F0A]">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-stone-500 dark:text-stone-400 pt-1 font-semibold">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#FF9F0A]" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#FF9F0A]" />
                          {exp.location}
                        </span>
                      )}
                      {exp.type && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#F7F4EC] dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-[#EDE7D9] dark:border-stone-700">
                          {exp.type}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 pt-2 leading-relaxed max-w-4xl">
                      {exp.summary}
                    </p>
                  </div>

                  {/* Toggle Button */}
                  <div className="self-end md:self-center flex items-center gap-2 text-xs font-bold text-[#141311] dark:text-white">
                    <span className="hidden sm:inline">
                      {isExpanded ? 'Hide Details' : 'View Impact'}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isExpanded
                          ? 'bg-[#FF9F0A] text-[#141311]'
                          : 'bg-[#F7F4EC] dark:bg-stone-800 text-stone-700 dark:text-stone-300 hover:bg-[#FF9F0A] hover:text-[#141311]'
                      }`}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 pt-0 border-t border-[#EDE7D9] dark:border-stone-800 space-y-6 animate-in fade-in duration-300">
                    {/* Structured Responsibilities by Section */}
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <div className="space-y-4">
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF9F0A] mb-2">
                          Key Responsibilities & Operational Scope
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {exp.responsibilities.map((section, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-4 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-800"
                            >
                              <h5 className="text-xs font-bold text-[#141311] dark:text-[#FAF6EE] mb-2 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
                                {section.title}
                              </h5>
                              <ul className="space-y-1.5">
                                {(section.points || []).map((point, pIdx) => (
                                  <li
                                    key={pIdx}
                                    className="text-xs text-stone-600 dark:text-stone-300 leading-relaxed pl-3 border-l border-stone-300 dark:border-stone-700"
                                  >
                                    {point}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Flat bullets fallback if provided */}
                    {exp.bullets && exp.bullets.length > 0 && (
                      <div>
                        <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF9F0A] mb-3">
                          Key Responsibilities
                        </h4>
                        <ul className="space-y-2.5">
                          {exp.bullets.map((bullet, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700 dark:text-stone-300"
                            >
                              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A] mt-2 shrink-0"></span>
                              <span className="leading-relaxed">{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* Key Achievement Pill */}
                    {exp.achievement && (
                      <div className="p-4 rounded-2xl bg-[#FFF8EE] dark:bg-stone-900/80 border border-[#FF9F0A]/30 flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-[#FF9F0A] text-[#141311] flex items-center justify-center text-xs font-bold shrink-0 mt-0.5">
                          ★
                        </div>
                        <div>
                          <span className="text-xs font-bold text-[#141311] dark:text-[#FF9F0A] uppercase tracking-wider block">
                            Key Commercial Achievement
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-stone-800 dark:text-stone-200 mt-0.5">
                            {exp.achievement}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tags / Competencies */}
                    {(exp.platformsAndSkills || exp.skills) && (exp.platformsAndSkills || exp.skills)!.length > 0 && (
                      <div>
                        <span className="text-[11px] font-bold uppercase tracking-wider text-stone-500 mb-2 block">
                          Core Competencies Applied
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {(exp.platformsAndSkills || exp.skills || []).map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-xs font-bold rounded-full bg-[#F7F4EC] dark:bg-stone-800 text-stone-800 dark:text-stone-200 border border-[#EDE7D9] dark:border-stone-700 hover:border-[#FF9F0A] transition-colors"
                            >
                              {skill}
                            </span>
                          ))}
                        </div>
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
