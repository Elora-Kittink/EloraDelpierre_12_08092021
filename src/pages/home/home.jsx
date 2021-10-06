import React, { useEffect, useState } from "react";
import WelcomeMessage from "../../components/WelcomeMessage/WelcomeMessage";
import DailyActivity from "../../components/DailyActivity/DailyActivity";
import AverageSession from "../../components/AverageSession/AverageSession";
import Performance from "../../components/Performance/Performance";
import TodayScore from "../../components/TodayScore/TodayScore";
import Card from "../../components/Card/Card";
import { getUserActivity, getUserAverageSession, getUserInfos, getUserPerformance } from "../../services/userService";
import "./home.css";
import { UserInfos } from "../../models/userInfos";
import { UserPerformance } from "../../models/userPerformance";
import { UserAverageSession } from "../../models/userAverageSession";
import { UserDailyActivity } from "../../models/userDailyActivity";

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
          setUserInfos(new UserInfos(data));
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
          setUserActivity(new UserDailyActivity(data));
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
          setUserAverageSession(new UserAverageSession(data));
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
          setUserPerformance(new UserPerformance(data));
        }
      })
      .catch((error) => {
        setHasError(true);
      });
  }, [userId]);

  if (hasError === true) {
    return (
      <div className="error">
        <p className="error_message">Une erreur s'est produite</p>
      </div>
    );
  } else {
    return (
      <div className="home">
        {userInfos && <WelcomeMessage userName={userInfos.userInfos.firstName} />}
        <div className="graph_cards">
          <div className="graph">
            {userActivity && <DailyActivity data={userActivity.sessions} />}
            {userAverageSession && <AverageSession sessions={userAverageSession.sessions} />}
            {userPerformance && <Performance data={userPerformance} />}
            {userInfos && <TodayScore todayScore={userInfos.todayScore} />}
          </div>
          <div className="cards">
            {userInfos && (
              <Card
                name="Calories"
                unit="kCal"
                value={userInfos.keyData.calorieCount}
                icon="/assets/calories-icon.png"
              />
            )}
            {userInfos && (
              <Card name="Protéines" unit="g" value={userInfos.keyData.proteinCount} icon="/assets/protein-icon.png" />
            )}
            {userInfos && (
              <Card
                name="Glucides"
                unit="g"
                value={userInfos.keyData.carbohydrateCount}
                icon="/assets/carbs-icon.png"
              />
            )}
            {userInfos && (
              <Card name="Lipides" unit="g" value={userInfos.keyData.lipidCount} icon="/assets/fat-icon.png" />
            )}
          </div>
        </div>
      </div>
    );
  }
};

export default Home;
