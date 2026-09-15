import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { MarqueeBanner } from './components/MarqueeBanner';
import { AboutSection } from './components/AboutSection';
import { ExperienceSection } from './components/ExperienceSection';
import { ExpertiseSection } from './components/ExpertiseSection';
import { SkillsSection } from './components/SkillsSection';
import { WorkflowSection } from './components/WorkflowSection';
import { ProjectsSection } from './components/ProjectsSection';
import { ApproachAndValuesSection } from './components/ApproachAndValuesSection';
import { EducationSection } from './components/EducationSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ResumeModal } from './components/ResumeModal';
import {
  portfolioProfile,
  experiencesData,
  careerJourneySteps,
  expertiseData,
  skillsCategoriesData,
  workflowStepsData,
  projectsData,
  workApproachSteps,
  whyChooseMePoints,
} from './data';
import { ProjectItem } from './types';
import { DEFAULT_HERO_IMAGE_CONFIG } from './utils/imageConfig';

export default function App() {
  // Theme state: Default to off-white light theme
  const [isDark, setIsDark] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'light') return false;
    // Reset any previous automatic dark mode to off-white
    if (saved === 'dark') {
      localStorage.setItem('theme', 'light');
      return false;
    }
    return false;
  });

  // Active project modal
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  // CV modal
  const [isResumeOpen, setIsResumeOpen] = useState<boolean>(false);

  // Static Hero Image & Brand Icons Configuration
  const heroImageConfig = DEFAULT_HERO_IMAGE_CONFIG;

  // Synchronize dark theme class on document element
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  const handleToggleTheme = () => {
    setIsDark((prev) => !prev);
  };

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F4F2E8] dark:bg-[#111111] text-[#222222] dark:text-[#F4F2E8] transition-colors duration-200 selection:bg-[#F5A400]/30 selection:text-[#111111]">
      {/* Top floating pill navigation */}
      <Navbar
        profile={portfolioProfile}
        onOpenResume={() => setIsResumeOpen(true)}
        isDark={isDark}
        onToggleTheme={handleToggleTheme}
        brandIconUrl={heroImageConfig.brandIconUrl}
        brandIconText={heroImageConfig.brandIconText}
      />

      {/* Main content flow */}
      <main className="relative">
        {/* 1 & 3. Hero Section with Reference Warm Layout */}
        <Hero
          profile={portfolioProfile}
          onOpenResume={() => setIsResumeOpen(true)}
          onOpenProjects={scrollToProjects}
          imageConfig={heroImageConfig}
        />

        {/* Signature Reference Marquee Ticker 1 */}
        <MarqueeBanner />

        {/* 4. About Section */}
        <AboutSection
          profile={portfolioProfile}
          commercialSnapshotIconUrl={heroImageConfig.commercialSnapshotIconUrl}
        />

        {/* 5 & 6. Professional Experience & Career Journey */}
        <ExperienceSection
          experiences={experiencesData}
          careerSteps={careerJourneySteps}
        />

        {/* 7. Core Expertise / Services (Stacked Accordion Pattern) */}
        <ExpertiseSection expertise={expertiseData} />

        {/* Signature Reference Marquee Ticker 2 */}
        <MarqueeBanner
          items={[
            'Shopify Store Architecture',
            'Amazon Advertising & PPC',
            'Flipkart Seller Hub',
            'Meesho Cataloging',
            'noon Fulfillment',
            'Meta Performance ROAS',
            'P&L & Margin Control',
            'Supplier Sourcing',
          ]}
        />

        {/* 8. Technical & Professional Skills */}
        <SkillsSection categories={skillsCategoriesData} />

        {/* 9. E-Commerce Workflow */}
        <WorkflowSection steps={workflowStepsData} />

        {/* 10. Featured Projects */}
        <ProjectsSection
          projects={projectsData}
          onSelectProject={(project) => setSelectedProject(project)}
        />

        {/* 11, 12, 13. Approach, Values & Philosophy */}
        <ApproachAndValuesSection
          profile={portfolioProfile}
          approachSteps={workApproachSteps}
          valueProps={whyChooseMePoints}
        />

        {/* 14. Education */}
        <EducationSection education={portfolioProfile.education} />

        {/* 15. Contact Section */}
        <ContactSection profile={portfolioProfile} />
      </main>

      {/* 16. Footer */}
      <Footer
        profile={portfolioProfile}
        brandIconUrl={heroImageConfig.brandIconUrl}
        brandIconText={heroImageConfig.brandIconText}
      />

      {/* Modals */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
        profile={portfolioProfile}
        experiences={experiencesData}
        projects={projectsData}
        skills={skillsCategoriesData}
      />
    </div>
  );
}
