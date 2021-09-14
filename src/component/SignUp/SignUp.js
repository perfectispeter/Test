import React, { Component } from 'react'
import { Form, Input,Button } from 'antd';
import "./Signup.css";

const formItemLayout = {
    labelCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 8,
      },
    },
    wrapperCol: {
      xs: {
        span: 24,
      },
      sm: {
        span: 16,
      },
    },
};

const tailFormItemLayout = {
    wrapperCol: {
  
      xs: {
        span: 24,
        offset: 0,
      },
      sm: {
        span: 16,
        offset: 8,
      },
    },
};

export default class Signup extends Component {

    onFinish = (values) => {
        console.log('Received values of form: ', values);
    };

    
    render() {
        return (
            <Form
                {...formItemLayout}
                name="register"
                className="register"
                onFinish={this.onFinish}
                scrollToFirstError
            >
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                    {
                        type: 'email',
                        message: 'The input is not valid E-mail!',
                    },
                    {
                        required: true,
                        message: 'Please input your email address!',
                    },
                    ]}
                >
                    <Input placeholder="Please enter your email address!" />
                </Form.Item>

                <Form.Item
                    name="nickname"
                    label="Display Name"
                    tooltip="What do you want others to call you?"
                    rules={[
                    {
                        required: true,
                        message: 'Please input a display name!',
                        whitespace: true,
                    },
                    ]}
                >
                    <Input placeholder="Please enter a name!"/>
                </Form.Item>

                <Form.Item
                    name="password"
                    label="Password"
                    rules={[
                    {
                        required: true,
                        message: 'Please input your password!',
                    },
                    ]}
                    hasFeedback
                >
                    <Input.Password placeholder="Please enter your password!"/>
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="Confirm Password"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                    {
                        required: true,
                        message: 'Please confirm your password!',
                    },
                    ({ getFieldValue }) => ({
                        validator(_, value) {
                        if (!value || getFieldValue('password') === value) {
                            return Promise.resolve();
                        }

                        return Promise.reject(new Error('The two passwords that you entered do not match!'));
                        },
                    }),
                    ]}
                >
                    <Input.Password placeholder="Please enter your password again!"/>
                </Form.Item>

                <Form.Item {...tailFormItemLayout}>
                    <Button type="primary" htmlType="submit">
                    Register
                    </Button>
                </Form.Item>
            </Form>
        )
    }
}