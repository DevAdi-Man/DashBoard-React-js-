import React from "react";
import {
  Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis,
} from "recharts";

const data = [
  { subject: "Thing 1", A: 3 },
  { subject: "Thing 2", A: 9 },
  { subject: "Thing 3", A: 4 },
  { subject: "Thing 4", A: 2 },
  { subject: "Thing 5", A: 5 },
  { subject: "Thing 6", A: 3 },
];

const RadarExample = () => {
  return (
    <div className="p-6 bg-white rounded-xl shadow-md">
      <h2 className="text-lg font-semibold mb-4">Process Maturity Overview</h2>
      <RadarChart
        cx={200} cy={200} outerRadius={120} width={400} height={400}
        data={data}
      >
        <PolarGrid />
        <PolarAngleAxis dataKey="subject" />
        <PolarRadiusAxis angle={30} domain={[0, 10]} />
        <Radar
          name="Data"
          dataKey="A"
          stroke="#C084FC"
          fill="#C084FC"
          fillOpacity={0.5}
        />
      </RadarChart>
    </div>
  );
};

export default RadarExample;
