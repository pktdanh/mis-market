import React, { useEffect, useState, useRef } from 'react'
import styled, { css} from "styled-components";
import { Link } from 'react-router-dom'
import axios from 'axios';
const Container = styled.div`
  
  width: 100%;
`;
const Heading = styled.h3`
    padding-left: 10px;
    margin-bottom: 20px;
    padding-top: 20px;
`;


const FormGroup = styled.div`
    display: flex;
    padding: 10px 10px 10px 60px;
`;
const Submit = styled.div`
    display: inline-block;
    text-align: center;
    border: 1px solid #1f1f1f;
    /* background-color: ; */
    color: #000;
    font-size: 1.2em;
    border-radius: 6px;
    padding: 8px;
    width:  200px;
    cursor: pointer;
    outline: none;
    margin-bottom: 50px;
    margin-left: 260px;
    margin-top: 20px;
    &:hover{
        background-color: #4c4c4b;
        color: white;
    }
`;

const Label = styled.label`
    width: 200px;
    font-weight: bold;
    display: inline-block;
    height: 34px;
    line-height: 34px;
`;
const Input = styled.input`
    width: 500px;
    padding: 4px 0;
    padding-left: 10px;
    outline: none;
    border-radius: 4px;
    border: solid 1px #ccc;
    &:hover{
        border: solid 1px #277ce5;
        
    }
    &:focus{
        outline: solid 1px #277ce5;
    }
`;

const SelectTag = styled.select`
    
    min-width: 100px;
    width: 200px;
    text-align: left;
    padding: 0 10px;
    border-radius: 4px;
    height: 42px;
    &:hover{
        border: solid 1px #277ce5;
        
    }
    &:focus{
        outline: solid 1px #277ce5;
    }
`

