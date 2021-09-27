import React, { Component } from "react";
import "./MainContainer.css";

class MainContainer extends Component {
  render() {
    const styleString = this.props.hasnotifaction
      ? "container-box notifcation-offset"
      : "container-box";
    return (
      <div className={styleString + " " + this.props.className}>
        {this.props.children}
      </div>
    );
  }
}

export default MainContainer;