import React from 'react';
import styled from 'styled-components';
import axios from 'axios';

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

function InvoiceNow({title}) {
  return <INContainer>
      <TitleTag>{title}:</TitleTag>
  </INContainer>;
}

export default InvoiceNow;
