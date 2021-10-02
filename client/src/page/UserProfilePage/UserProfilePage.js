import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./UserProfilePage.css";
import CustomButton from "../../components/CustomButton/CustomButton";

//TODO TEMPORARILY HARDCODING USERS
import users from "../../asset/userdata.json"; 
import MainContainer from "../../components/MainContainer/MainContainer";

class UserProfilePage extends React.Component {
  render() {
    const userID = window.location.pathname.replace("/user/","");
    const user = users.users.find((u) => u.id.toString().match(userID));
    const userProfile = user ? user.public_profile : { visible: false };

    return (
      <>
        <div className="Body">
        <Header
            items={[
              { name: "Home", link: "/", active: false },
              { name: "Calendar", link: "/calendar", active: false },
              { name: "MyPage", link: "/mypage", active: true },
            ]}
          ></Header>
          <MainContainer>
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
              {user.display_name}
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
          </MainContainer>
        </div>
        <Footer />
      </>
    );
  }
}

export default UserProfilePage;
