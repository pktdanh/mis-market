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
    padding-top: 90px;
    width: 100%; 
`;

const StoreInfor = styled.div`
    width: 60%;
    background-color: rgb(108 160 225);
    color: white;
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
const StoreInforItem = styled.div`
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
const StoreInfor1 = styled.div`
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
    let storeID = location.pathname.split("/").pop();
    console.log(location.pathname)
    const [data, setData] = useState([])
    const [listProduct, setListProduct] = useState([])
    let API_URL = 'http://localhost:8080/api/store/one';
    useEffect(() => {
        // props.actFetchProductsRequest();  
        let endpoint = ''
        let method = 'POST'
        let d = axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: {
            "AccountID": storeID,
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
            console.log(res.data.DanhSachSanPham)
            setData(res.data)
            setListProduct(res.data.DanhSachSanPham)
        });
    }, [])

    return <Container>
        <h2 style={{marginBottom: "50px"}}>Thông tin cửa hàng: <strong>{data.TenCH}</strong></h2>
        <StoreInfor>
            <StoreInforItem>
                <label>Mã cửa hàng:</label>
                <span>{data.AccountID}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>Số điện thoại:</label>
                <span>{data.SDT}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>Tên cửa hàng:</label>
                <span>{data.TenCH}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>E-mail:</label>
                <span>{data.Email}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>Địa chỉ:</label>
                <span>{data.DiaChi}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>Ngày tham gia:</label>
                <span>{data.NgayThamGia}</span>
            </StoreInforItem>
        </StoreInfor>
        
        <h2 style={{marginBottom: "40px"}}>Danh sách sản phẩm</h2>
        <ListProduct>
            <Product key={listProduct} data={listProduct} typeQuery='store' ></Product>
        </ListProduct>
    </Container>
}
export default Store;