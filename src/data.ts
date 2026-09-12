import {
  Profile,
  Experience,
  CareerStep,
  ExpertiseItem,
  SkillCategory,
  WorkflowStep,
  ProjectItem,
  WorkApproachStep,
  ValueProp,
} from './types';

export const portfolioProfile: Profile = {
  name: "Arshad TV",
  title: "E-Commerce & Digital Trading Specialist",
  secondaryPositioning: "E-Commerce Operations • Marketplace Management • Shopify • Meta Ads • Analytics",
  tagline: "I Build, Manage & Grow E-Commerce Businesses.",
  badge: "E-Commerce & Digital Trading Specialist",
  intro: [
    "I'm Arshad TV, an E-Commerce & Digital Trading Specialist with hands-on experience across e-commerce operations, marketplace management, Shopify, digital marketing and business analytics.",
    "I work across the complete e-commerce journey — from product research and sourcing to listings, pricing, promotions, advertising, fulfilment, financial tracking and performance analysis."
  ],
  supportingKeywords: [
    "E-Commerce",
    "Marketplace Operations",
    "Shopify",
    "Meta Ads",
    "Data Analysis"
  ],
  aboutText: [
    "I'm an E-Commerce & Digital Trading Specialist with practical experience in building, managing and analyzing online businesses.",
    "My experience combines e-commerce operations, marketplace management, Shopify, digital marketing, sales and data analysis.",
    "As the founder of an independent e-commerce business, I manage the complete business cycle — including product research, sourcing, procurement, product listings, pricing, promotions, advertising, inventory, fulfilment and profitability.",
    "I also have professional experience supporting e-commerce operations for a Qatar-based electronics retail and e-commerce business, where I worked with Shopify, noon marketplace, product data, pricing analysis and sales reporting.",
    "My approach is focused on practical execution, data-driven decisions and continuous optimization."
  ],
  quickProfile: {
    currentRole: "Founder — Scratch SmartBuilt",
    experienceAreas: "E-Commerce • Marketplaces • Shopify • Digital Marketing • Data Analysis",
    platforms: ["Amazon", "Flipkart", "Meesho", "Shopify", "noon"],
    tools: ["Excel", "Google Sheets", "Meta Ads", "Shopify Liquid"]
  },
  email: "arshadtv777@gmail.com",
  phone: "+91 6235944644",
  linkedin: "https://www.linkedin.com/in/arshad-tv-250889308/",
  instagram: "https://www.instagram.com/arshad_tv_777?stkn=bHl2bjAwOXN1NHRi",
  facebook: "https://www.facebook.com/share/19Ht5uWe4u/",
  location: "Malappuram, Kerala, India",
  relocation: "Open to relocation — GCC / Middle East",
  languages: ["English", "Malayalam", "Arabic", "Hindi"],
  targetRoles: [
    "E-Commerce Specialist",
    "E-Commerce Executive",
    "Marketplace Specialist",
    "Marketplace Operations Executive",
    "E-Commerce Analyst",
    "Category / Marketplace Executive",
    "Commerce Operations"
  ],
  education: {
    degree: "Bachelor of Computer Applications — BCA",
    field: "Computer Applications",
    description: "Academic background in computer applications supporting my technical understanding of web technologies, software and digital systems."
  },
  brandStatement: "I don't just manage an online store. I look at the entire business behind it.",
  brandPillars: [
    {
      title: "E-Commerce",
      description: "Building and managing high-converting online businesses end-to-end."
    },
    {
      title: "Technology",
      description: "Using Shopify and modern web technologies to create practical, high-impact digital solutions."
    },
    {
      title: "Data",
      description: "Turning business, pricing and customer data into actionable insights for profitable growth."
    },
    {
      title: "Growth",
      description: "Improving products, marketing campaigns and operations through continuous, iterative optimization."
    }
  ]
};

