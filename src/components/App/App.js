import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route, Redirect } from "react-router-dom";
import React, { Fragment } from "react";
import Home from "../../pages/home/home.jsx";
import Header from "../Header/Header";
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
