/** @format */

// src/components/molecules/ArticleCard.tsx
import React from "react";
import { motion } from "framer-motion";

interface ArticleProps {
  title: string;
  category: string;
  date: string;
  excerpt: string;
  image: string;
}

/**
 * MOLECULE: ArticleCard
 * Standard list item for the blog feed.
 */
const ArticleCard: React.FC<ArticleProps> = ({
  title,
  category,
  date,
  excerpt,
  image,
}) => (
  <motion.div
    whileHover={{ x: 10 }}
    className="flex flex-col md:flex-row gap-6 p-4 rounded-2xl bg-[--color-surface-dark] border border-gray-800 hover:border-blue-500/30 transition-all cursor-pointer group"
  >
    <div className="w-full md:w-48 h-32 rounded-xl overflow-hidden bg-gray-800 shrink-0">
      <img
        src={image}
        alt={title}
        className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity"
      />
    </div>
    <div className="flex flex-col justify-center">
      <div className="flex items-center gap-3 text-[10px] font-bold uppercase tracking-widest text-blue-500 mb-2">
        <span>{category}</span>
        <span className="text-gray-600">•</span>
        <span className="text-gray-500 font-mono">{date}</span>
      </div>
      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-400 text-sm line-clamp-2 leading-relaxed">
        {excerpt}
      </p>
    </div>
  </motion.div>
);

export default ArticleCard;
