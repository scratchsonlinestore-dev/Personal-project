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
    <section id="projects" className="py-20 md:py-28 border-t border-[#EDE7D9] dark:border-stone-800 bg-[#F7F4EC] dark:bg-[#12110F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-12">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
              <span>Case Studies & Work</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141311] dark:text-[#FAF6EE] tracking-tight">
              Featured <span className="text-[#FF9F0A]">Projects</span>
              <span className="text-[#FF9F0A] ml-2">✦</span>
            </h2>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 mt-2 max-w-xl">
              Multi-channel marketplace scaling, custom Shopify builds, performance advertising, and commercial business data analysis.
            </p>
          </div>

          <span className="text-xs font-bold text-[#FF9F0A] uppercase tracking-wider">
            Click any project to view details
          </span>
        </div>

        {/* Projects Grid with Reference Styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {(projects || []).map((project) => (
            <div
              key={project.id}
              onClick={() => onSelectProject(project)}
              className="group flex flex-col justify-between p-6 sm:p-8 rounded-3xl bg-white dark:bg-[#181715] border border-[#EDE7D9] dark:border-stone-800 hover:border-[#FF9F0A] shadow-xs hover:shadow-2xl transition-all duration-300 ease-out transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer relative overflow-hidden"
            >
              {/* Subtle top-right accent dot */}
              <div className="absolute top-4 right-4 w-2 h-2 rounded-full bg-[#FF9F0A]/40 group-hover:bg-[#FF9F0A] transition-colors"></div>

              <div>
                {/* Number & Type Badge */}
                <div className="flex items-center justify-between gap-2 mb-5">
                  <span className="font-mono text-xs font-bold text-[#141311] dark:text-stone-100 px-2.5 py-1 rounded-full bg-[#F7F4EC] dark:bg-stone-800 border border-[#EDE7D9] dark:border-stone-700">
                    {project.number}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-[#FF9F0A]/15 text-[#141311] dark:text-[#FF9F0A] border border-[#FF9F0A]/30">
                    {project.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-sans text-[#141311] dark:text-stone-100 mb-3 group-hover:text-[#FF9F0A] transition-colors leading-snug">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-300 leading-relaxed mb-6 font-sans">
                  {project.description}
                </p>

                {/* Tags / Platforms */}
                <div className="flex flex-wrap gap-1.5 mb-8">
                  {(project.platforms || project.skills || project.technologies || []).slice(0, 4).map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-[11px] font-bold rounded-full bg-[#F7F4EC] dark:bg-stone-900 text-stone-800 dark:text-stone-200 border border-[#EDE7D9] dark:border-stone-700"
                    >
                      {tag}
                    </span>
                  ))}
                  {(project.platforms || project.skills || project.technologies || []).length > 4 && (
                    <span className="px-2.5 py-1 text-[11px] font-bold text-stone-500 rounded-full bg-[#F7F4EC] dark:bg-stone-800">
                      +{(project.platforms || project.skills || project.technologies || []).length - 4}
                    </span>
                  )}
                </div>
              </div>

              {/* Action Button Pill */}
              <div className="pt-4 border-t border-[#EDE7D9] dark:border-stone-800">
                <div className="w-full inline-flex items-center justify-between px-5 py-3 rounded-full bg-[#141311] group-hover:bg-[#FF9F0A] text-white group-hover:text-[#141311] text-xs font-bold tracking-wide transition-all duration-200 shadow-xs">
                  <span>{project.buttonText}</span>
                  <div className="w-6 h-6 rounded-full bg-white/10 group-hover:bg-[#141311]/10 flex items-center justify-center">
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
