import React from "react";
import { RadialBarChart, RadialBar, ResponsiveContainer } from "recharts";
import PropTypes from "prop-types";
import "./TodayScore.css";

const TodayScore = ({ todayScore }) => {
  const dataOnBase1 = [
    { todayScore: 1, fill: "#FBFBFB" },
    { todayScore: todayScore, fill: "#FF0000" }, //data.todayScore
  ];

  return (
    <div className="today_score_graph">
      <h2 className="today_score_title">Score</h2>
      <div className="today_score">
        <p style={{ margin: 0 }} className="today_score_txt">
          {todayScore * 100}%
        </p>
        <p style={{ color: "#74798C", margin: 0, textAlign: "center" }}>
          de votre <br /> objectif
        </p>
      </div>
      <ResponsiveContainer width="100%" height="100%">
        <RadialBarChart cx="50%" cy="50%" innerRadius="50%" outerRadius="80%" data={dataOnBase1}>
          <RadialBar dataKey="todayScore" cornerRadius={50} barSize={10} />
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
