export interface Profile {
  name: string;
  title: string;
  secondaryPositioning: string;
  tagline: string;
  badge: string;
  intro: string[];
  supportingKeywords: string[];
  aboutText: string[];
  quickProfile: {
    currentRole: string;
    experienceAreas: string;
    platforms: string[];
    tools: string[];
  };
  email: string;
  phone: string;
  linkedin: string;
  instagram: string;
  facebook: string;
  location?: string;
  relocation?: string;
  languages?: string[];
  targetRoles?: string[];
  education: {
    degree: string;
    field: string;
    description: string;
  };
  brandStatement: string;
  brandPillars: {
    title: string;
    description: string;
  }[];
}

export interface ResponsibilitySection {
  title: string;
  points: string[];
}

export interface Experience {
  id: string;
  number: string;
  role: string;
  company: string;
  location?: string;
  type?: string;
  period: string;
  summary: string;
  responsibilities?: ResponsibilitySection[];
  platformsAndSkills?: string[];
  bullets?: string[];
  achievement?: string;
  skills?: string[];
}

export interface CareerStep {
  year: string;
  role: string;
  company?: string;
  description: string;
}

export interface HeroImageConfig {
  imageUrl: string;
  presetKey: 'custom' | 'studio' | 'suit';
  alignment: 'left' | 'center' | 'right';
  layoutStyle: 'side-by-side' | 'stacked';
  width: number;
  height: number;
  scale: number;
  borderRadius: number;
  offsetX: number;
  offsetY: number;
  objectFit: 'cover' | 'contain';
  objectPositionY: number; // 0 to 100%
  shadow: 'none' | 'soft' | 'deep' | 'amber';
  border: 'none' | 'thin' | 'amber' | 'bold';
  showBadge: boolean;
  badgeText: string;
  showFrame: boolean;
  showTextOverlay: boolean;
}

export interface ExpertiseItem {
  id: string;
  number: string;
  title: string;
  description: string;
  focusAreas?: string[];
  platforms?: string[];
  skills?: string[];
  tools?: string[];
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface WorkflowStep {
  step: string;
  title: string;
  subtitle: string;
  details: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  type: string;
  description: string;
  platforms?: string[];
  skills?: string[];
  technologies?: string[];
  responsibilities?: string[];
  buttonText: string;
  highlights?: string[];
}

export interface WorkApproachStep {
  title: string;
  description: string;
}

export interface ValueProp {
  title: string;
  description: string;
}
