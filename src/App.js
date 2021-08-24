import "./App.css";
import React from "react";
import Header from "./component/header/header";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import TestContext from "./page/testContext";
import Textdialog from "./component/textDialog/textdialog";
import Imgdialog from "./component/imgDialog/imgdialog";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notifcationDialogOpen: false,
      notifcationTitle: "",
      descriptionOpen: false,
      descriptionContent:
        "About the Upper Murray Community CalendarAbout the Upper Murray Community CalendarAbout the Upper Murray Community CalendarAboutthe Upper Murray Community CalendarAbout the Upper Murray About the Upper Murray Community CalendarAbout the Upper Murray Community CalendarAbout the Upper Murray Community CalendarAboutthe Upper Murray Community CalendarAbout the Upper Murray ",
      imgUrl: require("./asset/wallhaven-y8e1gl.jpeg").default,
      imgDialogOpen: false,
    };
  }

  open = () => {
    this.setState({
      notifcationDialogOpen: true,
    });
  };
  descriptionOpen = () => {
    this.setState({
      descriptionOpen: true,
    });
  };

  imgUploadOpen = () => {
    this.setState({
      imgDialogOpen: true,
    });
  };
  render() {
    return (
      <div className="App">
        <Header
          click={this.open.bind(this)}
          notifcationTitle={this.state.notifcationTitle}
        />
        <div className="mainContainer">
          <img src={this.state.imgUrl} alt="" className="Picture" />
          {this.context.userType === "admin" && (
            <Button
              variant="outlined"
              size="small"
              className="edit"
              onClick={this.imgUploadOpen}>
              Edit
            </Button>
          )}
          <div className="description">
            <p className="descriptionTitle">
              About the Upper Murray Community Calendar
            </p>
            <p className="descriptionContent">
              {this.state.descriptionContent}
            </p>
            {this.context.userType === "admin" && (
              <div className="edit">
                <Button
                  variant="outlined"
                  size="small"
                  className="edit"
                  onClick={this.descriptionOpen}>
                  Edit
                </Button>
              </div>
            )}
          </div>
          <div className="flex flex-center">
            <Link to="/calendar">
              <button className="btn">Take me to the calendar</button>
            </Link>
          </div>
          <div className="shortcut">
            <p>Shortcuts</p>
            <div className="shortcutContent">
              <div className="shortcut_pic">
                <img src={require("./asset/nrc.jpg").default} alt="" />
                <span>Sports</span>
              </div>
              <div className="shortcut_pic">
                <img src={require("./asset/bushfire.jpg").default} alt="" />
                <span>Bushfire Recovery</span>
              </div>
              <div className="shortcut_pic">
                <img src={require("./asset/arts.jpg").default} alt="" />
                <span>Arts</span>
              </div>
              <div className="shortcut_pic">
                <img src={require("./asset/enter.jpg").default} alt="" />
                <span>Entertainment</span>
              </div>
            </div>
          </div>
          <div className="bottom">Contact·Help·CNC 2021</div>
        </div>
        <Textdialog
          open={this.state.notifcationDialogOpen}
          close={this.closeNotifactionDialog.bind(this)}
          title="Notifcation"
          content="Input Notifcation Text"
          inputTitle="Notifcation"
          multiline={false}
        />
        <Textdialog
          open={this.state.descriptionOpen}
          close={this.closeDescription.bind(this)}
          title="Description"
          content="Input Description Text"
          inputTitle="Description"
          multiline={true}
        />
        <Imgdialog
          open={this.state.imgDialogOpen}
          close={this.closeImgUpload.bind(this)}
          title="Main Page Picture"
          content="Upload Picture"
          url={this.state.imgUrl}
          multiline={true}
        />
      </div>
    );
  }

  closeImgUpload(imgurl) {
    if (imgurl !== "") {
      this.setState({
        imgDialogOpen: false,
        imgUrl: imgurl,
      });
    } else {
      this.setState({
        imgDialogOpen: false,
      });
    }
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
  closeNotifactionDialog(value) {
    if (value !== "") {
      this.setState({
        notifcationDialogOpen: false,
        notifcationTitle: value,
      });
    } else {
      this.setState({
        notifcationDialogOpen: false,
      });
    }
  }
  static contextType = TestContext;
}

export default App;