export const experiencesData: Experience[] = [
  {
    id: "exp-scratch-smartbuilt",
    number: "01",
    role: "Founder",
    company: "Scratch SmartBuilt",
    type: "Independent E-Commerce Business",
    period: "July 2025 – Present",
    summary: "Own and operate a multi-channel e-commerce business end-to-end, covering strategy, sourcing, listings, pricing, marketing, fulfilment and financial management across Amazon, Flipkart, Meesho and Shopify.",
    responsibilities: [
      {
        title: "Product Research & Validation",
        points: [
          "Identify and validate profitable products through market research.",
          "Conduct competitor benchmarking.",
          "Analyze demand before making sourcing decisions."
        ]
      },
      {
        title: "Sourcing & Procurement",
        points: [
          "Manage vendor sourcing and quotations.",
          "Coordinate procurement across multiple suppliers.",
          "Negotiate supplier terms to protect margins."
        ]
      },
      {
        title: "Product Listings",
        points: [
          "Create and optimize product listings.",
          "Manage titles, descriptions and specifications.",
          "Optimize product images and keywords.",
          "Improve search visibility and conversion."
        ]
      },
      {
        title: "Pricing & Promotions",
        points: [
          "Set marketplace pricing strategies.",
          "Analyze competitor pricing.",
          "Use sales-performance data to adjust pricing.",
          "Manage promotional strategies across marketplaces."
        ]
      },
      {
        title: "Meta Advertising",
        points: [
          "Plan and run Meta Ads campaigns.",
          "Monitor ROAS and business targets.",
          "Adjust advertising spend based on performance.",
          "Test and optimize creatives."
        ]
      },
      {
        title: "Operations",
        points: [
          "Monitor inventory.",
          "Manage order fulfilment.",
          "Track returns.",
          "Maintain product availability and service levels."
        ]
      },
      {
        title: "Financial Management",
        points: [
          "Track business costs and expenses.",
          "Monitor profitability.",
          "Analyze business performance using Excel and Google Sheets."
        ]
      }
    ],
    platformsAndSkills: ["Amazon", "Flipkart", "Meesho", "Shopify", "Meta Ads"]
  },
  {
    id: "exp-hilite-builders",
    number: "02",
    role: "Property Consultant",
    company: "HiLite Builders",
    location: "Calicut",
    period: "September 2024 – April 2025",
    summary: "Managed the end-to-end sales process for prospective property clients, from lead qualification to closing.",
    responsibilities: [
      {
        title: "Key Sales & Advisory Responsibilities",
        points: [
          "Managed prospective client leads.",
          "Qualified leads based on customer requirements.",
          "Built and maintained client relationships.",
          "Conducted consistent client follow-ups.",
          "Coordinated property site visits.",
          "Provided needs-based consultation.",
          "Negotiated terms on high-value property transactions.",
          "Contributed to team sales targets."
        ]
      }
    ],
    platformsAndSkills: ["Sales", "Lead Management", "Client Relations", "Negotiation", "Follow-up", "Consultation"]
  },
  {
    id: "exp-al-anees",
    number: "03",
    role: "Data Analyst – E-Commerce Division",
    company: "Al Anees IT Solutions | Al Anees Qatar",
    location: "Back Office, Kottakkal, Malappuram",
    type: "Full-time • On-site",
    period: "March 2023 – July 2024",
    summary: "Worked full-time, on-site with the company's back-office team in Kottakkal, Malappuram, supporting e-commerce operations for Al Anees Qatar, a Qatar-based electronics retail and e-commerce business.",
    responsibilities: [
      {
        title: "Shopify Operations",
        points: [
          "Managed Phone Booth's Shopify store listings.",
          "Updated product information.",
          "Managed pricing updates.",
          "Maintained product content."
        ]
      },
      {
        title: "Marketplace Operations",
        points: [
          "Managed noon marketplace listings.",
          "Supported marketplace merchandising.",
          "Maintained product and pricing information."
        ]
      },
      {
        title: "Campaign & Promotions",
        points: [
          "Supported campaign management.",
          "Assisted with promotional activities.",
          "Supported online merchandising across marketplace channels."
        ]
      },
      {
        title: "Data Analysis",
        points: [
          "Conducted price analysis.",
          "Performed data filtering.",
          "Prepared sales and performance reports.",
          "Identified trends and commercial opportunities."
        ]
      },
      {
        title: "Data Management",
        points: [
          "Maintained product data accuracy.",
          "Maintained pricing data.",
          "Maintained sales data consistency across online channels."
        ]
      }
    ],
    platformsAndSkills: [
      "Shopify",
      "noon",
      "E-Commerce Operations",
      "Data Analysis",
      "Pricing Analysis",
      "Sales Reporting"
    ]
  }
];

