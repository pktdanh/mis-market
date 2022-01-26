import React from 'react';
import { Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';



function MyOrder() {
  return <div>
    <Link to="/">
      <Button type="primary" shape="round"  size={'large'} ghost>
        Đơn hàng đang đến
      </Button>
    </Link>
    <Link to="/invoices">
    <Button type="primary" shape="round"  size={'large'} style={{"marginLeft": "60px"}}>
      Đơn hàng đã giao
    </Button>
    </Link>
  </div>;
}

export default MyOrder;
