import "./Home.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import TestContext from "./page/testContext";
import Textdialog from "./components/textDialog/textdialog";
import Imgdialog from "./components/imgDialog/imgdialog";
import Footer from "./components/Footer";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      errorMessage: null,
      notificationDialogOpen: false,
      notificationTitle: "",
      descriptionOpen: false,
      descriptionContent:
        "The Upper Murray Community Calendar is a collaborative project between Corryong Neighbourhood Centre, RMIT University, and the communities of the Upper Murray region. The site is currently under construction. ",
      imgUrl: require("./asset/wallhaven-y8e1gl.jpeg").default,
      imgDialogOpen: false,
      isLogin: true,
    };
  }

  open = () => {
    this.setState({
      notificationDialogOpen: true,
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
    function setTitle(title) {
      this.setState({ title: title });
    }

    return (
      <>
        <div className="App">
          <Header
            click={this.open.bind(this)}
            notificationTitle={this.state.notificationTitle}
            isLogin={this.state.isLogin}
            isAdmin={true}
          />
          <div className="mainContainer">
            <img src={this.state.imgUrl} alt="" className="Picture" />
            {this.context.userType === "admin" && (
              <Button
                variant="outlined"
                size="small"
                className="edit"
                onClick={this.imgUploadOpen}
              >
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
                    onClick={this.descriptionOpen}
                  >
                    Edit
                  </Button>
                </div>
              )}
            </div>
            <div className="flex flex-center">
              <Link to="/Calendar">
                <button className="btn">Take me to the Calendar</button>
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

            <Footer />
          </div>
          <Textdialog
            open={this.state.notificationDialogOpen}
            close={this.closeNotificationDialog.bind(this)}
            title="Emergency Banner"
            content="This will be displayed under the Header on each page. To remove the banner, leave the text field empty."
            inputTitle="Enter text and click Confirm"
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

        {/* <div className="bottom">
         <Footer />
        </div> */}
      </>
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
  closeNotificationDialog(value) {
    if (value !== "") {
      this.setState({
        notificationDialogOpen: false,
        notificationTitle: value,
      });
    } else {
      this.setState({
        notificationDialogOpen: false,
      });
    }
  }
  static contextType = TestContext;
}

export default Home;
