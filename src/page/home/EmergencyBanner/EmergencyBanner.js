import React, { Component } from "react";
import "react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons/faBullhorn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import "./EmergencyBanner.css";
import TestContext from "../../testContext";

class EmergencyBanner extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  click = () => {
    this.props.onClick();
  };

  render() {
    return (
      <div className="container">
        <div className="icon">
          <FontAwesomeIcon icon={faBullhorn} />
        </div>
        <div className="info">
          {this.props.content === "" ? (
            <span>Emergency Banner is currently turned off. Enable by clicking Edit.</span>
          ) : (
            <span>{this.props.content}</span>
          )}
        </div>
        {this.context.userType === "admin" && (
          <div className="edit">
            <Button
              variant="outlined"
              size="small"
              className="edit"
              onClick={this.click}>
              Edit
            </Button>
          </div>
        )}
      </div>
    );
  }
  static contextType = TestContext;
}

export default EmergencyBanner;
