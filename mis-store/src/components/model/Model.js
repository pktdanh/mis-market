import React, {useState, useContext} from 'react';
import { Button, message, Image } from 'antd';
import ProForm, { ModalForm, ProFormText, 
  ProFormDateRangePicker, ProFormSelect, ProFormDatePicker, ProFormUploadButton, ProFormDigit, ProFormTextArea, ProFormCascader, ProFormMoney} from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';

import { Cascader } from 'antd';

import Uploader from '../uploader/Uploader';

import axios from 'axios';
import { MyContext } from '../../App';
const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};

function onChange(value) {
  console.log(value);
}

const optionsCascader = [
  {
    value: 'nsp001',
    label: 'Thực phẩm tươi sống',
    children: [
      {
        value: 'lsp001',
        label: 'Sản phẩm thịt'
      },
      {
        value: 'lsp002',
        label: 'Sản phẩm thuỷ sản'
      },
      {
        value: 'lsp003',
        label: 'Sản phẩm rau xanh'
      },
      {
        value: 'lsp004',
        label: 'Sản phẩm trái cây'
      },
      {
        value: 'lsp005',
        label: 'Sản phẩm trứng'
      },
    ],
  },
  {
    value: 'nsp002',
    label: 'Công nghệ phẩm',
    children: [
      {
        value: 'lsp006',
        label: 'Bánh kẹo'
      },
      {
        value: 'lsp007',
        label: 'Gia vị'
      },
      {
        value: 'lsp008',
        label: 'Đồ ăn nhanh'
      },
      {
        value: 'lsp009',
        label: 'Đồ ăn đóng hộp'
      },
      {
        value: 'lsp010',
        label: 'Nước uống các loại'
      },
    ],
  },
  {
    value: 'nsp003',
    label: 'Lương thực',
    children: [
      {
        value: 'lsp011',
        label: 'Gạo các loại'
      },
      {
        value: 'lsp012',
        label: 'Củ, quả'
      },
      {
        value: 'lsp013',
        label: 'Sản phẩm bột, tinh bột'
      },
    ],
  },
  {
    value: 'nsp004',
    label: 'Nhu yếu phẩm cần thiết',
    children: [
      {
        value: 'lsp014',
        label: 'Khẩu trang'
      },
      {
        value: 'lsp015',
        label: 'Sản phẩm kháng khuẩn'
      },
      {
        value: 'lsp016',
        label: 'Sản phảm vệ sinh cá nhân'
      },
      {
        value: 'lsp017',
        label: 'Sản phẩm tẩy rửa'
      },
    ],
  },
  
];

const Model =  () => {
  let context = useContext(MyContext)
    return (<ModalForm title="Sản Phẩm Mới" 
        trigger={
            <Button type="primary">
                <PlusOutlined />
                Thêm sản phẩm
            </Button>
        } autoFocusFirstInput modalProps={{
            destroyOnClose: true,
            onCancel: () => console.log('run'),
        }} onFinish={async (values) => {
            await waitTime(2000);
            console.log("Data add product: ", values);
            let data = {
              "maSP" : "sp10000",
              "tenSP": values.name,
              "anhSP": values.image,
              "moTaSP": values.des,
              "ngayDang": new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())+1)+"-"+new Date().getDate(), 
              "giaSP": `${values.price}`,
              "soLuongTon": `${values.quantityRest}`,
              "soSPDaBan": "0",
              "avgRating": "0",
              "soRating": "0",
              "loaiSP": values.area[1],
              "account_CH": JSON.parse(context.store).accountID 
            }
            console.log(data);
            console.log(JSON.stringify(data));
            const result = axios.post('http://localhost:8080/api/store/upproduct', 
                data
            ).then(function (res) {
              console.log("RES add product: ", res);
            }).catch(function (error) {
                console.log(error);
            });

            message.success('Thêm sản phẩm thành công');
            return true;
        }}>
      <ProForm.Group>
        <ProFormText width="md" name="name" label="Tên sản phẩm" tooltip="Tên sản phẩm tooltip" placeholder="Tên sản phẩm" required rules={[{ required: true, message: '' }]}/>        
      </ProForm.Group>  
   
      <ProForm.Group>
        <ProFormMoney width="md" name="price" 
          label="Giá" placeholder="Giá" locale="en-US"
          initialValue={1}
          min={1}
          required rules={[{ required: true, message: '' }]}
          />   
        <ProFormDigit initialValue={50} width="md" name="quantityRest" label="Số lượng còn lại" tooltip="Số lượng còn lại tooltip" placeholder="Số lượng còn lại" required rules={[{ required: true, message: '' }]}/>        
      </ProForm.Group>
      <ProForm.Group>
      <ProFormCascader
        name="area"
        label="Loại sản phẩm"
        fieldProps={{
          options: optionsCascader
        }}
        required rules={[{ required: true, message: '' }]}
      />

      <ProForm.Group>
        <ProFormText width="md" name="nguongoc" label="Xuất xứ" tooltip="Xuất xứ tooltip" placeholder="Xuất xứ" required rules={[{ required: true, message: '' }]}/>        
      </ProForm.Group>  
      </ProForm.Group>

      <ProForm.Group>
        <ProFormDatePicker name="nsx" label="Ngày sản xuất" required rules={[{ required: true, message: '' }]}/>
      </ProForm.Group>
      <ProForm.Group>
        <ProFormDatePicker name="hsd" label="Hạn sử dụng" required rules={[{ required: true, message: '' }]}/>
      </ProForm.Group>

      
      <ProFormTextArea name="des" label="Mô tả" initialValue="Mô tả" required rules={[{ required: true, message: '' }]}/>
      <ProForm.Group>
        
        
        <ImageDemo></ImageDemo>
      </ProForm.Group>
    </ModalForm>);
};


function ImageDemo() {
  const [image, setImage] = useState('https://i.imgur.com/wSgPVQt.png');
  return (
    <>
      <Uploader></Uploader>
        Hoặc
        <ProFormText width="md" name="image" label="Link hình ảnh" tooltip="Hình ảnh tooltip" placeholder="URL" initialValue={image}/>  
        <Image
          width={200}
          src={image}
          preview={{
            src: `${image}`,
          }}
        />
    </>
    
  );
}
export default Model;