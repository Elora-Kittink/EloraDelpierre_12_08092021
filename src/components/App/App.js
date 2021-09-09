import { BrowserRouter as Router } from "react-router-dom";
import { Switch, Route } from "react-router-dom";
import React, { Fragment } from "react";
import Home from "../../pages/home/home";
// import E404 from "../../pages/error404/error404";
import Header from "../Header/Header";
import profile from "../../pages/profile/profile";
import settings from "../../pages/settings/settings";
import community from "../../pages/community/community";
import SideBar from "../SideBar/SideBar";

class App extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="wrapper">
          <Router>
            <Header />
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/profile" component={profile}></Route>
              <Route path="/settings" component={settings}></Route>
              <Route path="/community" component={community}></Route>
              <Route path="/user/:id"></Route>
              <Route path="/user/:id/activity"></Route>
              <Route path="/user/:id/average-sessions"></Route>
              <Route path="/user/:id/today-score"></Route>
              <Route path="/user/:id/activities"></Route>
              <Route path="/user/:id/key-data"></Route>
              {/* <Route path="*" component={E404}></Route> */}
            </Switch>
            <SideBar />
          </Router>
        </div>
      </Fragment>
    );
  }
}

export default App;
