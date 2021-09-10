import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from "recharts";
import "./TodayScore.css";

const TodayScore = () => {
  const data = [{ todayScore: 0.12 }];

  return (
    <div className="today_score_graph">
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="10%" outerRadius="80%" barSize={10} data={data}>
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff" }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend iconSize={10} layout="vertical" verticalAlign="middle" />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TodayScore;
