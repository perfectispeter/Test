import React from "react";
import "./CreateEvent.css";

class CreateButton extends React.Component {
  state = {
    count: 0,
  };

  render() {
    return (
      <button
        className="CreateButton"
        onClick={() => {
          console.log("create clicked");
        }}>
        Create
      </button>
    );
  }
}

export default CreateButton;
