import React, { useState } from 'react';
import { Calendar, MapPin, ChevronDown, ChevronUp, ArrowRight, ArrowUpRight, Star } from 'lucide-react';
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
    <section id="experience" className="py-20 md:py-28 bg-[#F4F2E8] border-t border-[#111111]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] border border-[#111111] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#F5A400]"></span>
          <span>Proven Track Record</span>
        </div>
        
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight mb-3">
          Professional <span className="text-[#F5A400]">Experience</span>
          <span className="text-[#F5A400] ml-2">✦</span>
        </h2>
        
        <p className="text-sm sm:text-base text-[#777777] max-w-2xl font-medium mb-12">
          From e-commerce data analytics and consultative sales to founding and scaling an independent multi-channel enterprise.
        </p>

        {/* Career Journey Banner in Card Black (#171717) with Thin Black Border */}
        <div className="mb-14 p-6 sm:p-8 rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6 pb-4 border-b border-white/10">
            <div>
              <span className="text-[11px] font-black uppercase tracking-wider text-[#F5A400] block">
                Career Progression
              </span>
              <h3 className="text-xl sm:text-2xl font-black text-white mt-0.5">
                Data Analytics → Consultative Sales → E-Commerce Founder
              </h3>
            </div>
            <span className="text-xs px-3.5 py-1.5 rounded-full bg-[#111111] text-[#F5A400] font-bold border border-white/10 self-start md:self-auto">
              3-Stage Evolution
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {careerSteps.map((step, idx) => (
              <div
                key={step.year}
                className="bg-[#111111] hover:bg-white/5 p-5 rounded-2xl border border-white/10 transition-all duration-200 hover:scale-[1.02]"
              >
                <div className="flex items-center justify-between mb-3">
                  <span className="px-3 py-1 text-xs font-black rounded-full bg-[#F5A400] text-[#111111]">
                    {step.year}
                  </span>
                  {idx < careerSteps.length - 1 && (
                    <span className="hidden md:inline-flex text-[#F5A400]">
                      <ArrowRight className="w-4 h-4" />
                    </span>
                  )}
                </div>
                <h4 className="text-sm font-black text-white mb-0.5">
                  {step.role}
                </h4>
                {step.company && (
                  <p className="text-xs font-bold text-[#F5A400] mb-2">
                    {step.company}
                  </p>
                )}
                <p className="text-xs text-stone-300 leading-relaxed font-medium">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Experience List in Black Cards with Thin Borders */}
        <div className="space-y-6">
          {experiences.map((exp) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className="rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
              >
                {/* Header Row */}
                <div
                  onClick={() => toggleExpand(exp.id)}
                  className="p-6 sm:p-8 cursor-pointer hover:bg-white/5 transition-colors flex flex-col md:flex-row md:items-start justify-between gap-4"
                >
                  <div className="space-y-2 flex-1">
                    <div className="flex flex-wrap items-center gap-2.5">
                      <span className="font-mono text-xs font-bold px-2.5 py-0.5 rounded-full bg-[#111111] text-[#F5A400] border border-white/10">
                        {exp.number}
                      </span>
                      <h3 className="text-xl sm:text-2xl font-black text-white">
                        {exp.role}
                      </h3>
                      <span className="text-stone-500 font-bold">•</span>
                      <span className="text-lg font-black text-[#F5A400]">
                        {exp.company}
                      </span>
                    </div>

                    <div className="flex flex-wrap items-center gap-y-1 gap-x-4 text-xs text-stone-400 pt-1 font-semibold">
                      <span className="inline-flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5 text-[#F5A400]" />
                        {exp.period}
                      </span>
                      {exp.location && (
                        <span className="inline-flex items-center gap-1.5">
                          <MapPin className="w-3.5 h-3.5 text-[#F5A400]" />
                          {exp.location}
                        </span>
                      )}
                      {exp.type && (
                        <span className="px-2.5 py-0.5 rounded-full bg-[#111111] text-stone-300 border border-white/10">
                          {exp.type}
                        </span>
                      )}
                    </div>

                    <p className="text-xs sm:text-sm text-stone-300 pt-2 leading-relaxed max-w-4xl font-medium">
                      {exp.summary}
                    </p>
                  </div>

                  {/* Toggle Button */}
                  <div className="self-end md:self-center flex items-center gap-2 text-xs font-bold text-white">
                    <span className="hidden sm:inline text-stone-300">
                      {isExpanded ? 'Collapse Impact' : 'View Impact'}
                    </span>
                    <div
                      className={`w-9 h-9 rounded-full flex items-center justify-center transition-all ${
                        isExpanded
                          ? 'bg-[#F5A400] text-[#111111]'
                          : 'bg-[#111111] text-stone-300 hover:bg-[#F5A400] hover:text-[#111111]'
                      }`}
                    >
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </div>
                  </div>
                </div>

                {/* Expanded Details Section */}
                {isExpanded && (
                  <div className="p-6 sm:p-8 pt-0 border-t border-white/10 space-y-6 animate-in fade-in duration-300">
                    {/* Structured Responsibilities by Section */}
                    {exp.responsibilities && exp.responsibilities.length > 0 && (
                      <div className="space-y-4 pt-4">
                        <h4 className="text-xs font-black uppercase tracking-wider text-[#F5A400] mb-2">
                          Core Responsibilities & Operational Scope
                        </h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {exp.responsibilities.map((section, sIdx) => (
                            <div
                              key={sIdx}
                              className="p-5 rounded-2xl bg-[#111111] border border-white/10"
                            >
                              <h5 className="text-xs font-black text-white mb-2.5 flex items-center gap-1.5">
                                <span className="w-1.5 h-1.5 rounded-full bg-[#F5A400]"></span>
                                {section.title}
                              </h5>
                              <ul className="space-y-2">
                                {(section.points || []).map((point, pIdx) => (
                                  <li
                                    key={pIdx}
                                    className="text-xs text-stone-300 leading-relaxed pl-3 border-l-2 border-[#F5A400]/40 font-medium"
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

                    {/* Key Commercial Achievement Pill */}
                    {exp.achievement && (
                      <div className="p-4 rounded-2xl bg-[#111111] border border-[#F5A400]/50 flex items-start gap-3 shadow-md">
                        <div className="w-7 h-7 rounded-full bg-[#F5A400] text-[#111111] flex items-center justify-center text-xs font-black shrink-0 mt-0.5">
                          ★
                        </div>
                        <div>
                          <span className="text-xs font-black text-[#F5A400] uppercase tracking-wider block">
                            Key Commercial Achievement
                          </span>
                          <p className="text-xs sm:text-sm font-semibold text-white mt-0.5">
                            {exp.achievement}
                          </p>
                        </div>
                      </div>
                    )}

                    {/* Tags / Competencies */}
                    {(exp.platformsAndSkills || exp.skills) && (exp.platformsAndSkills || exp.skills)!.length > 0 && (
                      <div>
                        <span className="text-[11px] font-black uppercase tracking-wider text-stone-400 mb-2 block">
                          Applied Competencies
                        </span>
                        <div className="flex flex-wrap gap-1.5">
                          {(exp.platformsAndSkills || exp.skills || []).map((skill) => (
                            <span
                              key={skill}
                              className="px-3 py-1 text-xs font-bold rounded-full bg-[#111111] text-stone-300 border border-white/10 hover:border-[#F5A400] hover:text-[#F5A400] transition-colors"
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
