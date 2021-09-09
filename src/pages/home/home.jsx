import React from "react";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import DailyActivity from "../../components/DailyActivity/DailyActivity";
import AverageSession from "../../components/AverageSession/AverageSession";
import Performance from "../../components/Performance/Performance";
import TodayScore from "../../components/TodayScore/TodayScore";
import Card from "../../components/Card/Card";
import "./home.css";

const Home = () => {
  return (
    <div className="home">
      <WelcomeMessage className="welcome_message" userName="Karl" />
      <div className="graph">
        <DailyActivity />
        <AverageSession />
        <Performance />
        <TodayScore />
      </div>
      <div className="cards">
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  );
};

export default Home;
