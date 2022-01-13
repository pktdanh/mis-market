import React, {useState, useEffect, useContext} from 'react';

import styled from 'styled-components';
import axios from 'axios';
import { MyContext } from '../../App';

import HistoryInvoices from '../../components/HistoryInvoices/HistoryInvoices';
import PersionalInformation from '../../components/PersionalInformation/PersionalInformation';

const MeContainer = styled.div`
    padding: 20px;
    display: flex;
    flex-direction: column;
`;


const Me = () => {
  
    return <MeContainer>
      <PersionalInformation></PersionalInformation>
      <HistoryInvoices></HistoryInvoices>
  </MeContainer>
       
}



export default Me
