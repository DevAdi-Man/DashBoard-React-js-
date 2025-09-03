import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react"; 

const LinearProgress = ({ label, value, max }) => {
  const percentage = (value / max) * 100;

  return (
    <div className="w-full">
      {/* Label */}
      <div className="text-sm font-medium text-[#1A202C] mb-1">
        {label} ({value} of {max})
      </div>

      {/* Progress Bar */}
      <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
        <motion.div
          className={`h-full ${
            percentage === 100 ? "bg-[#E0E9F4]" : "bg-[#9F84FD]"
          } rounded-full`}
          initial={{ width: "0%" }}
          animate={{ width: `${percentage}%` }}
          transition={{ duration: 1.2, ease: "easeInOut" }}
        />
      </div>
    </div>
  );
};

export default LinearProgress;

