import React, { useEffect, useState, useRef } from 'react'
import styled, { css} from "styled-components";
import { Link } from 'react-router-dom'
import axios from 'axios';
const Wrap = styled.div`
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
        background-color: #277ce5;
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
const Text = styled.span`
    padding: 4px 0;
    padding-left: 10px;
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
const DefaultBtn = styled.button`
    min-width: 40px;
    width: 140px;
    text-align: left;
    padding: 0 10px;
    border-radius: 4px;
    height: 42px;
    cursor: pointer;
    &:hover{
        border: solid 1px #277ce5;
        
    }
    &:focus{
        outline: solid 1px #277ce5;
    }
`

const Address = ({userID}) => {
    const [listAddress, setListAddress] = useState([])
    const [address, setAddress] = useState('')
    const [check, setCheck] = useState(false)
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
            setAddress(res.data.diaChi.diaChi)
            setData(res.data)
            setWardID(res.data.diaChi.diaChiChiTiet.maPhuongXa)
        });
    }, [])


    // call API get list address of a customer
    useEffect(() => {
        let API_URL = 'https://localhost:44352/api/customeraddress/customer';
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
            setListAddress(res.data)
        });
    }, [check])
    
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
        // if (lsDistrict.length > 0){
        //     setDistrictID(lsDistrict[0].maQuanHuyen)
        // }
    },[cityID])

    // useEffect to get listDistrictCurrent when cityID has changed
    useEffect(()=>{
        let lsWard = listWard.filter((item, index)=> item.maQuanHuyen == districtID)
        setListWardCurrent(lsWard)
        if (lsWard.length > 0){
            setWardID(lsWard[0].maPhuongXa)
        }
    },[districtID])

    let submitFunc = () => {
        let value = {
            "accountID": userID,
            "diaChi": address,
            "maPhuongXa": wardID,
        }
        console.log(value)
        axios({
            method: 'post',
            url: 'https://localhost:44352/api/customeraddress/add',
            data: value
          }).then(function (res) {
            setCheck(!check)
          })
          .catch(function (err) {
              console.log(err)
          }
          )
    }
    console.log("Ma phuong xa: ", wardID)
    let handleSetDefault = (maDC,userid) => {
        
        let value = {
            "maDC":maDC,
            "accountID":userid
        }
        axios({
            method: 'post',
            url: 'https://localhost:44352/api/customeraddress/updatedefault',
            data: value
          }).then(function (res) {
            setCheck(!check)
          })
          .catch(function (err) {
              console.log(err)
          }
          )
    }

  return <>
    <Wrap>
        <Heading style={{marginLeft:"76px"}}>Danh sách địa chỉ</Heading>
        {
            listAddress.length > 0 && 
            <table style={{width:"95%",marginLeft: "20px",borderBottom:"solid 2px #ccc"}}>
            <thead>
                <tr style={{height:"36px",borderBottom:"solid 1px #ccc"}}>
                <th scope="col">STT</th>
                <th scope="col">Địa chỉ</th>
                <th style={{textAlign:"right"}} scope="col">Hành động</th>
                </tr>
            </thead>
            <tbody>
                {
                    listAddress.map((item,index)=>{
                        if (item.isDefault === "True") 
                            return <tr style={{height:"60px",borderBottom:"solid 1px #d7d7d7",cursor:"pointer"}} key={index}>
                                        <th style={{minWidth:"100px"}} scope="row">Mặc định</th>
                                        <td>{item.diaChiChiTiet.diaChiChiTiet}</td>
                                    </tr>
                        else {
                            return <tr style={{height:"60px",borderBottom:"solid 1px #d7d7d7",cursor:"pointer"}} key={index}>
                                        <th style={{minWidth:"100px"}} scope="row">{index+1}</th>
                                        <td>{item.diaChiChiTiet.diaChiChiTiet}</td>
                                        <td style={{textAlign:"right"}}><DefaultBtn onClick={()=>handleSetDefault(item.maDC,userID)}>Đặt mặc định</DefaultBtn></td>
                                    </tr>
                        }
                    })
                }
                
            </tbody>
        </table>
        }
        
    </Wrap>
    <Wrap>
        <Heading style={{marginLeft:"76px"}}>Thêm địa chỉ mới</Heading>
        <FormGroup>
            <Label htmlFor="address">Địa chỉ:</Label>
            <Input type="text" value={address} name="address" onChange={(e) => {setAddress(e.target.value)}}></Input>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="city">Tỉnh:</Label>
            <SelectTag onChange={(e) => setCityID(e.target.value)}>
                {
                    listCity.map((item, index) => {
                        return <option value={item.maTinhTP}>{item.tenTinhTP}</option>
                    })
                }
            </SelectTag>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="district">Quận/Huyện:</Label>
            <SelectTag onChange={(e) => {console.log(e.target.value);setDistrictID(e.target.value)}}>
                {
                    listDistrictCurrent.map((item, index) => {
                        if (item.maQuanHuyen === districtID)
                            return <option value={item.maQuanHuyen} selected>{item.tenQuanHuyen}</option>
                        else
                            return <option value={item.maQuanHuyen}>{item.tenQuanHuyen}</option>
                    })
                }
            </SelectTag>
        </FormGroup>
        <FormGroup>
            <Label htmlFor="ward">Phường/Xã:</Label>
            <SelectTag onChange={(e) =>{ console.log(e.target.value);setWardID(e.target.value)}}>
                {
                    listWardCurrent.map((item, index) => {
                        if (item.maPhuongXa === wardID)
                            return <option value={item.maPhuongXa} selected>{item.tenPhuongXa}</option>
                        else
                            return <option value={item.maPhuongXa}>{item.tenPhuongXa}</option>
                    })
                }
            </SelectTag>
        </FormGroup>
        <Submit onClick={()=> submitFunc()}>Cập nhật</Submit>
    </Wrap>
  </>
};


export default Address;