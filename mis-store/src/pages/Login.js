import React, {useContext} from 'react';
import ReactDOM from 'react-dom';

import { Form, Input, Button, Checkbox, notification } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import axios from 'axios'
import { MyContext } from '../App';

const close = () => {
  // window.location.href ='/'
};

const openNotification = (title) => {
  const key = `open${Date.now()}`;
  const btn = (
    <Button type="primary" size="small" onClick={() => notification.close(key)}>
      Xác nhận
    </Button>
  );
  notification.open({
    message: 'Thông báo',
    description:
      title,
    btn,
    key,
    onClose: close,
  });
};


const Login = () => {
  const onFinish = values => {
    console.log('Received values of form: ', values);

    let data = {
      "username": values.username,
      "password": values.password,
      "role": "ch"
    }

    const result = axios.post('http://localhost:8080/api/account/login/store', 
      data
    ).then(res => {
      if(res.data.password !== ""){
        console.log(res);
        context.updateStore(JSON.stringify(res.data))      
        context.updateLogin();
        openNotification('Đăng nhập vào tài khoản cửa hàng thành công.')
      } else {
        openNotification('Đăng nhập vào tài khoản cửa hàng không thành công. Bạn cần đợi hệ thống cho phép đăng nhập. Thông tin chi tiết sẽ được gửi qua email.')
      }
    })
    // context.updateLogin();
    // context.updateStore({});
  };
  const context = useContext(MyContext)
  
  return (
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      style={{"width": "400px", "marginInline": "auto", "marginTop": "100px"}}
    >
      <h1>Đăng Nhập</h1>
      <Form.Item
        name="username"
        rules={[
          {
            required: true,
            message: 'Please input your Username!',
          },
        ]}
      >
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[
          {
            required: true,
            message: 'Please input your Password!',
          },
        ]}
      >
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="/forgot-password">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button">
          Log in
        </Button>
        Or <a href="/register">register now!</a>
      </Form.Item>
    </Form>
  );
};


export default Login;
