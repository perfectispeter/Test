import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import users from "../../asset/userdata.json";
import { Link } from "react-router-dom";
// import "./UserProfilePage.css";

class UserProfilePage extends React.Component {
 
  render() {
    const displayName = window.location.pathname.replace("/user/", "");
    const user = users.users.find((u) =>
    u.display_name.match(displayName)
  );
    const userProfile = user ? user.public_profile : { visible: false };

    return (
      <>
        <div className="Body">
          <Header></Header>
          <div className="main"></div>
          {userProfile.visible ? 
          <>
          <div
            style={{
              marginTop: "200px",
              marginBottom: "50px",
              marginLeft: "50px",
            }}
          >
            <h1 className="Text" type="text">
              {displayName}
            </h1>
            <h2>Contact details</h2>
            Email: {userProfile.contact_email}
            <br></br>
            Mobile: {userProfile.contact_phone}
            <br></br>
            Description: {userProfile.description}
          </div>
          <a href={"https://www." + userProfile.external_link}>
            <button
              className="btn"
              style={{
                marginBottom: "100px",
                marginLeft: "50px",
              }}
            >
              More Info
            </button>
          </a>
          </>
        :  <div
            style={{
              marginTop: "200px",
              marginBottom: "50px",
              marginLeft: "50px",
            }}
          >
            <h2>This profile is not available.</h2>
          </div> }
        </div>
        <Footer />
      </>
    );
  }
}

export default UserProfilePage;
