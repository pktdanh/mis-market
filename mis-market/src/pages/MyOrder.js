import styled from "styled-components";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useLocation} from 'react-router-dom'

// const data = [{
//     id: "001",
//     date: "01/01/2020",
//     total: "100.000",
//     status: "Pending"
// },{
//     id: "002",
//     date: "01/01/2020",
//     total: "100.000",
//     status: "Done"
// },{
//     id: "003",
//     date: "01/01/2020",
//     total: "100.000",
//     status: "Pending"
// },{
//     id: "004",
//     date: "01/01/2020",
//     total: "100.000",
//     status: "Done"
// },{
//     id: "005",
//     date: "01/01/2020",
//     total: "100.000",
//     status: "Pending"
// },{
//     id: "006",
//     date: "01/01/2020",
//     total: "100.000",
//     status: "Done"
// },]

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
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 30px;
    flex-direction: column;
    padding: 100px;
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

const Order = styled.div`
    display: flex;    
    justify-content: center;
    padding: 60px 10px;
    
    width: 100%;
    & > img{
        width: 20%;
        border-radius: 50%;
    }
    border: 3px solid #ccc;
    border-radius: 1em;
`;
const OrderInfor = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-left: 100px;
`;
const OrderID = styled.div`
    color: rgb(119, 119, 119);
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.625em;
`;
const OrderDate = styled.div`
    color: rgb(119, 119, 119);
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.625em;
`;
const OrderTotal = styled.div`
    color: rgb(119, 119, 119);
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.625em;
`;
const OrderStatus = styled.div`
    color: rgb(119, 119, 119);
    font-family: Poppins, sans-serif;
    font-size: 16px;
    font-weight: 700;
    line-height: 1.625em;
    color: ${props => props.color};
`;

const MyOrder = () => {
    const [data, setdata] = useState([])
    let API_URL = 'https://localhost:44328/api/Order/all/' + localStorage.getItem('user');
    useEffect(() => {
        // props.actFetchProductsRequest();  
        let endpoint = ''
        let method = 'GET'
        let d = axios({
        method,
        url: `${API_URL}/${endpoint}`,
        data: null
        }).catch(err => {
        console.log(err);
        }).then(res => {
            console.log(res.data)
            setdata(res.data)
        });
    }, [])

    return <>
    <Title>Orders History</Title>
    <Container>
        
        {
            data.map((item, index) => 
            <StyledLink to={"/myorder/" + item.iD_Order}>
                <Order
                    key={index}
                >
                    <img src="https://cdn2.iconfinder.com/data/icons/social-flat-buttons-3/512/anonymous-512.png" alt="avatar" />
                    <OrderInfor>
                        <OrderID>ID: {item.iD_Order}</OrderID>
                        <OrderDate>Date: {item.date_Order}</OrderDate>
                        <OrderStatus color={item.status_Order == "1" ? "red" : "green"}>Status: {item.status_Order ==  1 ? "Preparing" : item.status_Order ==  2 ? "Shipping" : "Done"}</OrderStatus>
                        <OrderTotal>Total: {item.total}</OrderTotal>
                    </OrderInfor>
                </Order>
            </StyledLink>
            )
        }
    </Container>
    </>
}

export default MyOrder;