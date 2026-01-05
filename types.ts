import { LucideIcon } from 'lucide-react';

export interface Project {
  id: number;
  title: string;
  url: string;
  category: string;
  image: string; // Changed from seed to specific URL
  status: 'live' | 'maintenance' | 'preview';
  description?: string;
  tech?: string[];
}

export interface Bot {
  id: number;
  title: string;
  url: string;
  description: string;
}

export interface Skill {
  name: string;
  level?: number; // Percentage
  description?: string;
  icon?: LucideIcon;
}

export interface Stat {
  label: string;
  value: number;
  suffix: string;
}