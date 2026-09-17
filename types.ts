import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  titleEn?: string;
  url: string;
  category: string;
  categoryEn?: string;
  image: string;
  status: 'live' | 'maintenance' | 'preview';
  description?: string;
  descriptionEn?: string;
  tech?: string[];
}

export interface Bot {
  id: number;
  title: string;
  titleEn?: string;
  url: string;
  description: string;
  descriptionEn?: string;
}

export interface Skill {
  name: string;
  level?: number;
  description?: string;
  icon?: LucideIcon;
}

export interface Stat {
  label: string;
  labelEn?: string;
  value: number;
  suffix: string;
}