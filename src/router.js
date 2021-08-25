import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Calendar from "./page/calendar/calendar";
import Home from "./Home";
import React from "react";

export class CustomRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: true,
    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Home} />
          {this.state.isLogin ? (
            <Route path="/calendar" component={Calendar} />
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Router>
    );
  }
}
