import React, { useState, useContext, useEffect } from 'react';
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
  Checkbox,
  notification 
} from 'antd';
import axios from 'axios'
import styled from 'styled-components';
import { MyContext } from '../App';

// import UploadAvatar from '../UploadAvatar/UploadAvatar';

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

  
  const close = () => {
    window.location.href ='/'
  };

  const openNotification = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Confirm
      </Button>
    );
    notification.open({
      message: 'Thông báo',
      description:
        'Đăng ký tài khoản cửa hàng thành công.',
      btn,
      key,
      onClose: close,
    });
  };

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  const onFinish = (values) => {
    console.log('Success:', values);
    // context.updateLogin(context.isLogin)
    // call api
    let data = {
      "tenCH": values.storeName,
      "cmnd": `${values.cccd}`,
      "ngayThamGia": new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())+1)+"-"+new Date().getDate(),  
      "email": values.email,
      "sdt": `${values.phone}`,
      "diaChi": values.street,
      "maPhuongXa": values.address[1],
      "maGPKD": `${values.maGPKD}`,
      "maCNATTP": `${values.maCNATTP}`,
      "taiKhoan": {
        "username": values.username,
        "password": values.password
      }
    }
    console.log(data);
    console.log(JSON.stringify(data));
    const result = axios.post('http://localhost:8080/api/account/register/store', 
      data
    ).then(res => {
      console.log(res);
      context.updateStore(JSON.stringify(res.data))      
      context.updateLogin();
      openNotification()
    })
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };
  const [ward, setWard] = useState([])
  useEffect(() => {
    let fetchData = async () =>{
        const result = axios.get('https://localhost:44352/api/district/all')
        .then(function (res) {
            console.log(res.data);
            let district = {
              value: '',
              label: '',
              children: [],
            }
            let ward = {
              value: 'Phuong 1',
              label: 'Phuong 2',
            }
            let listData = []
            res.data.forEach(item => {
              let d = Object.create(district)
              d.value = item.maQuanHuyen
              d.label = item.tenQuanHuyen
              d.children = []
              item.danhSachPhuongXa.forEach(i => {
                let w = Object.create(ward)
                w.value = i.maPhuongXa
                w.label = "Phường " + i.tenPhuongXa
                d.children.push(w)
              })
              listData.push(d)
              
            })
            console.log("Final: ", listData);
            setWard(listData)
        }).catch(function (error) {
            console.log(error);
        });
        
        return result
    }
        
    fetchData()
    // setData(result.data);
}, []);
  return (
      <RegisterContainer>
          <RegisterTitle>ĐĂNG KÝ TÀI KHOẢN CỬA HÀNG</RegisterTitle>
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
      autoComplete="on"
    >
        <RegisterTag>Thông tin cá nhân:</RegisterTag>
      <Form.Item label="Họ và tên" name="fullname" rules={[
          {
            required: true,
            message: 'Hãy nhập họ và tên',
            min: 4
          },
        ]} >
        <Input />
      </Form.Item>
      <Form.Item label="Số CCCD/CMTND" name="cccd" rules={[
          {
            required: true,
            message: 'Hãy nhập CCCD/CMTND!',
          },
          { type: 'number'},
        ]} value="0123456789">
        <InputNumber style={{ width: '100%' }}/>
      </Form.Item>
      <Form.Item label="Giới tính" name="gender" rules={[
          {
            required: true,
            message: 'Hãy chọn giới tính!',
          },
        ]}>
        <Select>
          <Select.Option value="Nam">Nam</Select.Option>
          <Select.Option value="Nữ">Nu</Select.Option>
        </Select>
      </Form.Item>
      
      <Form.Item label="Ngày tháng năm sinh" name="birthday" rules={[
          {
            required: true,
            message: 'Hãy nhập ngày sinh!',
            
          },
        ]}>
        <DatePicker />
      </Form.Item>
      <Form.Item label="Email" name="email" rules={[
        {
          type: 'email',
        }
      ]}>
        <Input />
      </Form.Item>

      <Form.Item label="Địa chỉ" name="address" rules={[
          {
            required: true,
            message: 'Hãy nhập địa chỉ!',
          },
        ]}>
        <Cascader
          options={ward}
        />
      </Form.Item>
      <Form.Item label="Số nhà, đường, ..." name="street" rules={[
          {
            required: true,
            message: 'Hãy nhập số nhà, đường, ...!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Số điện thoại" name="phone" rules={[
          {
            required: true,
            message: 'Hãy nhập số điện thoại!',
            type: 'number'
          },
        ]}>
        <InputNumber style={{ width: '100%' }}/>
      </Form.Item>

      <RegisterTag>Thông tin cửa hàng:</RegisterTag>
      <Form.Item label="Tên cửa hàng" name="storeName" rules={[
          {
            required: true,
            message: 'Hãy nhập tên cửa hàng!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Địa chỉ cửa hàng" name="storeAddress" rules={[
          {
            required: true,
            message: 'Hãy nhập địa chỉ cửa hàng!',
          },
        ]}>
        <Cascader
          options={ward}
        />
      </Form.Item>
      <Form.Item label="Số nhà, đường, ..." name="storeStreet" rules={[
          {
            required: true,
            message: 'Hãy nhập số nhà, đường, ...!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item label="Mã GPKD" name="maGPKD" rules={[
          {
            required: true,
            message: 'Hãy nhập mã giấy phép đăng ký kinh doanh!',
            type: 'number'
          },
        ]}>
        <InputNumber style={{ width: '100%' }}/>
      </Form.Item>
      <Form.Item label="Mã GCN ATTP" name="maCNATTP" rules={[
          {
            required: true,
            message: 'Hãy nhập Mã Giấy chứng nhận ATTP!',
            type: 'number'
          },
        ]}>
        <InputNumber style={{ width: '100%' }}/>
      </Form.Item>

      <RegisterTag>Thông tin tài khoản:</RegisterTag>
      <Form.Item label="Tên đăng nhập" name="username" rules={[
          {
            required: true,
            message: 'Hãy nhập tên đăng nhập!',
          },
        ]}>
        <Input />
      </Form.Item>
      <Form.Item
        label="Mật khẩu"
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
      <Form.Item
        label="Mật khẩu lần nữa"
        name="repassword"
        rules={[
          {
            required: true,
            message: 'Hãy nhập mật khẩu lần nữa!',
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        
      >
        <Checkbox>
          I have read the <a href="/">agreement</a>
        </Checkbox>
      </Form.Item>
      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 16,
        }}
      >
        
        <Button type="primary" htmlType="submit">
          Đăng Ký
        </Button>
      </Form.Item>
    </Form>
    <p style={{"textAlign": "center"}}>Hoặc <a href="/">Đăng Nhập</a> </p>
    </RegisterContainer>
  );
};

export default Register
