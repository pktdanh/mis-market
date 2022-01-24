import styled from "styled-components";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react'

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 100px 100px 30px 100px;
`;
const WrapLeft = styled.div`
    width: 300px;

`
const WrapRight = styled.div`
    flex: 1;
    
`
const Information = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
const Heading = styled.h3`
    padding-left: 10px;
    margin-bottom: 20px;
`;
const UlTag = styled.ul`
    margin-top: 10px;
    list-style: none;
`;
const LiTag = styled.li`
    padding: 6px 0 6px 10px;
    cursor: pointer;
    border-radius: 6px 0 0 6px;
    font-size: 18px;
    margin-bottom: 6px;
    transition: all .2s linear;
    &:hover {
        opacity: .6;
    }
`;
const FormGroup = styled.div`
    display: flex;
    padding: 10px 10px 10px 60px;
`;
const Submit = styled.div`
    display: inline-block;
    text-align: center;
    border: 1px solid #1f1f1f;
    /* background-color: ; */
    color: #000;
    font-size: 1.2em;
    border-radius: 6px;
    padding: 8px;
    width:  140px;
    cursor: pointer;
    outline: none;
    margin-bottom: 50px;
    margin-left: 260px;
    margin-top: 20px;
    &:hover{
        background-color: #277ce5;
        color: white;
    }
`;

const Label = styled.label`
    width: 200px;
    font-weight: bold;
    display: inline-block;
    height: 34px;
    line-height: 34px;
`;
const Input = styled.input`
    width: 500px;
    padding: 4px 0;
    padding-left: 10px;
    outline: none;
    border-radius: 4px;
    border: solid 1px #ccc;
    &:hover{
        border: solid 1px #277ce5;
        
    }
    &:focus{
        outline: solid 1px #277ce5;
    }
`;

const AboutMe = () => {
    const location = useLocation();
    let userID = location.pathname.split("/").pop();
    let typeToShow = location.pathname.split("/")[1];
   
    let valueOfTypeInfo
    if (typeToShow === 'aboutme'){
        valueOfTypeInfo = true
    }
    else if (typeToShow === 'myorder'){
        valueOfTypeInfo = false
    }

    const [submit, setSubmit] = useState(false)
    const [address, setAddress] = useState('')
    const [birthday, setBirthday] = useState('')
    const [data, setData] = useState([])
    const [typeInfo, setTypeInfo] = useState(valueOfTypeInfo)
    const [listInvoice, setListInvoice] = useState([])
    const [listDetailInvoice, setListDetailInvoice] = useState([])
    const [invoiceID, setInvoiceID] = useState('')

    useEffect(() => {
        if (typeToShow === 'aboutme'){
            setTypeInfo(true)
        }
        else if (typeToShow === 'myorder'){
            setTypeInfo(false)
        }
    },[typeToShow])

    let submitFunc = () => {
        console.log("Submiting")
    }

    useEffect(() => {
        window.scrollTo(0, 0);
        document.getElementById("header").classList.add("changeHeaderColor");
        document.getElementById("center").classList.add("changeColor");
        document.getElementById("brandNameRight").classList.add("changeColorToBlack");
        document.getElementById("shopping-icon").classList.add("changeColorToBlack");
        let menuItem = document.querySelectorAll('.menu-item')
        menuItem.forEach(function(item) {
          item.classList.add('changeColorToBlack')
        })

    }, []);

    useEffect(() => {
        let API_URL = 'https://localhost:44352/api/customer/one';
        // props.actFetchProductsRequest();  
        let method = 'POST'
        let d = axios({
        method,
        url: API_URL,
        data: {
            "accountID": userID,
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
            // console.log(res.data.diaChiHienTai.diaChiChiTiet.diaChiChiTiet)
            setAddress(res.data.diaChiHienTai.diaChiChiTiet.diaChiChiTiet)
            setBirthday(res.data.ngaySinh.split(' ')[0])
            setData(res.data)
        });
    }, [])

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
            console.log(res.data)
            setListDetailInvoice(res.data)
        });
    }, [invoiceID])

    return <>
        <Container>
            <WrapLeft>
                <Heading>KH001</Heading>
                <UlTag>
                    {
                        typeInfo ? <><LiTag style={{backgroundColor:"#277ce5",color:"white"}}>Thông tin của tôi</LiTag>
                        <LiTag onClick={()=>{setTypeInfo(false)}}  >Đơn hàng của tôi</LiTag></> 
                        : <><LiTag onClick={()=>{setTypeInfo(true)}}>Thông tin của tôi</LiTag>
                        <LiTag style={{backgroundColor:"#277ce5",color:"white"}}>Đơn hàng của tôi</LiTag></>
                    }
                    
                </UlTag>
            </WrapLeft>

            <WrapRight>
                {typeInfo && <Information>
                    <Heading style={{marginLeft:"76px"}}>Thông tin của bạn</Heading>
                    <FormGroup>
                        <Label htmlFor="name">Họ và tên:</Label>
                        <Input type="text" value={data.hoTen} name="name" onChange={(e) => {setData({...data,hoTen: e.target.value})}}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="sex">Giới tính:</Label>
                        <Input type="text" value={data.gioiTinh} name="sex" onChange={(e) => {setData({...data,gioiTinh: e.target.value})}}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="phone">Số điện thoại:</Label>
                        <Input type="number" value={data.sdt} name="phone" onChange={(e) => {setData({...data,sdt: e.target.value})}}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="address">Địa chỉ:</Label>
                        <Input type="text" value={address} name="address" onChange={(e) => {setAddress(e.target.value)}}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label htmlFor="birthday">Ngày sinh:</Label>
                        <Input type="text" value={birthday} name="birthday" onChange={(e) => {setBirthday(e.target.value)}}></Input>
                    </FormGroup>
                    <Submit onClick={()=> submitFunc()}>Submit</Submit>
                </Information>}
                {!typeInfo && <Information>
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
                                    return <tr onClick={()=>{setInvoiceID(item.maHD);console.log(item.maHD)}} style={{height:"60px",borderBottom:"solid 1px #ebebeb",cursor:"pointer",backgroundColor:"#277ce5",color:"white",transition:"all .2s linear"}} key={index}>
                                    <th style={{transform:"translateX(10px)",transition:"all .2s linear"}} scope="row">{item.maHD}</th>
                                    <td>{item.diaChiKhachHang.diaChiChiTiet}</td>
                                    <td>{item.tongTien}</td>
                                    <td>{item.ngayLap}</td>
                                </tr>
                                }
                                else {
                                    return <tr onClick={()=>{setInvoiceID(item.maHD);console.log(item.maHD)}} style={{height:"60px",borderBottom:"solid 1px #ebebeb",cursor:"pointer"}} key={index}>
                                    <th scope="row">{item.maHD}</th>
                                    <td>{item.diaChiKhachHang.diaChiChiTiet}</td>
                                    <td>{item.tongTien}</td>
                                    <td>{item.ngayLap}</td>
                                </tr>
                                }
                                
                            })}
                            
                        </tbody>
                    </table>


                    <Heading>Chi tiết đơn hàng: <strong>{invoiceID}</strong></Heading>
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
                                <tr style={{height:"60px",borderBottom:"solid 1px #ebebeb",cursor:"pointer"}} key={index}>
                                    <th scope="row">{item.maSP}</th>
                                    <td>{item.maSP}</td>
                                    <td>{item.soLuong}</td>
                                    <td>{item.maSP}</td>
                                </tr>
                            )}
                            
                        </tbody>
                    </table>
                    </Information>}
            </WrapRight>
            
        </Container>
        
    </>
}

export default AboutMe;