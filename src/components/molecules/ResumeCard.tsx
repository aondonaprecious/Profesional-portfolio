/** @format */

// src/components/molecules/ResumeCard.tsx
import React from "react";
import { FiDownload, FiEye } from "react-icons/fi";
import Button from "../atoms/Button";

/**
 * MOLECULE: ResumeCard
 * Handles the display and download logic for the professional CV.
 */
const ResumeCard: React.FC = () => (
  <div className="bg-[--color-surface-dark] border border-gray-800 p-8 rounded-[32px] space-y-6">
    <div className="flex justify-between items-center">
      <h4 className="text-xl font-bold flex items-center gap-2">
        <span className="text-blue-500">📄</span> My Resume
      </h4>
      <span className="bg-green-500/10 text-green-500 text-[10px] font-bold px-2 py-1 rounded border border-green-500/20">
        UPDATED FEB 2026
      </span>
    </div>

    <div className="aspect-[4/5] bg-gray-900 rounded-2xl border border-gray-800 flex items-center justify-center relative overflow-hidden group">
      <div className="absolute inset-0 bg-blue-600/5 opacity-0 group-hover:opacity-100 transition-opacity" />
      <p className="text-gray-700 font-mono text-xs">RESUME_PREVIEW_MOCKUP</p>
    </div>

    <div className="grid grid-cols-2 gap-4">
      <Button variant="outline" className="gap-2">
        <FiEye /> Preview
      </Button>
      <Button variant="primary" className="gap-2">
        <FiDownload /> Download
      </Button>
    </div>
  </div>
);

export default ResumeCard;