export const careerJourneySteps: CareerStep[] = [
  {
    year: "2023",
    role: "Data Analyst – E-Commerce Division",
    company: "Al Anees Qatar",
    description: "Started with e-commerce data, marketplace operations, Shopify listings and performance reporting."
  },
  {
    year: "2024",
    role: "Property Consultant",
    company: "HiLite Builders",
    description: "Expanded professional experience into sales, client management, negotiation and business development."
  },
  {
    year: "2025 – Present",
    role: "Founder",
    company: "Scratch SmartBuilt",
    description: "Moved into independent e-commerce entrepreneurship and full business ownership."
  }
];

export const expertiseData: ExpertiseItem[] = [
  {
    id: "exp-operations",
    number: "01",
    title: "E-Commerce Operations",
    description: "Manage day-to-day online business operations from product research and sourcing to listings, pricing, fulfilment and profitability.",
    focusAreas: [
      "Product Research",
      "Product Sourcing",
      "Catalog Management",
      "Product Listings",
      "Pricing",
      "Promotions",
      "Inventory",
      "Order Fulfilment",
      "Returns",
      "Profitability"
    ]
  },
  {
    id: "exp-marketplace",
    number: "02",
    title: "Marketplace Management",
    description: "Manage and optimize product presence across major e-commerce marketplaces to maximize visibility and orders.",
    platforms: ["Amazon", "Flipkart", "Meesho", "Shopify", "noon"],
    focusAreas: [
      "Marketplace Listings",
      "Catalog Management",
      "Pricing",
      "Keywords",
      "Promotions",
      "Inventory",
      "Sales Performance"
    ]
  },
  {
    id: "exp-shopify",
    number: "03",
    title: "Shopify",
    description: "Customize and manage Shopify stores with a focus on product presentation, usability and e-commerce performance.",
    skills: [
      "Shopify",
      "Shopify Liquid",
      "Product Management",
      "Theme Customization",
      "HTML",
      "CSS",
      "JavaScript"
    ]
  },
  {
    id: "exp-meta-ads",
    number: "04",
    title: "Meta Ads",
    description: "Plan, launch and optimize Meta advertising campaigns based on business objectives and performance.",
    focusAreas: [
      "Campaign Setup",
      "Audience Targeting",
      "Creative Testing",
      "ROAS Monitoring",
      "Retargeting",
      "Performance Optimization"
    ]
  },
  {
    id: "exp-analytics",
    number: "05",
    title: "Data & Analytics",
    description: "Use business and sales data to identify trends, evaluate performance and support better decisions.",
    tools: [
      "Microsoft Excel",
      "Google Sheets",
      "Sales Reports",
      "Price Analysis",
      "Data Filtering",
      "Performance Analysis"
    ]
  },
  {
    id: "exp-sales",
    number: "06",
    title: "Sales & Business Development",
    description: "Experience managing customer relationships, sales processes, follow-ups and negotiations.",
    focusAreas: [
      "Lead Qualification",
      "Customer Communication",
      "Sales Follow-up",
      "Client Management",
      "Negotiation",
      "Closing"
    ]
  }
];

