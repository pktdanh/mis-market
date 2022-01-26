import React, {useState, useEffect} from 'react';
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

const MiniInvoiceContainer = styled.div`
  display: flex;
  border: 1px solid #1f1f1f;
  padding: 15px;
  width: 100%;
`;

let MiniInvoice = ({key, item}) => {
  console.log(item.tenCH);
  return <MiniInvoiceContainer>
  {item.tenCH}
  </MiniInvoiceContainer>
}

function Invoice({title, data}) {
  console.log("data inv", data);
  return <INContainer>
  <TitleTag>{title}:{data.length}</TitleTag>
  {
    data.map((item, index) => {
      <MiniInvoice key={index} item={item}>1</MiniInvoice>
    })
  }
</INContainer>;
}

export default Invoice;
