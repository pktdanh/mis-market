import React, { useEffect, useState, useRef } from 'react'
import styled, { css} from "styled-components";
import { Link } from 'react-router-dom'
import axios from 'axios';
const Container = styled.div`
  
  width: 100%;
`;
const Heading = styled.h3`
    padding-left: 10px;
    margin-bottom: 20px;
`;

const Wrapper = styled.div`

`
const WrapperGrid = styled.div`

`
const FormGroup = styled.div`

`

const Order = ({userID}) => {
    const [invoiceID, setInvoiceID] = useState('')
    const [invoice, setInvoice] = useState({})
    const [listInvoice, setListInvoice] = useState([])
    const [listDetailInvoice, setListDetailInvoice] = useState([])
    const [storeAddress, setStoreAddress] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')


    // call API get Hóa đơn
    useEffect(() => {
        let API_URL = 'https://localhost:44352/api/invoice/customer';
        // props.actFetchProductsRequest();  
        let method = 'POST'
        let d = axios({
        method,
        url: API_URL,
        data: {
            "account_KH": userID,
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
            console.log(res.data)
            setListInvoice(res.data)
        });
    }, [])

    // call API get Chi tiết Hóa đơn
    useEffect(() => {
        let API_URL = 'https://localhost:44352/api/detailinvoice/many';
        // props.actFetchProductsRequest();  
        let method = 'POST'
        let d = axios({
        method,
        url: API_URL,
        data: {
            "maHD": invoiceID,
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
            setListDetailInvoice(res.data)
        });
    }, [invoiceID])
  
    //set invoice when invoiceID change
    useEffect(() => {
      let API_URL = 'https://localhost:44352/api/invoice/one';
        // props.actFetchProductsRequest();  
        let method = 'POST'
        let d = axios({
        method,
        url: API_URL,
        data: {
            "maHD": invoiceID,
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
          if (res.data.length > 0){
            setInvoice(res.data[0])
            setStoreAddress(res.data[0].diaChiCuaHang.diaChiChiTiet)
            console.log('hehehehe:',res.data[0].diaChiCuaHang.diaChiChiTiet)
          }
            
        });
    },[invoiceID])

  return <>
      <Heading style={{marginLeft: "10px"}}>Đơn hàng của tôi</Heading>
    <table style={{marginLeft: "20px",borderBottom:"solid 2px #ccc",marginBottom:"50px"}}>
        <thead>
            <tr style={{height:"36px",borderBottom:"solid 1px #ccc"}}>
            <th scope="col">Mã Đơn hàng</th>
            <th scope="col">Địa chỉ</th>
            <th scope="col">Tổng tiền</th>
            <th scope="col">Thời gian</th>
            </tr>
        </thead>
        <tbody>
            {listInvoice.map((item, index)=> {
                if (item.maHD === invoiceID) {
                    return <tr onClick={()=>{setInvoiceID(item.maHD)}} style={{height:"60px",borderBottom:"solid 1px #d7d7d7",cursor:"pointer",backgroundColor:"#277ce5",color:"white",transition:"all .2s linear"}} key={index}>
                    <th style={{transform:"translateX(10px)",transition:"all .2s linear"}} scope="row">{item.maHD}</th>
                    <td>{item.diaChiKhachHang.diaChiChiTiet}</td>
                    <td>{item.tongTien}</td>
                    <td>{item.ngayLap}</td>
                </tr>
                }
                else {
                    return <tr onClick={()=>{setInvoiceID(item.maHD)}} style={{height:"60px",borderBottom:"solid 1px #d7d7d7",cursor:"pointer"}} key={index}>
                    <th scope="row">{item.maHD}</th>
                    <td>{item.diaChiKhachHang.diaChiChiTiet}</td>
                    <td>{item.tongTien}</td>
                    <td>{item.ngayLap}</td>
                </tr>
                }
                
            })}
            
        </tbody>
    </table>

    { (typeof invoice === 'undefined') ?<></> : <><Heading style={{marginLeft: "10px"}}>Chi tiết đơn hàng: <strong>{invoiceID}</strong></Heading>
      <Wrapper>
        <WrapperGrid>
            <FormGroup>

            </FormGroup>
        </WrapperGrid>
        <FormGroup>
          <label>Giao từ:</label>
          <span>{storeAddress}</span>
          <span>{invoice.maHD}</span>
        </FormGroup>
      </Wrapper>
    <Heading style={{marginLeft: "10px"}}>Danh sách sản phẩm </Heading></>}
    <table style={{marginLeft: "20px",borderBottom:"solid 2px #ccc"}}>
        <thead>
            <tr style={{height:"36px",borderBottom:"solid 1px #ccc"}}>
            <th scope="col">Mã sản phẩm</th>
            <th scope="col">Tên sản phẩm</th>
            <th scope="col">Số lượng</th>
            <th scope="col">Đơn giá</th>
            </tr>
        </thead>
        <tbody>
            {listDetailInvoice.map((item, index)=>
                <tr style={{height:"60px",borderBottom:"solid 1px #d7d7d7",cursor:"pointer"}} key={index}>
                    <th scope="row">{item.maSP}</th>
                    <td>{item.tenSP}</td>
                    <td>{item.soLuong}</td>
                    <td>{item.giaSP}</td>
                </tr>
            )}
            
        </tbody>
    </table>
  </>
};


export default Order;