export const skillsCategoriesData: SkillCategory[] = [
  {
    category: "E-Commerce",
    items: [
      "E-Commerce Operations",
      "Marketplace Management",
      "Product Research",
      "Product Sourcing",
      "Catalog Management",
      "Product Listing Optimization",
      "Pricing Management",
      "Promotional Management",
      "Inventory Management",
      "Order Management",
      "Returns Management",
      "Profitability Tracking"
    ]
  },
  {
    category: "Marketplace Platforms",
    items: [
      "Amazon",
      "Flipkart",
      "Meesho",
      "Shopify",
      "noon"
    ]
  },
  {
    category: "Digital Marketing",
    items: [
      "Meta Ads",
      "Facebook Ads",
      "Instagram Ads",
      "Campaign Management",
      "Audience Targeting",
      "Retargeting",
      "Creative Testing",
      "ROAS Monitoring"
    ]
  },
  {
    category: "Shopify & Web",
    items: [
      "Shopify",
      "Shopify Liquid",
      "HTML",
      "CSS",
      "JavaScript",
      "Theme Customization"
    ]
  },
  {
    category: "Data & Analytics",
    items: [
      "Microsoft Excel",
      "Google Sheets",
      "Data Filtering",
      "Price Analysis",
      "Sales Analysis",
      "Performance Reporting"
    ]
  },
  {
    category: "Business Skills",
    items: [
      "Sales",
      "Negotiation",
      "Vendor Management",
      "Client Management",
      "Procurement",
      "Business Operations",
      "Financial Tracking"
    ]
  }
];

export const workflowStepsData: WorkflowStep[] = [
  {
    step: "01",
    title: "Research",
    subtitle: "Market & competitor research",
    details: "Thorough market gap assessment, catalog benchmarking, customer sentiment analysis, and category exploration."
  },
  {
    step: "02",
    title: "Validate",
    subtitle: "Demand & profitability analysis",
    details: "Validating search volumes, unit economics, marketplace commission overheads, and net profit margins."
  },
  {
    step: "03",
    title: "Source",
    subtitle: "Vendor sourcing & procurement",
    details: "Negotiating wholesale quotes with reliable manufacturers, sample quality checks, and lead-time coordination."
  },
  {
    step: "04",
    title: "List",
    subtitle: "Product content & marketplace listings",
    details: "High-converting titles, benefit-driven bullets, keyword-rich descriptions, and clean visual assets."
  },
  {
    step: "05",
    title: "Price",
    subtitle: "Pricing & promotional strategy",
    details: "Marketplace algorithm positioning, tiered discounts, coupon campaigns, and dynamic competitive repricing."
  },
  {
    step: "06",
    title: "Market",
    subtitle: "Meta Ads & promotional campaigns",
    details: "Targeted Facebook & Instagram ads, creative testing, custom retargeting funnels, and ROAS monitoring."
  },
  {
    step: "07",
    title: "Sell",
    subtitle: "Orders & fulfilment",
    details: "Fast inventory staging, shipping logistics, customer tracking notifications, and return mitigation."
  },
  {
    step: "08",
    title: "Analyze",
    subtitle: "Sales & profitability analysis",
    details: "Spreadsheet financial models, return rates, cost-per-acquisition (CPA), and net margin reconciliations."
  },
  {
    step: "09",
    title: "Optimize",
    subtitle: "Improve products, pricing and performance",
    details: "Continuous feedback integration, catalog pruning, supplier re-negotiation, and scaled marketing budgets."
  }
];

