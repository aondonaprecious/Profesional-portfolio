/** @format */

// src/types/index.ts

export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl?: string;
  liveUrl?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
}

export interface PortfolioState {
  projects: Project[];
  experience: Experience[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}