const Information = ({userID}) => {
    const [address, setAddress] = useState('')
    const [birthday, setBirthday] = useState('')
    const [data, setData] = useState([])

    const [wardID, setWardID] = useState('')
    const [ward, setWard] = useState({})
    const [listWard, setListWard] = useState([])
    const [listWardCurrent, setListWardCurrent] = useState([])

    
    const [districtID, setDistrictID] = useState('')
    const [district, setDistrict] = useState({})
    const [listDistrict, setListDistrict] = useState([])
    const [listDistrictCurrent, setListDistrictCurrent] = useState([])

    const [cityID, setCityID] = useState('')
    const [city, setCity] = useState({})
    const [listCity, setListCity] = useState([])
    const [listCityCurrent, setListCityCurrent] = useState([])

    const [submit, setSubmit] = useState(false)


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
            console.log("res.data ne: ", res.data);
            setAddress(res.data.diaChi.diaChiChiTiet.diaChiChiTiet)
            setBirthday(res.data.ngaySinh.split(' ')[0])
            setData(res.data)
            console.log(res.data)
            setWardID(res.data.diaChi.diaChiChiTiet.maPhuongXa)
        });
    }, [])

    
    // call API get all mã tỉnh
    useEffect(() => {
        let API_URL = 'https://localhost:44352/api/province/all';
        // props.actFetchProductsRequest();  
        let method = 'GET'
        let d = axios({
        method,
        url: API_URL,
        }).catch(err => {
        console.log(err);
        }).then(res => {
            setListCity(res.data)
        });
    }, [])

    // call API get all huyện của tỉnh
    useEffect(() => {
        let API_URL = 'https://localhost:44352/api/district/all';
        // props.actFetchProductsRequest();  
        let method = 'GET'
        let d = axios({
        method,
        url: API_URL,
        }).catch(err => {
        console.log(err);
        }).then(res => {
            setListDistrict(res.data)
        });
    }, [])

    // call API get all phường xã của huyện
    useEffect(() => {
        let API_URL = 'https://localhost:44352/api/ward/all';
        // props.actFetchProductsRequest();  
        let method = 'GET'
        let d = axios({
        method,
        url: API_URL,
        }).catch(err => {
        console.log(err);
        }).then(res => {
            setListWard(res.data)
        });
    }, [])  

    // useEffect to get Ward when WardID has changed
    useEffect(()=>{
        if (listWard.length > 0){
            // console.log("list Ward:", listWard)
            let wardObj = listWard.filter((item, index) => item.maPhuongXa == wardID)
            setWard(wardObj[0])
            // console.log(wardID)
            // console.log(wardObj)
        }
        
    },[wardID,listWard])

    // useEffect to get District when Ward has changed
    useEffect(()=>{
        if (listDistrict.length > 0 && ward){
            let districtObj = listDistrict.filter((item, index) => item.maQuanHuyen == ward.maQuanHuyen)
            setDistrict(districtObj[0])
            // console.log(districtObj)
        }
    },[ward,listDistrict])

    // useEffect to get City when District has changed
    useEffect(()=>{
        if (listCity.length > 0 && district){
            let cityObj = listCity.filter((item, index) => item.maTinhTP == district.maTinhTP)
            setCity(cityObj[0])
            // console.log(cityObj[0])
        }
    },[district,listCity])

    // useEffect to get wardID when ward has changed
    useEffect(()=>{
        if (ward) {
            setWardID(ward.maPhuongXa)
        }
    },[ward])

    // useEffect to get districtID when district has changed
    useEffect(()=>{
        if (district) {
            setDistrictID(district.maQuanHuyen)
        }
    },[district])

    // useEffect to get cityID when city has changed
    useEffect(()=>{
        if (city) {
            setCityID(city.maTinhTP)
        }
    },[city])
    
    // useEffect to get listDistrictCurrent when cityID has changed
    useEffect(()=>{
        let lsDistrict = listDistrict.filter((item, index)=> item.maTinhTP == cityID)
        setListDistrictCurrent(lsDistrict)
    },[cityID])

    // useEffect to get listDistrictCurrent when cityID has changed
    useEffect(()=>{
        let lsWard = listWard.filter((item, index)=> item.maQuanHuyen == districtID)
        setListWardCurrent(lsWard)
    },[districtID])

    let submitFunc = () => {
        let value = {
            "accountID": userID,
            "hoTen": data.hoTen,
            "sdt": data.sdt,
            "email": data.email,
        }
        console.log("value:",value)
        axios({
            method: "post",
            url: "http://localhost:8080/api/customer/edit",
            data: value,
        }).then(function (res) {
                console.log("res.data: ", res.data);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

  return <>
      <Heading style={{marginLeft:"76px"}}>Thông tin của bạn</Heading>
    <FormGroup>
        <Label htmlFor="name">Họ và tên:</Label>
        <Input type="text" value={data.hoTen} name="name" onChange={(e) => {setData({...data,hoTen: e.target.value})}}></Input>
    </FormGroup>
    <FormGroup>
        <Label htmlFor="phone">Số điện thoại:</Label>
        <Input type="number" value={data.sdt} name="phone" onChange={(e) => {setData({...data,sdt: e.target.value})}}></Input>
    </FormGroup>
    <FormGroup>
        <Label htmlFor="email">E-mail:</Label>
        <Input type="text" value={data.email} name="email" onChange={(e) => {setData({...data,email: e.target.value})}}></Input>
    </FormGroup>
    <FormGroup>
        <Label htmlFor="sex">Giới tính:</Label>
        <Input type="text" value={data.gioiTinh} name="sex" onChange={(e) => {setData({...data,gioiTinh: e.target.value})}} disabled></Input>
    </FormGroup>
    <FormGroup>
        <Label htmlFor="birthday">Ngày sinh:</Label>
        <Input type="text" value={birthday} name="birthday" onChange={(e) => {setBirthday(e.target.value)}} disabled></Input>
    </FormGroup>
    <FormGroup>
        <Label htmlFor="personID">CMND/CCCD:</Label>
        <Input type="text" value={data.cmnd} name="personID" onChange={(e) => {setData({...data,cmnd: e.target.value})}} disabled></Input>
    </FormGroup>
    <FormGroup>
        <Label htmlFor="address">Địa chỉ:</Label>
        <Input type="text" value={address} name="address" disabled></Input>
    </FormGroup>
    
    
    
    <Submit onClick={()=> submitFunc()}>Submit</Submit>
  </>
};


export default Information;