
/** @format */
// src/services/mockData.ts
import type { Project, Experience } from "../types";

export const mockProjects: Project[] = [
  {
    id: "1",
    title: "Enterprise Analytics Suite",
    category: "Fintech SaaS",
    description:
      "A comprehensive real-time data visualization platform for high-frequency trading firms.",
    image: "/assets/images/project1.jpg", // We will replace these later
    technologies: ["React", "TypeScript", "Node.js", "AWS"],
  },

  {
    id: "2",
    title: "Buy Direct",
    category: "web application",
    description:
      "A web apllication for tracking  and connecting benue buyers to buy machinery and goods from overseas and within the country to pair to meet minimum quantity featuring social integration and real-time GPS mapping, escrow system.",
    image: "/assets/images/health.jpg",
    technologies: ["React", "Firebase", "CoreLocation"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "3",
    title: "Radikal Web-3 E-commerce",
    category: "E-commerce",
    description:
      "High-performance custom storefront achieving 99/100 Lighthouse score featuring 3D products and payments through web-3.",
    image: "/assets/images/shopify.jpg",
    technologies: ["React.js", "GraphQL", "Shopify API", "redux"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    id: "4",
    title: "P-Tech Designs Website",
    category: "Business Website",
    description:
      "Open source command-line interface for automating AWS infrastructure deployments.",
    image: "/assets/images/cli.jpg",
    technologies: [
      "React.js",
      "Tailwind CSS",
      "reusable components",
      "Commander",
    ],
    liveUrl: "https://p-tech-nine.vercel.app/",
    githubUrl: "https://github.com/aondonaprecious/p-tech",
  },
  {
    id: "5",
    title: "URL-Shortener",
    category: "Integrating API in frontend",
    description:
      "Microservices architecture handling authentication, user management, and payment processing.",
    image: "/assets/images/nexus.jpg",
    technologies: ["Node.js", "PostgreSQL", "Docker"],
    liveUrl: "#",
    githubUrl: "#",
  },
];
  // We will add the rest of the projects here later

export const mockExperience: Experience[] = [
  {
    id: "1",
    role: "Frontend Developer",
    company: "GANDARIA VENTURES LIMITED.",
    period: "2025 MARCH - OCT. 2025",
    description: "Building the frontend architecture migration to Next.js...",
    achievements: [
      "Spearheaded the development of the design system used across 5 products.",
      "Reduced CI/CD build times by 50% through optimized caching strategies.",
    ],
  },

  {
    id: "2",
    role: "Software Developer",
    company: "3MTT Nigeria",
    period: "2023 - 2024",
    description:
      " Interned and helped to develop scalable RESTful APIs using Node.js and Express. Implemented real-time features using WebSockets for a collaboration platform with 10k+ daily users.",
    achievements: [
      "Integrated Stripe payment gateway processing over $1M in transactions.",
      "Optimized database queries reducing server load by 30%.",
    ],
  },
  {
    id: "3",
    role: "Junior Web Developer",
    company: "NEOCLOUDS TECHNOLOGIES",
    period: "2024 - 2025",
    description:
      "Collaborated with designers to translate high-fidelity mockups into responsive websites. Maintained and updated legacy client sites ensuring cross-browser compatibility.",
    achievements: [
      "Successfully delivered 15+ client websites within tight deadlines.",
      "Improved SEO scores for core clients by an average of 25%.",
    ],
  },
];



  
