import React, { Component } from "react";
import "./Header.css";
import EmergencyBanner from "../../page/home/EmergencyBanner/EmergencyBanner";
import TestContext from "../../page/testContext";
import { Link } from "react-router-dom";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: props.isLogin,
      isHomepage: props.isHomepage,
      isAdmin: props.isAdmin,
    };
  }

  handleSignOut = () => {
    console.log("CLICKED LOGOUT");
    this.setState({ isLogin: false });
  };

  handleSignIn = () => {
    console.log("CLICKED LOGIN");
    this.setState({ isLogin: true });
  };

  render() {
    return (
      <>
        <div className="topHeader">
          <div className="logo">
            <a href="/">UMCC</a>
          </div>
          <div className="right logo_title">
            Upper Murray Community Calendar
          </div>
          <div className="login">
            {this.context.userType === "user" ? (
              <>
                <div className="item login_item">Sign Up</div>
                <div className="item login_item">Sign In</div>
              </>
            ) : (
              <>
                {this.state.isAdmin ? (
                  <div className="item login_item">
                    <Link to="/admin-tools">Admin Tools</Link>
                  </div>
                ) : null}
                <div className="item login_item username">134@test.com</div>
                <sup className="badge">3</sup>

                {this.state.isLogin ? (
                  <div className="item login_item" onClick={this.handleSignOut}>
                    Logout
                  </div>
                ) : (
                  <div className="item login_item">
                    <Link to="/login">Log In</Link>
                  </div>
                )}
              </>
            )}
          </div>
        </div>
        <nav className="navbar">
          <ul className="nav-list">
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/Calendar">Calendar</Link>
            </li>
            <li className="item">
              <Link to="/mypage">MyPage</Link>
            </li>
          </ul>
        </nav>
        {this.state.isHomepage ? (
          <EmergencyBanner
            onClick={this.props.click}
            content={this.props.emergencyBannerText}
            isAdmin={this.props.isAdmin}
          />
        ) : (
          <></>
        )}
      </>
    );
  }
  static contextType = TestContext;
}
