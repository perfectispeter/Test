import React, { Component } from "react";
import Header from "../../component/header/header";
import MainContainer from "../../component/maincontainer/mainContainer";
import "./login.css";
import TextField from "@material-ui/core/TextField/TextField";
import CustomButton from "../../component/custombutton/custombutton";
import PasswordField from "../../component/passwordField/passwordField";
import Alert from "@material-ui/lab/Alert";
import Snackbar from "@material-ui/core/Snackbar";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputType: "password",
      currentPage: "Login",
      emailAddress: "",
      displayName: "",
      password: "",
      confirmPassword: "",
      showError: false,
      emailError: false,
      repeatPassword: false,
    };
    this.inputRef = React.createRef();
  }
  switchLogin() {
    this.inputRef.current.value = "";
    this.setState({
      currentPage: "Login",
      emailAddress: "",
      displayName: "",
      password: "",
      confirmPassword: "",
    });
  }
  switchRegister() {
    this.inputRef.current.value = "";
    console.log(this.inputRef.current);
    this.setState({
      currentPage: "Register",
      emailAddress: "",
      displayName: "",
      password: "",
      confirmPassword: "",
    });
  }
  changeIcon() {
    this.setState({
      inputType: this.state.inputType === "password" ? "text" : "password",
    });
  }
  setEmail(event) {
    const pattern = /\w+@\w+\.\w+/;
    const valid = pattern.test(event.target.value);
    this.setState({
      emailAddress: event.target.value,
      emailError: !valid,
    });
  }
  setPassword(event) {
    this.setState({
      password: event.target.value,
    });
  }
  setName(event) {
    this.setState({
      displayName: event.target.value,
    });
  }
  setConfirmPassword(event) {
    const passwordCorrect = this.state.password === event.target.value;
    this.setState({
      confirmPassword: event.target.value,
      repeatPassword: !passwordCorrect,
    });
  }

  submitLogin() {
    this.setState({
      showError: true,
    });
    setTimeout(() => {
      this.setState({
        showError: false,
      });
    }, 3000);
  }

  render() {
    return (
      <>
        <Header />
        <MainContainer>
          <div className="login-box">
            <div className="page-switch">
              <span
                className={
                  this.state.currentPage === "Login" ? "page-active" : ""
                }
                onClick={this.switchLogin.bind(this)}
              >
                Sign In
              </span>
              <span
                className={
                  this.state.currentPage === "Register" ? "page-active" : ""
                }
                onClick={this.switchRegister.bind(this)}
              >
                Sign Up
              </span>
            </div>
            <div className="form-box">
              {this.state.currentPage === "Login" ? (
                <>
                  <TextField
                    label="Email"
                    placeholder="please enter your email address"
                    error={this.state.emailError}
                    helperText={
                      this.state.emailError ? "wrong email address !!" : ""
                    }
                    onChange={this.setEmail.bind(this)}
                    inputRef={this.inputRef}
                  />
                  <PasswordField
                    label="Password"
                    onChange={this.setPassword.bind(this)}
                    placeholder="please enter your password"
                  />
                  <div className="submit-area">
                    <CustomButton
                      btntext="Login"
                      onClick={this.submitLogin.bind(this)}
                    />
                    <span
                      style={{ cursor: "pointer" }}
                      onClick={() => {
                        this.setState({ currentPage: "Register" });
                      }}
                    >
                      Forget Password? | Sign Up
                    </span>
                  </div>
                </>
              ) : (
                <>
                  <TextField
                    label="Email"
                    type="email"
                    error={this.state.emailError}
                    helperText={
                      this.state.emailError ? "wrong email address !!" : ""
                    }
                    placeholder="please enter your email address"
                    inputRef={this.inputRef}
                    onChange={this.setEmail.bind(this)}
                  />
                  <TextField
                    label="Display Name"
                    placeholder="please enter a name"
                    onChange={this.setName.bind(this)}
                  />
                  <PasswordField
                    label="Password"
                    placeholder="please enter your password"
                    onChange={this.setPassword.bind(this)}
                  />
                  <PasswordField
                    label="Confirm Password"
                    error={this.state.repeatPassword}
                    helperText={
                      this.state.repeatPassword
                        ? "your password dose not match !"
                        : ""
                    }
                    placeholder="please enter your password again"
                    onChange={this.setConfirmPassword.bind(this)}
                  />
                  <div className="submit-area">
                    <CustomButton btntext="Register" />
                  </div>
                </>
              )}
            </div>
          </div>
          <Snackbar
            open={this.state.showError}
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            style={{
              position:"absolute",
              top:"50px"
            }}
          >
            <Alert severity="error">This is a error message!</Alert>
          </Snackbar>
        </MainContainer>
      </>
    );
  }
}
