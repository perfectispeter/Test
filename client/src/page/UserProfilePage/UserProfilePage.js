import React from "react";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./UserProfilePage.css";
import CustomButton from "../../components/CustomButton/CustomButton";

class OrganizationProfile extends React.Component {
  render() {
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
          <div className="main">
            {/* <input className="Text" type="text" size="40" value="organization profile content"/> */}
            <h1 className="Text" type="text">
              {window.location.pathname.replace("/user/", "")}
            </h1>
          </div>
          <div style={{ marginTop: "35px" }}>
            <h2>Contact details</h2>
            Email: test@example.com
            <br></br>
            Mobile: 0412 345 678
            <br></br>
            Description: Some text that this user can edit. Click "More Info" to
            go to our website.
          </div>
          <a href="https://corryongnc.org/">
            <CustomButton btntext="More Info" />
          </a>
        </div>
        <Footer />
      </>
    );
  }
}

export default OrganizationProfile;
