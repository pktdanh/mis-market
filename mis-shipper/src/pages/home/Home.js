import React, {useState, useContext, useEffect} from 'react'
import styled from 'styled-components'
import { Modal, Button, Space, Card, Empty, notification  } from 'antd';
import { MyContext } from '../../App';
import axios from 'axios';
import InvoiceNow from '../../components/InvoiceNow/InvoiceNow'; // don hang gan nhat
import Invoice from '../../components/Invoice/Invoice'; // tat ca don hang

import { Link } from 'react-router-dom';

const TitleTag = styled.div`
    font-size: 16px;
    font-weight: 500;
    position: relative;
    border-left: 8px solid #FF6651;
    padding-left: 10px;
    margin: 30px 0px 10px 0px;
`;

function Home() {
    return (
        <div>
            <TitleTag>TRANG CHỦ</TitleTag>
            <FindInvoice></FindInvoice>
        </div>
    )
}

const FindInvoice = () => {
    let context = useContext(MyContext)
    const [model1, setModel1] = useState(false);
    const [model2, setModel2] = useState(false);
  
    const showModal1 = () => {
        // if(context.status === false) return;
        setModel1(!model1);
        // setModel2(false);
    };
  

    const showModal2 = () => {
      // if(context.status === false) return;
      setModel2(!model2);
      // setModel1(false);
    };

 
    
    const [listInvoice, setListInvoice] = useState([])
    useEffect(() => {
      let fetchData = async () =>{
          const result = axios.get('https://localhost:44352/api/invoice/noshipper')
          .then(function (res) {
            console.log(res.data);
            setListInvoice(res.data)
            console.log("Tat ca don hang", listInvoice);
          }).catch(function (error) {
            console.log(error);
        });
      }
      let x =  fetchData()
    }, []);

    const [listInvoiceNear, setListInvoiceNear] = useState([])
    useEffect(() => {
      let fetchData = async () =>{
          let data = {
            "accountID": JSON.parse(context.user).accountID
          }
          console.log("data api post", data);
          const result = axios.post('https://localhost:44352/api/invoice/noshipper/near', data)
          .then(function (res) {
            console.log("res",res.data);
            setListInvoiceNear(res.data)
            
          }).catch(function (error) {
            console.log(error);
        });
      }
      let x =  fetchData()
    }, []);

    const close = () => {
    
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
          'Nhận đơn thành công.',
        btn,
        key,
        onClose: close,
      });
    };

    let nhanDon = (maHD) => {
      console.log("nhan don");
      let fetchData = async () =>{
        let data = {
          "maHD": maHD,
          "account_S": JSON.parse(context.user).accountID,
          "thoiGian": new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())+1)+"-"+new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds(), 
       }
        console.log("data api post", data);
        const result = axios.post('http://localhost:8080/api/history/change', data)
        .then(function (res) {
          console.log("res",res.data);
          setListInvoiceNear(res.data)
          openNotification()
        }).catch(function (error) {
          console.log(error);
      });
    }
    let x =  fetchData()
    }

    return (
      <div style={{paddingBottom: "100px"}}>
        <Button type="primary" onClick={showModal1} style={{"marginTop": "50px", "display": "block"}}>
          {context.status === true ? "TÌM ĐƠN HÀNG GẦN ĐÂY" : "BẬT TRẠNG THÁI SHIPPER ĐỂ NHẬN ĐƠN HÀNG"}
        </Button>
        
        {model1 && listInvoiceNear.length != 0 ? listInvoiceNear.map((item, index) =>         
          <Space direction="vertical" key={index} style={{ marginLeft: "30px"}}>
            <Card title="Đơn hàng gần bạn" style={{ width: 300 }}>
              <p>Cửa hàng: {item.tenCH}</p>
              <p>Địa chỉ cửa hàng: {item.diaChiCuaHang.diaChiChiTiet}</p>
              <p>Địa chỉ khách hàng: {item.diaChiKhachHang.diaChiChiTiet}</p>
              <p>Tổng tiền:{item.tongTien}</p>
              <p>Phí ship:{item.phiShip}</p>
              <p>Hình thức thanh toán:{item.tenTT}</p>
              <Button type="primary" danger onClick={nhanDon(`${item.maHD}`)}>
                Nhận Đơn
              </Button>
            </Card>
          </Space>
        ) :  listInvoiceNear.length == 0 ? <Empty style={{marginTop: "50px"}}>
          <p>Đơn hàng gần đây</p>
        </Empty> : <></>
        }
        <Button type="primary" onClick={showModal2} style={{"marginTop": "150px", "display": "block"}}>
          {context.status === true ? "TÌM TẤT CẢ ĐƠN HÀNG" : "BẬT TRẠNG THÁI SHIPPER ĐỂ NHẬN ĐƠN HÀNG"}
        </Button>
        {model2 && listInvoice.length!=0 ? listInvoice.map((item, index) =>         
          <Space direction="vertical" key={index} style={{ marginLeft: "30px"}}>
            <Card title="Đơn hàng tất cả" style={{ width: 300 }}>
              <p>Cửa hàng: {item.tenCH}</p>
              <p>Địa chỉ: {item.diaChiCuaHang.diaChiChiTiet}</p>
              <p>Địa chỉ khách hàng: {item.diaChiKhachHang.diaChiChiTiet}</p>
              <p>Tổng tiền:{item.tongTien}</p>
              <p>Phí ship:{item.phiShip}</p>
              <p>Hình thức thanh toán:{item.tenTT}</p>
              <Button type="primary" danger onClick={() => nhanDon(`${item.maHD}`)}>
                Nhận Đơn
              </Button>
            </Card>
          </Space>
        ) :  listInvoice.length==0 ? <Empty style={{marginTop: "50px"}}>
          <p>Đơn hàng tất cả</p>
        </Empty> : <></>
        }
      </div> 
    );
  };

export default Home
