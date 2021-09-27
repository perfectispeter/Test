import "./Home.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import TestContext from "./page/testContext";
import Textdialog from "./components/TextDialog/TextDialog";
import ImageDialog from "./components/ImageDialog/ImageDialog";
import Footer from "./components/Footer/Footer";
import Notifaction from "./components/Notification/Notification";
import MainContainer from "./components/MainContainer/MainContainer";
import CustomButton from "./components/CustomButton/CustomButton";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: null,
      errorMessage: null,
      emergencyBannerDialogOpen: false,
      emergencyBannerText: "",
      descriptionOpen: false,
      notificationDialogOpen: false,
      notificationDialogText: "",
      descriptionContent:
        "The Upper Murray Community Calendar is a collaborative project between Corryong Neighbourhood Centre, RMIT University, and the communities of the Upper Murray region. The site is currently under construction. ",
      imgUrl: require("./images/wallhaven-y8e1gl.jpeg").default,
      imgDialogOpen: false,
      isLogin: true,
    };
  }

  open = () => {
    this.setState({
      emergencyBannerDialogOpen: true,
    });
  };

  descriptionOpen = () => {
    this.setState({
      descriptionOpen: true,
    });
  };

  notificationDialogOpen = () => {
    this.setState({
      notificationDialogOpen: true,
    });
  };

  closeNotificationDialog(value) {
    if (value !== "") {
      this.setState({
        notificationDialogOpen: false,
        notificationDialogText: value,
      });
    } else {
      this.setState({
        notificationDialogOpen: false,
      });
    }
  }

  imgUploadOpen = () => {
    this.setState({
      imgDialogOpen: true,
    });
  };

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

  closeEmergencyBannerDialog(value) {
    if (value !== "") {
      this.setState({
        emergencyBannerDialogOpen: false,
        emergencyBannerText: value,
      });
    } else {
      this.setState({
        emergencyBannerDialogOpen: false,
      });
    }
  }

  render() {
    function setTitle(title) {
      this.setState({ title: title });
    }

    return (
      <>
        <div className="App">
          <Header
            isLogin={this.state.isLogin}
            isAdmin={true}
            items={[
              { name: "Home", link: "/", active: true },
              { name: "Calendar", link: "/calendar", active: false },
              { name: "MyPage", link: "/mypage", active: false },
            ]}
          />
          <Notifaction
            onClick={this.open.bind(this)}
            content={this.state.notificationTitle}
          />
          <MainContainer hasnotifaction>
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
              <Link to="/calendar">
                <CustomButton btntext="Take me to the calendar" />
              </Link>
            </div>
            <div className="shortcut">
              <p>Shortcuts</p>
              <div className="shortcutContent">
                <div className="shortcut_pic">
                  <img src={require("./images/nrc.jpg").default} alt="" />
                  <span>Sports</span>
                </div>
                <div className="shortcut_pic">
                  <img src={require("./images/bushfire.jpg").default} alt="" />
                  <span>Bushfire Recovery</span>
                </div>
                <div className="shortcut_pic">
                  <img src={require("./images/arts.jpg").default} alt="" />
                  <span>Arts</span>
                </div>
                <div className="shortcut_pic">
                  <img src={require("./images/enter.jpg").default} alt="" />
                  <span>Entertainment</span>
                </div>
              </div>
            </div>

            <Footer />
          </MainContainer>
          <Textdialog
            open={this.state.notificationDialogOpen}
            close={this.closeNotificationDialog.bind(this)}
            title="Emergency Banner"
            content="This will be displayed under the header on each page. To remove the banner, leave the text field empty."
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
          <ImageDialog
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
  static contextType = TestContext;
}

export default Home;
