import React, { Component, useEffect, useState } from 'react'
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from '../components/actions';
import styled from "styled-components";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios';



const Container = styled.div`
    display: flex;
    width: 100vw;
    padding:100px;
`;

const CartSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 70%;
`;

const ItemInCart = styled.div``;

const ButtonInCart = styled.div`
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 4px;
    border:1px solid #717fe0;
    text-align: center;
    line-height: 30px;
    transition: 0.3s ease-in-out;
    cursor: pointer;
    &:hover{
        background-color: #717fe0;
    }
`;

const CheckoutSide = styled.div`
    display: flex;
    flex-direction: column;
    width: 30%;
    border:1px solid #e6e6e6;
    margin-left: 50px;
    padding-right: 20px;
`;

const CheckoutTitle = styled.h3`
    margin-left: 20px;
    margin-top: 10px;
    font-size: 30px;
    line-height: 1.3;
    text-transform: uppercase;
`;

const Subtotal = styled.div`
    display: flex;
    font-size: 15px;
    line-height: 1.466667;
    border-bottom: 1px solid #e6e6e6;
    padding-top: 10px;
    padding-bottom: 20px;
    & > span{
        width: 40%;
        margin-left: 20px;
    }
`;

const Shipping = styled.div`
    display: flex;
    font-size: 15px;
    line-height: 1.466667;
    border-bottom: 1px solid #e6e6e6;
    padding-top: 10px;
    padding-bottom: 20px;
    & > span{
        width: 40%;
        margin-left: 20px;
    }
`;

const ButtonTotal = styled.div`
    width: 150px;
    height: 40px;
    border: 1px solid #717fe0;
    text-align: center;
    line-height: 40px;
    text-transform: uppercase;
    border-radius: 2em;
    cursor: pointer;
    margin-top: 20px;
    margin-bottom: 10px;
    &:hover{
        background-color: #717fe0;
        color: #fff;
    }
`;

const Total = styled.div`
    display: flex;
    padding-top: 10px;
    padding-bottom: 20px;
    & > span{
        width: 40%;
        margin-left: 20px;
    }
`;

const ButtonCheckout = styled.div`
    width: 150px;
    height: 40px;
    border: 1px solid #717fe0;
    text-align: center;
    line-height: 40px;
    text-transform: uppercase;
    border-radius: 2em;
    cursor: pointer;
    align-self: flex-end;
    margin-right: 40px;
    margin-bottom: 20px;
    &:hover{
        background-color: #717fe0;
        color: #fff;
    }
`;
const TableData = styled.td`
    vertical-align: middle !important;
`;

const StyledLink = styled(Link)`
    text-decoration: none;
    color: #000;
    border-bottom: 2px solid transparent;
    & > div {
        margin-left: 190px;
        width: 150px;
        height: 40px;
        border: 1px solid #717fe0;
        text-align: center;
        line-height: 40px;
        text-transform: uppercase;
        border-radius: 2em;
        cursor: pointer;
        align-self: flex-end;
        margin-right: 40px;
        margin-bottom: 20px;
    }
    &:hover{
      /* border: 2px solid rgb(99,113,198); */
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #000;
    }
`;

const Wrapper = styled.div`
    margin-left: 20px;
    margin-bottom: 20px;
`
const WrapperGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
`
const FormGroup = styled.div`
    padding-left:10px;
    padding: 10px 0;
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
const Heading = styled.h3`
    padding-left: 20px;
    margin-bottom: 20px;
