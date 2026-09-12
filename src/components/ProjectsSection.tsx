import React from 'react';
import { ArrowUpRight, ShoppingBag, Eye, Layers, Sparkles } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectsSectionProps {
  projects: ProjectItem[];
  onSelectProject: (project: ProjectItem) => void;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  projects,
  onSelectProject,
}) => {
  return (
    <section id="projects" className="py-20 md:py-28 bg-[#F4F2E8] border-t border-[#111111]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] border border-[#111111] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
              <span className="w-2 h-2 rounded-full bg-[#F5A400]"></span>
              <span>Case Studies & Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight">
              Featured <span className="text-[#F5A400]">Projects</span>
              <span className="text-[#F5A400] ml-2">✦</span>
            </h2>
            <p className="text-sm sm:text-base text-[#777777] mt-2 max-w-xl font-medium">
              Multi-channel marketplace scaling, custom Shopify theme engineering, high-ROAS Meta ads, and profitability analytics.
            </p>
          </div>

          <span className="text-xs font-black text-[#F5A400] uppercase tracking-wider">
            Click any project to view deep dive
          </span>
        </div>

        {/* Projects Grid in Card Black (#171717) with Thin Black Borders */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(projects || []).map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-[#171717] text-white border border-[#111111] hover:border-[#F5A400] shadow-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-1.5 cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top-right accent dot */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#F5A400]/40 group-hover:bg-[#F5A400] transition-colors"></div>

              <div>
                {/* Number & Type Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="font-mono text-xs font-bold text-[#F5A400] px-2.5 py-1 rounded-full bg-[#111111] border border-white/10">
                    {project.number}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#F5A400]/15 text-[#F5A400] border border-[#F5A400]/30">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-black text-white mb-3 group-hover:text-[#F5A400] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 font-medium">
                  {project.description}
                </p>

                {/* Tags / Platforms */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {(project.platforms || project.skills || project.technologies || []).slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[11px] font-bold rounded-full bg-[#111111] text-stone-300 border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                  {(project.platforms || project.skills || project.technologies || []).length > 4 && (
                    <span className="px-2.5 py-1 text-[11px] font-bold text-[#F5A400] rounded-full bg-[#111111] border border-white/10">
                      +{(project.platforms || project.skills || project.technologies || []).length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button Pill */}
              <div className="pt-4 border-t border-white/10">
                <div className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full bg-[#111111] group-hover:bg-[#F5A400] text-white group-hover:text-[#111111] text-xs font-black tracking-wide transition-all duration-200 shadow-xs">
                  <span>{project.buttonText}</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#111111]/10 flex items-center justify-center">
                    <ArrowUpRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-200" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
