import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Calendar from "./page/Calendar/Calendar";
import Home from "./Home";
import React from "react";
import MyPage from "./page/MyPage/MyPage";
import LoginPage from "./page/LoginPage/LoginPage";
import UserProfilePage from "./page/UserProfilePage/UserProfilePage";
import CreateEvent from "./page/CreateEvent/CreateEvent";
import AdminTools from "./page/AdminTools/AdminTools";
import SignUp from "./components/SignUp/SignUp";

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
          <Route path="/signup" component={SignUp} />
          <Route path="/login" component={LoginPage} />
          <Route path="/user" component={UserProfilePage} />
          <Route path="/create" component={CreateEvent} />
          {this.state.isLogin ? (
            <>
              <Route path="/Calendar" component={Calendar} />
              <Route path="/mypage" component={MyPage} />
              <Route path="/admin-tools" component={AdminTools} />
            </>
          ) : (
            <Redirect to="/" />
          )}
        </Switch>
      </Router>
    );
  }
}
