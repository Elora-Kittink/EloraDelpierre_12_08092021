import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer, PolarAngleAxis } from "recharts";
import PropTypes from "prop-types";
import "./TodayScore.css";

const TodayScore = ({ data }) => {
  const dataOnBase1 = [
    { todayScore: 1, fill: "#FBFBFB" },
    { todayScore: data.todayScore, fill: "#FF0000" }, //data.todayScore
  ];

  return (
    <div className="today_score_graph">
      <h2 className="today_score_title">Score</h2>
      <div className="today_score">
        <p className="today_score_txt">{data.todayScore * 100}% de votre objectif</p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" data={dataOnBase1}>
          <RadialBar minAngle={15} clockWise={true} dataKey="todayScore" cornerRadius={50} />
        </RadialBarChart>
      </ResponsiveContainer>
    </div>
  );
};

TodayScore.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    userInfos: PropTypes.object,
    todayScore: PropTypes.number,
    keyData: PropTypes.object,
  }),
};

export default TodayScore;
