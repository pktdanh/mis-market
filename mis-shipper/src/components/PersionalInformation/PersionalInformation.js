import React, {useState, useEffect, useContext} from 'react';
import { Drawer, List, Avatar, Divider, Col, Row, Button } from 'antd';
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
    <TitleTag>Thong tin ca nhan:</TitleTag>
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
              Xem thong tin
            </a>,
          ]}
        >
          <List.Item.Meta
            avatar={
              <Avatar src="https://gw.alipayobjects.com/zos/rmsportal/BiazfanxmamNRoxxVxka.png" />
            }
            title={<a href="https://ant.design/index-cn">{item.name}</a>}
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
      <Button onClick={onClose}>Back</Button>
      <Divider />
      <p className="site-description-item-profile-p" style={{ marginBottom: 24 }}>
        Thong tin:
      </p>
      <p className="site-description-item-profile-p">Ca nhan</p>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Ten" content={user.hoTen} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="CCCD/CMND" content={user.cmnd} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Ma bang lai" content={user.maBangLai} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Bien so" content={user.bienSo.slice(0, 4) + "-" + user.bienSo.slice(3, 7)} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Thanh pho" content="Thanh pho Ho Chi Minh" />
        </Col>
        </Row>
        <Row>
        <Col span={24}>
          <DescriptionItem title="Quoc gia" content="Viet Nam" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Ngay sinh" content={user.ngaySinh.slice(0,9)} />
        </Col>
        </Row>
        <Row>
        <Col span={24}>
          <DescriptionItem title="Website" content="mis.store.com.vn" />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Dia chi"
            content={user.diaChiChiTiet.diaChiChiTiet}
          />
        </Col>
      </Row>
      
      <Divider />
      <p className="site-description-item-profile-p">Lien He</p>
      <Row>
        <Col span={24}>
          <DescriptionItem title="Email" content={user.email} />
        </Col>
        </Row>
        <Row>
        <Col span={24}>
          <DescriptionItem title="So dien thoai" content={user.sdt} />
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <DescriptionItem
            title="Github"
            content={
              <a href="http://github.com/ant-design/ant-design/">
                github.com/ant-design/ant-design/
              </a>
            }
          />
        </Col>
      </Row>
    </Drawer>
  </MeContainer>
       
}



export default PersionalInformation
