/** @format */

// src/components/molecules/TechTag.tsx
import React from "react";
import type { IconType } from "react-icons";

interface TechTagProps {
  label: string;
  icon?: IconType;
}

const TechTag: React.FC<TechTagProps> = ({ label, icon: Icon }) => {
  return (
    <div className="flex items-center gap-2 px-3 py-1 bg-gray-800/50 border border-gray-700 rounded-md">
      {Icon && <Icon className="text-gray-400 size-4" />}
      <span className="text-xs font-mono text-gray-300">{label}</span>
    </div>
  );
};

export default TechTag;
