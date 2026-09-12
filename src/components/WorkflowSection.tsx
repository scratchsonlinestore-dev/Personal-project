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
    <section id="workflow" className="py-20 md:py-28 bg-[#F4F2E8] border-t border-[#111111]/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#111111] text-[#FFFFFF] border border-[#111111] text-[11px] font-bold uppercase tracking-wider mb-3 shadow-xs">
          <span className="w-2 h-2 rounded-full bg-[#F5A400]"></span>
          <span>9-Stage Blueprint</span>
        </div>
        
        <div className="max-w-3xl mb-12">
          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#111111] tracking-tight mb-3">
            Operating <span className="text-[#F5A400]">Framework</span>
            <span className="text-[#F5A400] ml-2">✦</span>
          </h2>
          <p className="text-sm sm:text-base text-[#777777] font-medium">
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
                className={`p-3 rounded-2xl flex flex-col items-center justify-center text-center transform transition-all duration-200 ease-out hover:scale-105 active:scale-95 cursor-pointer border ${
                  isActive
                    ? 'bg-[#111111] text-white border-[#111111] ring-2 ring-[#F5A400] shadow-lg'
                    : 'bg-[#171717] text-white border-[#111111] hover:border-[#F5A400]'
                }`}
              >
                <span className={`font-mono text-xs font-bold mb-1 ${isActive ? 'text-[#F5A400]' : 'text-stone-400'}`}>
                  {item.step}
                </span>
                <div className={`mb-1 ${isActive ? 'text-[#F5A400]' : 'text-stone-300'}`}>
                  {getStepIcon(item.step)}
                </div>
                <span className="text-[11px] font-bold tracking-tight leading-tight line-clamp-1">
                  {item.title}
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Step Detailed Showcase Card in Card Black (#171717) with Thin Black Border */}
        <div className="p-6 sm:p-10 rounded-3xl bg-[#171717] text-white border border-[#111111] shadow-2xl relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 mb-6 border-b border-white/10">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-[#F5A400] text-[#111111] flex items-center justify-center font-mono font-black text-xl shadow-md">
                {selectedStepData.step}
              </div>
              <div>
                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Step {selectedStepData.step}: {selectedStepData.title}
                </h3>
                <p className="text-xs sm:text-sm font-bold text-[#F5A400] mt-0.5">
                  {selectedStepData.subtitle}
                </p>
              </div>
            </div>

            <span className="px-4 py-1.5 rounded-full bg-[#111111] text-[#F5A400] font-bold text-xs border border-white/10 self-start md:self-auto">
              Phase {Number(selectedStepData.step) <= 3 ? 'Foundational' : Number(selectedStepData.step) <= 6 ? 'Trading & Ads' : 'Scale & Analytics'}
            </span>
          </div>

          <div className="max-w-3xl">
            <h4 className="text-xs font-black uppercase tracking-wider text-[#F5A400] mb-2.5">
              Operational Focus & Execution Scope
            </h4>
            <p className="text-sm sm:text-base text-stone-200 leading-relaxed font-sans font-medium">
              {selectedStepData.details}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
