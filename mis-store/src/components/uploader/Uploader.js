import React, { useState } from 'react';
import { Upload, Button, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const Uploader = () => {
  const props = {
    beforeUpload: file => {
      const isPNG = file.type === 'image/png';
      if (!isPNG) {
        message.error(`${file.name} is not a png file`);
      }
      return isPNG || Upload.LIST_IGNORE;
    },
    onChange: info => {
      console.log(info.fileList);
    },
  };
  return (
    <Upload {...props}>
        <p style={{"marginBottom": "8px"}}>Hình ảnh</p>
      <Button icon={<UploadOutlined />}>Upload png only</Button>
    </Upload>
  );
};

export default Uploader;