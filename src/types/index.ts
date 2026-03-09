export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  gradientFrom: string;
  gradientTo: string;
  imageUrl?: string;
  demoUrl?: string;
  repoUrl?: string;
  featured: boolean;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: { start: string; end: string };
  description: string;
  responsibilities: string[];
  technologies: string[];
  location: string;
}

export interface SkillCategory {
  id: string;
  name: string;
  icon: string;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: string;
  bio: string;
  email: string;
  phone: string;
  location: string;
  linkedin: string;
  github: string;
  resume: string
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}
