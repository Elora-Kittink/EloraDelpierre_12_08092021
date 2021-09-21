import React from "react";
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";
import "./Performance.css";

const Performance = ({ data }) => {
  // const dataKindChanged = props.data.data.map(function (performance) {
  //   if (performance.kind.value === 1) {
  //     return (performance.kind.value = "cardio";
  //   }
  //   if (performance.kind.value === 2) {
  //     return (performance.kind.value = "energy");
  //   }
  //   if (performance.kind.value === 3) {
  //     return (performance.kind.value = "endurance");
  //   }
  //   if (performance.kind.value === 4) {
  //     return (performance.kind.value = "strength");
  //   }
  //   if (performance.kind.value === 5) {
  //     return (performance.kind.value = "speed");
  //   }
  //   if (performance.kind.value === 6) {
  //     return (performance.kind.value = "intensity");
  //   }
  // });

  return (
    <div className="performance_graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data.data}>
          <PolarGrid radialLines={false} />
          <PolarAngleAxis dataKey="kind" tickLine={true} />
          <Radar name="Mike" dataKey="value" fill="#FF0101" fillOpacity={0.6} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Performance;
