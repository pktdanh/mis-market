import styled from "styled-components";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
import Product from "../components/Products";


const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 90px 0;
    width: 100%; 
`;

const ShipperInfor = styled.div`
    width: 70%;
    background-color: #b2e5e5;
    color: black;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 30px 50px;
    padding: 50px;
    padding-left: 130px;
    margin-bottom: 30px;
    border-radius: 1em;
    -webkit-box-shadow: -8px 8px 13px -1px rgba(0,0,0,0.54); 
    box-shadow: -8px 8px 13px -1px rgba(0,0,0,0.54);    & > img{
        width: 20%;
        border-radius: 50%;
    }
`;
const ShipperInforItem = styled.div`
    & > label,span {
        font-size: 18px;
    }
    & > label {
        font-weight: bold;
    }
    & > span {
        padding-left: 12px;
    }
`
const ShipperInfor1 = styled.div`
    width: 80%;
    background-color: #ffd1dc;
    display: flex;
    padding: 20px 100px;
    margin-bottom: 30px;
    border-radius: 1em;
    & > img{
        width: 20%;
        border-radius: 50%;
    }
`;

const StoreImage = styled.img`

`;

const ListProduct = styled.div`
    width: 60%;
`;



const Store = () => {
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

    const location = useLocation();
    let shipperID = location.pathname.split("/").pop();
    console.log(location.pathname)
    const [data, setData] = useState([])
    const [address, setAddress] = useState('')
    let API_URL = 'https://localhost:44352/api/shipper/one';
    useEffect(() => {
        // props.actFetchProductsRequest();  
        let endpoint = ''
        let method = 'POST'
        let d = axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: {
            "accountID": shipperID,
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
            console.log("data:",res.data)
            if (res){
                setData(res.data[0])
                setAddress(res.data[0].diaChiChiTiet.diaChiChiTiet)
            }
        });
    }, [])

    return <Container>
        <h2 style={{marginBottom: "30px",marginTop:"20px"}}>Thông tin shipper <strong>{data.hoTen}</strong></h2>
        <ShipperInfor>
            <ShipperInforItem>
                <label>Mã shipper:</label>
                <span>{data.accountID}</span>
            </ShipperInforItem>
            <ShipperInforItem>
                <label>Tên shipper:</label>
                <span>{data.hoTen}</span>
            </ShipperInforItem>
            <ShipperInforItem>
                <label>Số điện thoại:</label>
                <span>{data.sdt}</span>
            </ShipperInforItem>
            <ShipperInforItem>
                <label>E-mail:</label>
                <span>{data.email}</span>
            </ShipperInforItem>
            <ShipperInforItem>
                <label>Mã bằng lái:</label>
                <span>{data.maBangLai}</span>
            </ShipperInforItem>
            <ShipperInforItem>
                <label>Biển số xe:</label>
                <span>{data.bienSo}</span>
            </ShipperInforItem>
            <ShipperInforItem>
                <label>Địa chỉ:</label>
                <span>{address}</span>
            </ShipperInforItem>
            <ShipperInforItem>
                <label>Ngày sinh:</label>
                <span>{data.ngaySinh}</span>
            </ShipperInforItem>
        </ShipperInfor>
        
       
    </Container>
}
export default Store;