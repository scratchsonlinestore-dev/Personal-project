import React from 'react';
import { X, CheckCircle2, ArrowRight, ExternalLink, ShoppingBag, ShieldCheck } from 'lucide-react';
import { ProjectItem } from '../types';

interface ProjectModalProps {
  project: ProjectItem | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  if (!project) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-white dark:bg-[#181715] rounded-3xl border border-[#EDE7D9] dark:border-stone-800 shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-[#EDE7D9] dark:border-stone-800 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-[#141311] dark:text-stone-100 px-2.5 py-0.5 rounded-full bg-[#F7F4EC] dark:bg-stone-800 border border-[#EDE7D9] dark:border-stone-700">
                {project.number}
              </span>
              <span className="text-stone-300 dark:text-stone-700">•</span>
              <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-[#FF9F0A]/15 text-[#141311] dark:text-[#FF9F0A] border border-[#FF9F0A]/30">
                {project.type}
              </span>
            </div>
            <h3 className="text-2xl font-bold font-sans text-[#141311] dark:text-stone-100">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-stone-500 hover:text-stone-900 dark:text-stone-400 dark:hover:text-stone-100 rounded-full hover:bg-[#F7F4EC] dark:hover:bg-stone-800 transition-all duration-200 transform hover:scale-110 active:scale-90 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF9F0A] mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-stone-700 dark:text-stone-300 leading-relaxed font-sans">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF9F0A] mb-2.5">
                Key Strategic Highlights
              </h4>
              <div className="space-y-2">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900 border border-[#EDE7D9] dark:border-stone-800 flex items-start gap-2.5 text-xs sm:text-sm text-stone-800 dark:text-stone-200"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#FF9F0A] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Responsibilities */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF9F0A] mb-2.5">
                Operational Scope & Responsibilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(project.responsibilities || []).map((r, i) => (
                  <div
                    key={i}
                    className="px-3 py-2.5 rounded-2xl bg-[#F7F4EC] dark:bg-stone-900 text-xs font-semibold text-stone-800 dark:text-stone-200 border border-[#EDE7D9] dark:border-stone-800 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
                    <span className="capitalize">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Platforms & Tools */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-stone-500 mb-2">
              Technologies & Channels
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {(project.platforms || project.skills || project.technologies || []).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-[#F7F4EC] dark:bg-stone-800 text-[#141311] dark:text-stone-100 border border-[#EDE7D9] dark:border-stone-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-7 bg-[#FAF7EE] dark:bg-stone-900 border-t border-[#EDE7D9] dark:border-stone-800 flex items-center justify-between">
          <span className="text-xs font-medium text-stone-500 dark:text-stone-400">
            Arshad TV • E-Commerce Portfolio
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-[#141311] bg-[#FF9F0A] hover:bg-[#ffaa2b] rounded-full shadow-xs transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
