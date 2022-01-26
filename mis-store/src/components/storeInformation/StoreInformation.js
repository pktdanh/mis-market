import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { MyContext } from '../../App';
import { Descriptions, Badge, Button } from 'antd';

function StoreInformation() {
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
  const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        let fetchData = async () =>{
          console.log("JSON.parse(context.store).accountID", JSON.parse(context.store).accountID);
            const result = axios.post('http://localhost:8080/api/store/one', 
                {
                    "accountID": JSON.parse(context.store).accountID
                }
            ).then(function (res) {
                console.log(res.data.danhSachSanPham);
                setListProduct(res.data.DanhSachSanPham)
                console.log(listProduct);
            }).catch(function (error) {
                console.log(error);
            });
            
            return result
        }
            
        fetchData()
        // setData(result.data);
    }, []);
  
    
  return <div>
      <h2>THÔNG TIN VỀ CỬA HÀNG </h2>
      {invoice.length > 0  &&  
      <div style={{padding: "20px"}}>
        <Descriptions title="Cửa hàng:" bordered >
            <Descriptions.Item label="Tên cửa hàng"span={3}>{invoice[0].tenCH}</Descriptions.Item>
            <Descriptions.Item label="Tài khoản cửa hàng"span={3}>{invoice[0].account_CH}</Descriptions.Item>
            <Descriptions.Item label="Số lượng sản phẩm hiện có"span={3}>{listProduct ? listProduct.length : 0}</Descriptions.Item>
            <Descriptions.Item label="Ngày tạo cửa hàng"span={3}>{invoice[0].ngayLap}</Descriptions.Item>
            <Descriptions.Item label="Địa chỉ" span={3}>
            {invoice[0].diaChiCuaHang.diaChiChiTiet}
            </Descriptions.Item>

            
        </Descriptions>
        {/* <Button type="primary">Xác nhận đã chuyển hàng cho shipper</Button> */}
      </div>
      }
  </div>;
}

export default StoreInformation;

