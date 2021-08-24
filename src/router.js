import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import calendar from "./page/calendar/calendar";
import App from "./App";
import React from "react";

export class CustomRoute extends React.Component {
  constructor() {
    super();
    this.state = {
      isLogin: false,
    };
  }
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={App} />
          {this.state.isLogin ? (
            <Route path="/calendar" component={calendar} />
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Router>
    );
  }
}
