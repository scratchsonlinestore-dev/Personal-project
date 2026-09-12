import React from 'react';
import { X, Printer, Download, Mail, Phone, MapPin, Linkedin, ArrowDownToLine, ExternalLink } from 'lucide-react';
import { Profile } from '../types';
import { downloadOfficialResume } from '../utils/downloadCV';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
  profile: Profile;
}

export const ResumeModal: React.FC<ResumeModalProps> = ({
  isOpen,
  onClose,
  profile,
}) => {
  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    downloadOfficialResume();
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/75 backdrop-blur-xs overflow-y-auto"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="relative w-full max-w-4xl bg-white text-stone-900 rounded-3xl shadow-2xl overflow-hidden my-auto max-h-[94vh] flex flex-col animate-in fade-in zoom-in-95 duration-200 border border-stone-200">
        {/* Modal Toolbar (hidden when printing) */}
        <div className="no-print p-4 sm:px-6 bg-[#EFECE3] dark:bg-[#141311] text-[#141311] dark:text-[#FAF6EE] border-b border-[#EDE7D9] dark:border-stone-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#FF9F0A] animate-pulse"></span>
            <span className="text-xs sm:text-sm font-bold text-[#141311] dark:text-[#FAF6EE]">
              Official Curriculum Vitae — {profile.name}
            </span>
          </div>

          <div className="flex items-center gap-2">
            {/* Direct PDF Download Button */}
            <button
              type="button"
              onClick={handleDownload}
              className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-[#FF9F0A] text-[#141311] hover:bg-[#ffaa2b] text-xs font-bold transition-all duration-200 transform hover:scale-105 active:scale-95 shadow-sm"
              title="Download Arshad_TV_Resume.pdf"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download PDF</span>
            </button>

            {/* Print Button */}
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-white dark:bg-white/10 text-stone-700 dark:text-white border border-[#EDE7D9] dark:border-transparent hover:bg-stone-100 text-xs font-semibold transition-all duration-200 transform hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Print</span>
            </button>

            {/* Close Button */}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close CV modal"
              className="p-2 rounded-full text-stone-600 dark:text-stone-400 hover:text-stone-900 dark:hover:text-white hover:bg-stone-200/50 dark:hover:bg-white/10 transition-all duration-200 transform hover:scale-110 active:scale-90 cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable CV Content - Exact match to user's uploaded 2-page resume */}
        <div className="p-6 sm:p-12 overflow-y-auto font-sans leading-relaxed text-stone-900 bg-white selection:bg-stone-200 print:p-0 print:overflow-visible space-y-6">
          {/* Header */}
          <div className="border-b-2 border-stone-800 pb-5 text-center">
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-stone-950 uppercase mb-1">
              ARSHAD TV
            </h1>
            <h2 className="text-xs sm:text-sm font-bold text-stone-700 tracking-wider uppercase mb-2">
              E-COMMERCE & MARKETPLACE OPERATIONS SPECIALIST
            </h2>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-stone-600 font-medium">
              <span>Malappuram, Kerala, India</span>
              <span>•</span>
              <a href={`tel:${profile.phone.replace(/\s+/g, '')}`} className="hover:text-stone-900 font-semibold">
                +91 6235944644
              </a>
              <span>•</span>
              <a href={`mailto:${profile.email}`} className="hover:text-stone-900 font-semibold">
                arshadtv777@gmail.com
              </a>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1 text-xs text-stone-600 font-medium mt-1">
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-stone-800 hover:underline font-semibold"
              >
                linkedin.com/in/arshad-tv-250889308
              </a>
              <span>•</span>
              <span className="text-stone-700 font-semibold">
                Open to relocation — GCC / Middle East
              </span>
            </div>
          </div>

          {/* PROFILE SUMMARY */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 mb-2">
              Profile Summary
            </h3>
            <p className="text-xs sm:text-[13px] text-stone-700 leading-relaxed text-justify">
              E-commerce and marketplace operations professional with hands-on experience across Amazon, Flipkart, Meesho, Shopify and noon, covering catalog, pricing, promotions, inventory, marketing and performance reporting. Currently runs the complete e-commerce lifecycle as Founder of an independent online retail business — sourcing, vendor management, listings, pricing, Meta Ads, fulfilment, finance tracking and performance optimization — building strong commercial judgement and data-driven decision-making across functions. Previously worked full-time, on-site at a back-office team in Kottakkal, Malappuram, as a Data Analyst supporting a Qatar-based electronics retail and e-commerce business, managing Shopify listings, noon marketplace operations, campaign performance and price analysis. Seeking an e-commerce or marketplace operations role in the GCC where multi-platform operational experience can directly add value.
            </p>
          </div>

          {/* CORE SKILLS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 mb-2">
              Core Skills
            </h3>
            <div className="space-y-1.5 text-xs sm:text-[13px] text-stone-700">
              <p>
                <span className="font-bold text-stone-900">Platforms & Operations:</span>{' '}
                E-Commerce Operations • Marketplace Management • Amazon Seller Central • Flipkart • Meesho • Shopify • noon
              </p>
              <p>
                <span className="font-bold text-stone-900">Catalog & Merchandising:</span>{' '}
                Product Listing & Catalog Management • Pricing & Price Analysis • Promotions & Campaign Management • Inventory & Order Management
              </p>
              <p>
                <span className="font-bold text-stone-900">Growth & Advertising:</span>{' '}
                Sales & Performance Reporting • Data Analysis & Filtering • Meta Ads • Product Research & Sourcing • Vendor Management
              </p>
              <p>
                <span className="font-bold text-stone-900">Tools & Content:</span>{' '}
                E-Commerce Merchandising • Product Content & Specifications • Business & Finance Tracking • MS Excel • Google Sheets • MS Word • Photoshop • WordPress
              </p>
            </div>
          </div>

          {/* PROFESSIONAL EXPERIENCE */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 mb-3">
              Professional Experience
            </h3>

            <div className="space-y-5">
              {/* Role 1: Founder Scratch SmartBuilt */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h4 className="text-xs sm:text-[13px] font-bold text-stone-950">
                    Founder | Scratch SmartBuilt{' '}
                    <span className="font-normal text-stone-600">(Independent E-Commerce Business)</span>
                  </h4>
                  <span className="text-xs font-semibold text-stone-600 font-mono">
                    July 2025 – Present
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-stone-700">
                  <li>Own and operate a multi-channel e-commerce business end-to-end, covering strategy, sourcing, listings, pricing, marketing, fulfilment and financial management across Amazon, Flipkart, Meesho and Shopify.</li>
                  <li>Identify and validate profitable products through market research, competitor benchmarking and demand analysis before sourcing decisions.</li>
                  <li>Manage vendor sourcing, quotations and procurement, negotiating terms to protect margin across multiple suppliers.</li>
                  <li>Build and optimize product listings — titles, descriptions, specifications, images and keywords — to improve search visibility and conversion.</li>
                  <li>Set pricing and promotional strategy using competitor and sales-performance data, adjusting margins across marketplaces.</li>
                  <li>Plan, run and optimize Meta Ads campaigns against ROAS and business targets, adjusting spend and creative based on performance.</li>
                  <li>Monitor inventory, order fulfilment and returns across all channels to maintain product availability and service levels.</li>
                  <li>Track business finances, costs and profitability, using Excel/Google Sheets analysis to guide operational decisions.</li>
                </ul>
              </div>

              {/* Role 2: Property Consultant */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h4 className="text-xs sm:text-[13px] font-bold text-stone-950">
                    Property Consultant | HiLite Builders, Calicut
                  </h4>
                  <span className="text-xs font-semibold text-stone-600 font-mono">
                    September 2024 – April 2025
                  </span>
                </div>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-stone-700">
                  <li>Managed the end-to-end sales process for prospective property clients, from lead qualification to closing.</li>
                  <li>Built and maintained client relationships through consistent follow-up, site coordination and needs-based consultation.</li>
                  <li>Negotiated terms on high-value property transactions, contributing to team sales targets.</li>
                </ul>
              </div>

              {/* Role 3: Data Analyst Al Anees IT Solutions */}
              <div className="space-y-1">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between">
                  <h4 className="text-xs sm:text-[13px] font-bold text-stone-950">
                    Data Analyst – E-Commerce Division | Al Anees IT Solutions (Al Anees Qatar)
                  </h4>
                  <span className="text-xs font-semibold text-stone-600 font-mono">
                    March 2023 – July 2024
                  </span>
                </div>
                <p className="text-[11px] italic text-stone-600">
                  Back Office, Kottakkal, Malappuram (Full-time, on-site)
                </p>
                <ul className="list-disc list-outside pl-4 space-y-1 text-xs text-stone-700">
                  <li>Worked full-time, on-site at the company&apos;s back-office team in Kottakkal, Malappuram, supporting e-commerce operations for Al Anees Qatar, a Qatar-based electronics retail and e-commerce business.</li>
                  <li>Managed Phone Booth&apos;s Shopify store listings — product information, pricing and content updates — and noon marketplace listings.</li>
                  <li>Supported campaign management, promotions and online merchandising across marketplace channels.</li>
                  <li>Conducted price analysis, data filtering and sales/performance reporting to surface trends and commercial opportunities.</li>
                  <li>Maintained accuracy and consistency of product, pricing and sales data across all online channels.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* EDUCATION */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 mb-2">
              Education
            </h3>
            <div className="flex justify-between items-baseline text-xs">
              <span className="font-bold text-stone-950">
                Bachelor of Computer Application (BCA)
              </span>
              <span className="text-stone-600 font-medium">
                University of Calicut | 2019 – 2022
              </span>
            </div>
          </div>

          {/* PLATFORMS & TOOLS */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 mb-2">
              Platforms & Tools
            </h3>
            <p className="text-xs text-stone-700">
              Amazon Seller Central • Flipkart • Meesho • Shopify • noon • Meta Ads • Microsoft Excel • Google Sheets • Microsoft Word • Photoshop • WordPress
            </p>
          </div>

          {/* PERSONAL DETAILS & TARGET ROLES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 mb-2">
                Personal Details
              </h3>
              <p className="text-xs text-stone-700">
                <span className="font-bold text-stone-900">Nationality:</span> Indian
              </p>
              <p className="text-xs text-stone-700 mt-1">
                <span className="font-bold text-stone-900">Languages:</span> English, Malayalam, Arabic, Hindi
              </p>
            </div>

            <div>
              <h3 className="text-xs font-bold uppercase tracking-wider text-stone-950 border-b border-stone-300 pb-1 mb-2">
                Target Roles
              </h3>
              <p className="text-xs text-stone-700 leading-relaxed">
                E-Commerce Specialist • E-Commerce Executive • Marketplace Specialist • Marketplace Operations Executive • E-Commerce Analyst • Category / Marketplace Executive • Commerce Operations
              </p>
            </div>
          </div>
        </div>

        {/* Modal Footer with Direct Link */}
        <div className="p-4 sm:px-8 bg-stone-50 border-t border-stone-200 flex items-center justify-between no-print">
          <a
            href="/Arshad_TV_Resume.pdf"
            download="Arshad_TV_Resume.pdf"
            className="text-xs text-stone-600 hover:text-stone-900 flex items-center gap-1.5 font-semibold"
          >
            <ArrowDownToLine className="w-3.5 h-3.5 text-[#FF9F0A]" />
            <span>Direct file link: Arshad_TV_Resume.pdf</span>
          </a>

          <button
            type="button"
            onClick={handleDownload}
            className="px-5 py-2 text-xs font-bold text-[#141311] bg-[#FF9F0A] hover:bg-[#ffaa2b] rounded-full shadow-xs transition-all duration-200 transform hover:scale-105 active:scale-95"
          >
            Download Official CV (PDF)
          </button>
        </div>
      </div>
    </div>
  );
};
