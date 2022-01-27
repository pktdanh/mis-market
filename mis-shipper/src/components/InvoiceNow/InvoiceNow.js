import React, {useState, useEffect, useContext} from 'react';
import styled from 'styled-components';
import { Modal, Button, Space, Card, Empty, notification  } from 'antd';
import axios from 'axios';
import { MyContext } from '../../App';

const INContainer = styled.div`
    padding: 20px;
`;

const TitleTag = styled.div`
    font-size: 16px;
    font-weight: 500;
    position: relative;
    border-left: 8px solid #FF6651;
    padding-left: 10px;
    margin: 30px 0px 10px 0px;
`;

function InvoiceNow({title}) {
    let context = useContext(MyContext)
    const [allInvoice, setAllInvoice] = useState([])
    useEffect(() => {
        let fetchData = async () =>{
            const result = axios.post('https://localhost:44352/api/invoice/shipper/handling', 
                {
                    "account_S": JSON.parse(context.user).accountID
                }
            ).then(function (res) { 
                console.log("all inv now", JSON.stringify(res.data));
                setAllInvoice(res.data)
                
            }).catch(function (error) {
                console.log(error);
            });
            
            return result
        }
            
        fetchData()
        console.log(allInvoice);
        // setData(result.data);
    }, []);
    
const notiTrue = () => {
    const key = `open${Date.now()}`;
    const btn = (
      <Button type="primary" size="small" onClick={() => notification.close(key)}>
        Xác nhận
      </Button>
    );
    notification.open({
      message: 'Thông báo',
      description:
        'Giao hàng thành công.',
      btn,
      key,
      onClose: () => {},
    });
  };
  return <INContainer>
      <TitleTag>{title}:</TitleTag>
      
      {
          allInvoice.map((item, index) => 
                <Space direction="vertical" key={index} style={{ marginLeft: "0px"}}>
                    <Card title="Đơn hàng:" >
                    <p>Mã đơn hàng: {item.maHD}</p>
                    <p>Tên cửa hàng: {item.tenCH}</p>
                    <p>Địa chỉ cửa hàng: {item.diaChiCuaHang.diaChiChiTiet}</p>
                    <p>Địa chỉ khách hàng: {item.diaChiKhachHang.diaChiChiTiet}</p>
                    <p>Phí ship:{item.phiShip}</p>
                    <p>Tổng tiền:{parseInt(item.tongTien)+parseInt(item.phiShip)}</p>                      
                    <p>Hình thức thanh toán:{item.tenTT}</p>
                    <p style={{color: "red"}}>Trạng thái: {item.trangThai}</p>
                    {
                        item.danhSachSanPham.map((item1, index1) => {
                            return <Card style={{ width: 220 }} key={index1}>
                            <p>Tên sản phẩm: {item1.tenSP}</p>
                            <p>Giá: {item1.giaSP}</p>
                            <p>Số lương: {item1.soLuong}</p>
                          </Card>
                        })
                    }
                    {item.trangThai == "Đang đóng gói" ? <Button disabled type="primary" style={{marginTop: "15px"}} onClick={() => notiTrue()}>Xác nhận giao thành công</Button> :<Button type="primary" style={{marginTop: "15px"}} onClick={() => notiTrue()}>Xác nhận giao thành công</Button>}
                    </Card>
                    
                </Space>
        ) 
          
      }
  </INContainer>;
}

export default InvoiceNow;
