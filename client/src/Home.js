import "./Home.css";
import React from "react";
import Header from "./components/Header/Header";
import FileBase64 from 'react-file-base64'
import axios from 'axios'

import Textdialog from "./components/TextDialog/TextDialog";
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
        "",
      imgUrl: "",
      imgDialogOpen: false,
      isLogin: true,
      imgUrlUpload: "",
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/homepageData/6161653a0ebee81b79b8908e")
      .then((res) => {
        this.setState({ imgUrl: res.data.background });
      })
      .catch((err) => { console.log("Error from get background img form database"); });
    axios
      .get("http://localhost:5000/api/homepageData/6161653a0ebee81b79b8908e")
      .then((res) => {
        this.setState({ descriptionContent: res.data.description });
        console.log(this.state.descriptionContent);
      })
      .catch((err) => { console.log("Error from get banner from database"); });
  }
  componentDidUpdate() {
    axios
      .get("http://localhost:5000/api/homepageData/6161653a0ebee81b79b8908e")
      .then((res) => {
        this.setState({ imgUrl: res.data.background });
      })
      .catch((err) => { console.log("Error from get background img form database"); });
  }
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

  uploadImgToDatabase = (e) => {
    e.preventDefault();
    const data = {
      background: this.state.imgUrlUpload,
    };
    if (data.background !== "") {
      axios
        .put("http://localhost:5000/api/homepageData/6161653a0ebee81b79b8908e", data)
        .then((res) => { this.props.history.push("/") })
        .catch((err) => {
          console.log("Error in add background img!");
        })
    } else {
      alert("please select an img file");
    }

  }


  render() {
    return (
      <>
        <div className="App">
          <Header />
          <Notification />
          <img src={this.state.imgUrl} alt="" className="Picture" />
          {store.getState().auth.user && (
            <div>
              <FileBase64 type="file" multiple={false} onDone={({ base64 }) => this.setState({ imgUrlUpload: base64 })} />
              <button className="waves-effect waves-light btn indigo darken-3" onClick={this.uploadImgToDatabase}>upload Img</button>
            </div>
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
                  className="waves-effect waves-light btn indigo darken-3"
                  onClick={this.descriptionOpen}
                >
                  Edit
                </button>
              </div>
            )}
          </div>
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
          <Textdialog
            open={this.state.descriptionOpen}
            close={this.closeDescription.bind(this)}
            title="Description"
            content="Input Description Text"
            inputTitle="Description"
            multiline={true}
          />
        </div>
      </>
    );
  }

  closeDescription(value) {
    if (value !== "") {
      this.setState({
        descriptionOpen: false,
        descriptionContent: value,
      })
      const data = {
        description: value,
      }
      axios
        .put("http://localhost:5000/api/homepageData/6161653a0ebee81b79b8908e", data)
        .catch((err) => {
          console.log("Error from add banner to database");
        })
    } else {
      this.setState({
        descriptionOpen: false,
      });
    }
  }
}

Home.propTypes = {
  logoutUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
};
const mapStateToProps = (state) => ({
  auth: state.auth,
});

export default connect(mapStateToProps, { logoutUser })(Home);
