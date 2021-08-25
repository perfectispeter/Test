import React, { Component } from "react";
import "./header.css";
import EmergencyBanner from "../../page/home/EmergencyBanner/EmergencyBanner";
import TestContext from "../../page/testContext";
import { Link } from "react-router-dom";

export default class Header extends Component {
  render() {
    return (
      <>
        <nav>
          <div className="topHeader">
            <div className="logo">UMCC</div>
            <div className="right logo_title">
              Upper Murray Community Calendar
            </div>
            <div className="login">
              {this.context.userType === "user" ? (
                <>
                  <div className="item login_item">Sign up</div>
                  <div className="item login_item">Sign in</div>
                </>
              ) : (
                <>
                  <div className="item login_item username">134@test.com</div>
                  <sup className="badge">3</sup>
                  <div className="item login_item">Logout</div>
                </>
              )}
            </div>
          </div>
        </nav>
        <nav className="navbar">
          <ul>
            <li className="item">
              <Link to="/">Home</Link>
            </li>
            <li className="item">
              <Link to="/calendar">Calendar</Link>
            </li>
            <li className="item">MyPage</li>
          </ul>
        </nav>
        <EmergencyBanner
          onClick={this.props.click}
          content={this.props.notificationTitle}
        />
      </>
    );
  }
  static contextType = TestContext;
}
