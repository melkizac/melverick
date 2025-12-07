import { LucideIcon } from 'lucide-react';

export interface NavItem {
  id: string;
  label: string;
  href: string;
}

export interface Feature {
  id: number;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface PortfolioItem {
  id: number;
  category: string;
  title: string;
  likes: number;
  imageUrl: string;
}

export interface ExperienceItem {
  id: number;
  title: string;
  subtitle: string;
  date: string;
  description: string;
  score?: string; // e.g., "4.30/5"
}

export interface CareerItem {
  id: number;
  year: string;
  company: string;
  description?: string;
}

export enum ResumeTab {
  EDUCATION = 'Education',
  SKILLS = 'Professional Skills',
  EXPERIENCE = 'Experience'
}