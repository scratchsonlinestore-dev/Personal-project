import React, { useState } from 'react';
import { Check, Compass, Search, ShieldCheck, Truck, Tag, Percent, Sparkles, BarChart2, RefreshCw } from 'lucide-react';
import { WorkflowStep } from '../types';

interface WorkflowSectionProps {
  steps: WorkflowStep[];
}

export const WorkflowSection: React.FC<WorkflowSectionProps> = ({ steps }) => {
  const [activeStep, setActiveStep] = useState<string>('01');

  const getStepIcon = (step: string) => {
    switch (step) {
      case '01':
        return <Search className="w-4 h-4" />;
      case '02':
        return <ShieldCheck className="w-4 h-4" />;
      case '03':
        return <Truck className="w-4 h-4" />;
      case '04':
        return <Tag className="w-4 h-4" />;
      case '05':
        return <Percent className="w-4 h-4" />;
      case '06':
        return <Sparkles className="w-4 h-4" />;
      case '07':
        return <Compass className="w-4 h-4" />;
      case '08':
        return <BarChart2 className="w-4 h-4" />;
      case '09':
        return <RefreshCw className="w-4 h-4" />;
      default:
        return <Check className="w-4 h-4" />;
    }
  };

  const selectedStepData = steps.find((s) => s.step === activeStep) || steps[0];

  return (
    <section id="workflow" className="py-20 md:py-28 border-t border-[#EDE7D9] dark:border-stone-800 bg-[#F7F4EC] dark:bg-[#12110F]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 text-[11px] font-bold uppercase tracking-wider mb-3 shadow-2xs">
          <span className="w-1.5 h-1.5 rounded-full bg-[#FF9F0A]"></span>
          <span>9-Step Operating Model</span>
        </div>
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#141311] dark:text-[#FAF6EE] tracking-tight mb-3">
            E-Commerce <span className="text-[#FF9F0A]">Workflow</span>
            <span className="text-[#FF9F0A] ml-2">✦</span>
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400">
            The end-to-end framework I execute to validate, source, list, price, advertise, fulfill, and continuously optimize profitable e-commerce operations.
          </p>
        </div>

        {/* 9-step interactive flow navigation with pill buttons */}
        <div className="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-9 gap-2.5 mb-8">
          {(steps || []).map((item) => {
            const isActive = activeStep === item.step;
            return (
              <button
                key={item.step}
                type="button"
                onClick={() => setActiveStep(item.step)}
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center transform transition-all duration-200 ease-out hover:scale-105 active:scale-95 cursor-pointer ${
                  isActive
                    ? 'bg-[#141311] text-white ring-2 ring-[#FF9F0A] shadow-md'
                    : 'bg-white dark:bg-[#181715] text-[#141311] dark:text-stone-100 border border-[#EDE7D9] dark:border-stone-800 hover:border-[#FF9F0A]'
                }`}
              >
                <span className={`font-mono text-xs font-bold mb-1 ${isActive ? 'text-[#FF9F0A]' : 'text-stone-400'}`}>
                  {item.step}
                </span>
                <div className={`mb-1 ${isActive ? 'text-[#FF9F0A]' : 'text-stone-600 dark:text-stone-400'}`}>
                  {getStepIcon(item.step)}
                </div>
                <span className="text-[11px] font-bold tracking-tight leading-tight line-clamp-1">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-[#181715] text-[#141311] dark:text-white border border-[#EDE7D9] dark:border-stone-800 shadow-xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-[#EDE7D9] dark:border-stone-800">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#FF9F0A] text-[#141311] flex items-center justify-center font-mono font-extrabold text-xl shadow-md">
                {selectedStepData.step}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-bold text-[#141311] dark:text-white">
                  Step {selectedStepData.step}: {selectedStepData.title}
                </h3>
                <p className="text-xs sm:text-sm font-semibold text-[#FF9F0A] mt-0.5">
                  {selectedStepData.subtitle}
                </p>
              </div>
            </div>

            <span className="px-4 py-1.5 rounded-full bg-[#F7F4EC] dark:bg-white/10 text-stone-800 dark:text-white font-bold text-xs border border-[#EDE7D9] dark:border-white/10 self-start md:self-auto">
              Phase {Number(selectedStepData.step) <= 3 ? 'Foundational' : Number(selectedStepData.step) <= 6 ? 'Trading & Ads' : 'Growth & Analytics'}
            </span>
          </div>

          <div className="max-w-3xl">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FF9F0A] mb-2">
              Operational Focus & Execution
            </h4>
            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-sans">
              {selectedStepData.details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
