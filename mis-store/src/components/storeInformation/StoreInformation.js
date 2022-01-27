import React, {useState, useEffect, useContext} from 'react';
import axios from 'axios';
import { MyContext } from '../../App';
import { Descriptions, Badge, Button } from 'antd';

function StoreInformation() {
  let context = useContext(MyContext)
  const [store, setStore] = useState([])
  const [listDetailtProduct, setListDetailtProduct] = useState([])
  useEffect(() => {
      let url = 'http://localhost:8080/api/store/one'
      let fetchData =  () =>{
          const result = axios.post(url, 
            {
              "accountID": JSON.parse(context.store).accountID
            }
          ).then(function (res) {
              
              setStore(res.data)   
              console.log(res.data);
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
      {store  &&  
      <div style={{padding: "20px"}}>
        <Descriptions title="Cửa hàng:" bordered >
            <Descriptions.Item label="Tên cửa hàng"span={3}>{store.tenCH}</Descriptions.Item>
            <Descriptions.Item label="Tài khoản cửa hàng"span={3}>{store.accountID}</Descriptions.Item>
            <Descriptions.Item label="Số lượng sản phẩm hiện có"span={3}>{store.danhSachSanPham && store.danhSachSanPham.length}</Descriptions.Item>
            <Descriptions.Item label="Ngày tạo cửa hàng"span={3}>{store.ngayThamGia}</Descriptions.Item>
            <Descriptions.Item label="Địa chỉ" span={3}>
            {store.diaChiCuaHang && store.diaChiCuaHang.diaChiChiTiet}
            </Descriptions.Item>
            <Descriptions.Item label="Email"span={3}>{store.email}</Descriptions.Item>
            <Descriptions.Item label="CCCD"span={3}>{store.cmnd}</Descriptions.Item>
            <Descriptions.Item label="Mã GPKD"span={3}>{store.maGPKD}</Descriptions.Item>
            <Descriptions.Item label="Mã chứng nhận an toàn thực phẩm"span={3}>{store.maCNATTP}</Descriptions.Item>
            
        </Descriptions>
        {/* <Button type="primary">Xác nhận đã chuyển hàng cho shipper</Button> */}
      </div>
      }
  </div>;
}

export default StoreInformation;

