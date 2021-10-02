import React, { Component } from "react";
import "react-fontawesome";
import { faBullhorn } from "@fortawesome/free-solid-svg-icons/faBullhorn";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button } from "@material-ui/core";
import "./Notification.css";
import TestContext from "../../page/testContext";
import PropTypes from "prop-types";

class Notifaction extends Component {
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
            <span>Upper Murray Community Calendar is in testing. Please report any bugs to s3848726@student.rmit.edu.au.</span>
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
              onClick={this.click}
            >
              Edit
            </Button>
          </div>
        )}
      </div>
    );
  }
  static contextType = TestContext;
}
Notifaction.propTypes = {
  onClick: PropTypes.func,
  content: PropTypes.string,
};

export default Notifaction;
