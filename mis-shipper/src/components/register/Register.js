import React, { useState, useContext } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';
import styled from 'styled-components';
import { MyContext } from '../../App';

import UploadAvatar from '../UploadAvatar/UploadAvatar';

const RegisterContainer = styled.div`
    padding: 40px;
`;

const RegisterTitle = styled.h2`
    text-transform: uppercase;
    text-align: center;
`;

const RegisterTag = styled.div`
    font-size: 16px;
    font-weight: 500;
    position: relative;
    border-left: 8px solid #FF6651;
    padding-left: 10px;
    margin-bottom: 10px;
`;

const Register = () => {
  const [componentSize, setComponentSize] = useState('default');
  let context = useContext(MyContext)

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    context.updateLogin(context.isLogin)
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  return (
      <RegisterContainer>
          <RegisterTitle>Dang Ky</RegisterTitle>
    <Form
      labelCol={{
        span: 4,
      }}
      wrapperCol={{
        span: 14,
      }}
      layout="horizontal"
      initialValues={{
        size: componentSize,
      }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
        <RegisterTag>Thong tin ca nhan:</RegisterTag>
      <Form.Item label="Ho va ten" name="fullname" rules={[
          {
            required: true,
            message: 'Hay nhap Ho va ten!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="So CCCD/CMTND" name="cccd" rules={[
          {
            required: true,
            message: 'Hay nhap CCCD/CMTND!',
          },
        ]}>
        <InputNumber style={{ width: '100%' }}/>
      </Form.Item>
      <Form.Item label="Gioi tinh" name="gender" rules={[
          {
            required: true,
            message: 'Hay chon gioi tinh!',
          },
        ]}>
        <Select>
          <Select.Option value="Nam">Nam</Select.Option>
          <Select.Option value="Nu">Nu</Select.Option>
        </Select>
      </Form.Item>
      <UploadAvatar></UploadAvatar>
      <Form.Item label="Ngay thang nam sinh" name="birthday" rules={[
          {
            required: true,
            message: 'Hay nhap ngay sinh!',
          },
        ]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Email">
        <Input />
      </Form.Item>

      <Form.Item label="Dia chi" name="address" rules={[
          {
            required: true,
            message: 'Hay nhap dia chi!',
          },
        ]}>
        <Cascader
          options={[
            {
              value: 'Quan 1',
              label: 'Quan 1',
              children: [
                {
                  value: 'Phuong 1',
                  label: 'Phuong 2',
                },
              ],
            },
            {
                value: 'Quan 2',
                label: 'Quan 2',
                children: [
                  {
                    value: 'Phuong 3',
                    label: 'Phuong 4',
                  },
                ],
              },
          ]}
        />
      </Form.Item>
      <Form.Item label="So nha, duong, ..." name="street" rules={[
          {
            required: true,
            message: 'Hay nhap so nha, duong, ...!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="So dien thoai" name="phone" rules={[
          {
            required: true,
            message: 'Hay nhap mat khau!',
          },
        ]}>
        <InputNumber style={{ width: '100%' }}/>
      </Form.Item>
      <Form.Item label="Ma bang lai xe" name="banglaixe" rules={[
          {
            required: true,
            message: 'Hay nhap ma bang lai xe!',
          },
        ]}>
        <InputNumber style={{ width: '100%' }}/>
      </Form.Item>
      <Form.Item label="Bien so xe" name="biensoxe" rules={[
          {
            required: true,
            message: 'Hay nhap bien so xe!',
          },
        ]}>
        <Input style={{ width: '100%' }}/>
      </Form.Item>
      <Form.Item label="Toi xac nhan thong tin dang ky da chinh xac" valuePropName="checked" name="agree" rules={[
          {
            required: true,
            message: 'Hay an dong y!',
          },
        ]}>
        <Switch />
      </Form.Item>
      <RegisterTag>Thong tin tai khoan:</RegisterTag>
      <Form.Item label="Ten dang nhap" name="username" rules={[
          {
            required: true,
            message: 'Hay nhap Ten dang nhap!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Mat khau"
        name="password"
        rules={[
          {
            required: true,
            message: 'Hay nhap mat khau!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        label="Nhap mat khau lan nua"
        name="password"
        rules={[
          {
            required: true,
            message: 'Hay nhap mat khau!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
        <Button type="primary" htmlType="submit">
          Dang Ky
        </Button>
      </Form.Item>
    </Form>
    <p style={{"textAlign": "center"}}>Hoac <a href="/">Dang Nhap</a> </p>
    </RegisterContainer>
  );
};

export default Register
