export interface PersonalInfo {
  name: string;
  shortName: string;
  title: string;
  location: string;
  email: string;
  phone: string;
  cvPath: string;
}

export interface HeroContent {
  headline: string;
  subtitle: string;
  cta: {
    downloadCV: string;
    contact: string;
  };
}

export interface AboutContent {
  summary: string;
  location: string;
}

export interface Skill {
  name: string;
  proficiency: number;
  icon: string;
}

export interface Language {
  name: string;
  level: string;
  proficiency: number;
}

export interface SkillsContent {
  technical: Skill[];
  languages: Language[];
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  responsibilities: string[];
}

export interface Education {
  id: number;
  degree: string;
  institution: string;
  location: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface ContactForm {
  name: string;
  email: string;
  message: string;
}

export interface ContactContent {
  title: string;
  subtitle: string;
  form: {
    name: string;
    email: string;
    message: string;
    submit: string;
    sending: string;
    success: string;
    error: string;
  };
}

export interface SEOContent {
  baseUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string;
  author: string;
  ogImage: string;
}

export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  codeUrl: string;
  featured: boolean;
}

export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  image: string;
  tags: string[];
  url: string;
}

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  avatar: string;
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface Achievement {
  count: number;
  label: string;
  suffix?: string;
  icon: string;
}

export interface Certification {
  title: string;
  issuer: string;
  date: string;
  badge: string;
}

export interface Skill {
  name: string;
  proficiency: number;
  icon: string;
}

// ... (skipping unchanged interfaces)

export interface ProfileContent {
  personal: PersonalInfo;
  hero: HeroContent;
  about: AboutContent;
  biography: string;
  skills: SkillsContent;
  experience: Experience[];
  education: Education[];
  contact: ContactContent;
  seo: SEOContent;
  projects: Project[];
  blogs: Blog[];
  testimonials: Testimonial[];
  faqs: FAQ[];
  certifications: Certification[];
  achievements: Achievement[];
}

export type ProfileData = ProfileContent;
