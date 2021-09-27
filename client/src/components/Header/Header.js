import React, { Component } from "react";
import TestContext from "../../page/testContext";
import { Link } from "react-router-dom";
import "./Header.css";

export default class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: props.isLogin,
      isHomepage: true,
      isAdmin: props.isAdmin,
      items:
        typeof this.props.items === "undefined"
          ? [
              { name: "Home", link: "/", active: false },
              { name: "Calendar", link: "/calendar", active: false },
              { name: "MyPage", link: "/mypage", active: false },
            ]
          : this.props.items,
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
      <div>
        <nav>
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
                  <div className="item login_item">Sign up</div>
                  <div className="item login_item">Sign in</div>
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
                    <div
                      className="item login_item"
                      onClick={this.handleSignOut}
                    >
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
        </nav>
        <nav className="navbar">
          <ul className="nav-list">
            {this.state.items.map((item, index) => {
              return (
                <li className={item.active ? "active" : ""} key={item.name}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    );
  }
  static contextType = TestContext;
}
