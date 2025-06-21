export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  category: 'data' | 'programming' | 'tools' | 'soft';
  icon: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
  featured: boolean;
  category: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  skills: string[];
}

export interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}