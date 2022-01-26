import styled from "styled-components";
import axios from 'axios';
import { Link, useLocation } from "react-router-dom";
import React, { useEffect, useState } from 'react'
import Order from '../components/Order'
import Information from '../components/Information';
import Address from '../components/Address';

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 90px 100px 60px 100px;
`;
const WrapLeft = styled.div`
    width: 300px;
    background-color: #b2e5e5;
    border-radius: 4px;
`
const WrapRight = styled.div`
    flex: 1;
    margin-left: 50px;
`
const WrapRightChild = styled.div`
    width: 90%;
    background-color: #b2e5e5;
    border-radius: 4px;
`

const WrapItem = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
`;
const UlTag = styled.ul`
    margin-top: 10px;
    list-style: none;
`;
const Heading = styled.h3`
    padding-left: 10px;
    margin-bottom: 20px;
    padding-top: 20px;
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

const AboutMe = () => {
    const location = useLocation();
    // let userID = location.pathname.split("/").pop();
    let userID = JSON.parse(localStorage.getItem("MISuser")).accountID
    let typeToShow = location.pathname.split("/")[1];
   
    

    const [typeInfo, setTypeInfo] = useState(1)
    


    useEffect(() => {
        if (typeToShow === 'aboutme'){
            setTypeInfo(true)
        }
        else if (typeToShow === 'myorder'){
            setTypeInfo(false)
        }
    },[typeToShow])

    

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

    

    return <>
        <Container>
            <WrapLeft>
                <Heading style={{textTransform: 'uppercase',textAlign: 'center'}}>{userID}</Heading>
                <UlTag>
                    {
                        
                        typeInfo == 1 ? 
                        <>
                        <LiTag style={{backgroundColor:"#4c4c4b",color:"white"}}>Thông tin của tôi</LiTag>
                        <LiTag onClick={()=>{console.log(2);setTypeInfo(2)}}  >Đơn hàng của tôi</LiTag>
                        <LiTag onClick={()=>{console.log(3);setTypeInfo(3)}}  >Địa chỉ của tôi</LiTag>
                        </> 
                        : typeInfo == 2 ?
                        <>
                        <LiTag onClick={()=>{console.log(1);setTypeInfo(1)}}>Thông tin của tôi</LiTag>
                        <LiTag style={{backgroundColor:"#4c4c4b",color:"white"}}   >Đơn hàng của tôi</LiTag>
                        <LiTag onClick={()=>{console.log(3);setTypeInfo(3)}}  >Địa chỉ của tôi</LiTag>
                        </>
                        : typeInfo == 3 ?
                        <>
                        <LiTag onClick={()=>{console.log(1);setTypeInfo(1)}}>Thông tin của tôi</LiTag>
                        <LiTag onClick={()=>{console.log(2);setTypeInfo(2)}}>Đơn hàng của tôi</LiTag>
                        <LiTag style={{backgroundColor:"#4c4c4b",color:"white"}}>Địa chỉ của tôi</LiTag>
                        </>
                        : <></>
                    }
                </UlTag>
            </WrapLeft>

            <WrapRight>
                <WrapRightChild>
                    {typeInfo==1 && <WrapItem><Information userID={userID}></Information></WrapItem>}
                </WrapRightChild>
                    {typeInfo==2 && <WrapItem><Order userID={userID}></Order></WrapItem>}
                <WrapRightChild>
                    {typeInfo==3 && <WrapItem><Address userID={userID}></Address></WrapItem>}
                </WrapRightChild>
            </WrapRight>
        </Container>
        
    </>
}

export default AboutMe;