import React from "react";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import DailyActivity from "../../components/DailyActivity/DailyActivity";
import AverageSession from "../../components/AverageSession/AverageSession";
import Performance from "../../components/Performance/Performance";
import TodayScore from "../../components/TodayScore/TodayScore";
import Card from "../../components/Card/Card";
import "./home.css";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../data";

const Home = (props) => {
  console.log(USER_ACTIVITY);
  // const urlSplited = window.location.pathname.split("/");
  // const id = urlSplited[2];
  const getId = props.match.params.id;
  const id = parseInt(getId, 10);
  const index = USER_MAIN_DATA.findIndex((user) => {
    return user.id === id;
  });

  console.log(id);
  const cardData = USER_MAIN_DATA[index].keyData;
  const dailyActivityData = USER_ACTIVITY[index].sessions;
  const averageSessionData = USER_AVERAGE_SESSIONS[index].sessions;

  console.log(averageSessionData);
  console.log(dailyActivityData);

  return (
    <div className="home">
      <WelcomeMessage userName={USER_MAIN_DATA[index].userInfos.firstName} />
      <div className="graph_cards">
        <div className="graph">
          <DailyActivity data={dailyActivityData} />
          <AverageSession data={averageSessionData} />
          <Performance data={USER_PERFORMANCE[index]} />
          <TodayScore data={USER_MAIN_DATA[index]} />
        </div>
        <div className="cards">
          <Card name="Calories" unit="kCal" value={cardData.calorieCount} icon="/assets/calories-icon.png" />
          <Card name="Protéines" unit="g" value={cardData.proteinCount} icon="/assets/protein-icon.png" />
          <Card name="Glucides" unit="g" value={cardData.carbohydrateCount} icon="/assets/carbs-icon.png" />
          <Card name="Lipides" unit="g" value={cardData.lipidCount} icon="/assets/fat-icon.png" />
        </div>
      </div>
    </div>
  );
};

export default Home;
