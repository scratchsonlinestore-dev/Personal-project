import { jsPDF } from 'jspdf';

export function downloadOfficialResume() {
  try {
    // Direct trigger for the pre-generated static PDF
    const link = document.createElement('a');
    link.href = '/Arshad_TV_Resume.pdf';
    link.download = 'Arshad_TV_Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (err) {
    console.error('Direct download failed, generating client-side PDF', err);
    generateClientPDF();
  }
}

export function generateClientPDF() {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'pt',
    format: 'a4'
  });

  const pageWidth = doc.internal.pageSize.getWidth();
  const margin = 40;
  const contentWidth = pageWidth - margin * 2;

  let y = 45;

  // Header
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.setTextColor(20, 20, 20);
  doc.text('ARSHAD TV', pageWidth / 2, y, { align: 'center' });

  y += 18;
  doc.setFontSize(10.5);
  doc.setFont('helvetica', 'bold');
  doc.setTextColor(40, 40, 40);
  doc.text('E-COMMERCE & MARKETPLACE OPERATIONS SPECIALIST', pageWidth / 2, y, { align: 'center' });

  y += 15;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(70, 70, 70);
  doc.text('Malappuram, Kerala, India  |  +91 6235944644  |  arshadtv777@gmail.com', pageWidth / 2, y, { align: 'center' });

  y += 13;
  doc.text('linkedin.com/in/arshad-tv-250889308  |  Open to relocation — GCC / Middle East', pageWidth / 2, y, { align: 'center' });

  y += 12;
  doc.setDrawColor(210, 210, 210);
  doc.setLineWidth(0.75);
  doc.line(margin, y, pageWidth - margin, y);

  function addSectionTitle(title: string) {
    y += 18;
    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(title.toUpperCase(), margin, y);
    y += 4;
    doc.setDrawColor(30, 41, 59);
    doc.setLineWidth(1);
    doc.line(margin, y, pageWidth - margin, y);
    y += 12;
  }

  // PROFILE SUMMARY
  addSectionTitle('Profile Summary');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  const summaryText = "E-commerce and marketplace operations professional with hands-on experience across Amazon, Flipkart, Meesho, Shopify and noon, covering catalog, pricing, promotions, inventory, marketing and performance reporting. Currently runs the complete e-commerce lifecycle as Founder of an independent online retail business — sourcing, vendor management, listings, pricing, Meta Ads, fulfilment, finance tracking and performance optimization — building strong commercial judgement and data-driven decision-making across functions. Previously worked full-time, on-site at a back-office team in Kottakkal, Malappuram, as a Data Analyst supporting a Qatar-based electronics retail and e-commerce business, managing Shopify listings, noon marketplace operations, campaign performance and price analysis. Seeking an e-commerce or marketplace operations role in the GCC where multi-platform operational experience can directly add value.";
  const splitSummary = doc.splitTextToSize(summaryText, contentWidth);
  doc.text(splitSummary, margin, y);
  y += splitSummary.length * 11 + 4;

  // CORE SKILLS
  addSectionTitle('Core Skills');
  const skills = [
    "E-Commerce Operations  •  Marketplace Management  •  Amazon Seller Central  •  Flipkart  •  Meesho  •  Shopify  •  noon",
    "Product Listing & Catalog Management  •  Pricing & Price Analysis  •  Promotions & Campaign Management  •  Inventory & Order Management",
    "Sales & Performance Reporting  •  Data Analysis & Filtering  •  Meta Ads  •  Product Research & Sourcing  •  Vendor Management",
    "E-Commerce Merchandising  •  Product Content & Specifications  •  Business & Finance Tracking  •  MS Excel  •  Google Sheets  •  MS Word  •  Photoshop  •  WordPress"
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(40, 40, 40);
  skills.forEach(skillLine => {
    doc.text(skillLine, margin, y);
    y += 12;
  });
  y += 4;

  // PROFESSIONAL EXPERIENCE
  addSectionTitle('Professional Experience');

  // Role 1
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Founder  |  Scratch SmartBuilt (Independent E-Commerce Business)', margin, y);
  y += 12;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(80, 80, 80);
  doc.text('July 2025 – Present', margin, y);
  y += 11;

  const role1Bullets = [
    "Own and operate a multi-channel e-commerce business end-to-end, covering strategy, sourcing, listings, pricing, marketing, fulfilment and financial management across Amazon, Flipkart, Meesho and Shopify.",
    "Identify and validate profitable products through market research, competitor benchmarking and demand analysis before sourcing decisions.",
    "Manage vendor sourcing, quotations and procurement, negotiating terms to protect margin across multiple suppliers.",
    "Build and optimize product listings — titles, descriptions, specifications, images and keywords — to improve search visibility and conversion.",
    "Set pricing and promotional strategy using competitor and sales-performance data, adjusting margins across marketplaces.",
    "Plan, run and optimize Meta Ads campaigns against ROAS and business targets, adjusting spend and creative based on performance.",
    "Monitor inventory, order fulfilment and returns across all channels to maintain product availability and service levels.",
    "Track business finances, costs and profitability, using Excel/Google Sheets analysis to guide operational decisions."
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(45, 45, 45);
  role1Bullets.forEach(b => {
    const bulletLines = doc.splitTextToSize(b, contentWidth - 14);
    doc.text('•', margin + 2, y);
    doc.text(bulletLines, margin + 12, y);
    y += bulletLines.length * 10.5 + 2.5;
  });

  y += 6;

  // Role 2
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Property Consultant  |  HiLite Builders, Calicut', margin, y);
  y += 12;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(80, 80, 80);
  doc.text('September 2024 – April 2025', margin, y);
  y += 11;

  const role2Bullets = [
    "Managed the end-to-end sales process for prospective property clients, from lead qualification to closing.",
    "Built and maintained client relationships through consistent follow-up, site coordination and needs-based consultation.",
    "Negotiated terms on high-value property transactions, contributing to team sales targets."
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.2);
  doc.setTextColor(45, 45, 45);
  role2Bullets.forEach(b => {
    const bulletLines = doc.splitTextToSize(b, contentWidth - 14);
    doc.text('•', margin + 2, y);
    doc.text(bulletLines, margin + 12, y);
    y += bulletLines.length * 10.5 + 2.5;
  });

  // PAGE 2
  doc.addPage();
  y = 45;

  // Role 3
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Data Analyst – E-Commerce Division  |  Al Anees IT Solutions (Al Anees Qatar)', margin, y);
  y += 12;

  doc.setFont('helvetica', 'italic');
  doc.setFontSize(8.5);
  doc.setTextColor(80, 80, 80);
  doc.text('March 2023 – July 2024  |  Back Office, Kottakkal, Malappuram (Full-time, on-site)', margin, y);
  y += 12;

  const role3Bullets = [
    "Worked full-time, on-site at the company's back-office team in Kottakkal, Malappuram, supporting e-commerce operations for Al Anees Qatar, a Qatar-based electronics retail and e-commerce business.",
    "Managed Phone Booth's Shopify store listings — product information, pricing and content updates — and noon marketplace listings.",
    "Supported campaign management, promotions and online merchandising across marketplace channels.",
    "Conducted price analysis, data filtering and sales/performance reporting to surface trends and commercial opportunities.",
    "Maintained accuracy and consistency of product, pricing and sales data across all online channels."
  ];

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.3);
  doc.setTextColor(45, 45, 45);
  role3Bullets.forEach(b => {
    const bulletLines = doc.splitTextToSize(b, contentWidth - 14);
    doc.text('•', margin + 2, y);
    doc.text(bulletLines, margin + 12, y);
    y += bulletLines.length * 11 + 3;
  });

  y += 10;

  // EDUCATION
  addSectionTitle('Education');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(9.5);
  doc.setTextColor(15, 23, 42);
  doc.text('Bachelor of Computer Application (BCA)', margin, y);
  y += 12;
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(80, 80, 80);
  doc.text('University of Calicut  |  2019 – 2022', margin, y);
  y += 16;

  // PLATFORMS & TOOLS
  addSectionTitle('Platforms & Tools');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(45, 45, 45);
  doc.text('Amazon Seller Central  •  Flipkart  •  Meesho  •  Shopify  •  noon  •  Meta Ads  •  Microsoft Excel  •  Google Sheets  •  Microsoft Word  •  Photoshop  •  WordPress', margin, y);
  y += 16;

  // PERSONAL DETAILS
  addSectionTitle('Personal Details');
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(8.5);
  doc.setTextColor(45, 45, 45);
  doc.text('Nationality: ', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.text('Indian', margin + 60, y);
  y += 13;

  doc.setFont('helvetica', 'bold');
  doc.text('Languages: ', margin, y);
  doc.setFont('helvetica', 'normal');
  doc.text('English, Malayalam, Arabic, Hindi', margin + 60, y);
  y += 18;

  // TARGET ROLES
  addSectionTitle('Target Roles');
  doc.setFont('helvetica', 'normal');
  doc.setFontSize(8.5);
  doc.setTextColor(45, 45, 45);
  const targetRoles = 'E-Commerce Specialist  •  E-Commerce Executive  •  Marketplace Specialist  •  Marketplace Operations Executive  •  E-Commerce Analyst  •  Category / Marketplace Executive  •  Commerce Operations';
  const splitRoles = doc.splitTextToSize(targetRoles, contentWidth);
  doc.text(splitRoles, margin, y);

  doc.save('Arshad_TV_Resume.pdf');
}
