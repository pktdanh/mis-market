import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { MyContext } from '../../App';
import { Descriptions, Badge } from 'antd';

function InvoiceWaiting() {
    let context = useContext(MyContext)
    const [invoice, setInvoice] = useState({})
    useEffect(() => {
        let url = 'https://localhost:44352/api/invoice/store/handling'
        let fetchData = async () =>{
            const result = axios.post(url, 
              {
                "account_CH": JSON.parse(context.store).accountID
              }
            ).then(function (res) {
                console.log("Co don", res.data);
                setInvoice(res.data)   
                         
            }).catch(function (error) {
                console.log(error);
            });
          }
          fetchData()
    }, [])
  return <div>
      <h2>Đơn Hàng Đang Đến: </h2>
      {invoice && invoice.map((item, index) => <>
        <Descriptions title="Đơn hàng" bordered style={{padding: "20px", border: "3px solid #21ced7"}}>
            <Descriptions.Item label="Mã hoá đơn">{item.maHD}</Descriptions.Item>
            <Descriptions.Item label="Phương thức thanh toán">{item.tenTT}</Descriptions.Item>
            <Descriptions.Item label="Mã shipper">{item.account_S}</Descriptions.Item>
            <Descriptions.Item label="Ngày lập đơn">{item.ngayLap}</Descriptions.Item>
            <Descriptions.Item label="Thời gian  chuẩn bị" span={2}>
            30 phút
            </Descriptions.Item>
            <Descriptions.Item label="Trạng thái" span={3}>
            <Badge status="processing" text={item.trangThai} />
            </Descriptions.Item>
            <Descriptions.Item label="Tổng tiền">{item.tongTien}</Descriptions.Item>
            <Descriptions.Item label="Khuyến mãi">0</Descriptions.Item>
            <Descriptions.Item label="Tổng tiền cuối cùng">{item.tongTien}</Descriptions.Item>
            <Descriptions.Item label="Danh sách sản phẩm">
                {
                    
                }
            </Descriptions.Item>
        </Descriptions>
      </>)}
  </div>;
}

export default InvoiceWaiting;

