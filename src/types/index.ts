export interface PersonalInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  cv: string;
}

export interface Education {
  faculty: string;
  major: string;
  graduationYear: number;
}

export interface TechStack {
  backend: string[];
  architecture: string[];
  frontend: string[];
  devops: string[];
  security: string[];
  languages: string[];
}

export interface ExperienceProject {
  label: string;
  href?: string;
}

export interface Experience {
  company: string;
  role: string;
  period?: string;
  startDate?: Date;
  location?: string;
  projects: ExperienceProject[];
  responsibilities: string[];
  technologies?: string[];
}

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  link?: string;
  businessProblem?: string;
  solution: string;
  technicalHighlights: string[];
  impact?: string;
  technologies: string[];
  metrics?: {
    label: string;
    value: string;
  }[];
}

export interface EngineeringPrinciple {
  title: string;
  description: string;
  icon: string;
}

export interface SectionProps {
  id?: string;
  className?: string;
}
