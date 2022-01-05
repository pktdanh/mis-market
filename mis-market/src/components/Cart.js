import React, { Component, useEffect } from 'react'
import { connect } from "react-redux";
import {IncreaseQuantity,DecreaseQuantity,DeleteCart} from './actions';
import styled from "styled-components";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';


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
    width: 40px;
    height: 40px;
    
    border:1px solid #717fe0;
    text-align: center;
    line-height: 40px;
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

function Cart({items,IncreaseQuantity,DecreaseQuantity,DeleteCart}){
  //  console.log(items)
    let ListCart = [];
    let TotalCart=0;
    Object.keys(items.Carts).forEach(function(item){
        TotalCart+=items.Carts[item].quantity * items.Carts[item].price;
        ListCart.push(items.Carts[item]);
        console.log(ListCart);
    });
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
                <div className="col-md-12">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Image</th>
                            <th>Price</th>
                            <th>Quantity</th>
                            <th>Total Price</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        ListCart.map((item,key)=>{
                            return(
                                <tr key={key}>   
                                <td><HighlightOffIcon onClick={()=>DeleteCart(key)} style={{cursor: "pointer"}}></HighlightOffIcon></td>
                                {/* <td><i className="badge badge-danger" onClick={()=>DeleteCart(key)}>X</i></td> */}
                                <td><h5>{item.name}</h5></td>
                                <td><img src={item.image} style={{width:'100px',height:'auto'}} alt=""/></td>
                                <td>{item.price} $</td>
                                <td>
                                        <ButtonInCart style={{margin:'2px'}} onClick={()=>DecreaseQuantity(key)}>-</ButtonInCart>
                                        <ButtonInCart>{item.quantity}</ButtonInCart>
                                        <ButtonInCart style={{margin:'2px'}} onClick={()=>IncreaseQuantity(key)}>+</ButtonInCart>
                                </td>
                                <td>{ TotalPrice(item.price,item.quantity)} $</td>
                            </tr>
                            )
                        })
                            
                    }
                    <tr>
                        <td colSpan="5">Total Carts</td>
                        <td style={{fontWeight: "bold"}}>{Number(TotalCart).toLocaleString('en-US')} $</td>
                    </tr>
                    </tbody>
                
                </table>
                </div>
            </CartSide>
            <CheckoutSide>
                <CheckoutTitle>CART TOTALS</CheckoutTitle>
                <Subtotal>
                    <span style={{fontWeight: "bold"}}>Subtotal:</span>
                    <span>{Number(TotalCart).toLocaleString('en-US')} $</span>
                </Subtotal>
                <Shipping>
                    <span style={{fontWeight: "bold"}}>Shipping:</span>
                    <span>There are no shipping methods available. Please double check your address, or contact us if you need any help.<ButtonTotal>update totals</ButtonTotal></span>
                </Shipping>
                
                <Total>
                    <span style={{fontWeight: "bold"}}>Total:</span>
                    <span>{Number(TotalCart).toLocaleString('en-US')} $</span>
                </Total>
                <ButtonCheckout>checkout</ButtonCheckout>
            </CheckoutSide>
        </Container>
        )
    else 
    return (
        <div style={{width: "100%", height: "490px", display: "flex", justifyContent: "center", alignItems: "center"}}>
            <i>Cart is empty</i>
        </div>
    )
}
const mapStateToProps = state =>{
  //  console.log(state)
    return{
        items:state._todoProduct
    }
}
export default connect(mapStateToProps,{IncreaseQuantity,DecreaseQuantity,DeleteCart})(Cart)
