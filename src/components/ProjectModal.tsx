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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-2xl bg-[#171717] text-white rounded-3xl border border-[#111111] shadow-2xl overflow-hidden my-8 animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="p-6 sm:p-7 border-b border-white/10 flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-mono text-xs font-bold text-[#F5A400] px-2.5 py-0.5 rounded-full bg-[#111111] border border-white/10">
                {project.number}
              </span>
              <span className="text-stone-500">•</span>
              <span className="text-xs font-bold px-3 py-0.5 rounded-full bg-[#F5A400]/15 text-[#F5A400] border border-[#F5A400]/30">
                {project.type}
              </span>
            </div>
            <h3 className="text-2xl font-black text-white">
              {project.title}
            </h3>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close dialog"
            className="p-2 text-stone-400 hover:text-white rounded-full hover:bg-white/10 transition-all duration-200 transform hover:scale-110 active:scale-90 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-7 space-y-6 max-h-[75vh] overflow-y-auto">
          {/* Overview */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-[#F5A400] mb-2">
              Project Overview
            </h4>
            <p className="text-sm text-stone-200 leading-relaxed font-sans font-medium">
              {project.description}
            </p>
          </div>

          {/* Highlights */}
          {project.highlights && project.highlights.length > 0 && (
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#F5A400] mb-2.5">
                Key Strategic Highlights
              </h4>
              <div className="space-y-2">
                {project.highlights.map((h, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-2xl bg-[#111111] border border-white/10 flex items-start gap-2.5 text-xs sm:text-sm text-stone-200 font-medium"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#F5A400] shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Detailed Responsibilities */}
          {project.responsibilities && project.responsibilities.length > 0 && (
            <div>
              <h4 className="text-xs font-black uppercase tracking-wider text-[#F5A400] mb-2.5">
                Operational Scope & Responsibilities
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {(project.responsibilities || []).map((r, i) => (
                  <div
                    key={i}
                    className="px-3 py-2.5 rounded-2xl bg-[#111111] text-xs font-semibold text-stone-200 border border-white/10 flex items-center gap-2"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#F5A400]"></span>
                    <span className="capitalize">{r}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Platforms & Tools */}
          <div>
            <h4 className="text-xs font-black uppercase tracking-wider text-stone-400 mb-2">
              Technologies & Channels
            </h4>
            <div className="flex flex-wrap gap-1.5">
              {(project.platforms || project.skills || project.technologies || []).map((t) => (
                <span
                  key={t}
                  className="px-3 py-1 rounded-full text-xs font-bold bg-[#111111] text-[#F5A400] border border-white/10"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:px-7 bg-[#111111] border-t border-white/10 flex items-center justify-between">
          <span className="text-xs font-medium text-stone-400">
            Arshad TV • E-Commerce Showcase
          </span>
          <button
            type="button"
            onClick={onClose}
            className="px-5 py-2 text-xs font-black text-[#111111] bg-[#F5A400] hover:bg-[#e59900] rounded-full shadow-xs transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
          >
            Close Window
          </button>
        </div>
      </div>
    </div>
  );
};
