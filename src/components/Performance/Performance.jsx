import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import "./Performance.css";

const Performance = ({ data }) => {
  const kinds = data.kind;

  data = data.data.map((entry) => ({
    kind: kinds[entry.kind],
    value: entry.value,
  }));

  console.log(data);

  return (
    <div className="performance_graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" stroke="#FFFFFF" />
          <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
