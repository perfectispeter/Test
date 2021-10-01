import { useEffect } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import Calendar from "./page/Calendar/Calendar";
import Home from "./Home";
import React from "react";
import UserProfilePage from "./page/UserProfilePage/UserProfilePage";
import Mypage from "./page/MyPage2/MyPage2";
import AddEvent from "./page/addEvent/addEvent";
import EventDetailsPage from "./page/EventDetails/EventDetailsPage";
import { withRouter } from "react-router";
import Login from "./page/Login/Login";
import AdminTools from "./page/AdminTools/AdminTools";

function ScrollToTop({ history, children }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    };
  }, [history]);
  return children;
}
const ScrollTop = withRouter(ScrollToTop);

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
        <ScrollTop>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/user" component={UserProfilePage} />
            <Route path="/create" component={AddEvent} />
            {/* <Route path="/profile" component={UserProfilePage} /> */}
            <Route path="/event" component={EventDetailsPage} />
            {this.state.isLogin ? (
              <>
                <Route path="/calendar" component={Calendar} />
                <Route path="/mypage" component={Mypage} />
                <Route path="/admin-tools" component={AdminTools} />
              </>
            ) : (
              <Redirect to="/" />
            )}
          </Switch>
        </ScrollTop>
      </Router>
    );
  }
}
