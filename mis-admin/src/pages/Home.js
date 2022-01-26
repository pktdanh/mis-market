import { Layout, Menu } from 'antd';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UserOutlined,
  UploadOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Avatar, Badge } from 'antd';
import axios from 'axios'
import TableListProduct from '../components/tableListProduct/TableListProduct';
import TableListInvoice from '../components/tableListInvoice/TableListInvoice';

import MyOrder from '../components/myOrder/MyOrder';
import Model from '../components/model/Model';

import Statistic from '../components/statistic/Statistic';
import StoreInformation from '../components/storeInformation/StoreInformation';

import InvoiceWaiting from '../components/invoiceWaiting/invoiceWaiting';

import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../App';
const { Header, Content, Footer, Sider } = Layout;



function Home() {
    let context = useContext(MyContext)
    const [view, setView] = useState(1)
    let changeView = (key) => {
      setView(key)
    }


    // // Call API every 5s
    // const [data, setData] = useState({})
    // const url = `https://localhost:44352/api/invoice/store/handling`;
    // // console.log("context.store.accountID", JSON.parse(context.store).accountID);
    // useEffect(() => {      
    //   const intervalId = setInterval(() => {  //assign interval to a variable to clear it.
    //     // console.log(" - API KIỂM TRA XEM CÓ BAO NHIÊU ĐƠN HÀNG VỪA ĐƯỢC MUA TỪ USER MÀ CHƯA TỚI STORE Ở TRONG DATABASE => LẤY RA CON SỐ ĐỂ ĐƯA LÊN BADGE HOẶC LÀM 1 CÁI NOTIFICATION")
    //     let fetchData = async () =>{
    //       const result = axios.post(url, 
    //         {
    //           "account_CH": JSON.parse(context.store).accountID
    //         }
    //       ).then(function (res) {
    //           // console.log("Co don", res.data);
    //           setData(res.data)   
    //           context.updateNewInvoice(res.data.length)           
    //       }).catch(function (error) {
    //           console.log(error);
    //       });
    //     }
    //     fetchData()
    //   }, 5000)
    
    //   return () => clearInterval(intervalId); //This is important
     
    // }, [url, data])

    return (
        <Layout>
    <Sider
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
      }}
    >
      <div className="logo" style={{height: "32px", margin: "16px", background: "rgba(255, 255, 255, 0.2)"}}/>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />} onClick={() => changeView(1)}>
          Danh sách sản phẩm
        </Menu.Item>
        <Menu.Item key="2" icon={<ShopOutlined />} onClick={() => changeView(2)}>
          Quản lý đơn hàng 
        </Menu.Item>       
        <Menu.Item key="3" icon={<BarChartOutlined />} onClick={() => changeView(3)}>
          Thống kê
        </Menu.Item>   
        <Menu.Item key="4" icon={<TeamOutlined />} onClick={() => changeView(4)}>
          Quản lý cửa hàng
        </Menu.Item>     
        <Menu.Item key="5" icon={<UploadOutlined />} onClick={() => changeView(5)}>
          Đơn hàng đang đến
        </Menu.Item>
        <Menu.Item key="6" icon={<VideoCameraOutlined />} onClick={() => changeView(6)}>
          Nguoi quan li
        </Menu.Item>
        <Menu.Item key="7" icon={<CloudOutlined />} onClick={() => changeView(7)}>
          nav 5
        </Menu.Item>
        <Menu.Item key="8" icon={<AppstoreOutlined />}>
          nav 6
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} >
        <Badge count={context.newInvoice == null ? 0 : context.newInvoice} style={{}}>
          <Avatar
            style={{
              backgroundColor: "#7ed6df",
              verticalAlign: 'middle',
              cursor: "pointer",          
            }}
            size="large"
            gap={1}
          >
            {"Shiro"}
          </Avatar>
        </Badge>
        <span className="logout" onClick={() => {
          context.updateLogin();
          localStorage.clear()
          window.location.href = '/'
        }} style={{"color": "#fff", "margin": "0 auto", "cursor": "pointer"}}>LOGOUT</span>
      </Header>
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          {view === 1 && <TableListProduct></TableListProduct>}
          {view === 2 && <TableListInvoice></TableListInvoice>}
          {view === 3 && <Statistic></Statistic>}
          {view === 4 && <StoreInformation></StoreInformation>}
          {view === 5 && <InvoiceWaiting></InvoiceWaiting>}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>ADMIN TOOLS - 2022</Footer>
    </Layout>
  </Layout>
    )
}

export default Home
