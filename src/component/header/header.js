import React, { Component } from "react";
import "./header.css";
import Notifaction from "../../page/home/notifaction/notifaction";
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
            <li className="item active">
              <Link to="/">Home</Link>
            </li>
            <li className="item">calendar</li>
            <li className="item">MyPage</li>
          </ul>
        </nav>
        <Notifaction
          onClick={this.props.click}
          content={this.props.notifcationTitle}
        />
      </>
    );
  }
  static contextType = TestContext;
}
