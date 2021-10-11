import React, { Component } from "react";
import { Link } from "react-router-dom";
// import "./Header.css";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../actions/authActions";
import store from "../../store";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLogin: props.isLogin,
      isHomepage: true,
      isAdmin: props.isAdmin,
    };
  }

  handleSignOut = (e) => {
    e.preventDefault();
    this.props.logoutUser();
    this.setState({ isLogin: false });
    alert("You have been logged out");
  };

  handleSignIn = () => {
    console.log("CLICKED LOGIN");
    this.setState({ isLogin: true });
  };

  handleNotificationClick = () => {
    alert("This feature is in development");
  };

  render() {
    return (
      <>
        <nav>
          <div
            className="nav-wrapper indigo darken-3"
            style={{ paddingLeft: "10px" }}
          >
            <Link to="/" className="brand-logo">
              UMCC - Upper Murray Community Calendar
            </Link>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="/admin-tools">Admin Tools</Link>
              </li>
              <li>
                <Link to="/login">Log In</Link>
              </li>
              <li>
                <Link to="/login" onClick={this.handleSignOut}>
                  Log Out
                </Link>
              </li>
            </ul>
          </div>
        </nav>
        <nav>
          <div className="nav-wrapper red accent-2">
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li>
                <Link to="">Home</Link>
              </li>
              <li>
                <Link to="/calendar">Calendar</Link>
              </li>
              <li>
                <Link to="/mypage">My Page</Link>
              </li>
            </ul>
            <ul id="nav-mobile" className="right hide-on-med-and-down">
              <li>
                <Link to="#" onClick={this.handleNotificationClick}>
                  New Notification
                  <span className="new badge">4</span>
                </Link>
              </li>
              <li className="right">
                <Link to="profile">My Profile</Link>
              </li>
            </ul>
          </div>
        </nav>
        {/* <nav>
          <div
            class="nav-wrapper red accent-2"
            style={{ paddingLeft: "10px" }}
          ></div>
        </nav> */}

        {/* <nav className="nav-navbar">
          <ul className="nav-list">
            {this.state.items.map((item, index) => {
              return (
                <li className={item.active ? "active" : ""} key={item.name}>
                  <Link to={item.link}>{item.name}</Link>
                </li>
              );
            })}
          </ul>
        </nav> */}
      </>
    );
  }
}

Header.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logoutUser })(Header);
