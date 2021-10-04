import React, { useEffect, useState } from "react";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import DailyActivity from "../../components/DailyActivity/DailyActivity";
import AverageSession from "../../components/AverageSession/AverageSession";
import Performance from "../../components/Performance/Performance";
import TodayScore from "../../components/TodayScore/TodayScore";
import Card from "../../components/Card/Card";
import { getUserActivity, getUserAverageSession, getUserInfos, getUserPerformance } from "../../services/userService";
import "./home.css";

const Home = (props) => {
  const [userInfos, setUserInfos] = useState(null);
  const [userActivity, setUserActivity] = useState(null);
  const [userAverageSession, setUserAverageSession] = useState(null);
  const [userPerformance, setUserPerformance] = useState(null);
  const [hasError, setHasError] = useState(false);

  const getId = props.match.params.id;
  const userId = parseInt(getId, 10);

  useEffect(() => {
    getUserInfos(userId)
      .then((data) => {
        if (data === undefined) {
          setHasError(true);
        } else {
          setUserInfos(data);
        }
      })
      .catch((error) => {
        setHasError(true);
      });
  }, [userId]);

  useEffect(() => {
    getUserActivity(userId)
      .then((data) => {
        if (data === undefined) {
          setHasError(true);
        } else {
          setUserActivity(data);
        }
      })
      .catch((error) => {
        setHasError(true);
      });
  }, [userId]);

  useEffect(() => {
    getUserAverageSession(userId)
      .then((data) => {
        if (data === undefined) {
          setHasError(true);
        } else {
          setUserAverageSession(data);
        }
      })
      .catch((error) => {
        setHasError(true);
      });
  }, [userId]);

  useEffect(() => {
    getUserPerformance(userId)
      .then((data) => {
        if (data === undefined) {
          setHasError(true);
        } else {
          setUserPerformance(data);
        }
      })
      .catch((error) => {
        setHasError(true);
      });
  }, [userId]);

  console.log("user infos ");
  console.log(userInfos);
  console.log("user activity ");
  console.log(userActivity);
  console.log("user average session ");
  console.log(userAverageSession);
  console.log("user performance ");
  console.log(userPerformance);

  if (hasError === true) {
    return (
      <div className="error">
        <p className="error_message">Une erreur s'est produite</p>
      </div>
    );
  } else {
    return (
      <div className="home">
        {userInfos && <WelcomeMessage userName={userInfos.data.userInfos.firstName} />}
        <div className="graph_cards">
          <div className="graph">
            {userActivity && <DailyActivity data={userActivity.data.sessions} />}
            {userAverageSession && <AverageSession data={userAverageSession.data.sessions} />}
            {userPerformance && <Performance data={userPerformance.data} />}
            {userInfos && <TodayScore data={userInfos.data} />}
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
  }
};

export default Home;
