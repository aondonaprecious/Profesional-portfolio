/** @format */
// src/components/molecules/SectionHeading.tsx
import React from "react";

interface SectionHeadingProps {
  title: string;
  highlight: string;
  subtitle?: string;
}

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  highlight,
  subtitle,
}) => {
  return (
    <div className="mb-12">
      <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
        {title}{" "}
        <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-800">
          {" "}
          {/*corrected something here  */}
          {highlight}
        </span>
      </h2>
      {subtitle && (
        <p className="mt-4 text-gray-400 max-w-2xl text-lg">{subtitle}</p>
      )}
    </div>
  );
};

export default SectionHeading;
