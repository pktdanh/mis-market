import styled from "styled-components";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'


const StyledLink = styled(Link)`
text-decoration: none;
color: #000;
border-bottom: 2px solid transparent;
&:hover{
  /* border: 2px solid rgb(99,113,198); */
}
&:focus, &:hover, &:visited, &:link, &:active {
    text-decoration: none;
    color: #000;
}
`;

const Container = styled.div`
display: flex;
flex-direction: column;
align-items: center;
padding: 50px;
width: 100%;
`;

const Title = styled.p`
padding-top: 100px;
margin-bottom: 2rem;
color: rgb(119, 119, 119);
font-family: Poppins, sans-serif;
font-size: 24px;
font-weight: 700;
line-height: 1.625em;
`;

const ShipperName = styled.div``;
const StoreName = styled.div``;
const StoreAddress = styled.div``;
const Date = styled.div``;
const Total = styled.div``;


// const data = {
//     shipperName: "Phan Khac Thanh Danh",
//     storeId: "STR001",
//     storeName: "Bach Hoa Xanh - Le Van Viet",
//     storeAddress: "10 Le Van Viet, Thu Duc",
//     date: "2021-12-12",
//     total: "200000",
//     products: [
//         {
//             id: "PRD001",
//             name: "Bau",
//             price: "40000",
//             quantity: "1"
//         },{
//             id: "PRD002",
//             name: "Cua",
//             price: "50000",
//             quantity: "1"
//         },{
//             id: "PRD003",
//             name: "Tom",
//             price: "70000",
//             quantity: "2"
//         },{
//             id: "PRD004",
//             name: "Ca",
//             price: "40000",
//             quantity: "3"
//         },
//     ]
// }

const Top = styled.div`
    width: 800px;
    padding: 30px 70px;
    margin-bottom: 50px;
    border: 1px solid #ccc;
    border-radius: 20px;
`;

const Bottom = styled.div`
    width: 800px;
    padding: 20px 50px;
`;

const Row = styled.div`
    font-size: 16px;
    line-height: 2em;
`;

const ProductItem = styled.div`
    width: 100%;
    display: flex;
    margin-bottom: 25px;
`;

const OrderDetail = () => {
    const location = useLocation();
    console.log(location.pathname)
    const [data, setdata] = useState([])
    let API_URL = 'https://localhost:44328/api/Order/' + location.pathname.split("/")[2];
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
    return <>
        <Title>My order detail</Title>
        <Container>
            <Top>
                <h3 style={{paddingBottom: "6px"}}>Information:</h3>
                <Row style={{display: "flex"}}>Shipper Name: <strong style={{textAlign: "right", flex: "1"}}>{data.name_Shipper}</strong></Row>
                <Row style={{display: "flex"}}>Address shipping: <strong style={{textAlign: "right", flex: "1"}}>{data.address_Customer}</strong></Row>
                <Row style={{display: "flex"}}>Store Address: 
                <strong style={{textAlign: "right", flex: "1"}}>
                    <StyledLink to={"/store/" + data.iD_Store}>
                        {data.name_Store}
                    </StyledLink>  
                </strong>      
                </Row>
                <Row style={{display: "flex"}}>Date: <strong style={{textAlign: "right", flex: "1"}}>{data.date_Order}</strong></Row>
                <Row style={{display: "flex"}}>Total: <strong style={{textAlign: "right", flex: "1"}}>{data.total}</strong></Row>
                
            </Top>
            <Bottom>
                <h3 style={{paddingBottom: "20px"}}>Product list:</h3>
            {
                data.detailOrders && data.detailOrders.map((item,index)=> (
                    <ProductItem key={index}>
                        <Row style={{ width: "180px", borderBottom: "3px solid #ffd1dc"}}>ID: {item.iD_DetailOrder}</Row>
                        <Row style={{ width: "180px", borderBottom: "3px solid #ffd1dc"}}>Price: {item.price}</Row>
                        <Row style={{ width: "180px", borderBottom: "3px solid #ffd1dc"}}>Quantity: {item.quantity}</Row>
                        <Row style={{ width: "180px", borderBottom: "3px solid #ffd1dc"}}>Name: {item.name_Product}</Row>
                    </ProductItem>
                ))
            }
            </Bottom>
            
        </Container>
    </>
}

export default OrderDetail;