import { useContext } from 'react';
import { Form, Input, Button, Checkbox, notification } from 'antd';
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


const close = () => {
    
};

const notiFalse = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Xác nhận
    </Button>
  );
  notification.open({
    message: 'Thông báo',
    description:
      'Sai tên đăng nhập hoặc mật khẩu.',
    btn,
    key,
    onClose: close,
  });
};

const notiTrue = () => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Xác nhận
    </Button>
  );
  notification.open({
    message: 'Thông báo',
    description:
      'Đăng nhập thành công.',
    btn,
    key,
    onClose: close,
  });
};


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
      if(res.data.accountID === ""){
        console.log("Error")
        notiFalse()
        return;
      } else {
        console.log(res.data)
        context.updateLogin()
        context.updateUser(JSON.stringify(res.data))
        notiTrue()
      }
      
    });

    // context.updateLogin(context.isLogin)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <LoginContainer>
          <LoginTitle>ĐĂNG NHẬP</LoginTitle>
    <Form
      name="basic"
      labelCol={{
        span: 4,
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
            message: 'Hãy nhập tên đăng nhập',
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
            message: 'Hãy nhập mật khẩu!',
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
          Đăng Nhập
        </Button>
      </Form.Item>
    </Form>
    <p style={{"textAlign": "center"}}>Hoặc <a href="/register">Đăng Ký</a> </p>
    </LoginContainer>
  );
};
export default Login
