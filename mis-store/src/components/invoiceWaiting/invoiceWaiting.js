import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { MyContext } from '../../App';
import { Descriptions, Badge, Button } from 'antd';

function InvoiceWaiting() {
  let context = useContext(MyContext)
  const [invoice, setInvoice] = useState([])
  const [listDetailtProduct, setListDetailtProduct] = useState([])
  useEffect(() => {
      let url = 'https://localhost:44352/api/invoice/store/handling'
      let fetchData =  () =>{
          const result = axios.post(url, 
            {
              "account_CH": JSON.parse(context.store).accountID
            }
          ).then(function (res) {
              console.log("Co don", res.data);
              setInvoice(res.data)   
              console.log(JSON.stringify(res.data));
          }).catch(function (error) {
              console.log(error);
          });
        }
      fetchData()
      
  }, [])

  useEffect(() => {
    console.log("invoice.length", invoice);
    for(let i = 0; i < invoice.length; i++){
      console.log("invoice[i].maHD", invoice[i].maHD);
      let url1 = 'https://localhost:44352/api/invoice/one'
      let fetchData1 =  () => {
          const result = axios.post(url1, 
            {
              "maHD": "hdch001252"
            }
          ).then(function (res) {
              
              console.log("setLisDetailtProduct", res.data[0].danhSachSanPham);
              let temp = listDetailtProduct
              temp.push(res.data[0].danhSachSanPham)
              setListDetailtProduct(temp)   
                      //  console.log(JSON.stringify(res.data));
          }).catch(function (error) {
              console.log(error);
          });
        }
      fetchData1()
    }
  }, [invoice])
    
  return <div>
      <h2>Đơn Hàng Đang Đến: </h2>
      {invoice.length > 0 &&  invoice.map((item, index) => <div style={{padding: "20px", border: "3px solid #21ced7"}}>
        <Descriptions title="Đơn hàng" bordered >
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
                    listDetailtProduct.length > 0 ?  listDetailtProduct[index].map((item1, index1) => {
                      console.log("Item 1:", item1)
                      return (<div style={{textAlign: "left", borderBottom: "1px solid black"}}>
                        <p>Mã sản phẩm: {item1.maSP}</p>
                        <p>Tên sản phẩm: {item1.tenSP}</p>
                        <p>Số lượng: {item1.soLuong}</p>
                      </div>)
                    }) : <></>
                }
            </Descriptions.Item>
            
        </Descriptions>
        <Button type="primary">Xác nhận đã chuyển hàng cho shipper</Button>
      </div>)}
  </div>;
}

export default InvoiceWaiting;

