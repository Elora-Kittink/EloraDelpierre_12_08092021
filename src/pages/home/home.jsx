import React, { useEffect, useState } from "react";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import DailyActivity from "../../components/DailyActivity/DailyActivity";
import AverageSession from "../../components/AverageSession/AverageSession";
import Performance from "../../components/Performance/Performance";
import TodayScore from "../../components/TodayScore/TodayScore";
import Card from "../../components/Card/Card";
import "./home.css";
import { USER_MAIN_DATA, USER_ACTIVITY, USER_AVERAGE_SESSIONS, USER_PERFORMANCE } from "../../data";

const Home = (props) => {
  const [userInfos, setUserInfos] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSession, setUserAverageSession] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);

  const getId = props.match.params.id;
  const userId = parseInt(getId, 10);

  useEffect(() => {
    fetch(`http://localhost:3001/user/${userId}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserInfos(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/user/${userId}/activity`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserActivity(data);
      });
  }, []);

  useEffect(() => {
    fetch(`http://localhost:3001/user/${userId}/average-sessions`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserAverageSession(data);
      });
  }, []);
  console.log(userAverageSession);
  useEffect(() => {
    fetch(`http://localhost:3001/user/${userId}/performance`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setUserPerformance(data);
      });
  }, []);

  /**
   * get the index of the user in data's array with his id in url
   * @param {???} active  description du parametre/ Y a pas de paramètre?
   * @returns the index of the user in data's array
   */

  // const getIndex = async (id) => {
  //   console.log(userInfos);
  //   const index = await userInfos.findIndex((user) => {
  //     return user.id === id;
  //   });
  //   return index;
  // };

  // const cardData = userInfos[getIndex(userId)].keyData;

  return (
    <div className="home">
      {userInfos && (
        <WelcomeMessage
          userName={
            userInfos.data.userInfos.firstName
          } /*userName={USER_MAIN_DATA[getIndex(userId)].userInfos.firstName}*/
        />
      )}
      <div className="graph_cards">
        <div className="graph">
          {userActivity && (
            <DailyActivity data={userActivity.data.sessions} /*data={USER_ACTIVITY[getIndex(userId)].sessions}*/ />
          )}
          {userAverageSession && (
            <AverageSession
              data={userAverageSession.data.sessions} /*data={USER_AVERAGE_SESSIONS[getIndex(userId)].sessions}*/
            />
          )}
          {userPerformance && <Performance data={userPerformance.data} /*data={USER_PERFORMANCE[getIndex(userId)]}*/ />}
          {userInfos && <TodayScore data={userInfos.data} /*data={USER_MAIN_DATA[getIndex(userId)]}*/ />}
        </div>
        <div className="cards">
          {userInfos && (
            <Card
              name="Calories"
              unit="kCal"
              value={userInfos.data.keyData.calorieCount}
              icon="/assets/calories-icon.png"
            />
          )}
          {userInfos && (
            <Card
              name="Protéines"
              unit="g"
              value={userInfos.data.keyData.proteinCount}
              icon="/assets/protein-icon.png"
            />
          )}
          {userInfos && (
            <Card
              name="Glucides"
              unit="g"
              value={userInfos.data.keyData.carbohydrateCount}
              icon="/assets/carbs-icon.png"
            />
          )}
          {userInfos && (
            <Card name="Lipides" unit="g" value={userInfos.data.keyData.lipidCount} icon="/assets/fat-icon.png" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
