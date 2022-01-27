import React, {useState, useEffect, useContext} from 'react';
import { Drawer, List, Avatar, Divider, Col, Row, Button, notification } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { MyContext } from '../../App';

import HistoryInvoices from '../../components/HistoryInvoices/HistoryInvoices';

const DescriptionItem = ({ title, content }) => (
  <div className="site-description-item-profile-wrapper">
    <p className="site-description-item-profile-p-label">{title}:</p>
    {content}
  </div>
);

const MeContainer = styled.div`
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

const PersionalInformation = () => {
  const [visible, setvisible] = useState(false)
  const context = useContext(MyContext)
  
  const [user, setUser] = useState({})
  
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
        'Đăng xuất thành công.',
      btn,
      key,
      onClose: () => {
        localStorage.clear();
        window.location.href = '/'
      },
    });
    localStorage.clear();
    window.location.href = '/'
  };

  let showDrawer = () => {
    setvisible(true)
  };

  let onClose = () => {
    setvisible(false)
  };
  let userContext = JSON.parse(context.user)
  
  let API_URL = `https://localhost:44352/api/shipper/one`;
    useEffect(() => {
        let endpoint = ''
        let method = 'POST'
        let d = axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: {
          "accountID": userContext.accountID
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
            setUser(res.data[0])
            
        });
    }, [])

    return Object.keys(user).length == 0 ? <></> : <MeContainer>
    <TitleTag>Thông tin cá nhân:</TitleTag>
    <List
      dataSource={[
        {
          name: user.hoTen,
        },
      ]}
      bordered
      renderItem={item => (
        <List.Item
          key={item.id}
          actions={[
            <a onClick={showDrawer} key={`a-${item.id}`}>
              Xem thông tin
            </a>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
            }
            title={<a href="/me">{item.name}</a>}
            description="MIS Shipper"
          />
        </List.Item>
      )}
    />
    <Drawer
      width={"auto"}
      placement="right"
      closable={false}
      onClose={onClose}
      visible={visible}
    >
      <Button onClick={onClose}>Quay Lại</Button>
      <Divider />
      <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
        Thông tin:
      </p>
      <p className="site-description-item-profile-p">Cá nhân</p>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Họ tên" content={user.hoTen} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="CCCD/CMND" content={user.cmnd} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Mã bằng lái" content={user.maBangLai} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Biển số" content={user.bienSo.slice(0, 4) + "-" + user.bienSo.slice(3, 7)} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Thành phố" content="Thành phố Hồ Chí Minh" />
        </Col>
        </Row>
        <Row>
        <Col span={24}>
          <DescriptionItem title="Quốc gia" content="Việt Nam" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Ngày sinh" content={user.ngaySinh.slice(0,9)} />
        </Col>
        </Row>
        <Row>
        <Col span={24}>
          <DescriptionItem title="Website" content="mis.store.com" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Địa chỉ"
            content={user.diaChiChiTiet.diaChiChiTiet}
          />
        </Col>
      </Row>
      
      <Divider />
      <p className="site-description-item-profile-p">Liên hệ</p>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Email" content={user.email} />
        </Col>
        </Row>
        <Row>
        <Col span={24}>
          <DescriptionItem title="Số điện thoại" content={user.sdt} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Github"
            content={
              <a href="/">
                github.com/pktdanh/mis-market
              </a>
            }
          />
        </Col>
      </Row>
    </Drawer>
    <Button type="danger" style={{marginTop: "20px"}} onClick={() => notiTrue()} >Đăng xuất</Button>
  </MeContainer>
       
}



export default PersionalInformation
