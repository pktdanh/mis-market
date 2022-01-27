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

function HistoryInvoices({title}) {
    let context = useContext(MyContext)
    const [allInvoice, setAllInvoice] = useState([])
    useEffect(() => {
        let fetchData = async () =>{
            const result = axios.post('https://localhost:44352/api/invoice/shipper', 
                {
                    "account_S": JSON.parse(context.user).accountID
                }
            ).then(function (res) { 
                console.log("all inv", res.data);
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
                    {
                        item.trangThai == "Đang đóng gói" || item.trangThai == "" ? <p style={{color: "red"}}>Trạng thái: {item.trangThai}</p> : <p style={{color: "green"}}>Trạng thái: {item.trangThai}</p>
                    }
                    </Card>
                </Space>
        ) 
          
      }
  </INContainer>;
}

export default HistoryInvoices;
