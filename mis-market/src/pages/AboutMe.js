import styled from "styled-components";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
// const data = {
//     id: "CUS001",
//     name: "Pham Hoang Viet",
//     sex: "Male",
//     phone: "0373597130",
//     address: "85, Le Van Viet Stree, Thu Duc City, Ho Chi Minh City, Viet Nam",
//     birthday: "2000-12-25",
//     avatar: "https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Rose-Black-Pink-1.jpg",
// }

const Container = styled.div`
    display: flex;
    width: 100%;
    padding: 150px 100px 50px 100px;
`;
const Avatar = styled.div`
    display: flex;
    width: 30%;
    & > img{
        width: 100%;
    }
`;
const Information = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
`;
const Heading = styled.h3`

`;
const Name = styled.div`
    display: flex;
    padding: 10px 10px 10px 90px;
`;
const Sex = styled.div`
    display: flex;
    padding: 10px 10px 10px 90px;
`;
const Phone = styled.div`
    display: flex;
    padding: 10px 10px 10px 90px;
`;
const Birthday = styled.div`
    display: flex;
    padding: 10px 10px 10px 90px;
`;
const Submit = styled.div`
    display: inline-block;
    text-align: center;
    border: 1px solid #1f1f1f;
    /* background-color: ; */
    color: #000;
    font-size: 1.2em;
    border-radius: 1em;
    padding: 5px 20px;
    width:  auto;
    cursor: pointer;
    outline: none;
    margin-bottom: 50px;
    &:hover{
        background-color: #ffd1dc;
    }
`;

const Label = styled.label`
    width: 200px;
`;
const Input = styled.input`
    width: 400px;
    padding-left: 10px;
    &:hover{
        border: solid 1px blue;
        
    }
    &:focus{
        border: solid 1px blue;
        outline: solid 1px blue;
    }
`;

const AboutMe = () => {
    const [submit, setSubmit] = useState(false)

    let submitFunc = () => {
        console.log("Submiting")
    }

    const [data, setdata] = useState([])
    let API_URL = 'https://localhost:44328/api/Customer/' + localStorage.getItem('user').substring(4, 5);
    console.log(API_URL)
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
        <Container>
            <Avatar>
                <img src={"https://thuthuatnhanh.com/wp-content/uploads/2021/06/Hinh-anh-Rose-Black-Pink-1.jpg"} alt="avatar" />
            </Avatar>
            <Information>
                <Heading>Your Information</Heading>
                <Name>
                    <Label htmlFor="name">Name</Label>
                    <Input type="text" placeholder={data.name_Customer} name="name" onChange={() => {submit == false ? setSubmit(!submit) : setSubmit(true)}}></Input>
                </Name>
                <Sex>
                    <Label htmlFor="sex">Sex</Label>
                    <Input type="text" placeholder={data.sex_Customer} name="sex" onChange={() => {submit == false ? setSubmit(!submit) : setSubmit(true)}}></Input>
                </Sex>
                <Phone>
                    <Label htmlFor="phone">Phone</Label>
                    <Input type="number" placeholder={data.phone_Customer} name="phone" onChange={() => {submit == false ? setSubmit(!submit) : setSubmit(true)}}></Input>
                </Phone>
                <Name>
                    <Label htmlFor="address">Address</Label>
                    <Input type="text" placeholder={data.address_Customer} name="address" onChange={() => {submit == false ? setSubmit(!submit) : setSubmit(true)}}></Input>
                </Name>
                <Birthday>
                    <Label htmlFor="birthday">Birthday</Label>
                    <Input type="text" placeholder={data.birth_Customer} name="birthday" onChange={() => {submit == false ? setSubmit(!submit) : setSubmit(true)}}></Input>
                </Birthday>
            </Information>
        </Container>
        {submit && <Submit onClick={()=> submitFunc()}>Submit</Submit>}
    </>
}

export default AboutMe;