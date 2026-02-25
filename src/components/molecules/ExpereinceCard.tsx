/** @format */

// src/components/molecules/ExperienceCard.tsx
import React from "react";
import { motion } from "framer-motion";
import type { Experience } from "../../types";

interface Props {
  data: Experience;
  index: number;
}

/**
 * MOLECULE: ExperienceCard
 * Encapsulates the branding, role, and achievements of a single job entry.
 */
const ExperienceCard: React.FC<Props> = ({ data, index }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
    className="bg-[--color-surface-dark] border border-gray-800 p-8 rounded-[32px] hover:border-blue-500/20 transition-all duration-300 group"
  >
    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
      <div>
        <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
          {data.role}
        </h3>
        <p className="text-blue-500 font-mono text-sm font-bold tracking-widest uppercase mt-1">
          {data.company}
        </p>
      </div>
      <span className="w-fit px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold">
        {data.period}
      </span>
    </div>

    <p className="text-gray-400 leading-relaxed mb-6">{data.description}</p>

    <ul className="grid grid-cols-1 gap-3">
      {data.achievements.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-gray-500">
          <span className="text-blue-500 mt-1">✓</span>
          {item}
        </li>
      ))}
    </ul>
  </motion.div>
);

export default ExperienceCard;
