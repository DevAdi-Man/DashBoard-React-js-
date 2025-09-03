import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"; 

const CircularProgress = ({ percentage = 65, complete = 1, total = 5 }) => {
  const radius = 100; // circle ka radius
  const stroke = 16; // stroke width
  const normalizedRadius = radius - stroke * 2;
  const circumference = normalizedRadius * 2 * Math.PI;

  // Animate hone wala value
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="flex-col ">
      <svg height={radius * 2} width={radius * 2}>
        {/* Background Circle */}
        <circle
          stroke="#E5ECFF"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        {/* Foreground Circle (animated) */}
        <motion.circle
          stroke="#3B82F6"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          initial={{ strokeDashoffset: circumference }} 
          animate={{ strokeDashoffset }} 
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />

        {/* Center Percentage Text */}
        <text
          x="50%"
          y="50%"
          dy=".3em"
          textAnchor="middle"
          className="text-lg font-semibold fill-black"
        >
          {percentage}%
        </text>
      </svg>

      {/* Bottom fraction (complete/total) */}
      <div className="flex items-center justify-center">
        <div className="relative mt-2 ">
          <span className="text-3xl font-semibold text-[#596780]">
            {complete}
          </span>
          <span className="absolute text-lg text-[#596780] -bottom-1">
            /{total}
          </span>
        </div>
      </div>
    </div>
  );
};

export default CircularProgress;
