/** @format */

// src/components/atoms/TimelineNode.tsx
import React from "react";

/**
 * ATOM: TimelineNode
 * The visual anchor for the vertical timeline.
 */
const TimelineNodes: React.FC = () => (
  <div className="absolute left-0 top-2 -translate-x-1/2 flex flex-col items-center">
    {/* Inner blue glow circle */}
    <div className="size-5 rounded-full bg-blue-600 border-4 border-gray-900 shadow-[0_0_15px_rgba(37,99,235,0.5)] z-10" />
  </div>
);

export default TimelineNodes;