export const projectsData: ProjectItem[] = [
  {
    id: "proj-scratch-smartbuilt",
    number: "Project 01",
    title: "Scratch SmartBuilt — Multi-Channel E-Commerce",
    type: "E-Commerce Business",
    description: "An independently operated multi-channel e-commerce business covering product research, sourcing, procurement, marketplace listings, pricing, marketing, fulfilment and financial management.",
    platforms: ["Amazon", "Flipkart", "Meesho", "Shopify"],
    responsibilities: [
      "Product research",
      "Product sourcing",
      "Vendor management",
      "Product listings",
      "Pricing",
      "Promotions",
      "Meta Ads",
      "Inventory",
      "Fulfilment",
      "Financial tracking"
    ],
    buttonText: "View Case Study",
    highlights: [
      "End-to-end multi-marketplace architecture serving customers nationwide",
      "Direct supplier negotiation protecting healthy gross margins",
      "Continuous Meta Ads performance testing to maintain positive ROAS"
    ]
  },
  {
    id: "proj-shopify-store",
    number: "Project 02",
    title: "Shopify Store Management",
    type: "Shopify / E-Commerce",
    description: "Managed Shopify store products, product information, pricing and content updates as part of professional e-commerce operations.",
    skills: ["Shopify", "Product Management", "Pricing", "Content Management"],
    buttonText: "View Project",
    highlights: [
      "Accurate catalog taxonomy and product variant management",
      "Seamless price and promotional schedule rollouts",
      "Enhanced product presentation driving improved session duration"
    ]
  },
  {
    id: "proj-marketplace-ops",
    number: "Project 03",
    title: "Marketplace Operations",
    type: "Marketplace Management",
    description: "Managed and supported product listings, pricing, promotions and merchandising across online marketplace channels.",
    platforms: ["Amazon", "Flipkart", "Meesho", "noon"],
    buttonText: "View Case Study",
    highlights: [
      "Marketplace search visibility optimization via keyword placement",
      "Synchronized promotional campaigns across multiple platforms",
      "Maintained zero stockout incidents through strict inventory monitoring"
    ]
  },
  {
    id: "proj-data-analytics",
    number: "Project 04",
    title: "E-Commerce Data Analysis",
    type: "Analytics",
    description: "Analyzed pricing, product and sales-performance data to identify trends and commercial opportunities.",
    skills: ["Excel", "Google Sheets", "Data Analysis", "Price Analysis", "Sales Reporting"],
    buttonText: "View Case Study",
    highlights: [
      "Structured competitive price benchmarking models",
      "Comprehensive weekly & monthly sales and return rate reports",
      "Identified underperforming SKUs to reallocate inventory capital"
    ]
  },
  {
    id: "proj-meta-ads",
    number: "Project 05",
    title: "Meta Ads Campaign Management",
    type: "Digital Marketing",
    description: "Planned and optimized Meta Ads campaigns based on business objectives, ROAS targets and campaign performance.",
    skills: ["Meta Ads", "Campaign Management", "Creative Testing", "ROAS Analytics"],
    buttonText: "View Campaign",
    highlights: [
      "Audience segmentation and interest-based behavioral targeting",
      "A/B creative testing of video hooks, carousels, and copy angles",
      "Budget reallocation toward high-converting ad sets"
    ]
  },
  {
    id: "proj-shopify-theme",
    number: "Project 06",
    title: "Shopify Theme Customization",
    type: "Web Development",
    description: "Customized Shopify storefront experiences using Liquid, HTML, CSS and JavaScript.",
    technologies: ["Shopify Liquid", "HTML", "CSS", "JavaScript"],
    buttonText: "View Project",
    highlights: [
      "Custom section and block creation in Shopify Liquid",
      "Responsive layout refinements for frictionless mobile checkout",
      "Page speed and lightweight script optimizations"
    ]
  }
];

export const workApproachSteps: WorkApproachStep[] = [
  {
    title: "Understand",
    description: "Understand the business, product, customer and objective thoroughly before taking action."
  },
  {
    title: "Analyze",
    description: "Study market conditions, competitors, pricing dynamics and past performance data."
  },
  {
    title: "Execute",
    description: "Implement practical, high-standard e-commerce, marketing or technical solutions."
  },
  {
    title: "Measure",
    description: "Track sales, performance, operational costs and other critical commercial metrics."
  },
  {
    title: "Optimize",
    description: "Continuously improve based on real-world results, feedback and analytics."
  }
];

export const whyChooseMePoints: ValueProp[] = [
  {
    title: "Practical E-Commerce Experience",
    description: "Experience across real e-commerce operations, marketplaces and an independently operated online business."
  },
  {
    title: "Business + Technology",
    description: "Combine commercial e-commerce knowledge with Shopify Liquid and web development skills."
  },
  {
    title: "Data-Driven Decisions",
    description: "Use sales, pricing and performance data to guide every operational and promotional decision."
  },
  {
    title: "End-to-End Understanding",
    description: "Understand the complete journey from product research and sourcing to sales and profitability."
  },
  {
    title: "Multi-Platform Experience",
    description: "Hands-on exposure and proven workflows across Amazon, Flipkart, Meesho, Shopify and noon."
  },
  {
    title: "Entrepreneurial Mindset",
    description: "Experience managing an e-commerce business independently from strategy through execution."
  }
];
