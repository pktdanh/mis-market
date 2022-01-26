import React, {useState, useEffect, useContext} from 'react';

import styled from 'styled-components';
import axios from 'axios';
import { MyContext } from '../../App';

import HistoryInvoices from '../../components/HistoryInvoices/HistoryInvoices';
import PersionalInformation from '../../components/PersionalInformation/PersionalInformation';
import InvoiceNow from '../../components/InvoiceNow/InvoiceNow';
const MeContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;


const Me = () => {
  
    return <MeContainer>
      <PersionalInformation></PersionalInformation>
      <InvoiceNow title="Đơn hàng đang giao"></InvoiceNow>
      <HistoryInvoices></HistoryInvoices>
  </MeContainer>
       
}



export default Me
