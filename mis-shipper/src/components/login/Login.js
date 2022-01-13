import { useContext } from 'react';
import { Form, Input, Button, Checkbox } from 'antd';
import styled from 'styled-components';
import axios from 'axios';

import { MyContext } from '../../App';

const LoginContainer = styled.div`
  padding: 40px;
`;

const LoginTitle = styled.h2`
    text-transform: uppercase;
    text-align: center;
`;

const Login = () => {
    let context = useContext(MyContext)

  const onFinish = (values) => {
    console.log('Success:', values);

    axios({
      method: 'post',
      url: 'https://localhost:44352/api/account/login',
      data: values
    }).then(function (res) {
      // console.log(res.data == "") // login failed
      if(res.data == ""){
        return;
      } else {
        console.log(res.data)
        context.updateLogin(context.isLogin)
        context.updateUser(JSON.stringify(res.data))
      }
      
    });

    // context.updateLogin(context.isLogin)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <LoginContainer>
          <LoginTitle>Dang Nhap</LoginTitle>
    <Form
      name="basic"
      labelCol={{
        span: 8,
      }}
      wrapperCol={{
        span: 16,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your username!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your password!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      {/* <Form.Item
        name="remember"
        valuePropName="checked"
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Checkbox>Remember me</Checkbox>
      </Form.Item> */}

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        <Button type="primary" htmlType="submit">
          Dang Nhap
        </Button>
      </Form.Item>
    </Form>
    <p style={{"textAlign": "center"}}>Hoac <a href="/register">Dang Ky</a> </p>
    </LoginContainer>
  );
};
export default Login
