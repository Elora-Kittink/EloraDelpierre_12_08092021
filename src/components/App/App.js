import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import React, { Fragment } from "react";
import Home from "../../pages/home/home.jsx";
// import E404 from "../../pages/error404/error404";
import Header from "../Header/Header";
import profile from "../../pages/profile/profile";
import settings from "../../pages/settings/settings";
import community from "../../pages/community/community";
import SideBar from "../SideBar/SideBar";
import "./App.css";

const App = () => {
  return (
    <Fragment>
      <div className="wrapper">
        <Router>
          <Header />
          <SideBar />
          <Switch>
            <Route path="/user/:id" component={Home} exact></Route>
            <Route path="*">
              <Redirect to="/user/12" />
            </Route>
          </Switch>
        </Router>
      </div>
    </Fragment>
  );
};

export default App;
