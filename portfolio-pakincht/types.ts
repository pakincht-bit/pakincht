export interface Experience {
  id: string;
  period: string;
  role: string;
  company: string;
  description: string;
  skills: string[];
  link?: string;
}

export interface ProjectDetailContent {
  sectionTitle: string;
  content: string;
  image?: string;
  images?: string[];
  points?: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  logo?: string; // Optional logo/icon for the project
  technologies: string[];
  year: string;
  cardBgColor?: string;
  link?: string;
  stats?: {
    label: string;
    value: string;
  }[];
  details?: {
    overview: string;
    goal?: string;
    roleDescription?: string;
    challenge?: string;
    solution?: string;
    impact?: string;
    process?: ProjectDetailContent[];
    features?: {
      title: string;
      description: string;
      image?: string;
    }[];
  };
}

export interface SideProject {
  id: string;
  title: string;
  description: string;
  category: string;
  link?: string;
  image?: string;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}