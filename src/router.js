import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Calendar from "./page/calendar/calendar";
import Home from "./Home";
import React from "react";
import MyPage from "./page/MyPage/MyPage";
import LoginPage from "./page/LoginPage/LoginPage";

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
          <Route path="/login" component={LoginPage} />
          {this.state.isLogin ? (<>
            <Route path="/calendar" component={Calendar} />
            <Route path="/mypage" component={MyPage} />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Router>
    );
  }
}