`;

function Checkout({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){
  //  console.log(items)
    const location = useLocation();
    let userID = location.pathname.split("/").pop();
    const [address, setAddress] = useState('')
    const [data, setData] = useState([])

    const [wardID, setWardID] = useState('')
    let ListCart = [];
    let TotalCart=0;
    let orderArray = [];
    let numbOfStore =  new Set()

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


    // call API get Thông tin user
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
            setAddress(res.data.diaChiHienTai.diaChiChiTiet.diaChiChiTiet)
            setData(res.data)
            console.log("hello",res.data)
            setWardID(res.data.diaChiHienTai.diaChiChiTiet.maPhuongXa)
        });
    }, [])

    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
        // console.log("listcart ne:",ListCart);
        numbOfStore.add(items.Carts[item].storeID)
    });

    (function(){
        if (numbOfStore.size > 1){
            numbOfStore.forEach((item,index) => {
                orderArray.push({
                    storeID: item,
                    listProduct: [],
                    totalOrder: 0,
                })
            })
              
            if (orderArray.length > 0){
                orderArray.forEach((item,index) => {
                    ListCart.forEach((item2,index2)=>{
                        if (item2.storeID === item.storeID){
                            item.listProduct = [...item.listProduct,item2] 
                            item.totalOrder += (item2.price - 0)*(item2.quantity - 0)
                        }
                    })
                })
            }
                
            
        }
        // console.log("hehe:",orderArray)
    })();

    function handleOrder(values){
        orderArray.forEach((item,index)=>{
            let value = {
                "phiShip": "20000",
                "tongTien": `${item.TotalPrice}`,
                "account_CH": `${item.storeID}`,
                "account_KH": `${userID}`,
                "danhSachSanPham": [
                    
                ]

            }
            item.listProduct.forEach((item2,index2)=>{
                value.danhSachSanPham.push({
                    "maSP": item2.id,
                    "soLuong": item2.quantity,
                })
            })
            axios({
                method: 'post',
                url: 'https://localhost:44352/api/invoice/buy',
                data: values
              }).then(function (res) {
                console.log("res.data: ",res.data)                
                
              })
              .catch(function (err) {
                  console.log(err)
              }
              )
        })
    }

    function TotalPrice(price,tonggia){
        return Number(price * tonggia).toLocaleString('en-US');
    }
    
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [ListCart])
    if(ListCart.length !== 0)
        return(    
        <Container>
            <CartSide className="row">
                <Heading>Thông tin khách hàng</Heading>
                <Wrapper>
                    <WrapperGrid>
                        <FormGroup>
                            <label>Tên khách hàng:</label>
                            <span>{data.hoTen}</span>
                        </FormGroup>
                        <FormGroup>
                            <label>Số điện thoại:</label>
                            <span>{data.sdt}</span>
                        </FormGroup>
                    </WrapperGrid>
                    <FormGroup>
                        <label>Địa chỉ:</label>
                        <span>{address}</span>
                    </FormGroup>
                    <FormGroup>
                        <label>Hình thức thanh toán:</label>
                        <span>Thanh toán khi nhận hàng</span>
                    </FormGroup>
                </Wrapper>
            </CartSide>
            <CheckoutSide>
                <CheckoutTitle>TỔNG ĐƠN HÀNG</CheckoutTitle>
                <Subtotal>
                    <span style={{fontWeight: "bold"}}>Tạm tính:</span>
                    <span>{Number(TotalCart).toLocaleString('en-US')} vnđ</span>
                </Subtotal>
                <Shipping>
                    <span style={{fontWeight: "bold"}}>Shipping:</span>
                    <span>There are no shipping methods available. Please double check your address, or contact us if you need any help.<ButtonTotal>update totals</ButtonTotal></span>
                </Shipping>
                
                <Total>
                    <span style={{fontWeight: "bold"}}>Tổng:</span>
                    <span>{Number(TotalCart).toLocaleString('en-US')} vnđ</span>
                </Total>
                
                <ButtonCheckout onClick={handleOrder}>Thanh toán</ButtonCheckout>
                

            </CheckoutSide>
        </Container>
        )
    else 
    return (
        <div style={{width: "100%", height: "490px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <i>Giỏ hàng trống</i>
        </div>
    )
}
const mapStateToProps = state =>{
  //  console.log(state)
    return{
        items:state._todoProduct
    }
}
export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Checkout)
