import React, {useState, useEffect, useContext} from 'react';
import { Drawer, List, Avatar, Divider, Col, Row, Button } from 'antd';
import styled from 'styled-components';
import axios from 'axios';
import { MyContext } from '../../App';

import { Menu, Dropdown, message } from 'antd';
import { DownOutlined } from '@ant-design/icons';

const HIContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;

const TitleTag = styled.div`
    font-size: 16px;
    font-weight: 500;
    position: relative;
    border-left: 8px solid #FF6651;
    padding-left: 10px;
    margin: 30px 0px 10px 0px;
`;



function HistoryInvoices() {
    const context = useContext(MyContext)
    let userContext = JSON.parse(context.user)
    let API_URL = `https://localhost:44352/api/history/shipper`;
    const [shipingHistory, setShipingHistory] = useState([])
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
            console.log(res.data)
            setShipingHistory(res.data)
        });
    }, [])

    const [invoiceDisplaying, setInvoiceDisplaying] = useState({})

    let handleOnClick = ({ key }) => {
        message.info(`Chon hoa don ${key}`);
        let xx = shipingHistory.find(item => item.maHD == key)
        console.log(xx)
    };
    
    const menu = (shipingHistory) =>(
        <Menu onClick={handleOnClick}>
        {
            shipingHistory.map((item) => <Menu.Item key={item.maHD}>Đơn hàng: {item.maHD}</Menu.Item>)
        }
        </Menu>
    );
    return (
        <HIContainer>
            <TitleTag>Các đơn hàng đã giao</TitleTag>
            {shipingHistory && <Dropdown overlay={menu(shipingHistory)}>
                <Button type="dashed" block onClick={e => e.preventDefault()}>
                    Chọn đơn hàng
                </Button>
            </Dropdown>}
        </HIContainer>
    )
}

export default HistoryInvoices
