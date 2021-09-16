import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from "recharts";
import "./TodayScore.css";

const TodayScore = (props) => {
  const data = [
    { todayScore: 1, fill: "#FFFFFF" },
    { todayScore: props.data.todayScore, fill: "#FF0000" },
  ];

  return (
    <div className="today_score_graph">
      <p>{props.data.todayScore * 100}% de votre objectif</p>
      <ResponsiveContainer width={200} height={200}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" data={data}>
          <RadialBar
            minAngle={15}
            background
            clockWise={true}
            dataKey="todayScore"
            strokeLinecap="round"
            stroke={false}
          />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TodayScore;
