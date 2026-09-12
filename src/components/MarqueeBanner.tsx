import React from 'react';

interface MarqueeBannerProps {
  items?: string[];
}

export const MarqueeBanner: React.FC<MarqueeBannerProps> = ({
  items = [
    'E-Commerce Operations',
    'Marketplace Management',
    'Shopify Development',
    'Meta Ads & ROAS',
    'Data & Performance Analytics',
    'Amazon & Flipkart',
    'Catalog & Inventory Scaling',
    'noon Trading (GCC)',
  ],
}) => {
  const safeItems = items && items.length > 0 ? items : [
    'E-Commerce Operations',
    'Marketplace Management',
    'Shopify Development',
    'Meta Ads & ROAS',
    'Data & Performance Analytics',
    'Amazon & Flipkart',
    'Catalog & Inventory Scaling',
    'noon Trading (GCC)',
  ];
  // Duplicate list to create a seamless infinite marquee
  const repeated = [...safeItems, ...safeItems, ...safeItems, ...safeItems];

  return (
    <div className="w-full bg-[#111111] text-[#FFFFFF] py-4 border-y border-[#111111] overflow-hidden select-none relative shadow-sm">
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#FFFFFF]">
              {item}
            </span>
            <span className="text-[#F5A400] font-bold text-sm select-none">
              ✦
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
