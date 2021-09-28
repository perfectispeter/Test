import React, { Component } from "react";
import Login from "../../components/Login";
import Signup from "../../components/SignUp";
import { Radio } from "antd";
import Header from "../../components/Header/Header";
import MainContainer from "../../components/maincontainer/mainContainer";
// import "antd/dist/antd.css";

export default class LoginPage extends Component {
  options = [
    { label: "Sign In", value: "login" },
    { label: "Sign Up", value: "signup" },
  ];

  state = {
    value: "login",
  };
  onChange = (e) => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { value } = this.state;
    return (
      <>
        <Header />
        <MainContainer>
          <Radio.Group
            options={this.options}
            onChange={this.onChange}
            value={value}
            optionType="button"
          />
          {value === "login" ? <Login /> : <Signup />}
        </MainContainer>
      </>
    );
  }
}