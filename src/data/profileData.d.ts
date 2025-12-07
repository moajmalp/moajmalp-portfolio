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
    viewResume: string;
    hireMe: string;
  };
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

export interface SkillsData {
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
  submit: string;
  sending: string;
  success: string;
  error: string;
}

export interface ContactData {
  title: string;
  subtitle: string;
  form: ContactForm;
}

export interface SEOData {
  baseUrl: string;
  defaultTitle: string;
  defaultDescription: string;
  defaultKeywords: string;
  author: string;
  ogImage: string;
}

export interface ProfileData {
  personal: PersonalInfo;
  hero: HeroContent;
  biography: string;
  skills: SkillsData;
  experience: Experience[];
  education: Education[];
  contact: ContactData;
  seo: SEOData;
}

export declare const profileData: ProfileData;
