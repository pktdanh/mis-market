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
import Table from '../components/table/Table';
import Model from '../components/model/Model';

const { Header, Content, Footer, Sider } = Layout;



function Home() {

    let changeView = (key) => {
        console.log(key)
    }

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
          Tai khoan nguoi dung
        </Menu.Item>
        <Menu.Item key="2" icon={<ShopOutlined />} onClick={() => changeView(2)}>
          Cua hang
        </Menu.Item>
        <Menu.Item key="3" icon={<TeamOutlined />}>
          Shipper
        </Menu.Item>
        <Menu.Item key="4" icon={<BarChartOutlined />}>
          Thong ke
        </Menu.Item>        
        <Menu.Item key="5" icon={<UploadOutlined />}>
          Dia diem dieu tri/ cach ly
        </Menu.Item>
        <Menu.Item key="6" icon={<VideoCameraOutlined />}>
          Nguoi quan li
        </Menu.Item>
        <Menu.Item key="7" icon={<CloudOutlined />}>
          nav 5
        </Menu.Item>
        <Menu.Item key="8" icon={<AppstoreOutlined />}>
          nav 6
        </Menu.Item>
      </Menu>
    </Sider>
    <Layout className="site-layout" style={{ marginLeft: 200 }}>
      <Header className="site-layout-background" style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
        <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
          <Table></Table>
          
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>ADMIN TOOLS - 2022</Footer>
    </Layout>
  </Layout>
    )
}

export default Home
