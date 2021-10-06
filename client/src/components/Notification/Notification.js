import React, { Component } from "react";
import "react-fontawesome";
import "./Notification.css";
import PropTypes from "prop-types";
import store from "../../store";
import Textdialog from "../TextDialog/TextDialog";

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      descriptionOpen: false,
      descriptionContent:
        "The Upper Murray Community Calendar is a collaborative project between Corryong Neighbourhood Centre, RMIT University, and the communities of the Upper Murray region. The site is currently under construction. ",
    };
  }

  closeDescription(value) {
    if (value !== "") {
      this.setState({
        descriptionOpen: false,
        descriptionContent: value,
      });
    } else {
      this.setState({
        descriptionOpen: false,
      });
    }
  }

  descriptionOpen = () => {
    this.setState({
      descriptionOpen: true,
    });
  };

  render() {
    return (
      <>
        <div class="notification">
          <i class="medium material-icons left">announcement</i>
          <p className="descriptionContent">{this.state.descriptionContent}</p>
          {store.getState().auth.user ? (
            <button
              class="waves-effect waves-light btn indigo darken-3"
              onClick={this.descriptionOpen}
            >
              Edit
            </button>
          ) : null}
          <Textdialog
            open={this.state.descriptionOpen}
            close={this.closeDescription.bind(this)}
            title="Description"
            content="Change the Emergency Bnnner Text Here"
            inputTitle="Description"
            multiline={true}
          />
        </div>
      </>
    );
  }
}

Notification.propTypes = {
  onClick: PropTypes.func,
  content: PropTypes.string,
};

export default Notification;
