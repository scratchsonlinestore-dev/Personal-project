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
    <div className="w-full bg-[#EFECE3] dark:bg-[#181715] text-[#141311] dark:text-[#FAF6EE] py-4 border-y border-[#EDE7D9] dark:border-stone-800 overflow-hidden select-none relative shadow-2xs">
      <div className="animate-marquee flex items-center gap-6 whitespace-nowrap">
        {repeated.map((item, idx) => (
          <div key={idx} className="flex items-center gap-6">
            <span className="text-xs sm:text-sm font-bold uppercase tracking-widest text-[#141311] dark:text-[#FAF6EE]">
              {item}
            </span>
            <span className="text-[#FF9F0A] font-bold text-sm select-none">
              +
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};
