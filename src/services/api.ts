/** @format */

// src/services/api.ts
import { mockProjects, mockExperience } from "./mockData";

// Simulating a database call with a 1-second delay
export const fetchPortfolioDataAPI = async () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ projects: mockProjects, experience: mockExperience });
    }, 1000);
  });
};
