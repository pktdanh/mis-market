import React, {useState, useContext} from 'react'
import { Switch, notification  } from 'antd';
import { CloseOutlined, CheckOutlined, SmileOutlined  } from '@ant-design/icons';
import styled from 'styled-components';

import {MyContext} from '../../App'

const Switcher = styled.div`
    position: fixed;
    right: 10px;
    top: 10px;
`;

function ActiveSwitcher() {
    const context = useContext(MyContext)
    return (
        <Switcher>
            <Switch
            checkedChildren={<CheckOutlined />}
            unCheckedChildren={<CloseOutlined />}
            onClick={() => {openNotification(context.status); context.updateStatus()}}
            />
        </Switcher>
    )
}

const openNotification = (status) => {
    if(status){
        notification.open({
            message: 'Che do giao hang: dang TAT',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
          });
    } else {
        notification.open({
            message: 'Che do giao hang: dang BAT',
            description:
              'This is the content of the notification. This is the content of the notification. This is the content of the notification.',
            icon: <SmileOutlined style={{ color: '#108ee9' }} />,
          });
    }
  };

export default ActiveSwitcher
