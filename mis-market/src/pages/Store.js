import styled from "styled-components";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'
// const data = {
//     storeID : "STR001",
//     nameStore: "Bach Hoa Xanh - Le Van Luyen",
//     phoneStore: "0942012013",
//     addressStore: "10 Le Van Danh, Thu Duc",
//     birthdayStore: "2000-7-14",
//     avatar: "https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Rose-Black-Pink-1.jpg",
//     products: [{
//         id: "PRD001", 
//         name: "Bau",
//         price: "10000"
//     },
//     {
//         id: "PRD002", 
//         name: "Cua",
//         price: "20000"
//     },
//     {
//         id: "PRD003", 
//         name: "Tom",
//         price: "10000"
//     },
//     {
//         id: "PRD004", 
//         name: "Ca",
//         price: "20000"
//     }]
// }

const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-top: 90px;
    /* width: 100%; */
`;

const StoreInfor = styled.div`
    width: 80%;
    background-color: #ffd1dc;
    display: flex;
    padding: 20px 200px;
    margin-bottom: 30px;
    border-radius: 1em;
    & > img{
        width: 20%;
        border-radius: 50%;
    }
`;

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
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 50px;
`;

const Product = styled.div`
    display: flex;
    flex-direction: column;
    /* border: 2px solid #ffd1dc; */
    & > img{
        border-radius: 10px;
    }
`;

const Store = () => {

    const location = useLocation();
    console.log(location.pathname)
    const [data, setdata] = useState([])
    let API_URL = 'https://localhost:44328/api/Store/' + location.pathname.split("/")[2];
    console.log(API_URL)
    useEffect(() => {
        // props.actFetchProductsRequest();  
        let endpoint = ''
        let method = 'GET'
        let d = axios({
        method,
        url: `${API_URL}/${endpoint}`,
        }).catch(err => {
        console.log(err);
        }).then(res => {
            console.log(res.data)
            setdata(res.data)
        });
    }, [])

    return <Container>
        <h2 style={{marginBottom: "80px"}}>Store Information</h2>
        <StoreInfor>
            <StoreImage src={"https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Rose-Black-Pink-1.jpg"}></StoreImage>
            <div style={{paddingLeft: "50px", flex: '1', textAlign: "right", paddingTop: "26px"}}>
                <strong>{data.name_Store}</strong><br></br><br></br>
                <strong>{data.phone_Store}</strong><br></br><br></br>
                <strong>{data.address_Store}</strong>
            </div>
        </StoreInfor>
        <h2 style={{marginBottom: "40px"}}>List Products</h2>
        <StoreInfor1>
            <ListProduct>
            {
                data.products && data.products.map((item, index) => (
                    <Product>
                        <img style={{width: "60%"}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/15/Red_Apple.jpg/512px-Red_Apple.jpg" alt="aps boof"/>
                        <strong style={{marginTop: "20px"}}>{item.name_Product}</strong>
                        <p>{item.price_Product} vnd</p>
                        <p>Remain: {item.remain_Product} products</p>
                        <p>Description: {item.decription_Product}</p>
                    </Product>
                ))
            }
            </ListProduct>
        </StoreInfor1>
    </Container>
}
export default Store;