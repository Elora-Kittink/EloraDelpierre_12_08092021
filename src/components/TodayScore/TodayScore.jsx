import React from "react";
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer, PolarAngleAxis } from "recharts";
import PropTypes from "prop-types";
import "./TodayScore.css";

const TodayScore = ({ data }) => {
  const dataOnBase1 = [
    { todayScore: 1, fill: "#FFFFFF" },
    { todayScore: data.todayScore, fill: "#FF0000" },
  ];

  return (
    <div className="today_score_graph">
      <p>{data.todayScore * 100}% de votre objectif</p>
      <ResponsiveContainer width={200} height={200}>
        <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" data={dataOnBase1}>
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

// TodayScore.propTypes = {
//   data: PropTypes.shape({
//     id: PropTypes.string,
//     userInfos: PropTypes.object,
//     todayScore: PropTypes.number,
//     keyData: PropTypes.object,
//   }),
// };

export default TodayScore;
