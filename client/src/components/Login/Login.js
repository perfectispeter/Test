import React, { Component } from "react";
import { Form, Input, Button, Alert } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./Login.css";

const tailFormItemLayout = {
  wrapperCol: {
    sm: {
      span: 50,
      offset: 0,
    },
  },
};

export default class Login extends Component {
  onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  CheckPassWord = () => {
    <Alert
      name="alert-login"
      className="alert-login"
      message="Login Failed"
      description="invalid email or password."
      type="error"
      showIcon
      closable
    />;
  };

  render() {
    return (
      <Form
        layout="vertical"
        name="normal_login"
        className="login-form"
        labelCol={{
          span: 8,
        }}
        initialValues={{
          remember: true,
        }}
        onFinish={this.onFinish}
      >
        {/* <Alert
                    name="alert-login"
                    className="alert-login"
                    message="Login Failed"
                    description="invalid email or password."
                    type="error"
                    showIcon
                    closable
                /> */}

        <Form.Item
          label="Email:"
          name="email"
          rules={[
            {
              type: "email",
              message: "The input is not valid E-mail!",
            },
            {
              required: true,
              message: "Please enter your email address!",
            },
          ]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Please enter your email address!"
          />
        </Form.Item>
        <Form.Item
          label="Password"
          name="password"
          rules={[
            {
              required: true,
              message: "Please enter your Password!",
            },
          ]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Please enter your Password!"
          />
        </Form.Item>

        <Form.Item {...tailFormItemLayout}>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={this.CheckPassWord}
          >
            Log in
          </Button>
          <a className="login-form-forgot" href="#">
            Forgot password
          </a>
        </Form.Item>
      </Form>
    );
  }
}
