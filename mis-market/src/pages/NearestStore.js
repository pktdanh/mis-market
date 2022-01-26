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



const NearestStore = () => {
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
    let userID = location.pathname.split("/").pop();
    console.log(location.pathname)
    
    const [data, setData] = useState({})
    const [listProduct, setListProduct] = useState([])
    const [address, setAddress] = useState('')
    const [storeID, setStoreID] = useState('')

    // call api get nerest store
    useEffect(() => {
        // props.actFetchProductsRequest();  
        let API_URL = 'https://localhost:44352/api/customer/store/near';

        let endpoint = ''
        let method = 'POST'
        let d = axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: {
            "accountID": userID,
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
            console.log("data:",res.data)
            setStoreID(res.data.accountID)
        });
    }, [])

    // call api get info of store
    useEffect(() => {
        // props.actFetchProductsRequest();  
        let API_URL = 'http://localhost:8080/api/store/one';

        let endpoint = ''
        let method = 'POST'
        let d = axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: {
            "accountID": storeID,
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
            if (res)
            {
                setData(res.data)
                setListProduct(res.data.danhSachSanPham)
                setAddress(res.data.diaChiCuaHang.diaChiChiTiet)
            }
        });
    }, [storeID])

    return <Container>
        <h2 style={{marginBottom: "30px",marginTop:"20px"}}>Thông tin cửa hàng gần nhất <strong>{data.TenCH}</strong></h2>
        <StoreInfor>
            <StoreInforItem>
                <label>Mã cửa hàng:</label>
                <span>{data.accountID}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>Số điện thoại:</label>
                <span>{data.sdt}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>Tên cửa hàng:</label>
                <span>{data.tenCH}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>E-mail:</label>
                <span>{data.email}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>Mã GPKD:</label>
                <span>{data.maGPKD}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>Mã CNATTP:</label>
                <span>{data.maCNATTP}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>Địa chỉ:</label>
                <span>{address}</span>
            </StoreInforItem>
            <StoreInforItem>
                <label>Ngày tham gia:</label>
                <span>{data.ngayThamGia}</span>
            </StoreInforItem>
        </StoreInfor>
        
        <h2 style={{marginBottom: "-20px",marginTop:"20px"}}>Danh sách sản phẩm</h2>
        <ListProduct>
            <Product key={listProduct} data={listProduct} typeQuery='store' ></Product>
        </ListProduct>
    </Container>
}
export default NearestStore;