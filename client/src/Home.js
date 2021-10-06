import "./Home.css";
import React, { useState } from "react";
import Header from "./components/Header/Header";
import { Button } from "@material-ui/core";
import Textdialog from "./components/TextDialog/TextDialog";
import ImageDialog from "./components/ImageDialog/ImageDialog";
import Footer from "./components/Footer/Footer";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { logoutUser } from "../../client/src/actions/authActions";
import Notification from "./components/Notification/Notification";
import store from "./store";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notificationDialogOpen: false,
      notificationTitle: "",
      descriptionOpen: false,
      descriptionContent:
        "The Upper Murray Community Calendar is a collaborative project between Corryong Neighbourhood Centre, RMIT University, and the communities of the Upper Murray region. The site is currently under construction. ",
      imgUrl: require("./images/Wallhaven.jpeg").default,
      imgDialogOpen: false,
      isLogin: true,
    };
  }

  // open = () => {
  //   this.setState({
  //     notificationDialogOpen: true,
  //   });
  // };

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
      <>
        <div className="App">
          <Header />
          <Notification />
          <img src={this.state.imgUrl} alt="" className="Picture" />
          {store.getState().auth.user && (
            <button
              class="waves-effect waves-light btn indigo darken-3"
              onClick={this.imgUploadOpen}
            >
              Edit
            </button>
          )}
          <div className="description">
            <p className="descriptionTitle">
              About the Upper Murray Community Calendar
            </p>
            <p className="descriptionContent">
              {this.state.descriptionContent}
            </p>
            {store.getState().auth.user && (
              <div className="edit">
                <button
                  class="waves-effect waves-light btn indigo darken-3"
                  onClick={this.descriptionOpen}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
          {/* <div className="center">
              <Link
                to="/calendar"
                class="waves-effect waves-light btn indigo darken-3"
              >
                Take me to the calendar
              </Link>
            </div> */}
          <div className="shortcut">
            <p>Shortcuts</p>
            <div className="shortcutContent">
              <div className="shortcut_pic">
                <img src={require("./images/NRC.jpg").default} alt="" />
                <span>Sports</span>
              </div>
              <div className="shortcut_pic">
                <img src={require("./images/Bushfire.jpg").default} alt="" />
                <span>Bushfire Recovery</span>
              </div>
              <div className="shortcut_pic">
                <img src={require("./images/Arts.jpg").default} alt="" />
                <span>Arts</span>
              </div>
              <div className="shortcut_pic">
                <img src={require("./images/Enter.jpg").default} alt="" />
                <span>Entertainment</span>
              </div>
            </div>
          </div>

          <Footer />
          {/* <Textdialog
            open={this.state.notificationDialogOpen}
            close={this.closeNotificationDialog.bind(this)}
            title="Emergency Banner"
            content="This will be displayed under the header on each page. To remove the banner, leave the text field empty."
            inputTitle="Enter text and click Confirm"
            multiline={false}
          /> */}
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

  // closeNotificationDialog(value) {
  //   if (value !== "") {
  //     this.setState({
  //       notificationDialogOpen: false,
  //       notificationTitle: value,
  //     });
  //   } else {
  //     this.setState({
  //       notificationDialogOpen: false,
  //     });
  //   }
  // }
}

Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Home);
