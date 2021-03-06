import React, { useEffect, useState, useRef } from 'react'
import styled, { css} from "styled-components";
import { Link } from 'react-router-dom'
import axios from 'axios';
import UserComment from './UserComment'
import StarIcon from '@mui/icons-material/Star';


const Container = styled.div`
  
  width: 100%;
`;
const Heading = styled.h3`
    padding-left: 10px;
    margin-bottom: 20px;
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
const Line = styled.div`
    border-bottom: 1px solid black;
    margin-bottom: 40px;
`
const StyledLink = styled(Link)`
    text-decoration: none;
    padding: 0;
    & > label {
        font-size: 18px;
        font-weight: bold;
    }
    & > span {
        font-size: 18px;
        padding-left: 12px;
    }
    & > span:hover {
        color: #b2e5e5;
    }
    &:hover{
      /* border: 2px solid rgb(99,113,198); */
    }
    &:focus, &:hover, &:visited, &:link, &:active {
        text-decoration: none;
        color: #000;
    }
`;

const BtnCancel = styled.button`
    text-decoration: none;
    color: black;
    background-color: #b2e5e5;
    margin-left: 20px;
    padding: 8px 14px;
    border-radius: 4px;
    border-bottom: none;
    border: 1px solid #ccc;
    cursor: pointer;
    &:hover {
        background-color: #f7482c;
        color: white;
        opacity: .6;
    }
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
}
`
const BtnRating = styled.button`
    text-decoration: none;
    color: black;
    background-color: #b2e5e5;
    padding: 8px 14px;
    border-radius: 4px;
    border-bottom: none;
    border: 1px solid #ccc;
    cursor: pointer;
    min-width: 95px;
    outline:none;
    &:hover {
        color: white;
        opacity: .6;
        outline:none;
    }
    &:focus,
    &:hover,
    &:visited,
    &:link,
    &:active {
        text-decoration: none;
        outline:none;

}
`
const InputRating = styled.input`
    width: 80px;
    text-align: center;
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    outline: none;
    &:focus{
        border-color: #40a9ff;
        box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    }
`
const SelectTag = styled.select`
    width: 80px;
    text-align: center;
    margin-top: 10px;
    border-radius: 3px;
    border: 1px solid #ccc;
    outline: none;
    &:focus{
        border-color: #40a9ff;
        box-shadow: 0 0 0 2px rgb(24 144 255 / 20%);
    }
`

const Order = ({userID}) => {
    const [invoiceID, setInvoiceID] = useState('')
    const [invoice, setInvoice] = useState({})
    const [listInvoice, setListInvoice] = useState([])
    const [listDetailInvoice, setListDetailInvoice] = useState([])
    const [storeAddress, setStoreAddress] = useState('')
    const [customerAddress, setCustomerAddress] = useState('')
    const [cancelOrder, setCancelOrder] = useState(false)
    const [rating, setRating] = useState(5)
    const [showComment, setShowComment] = useState('')

    // call API get H??a ????n
    useEffect(() => {
        let API_URL = 'https://localhost:44352/api/invoice/customer';
        // props.actFetchProductsRequest();  
        let method = 'POST'
        let d = axios({
        method,
        url: API_URL,
        data: {
            "account_KH": userID,
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
            console.log("user id", userID);
            console.log(res.data)
            setListInvoice(res.data)
        });
    }, [])

    // call API get Chi ti???t H??a ????n
    useEffect(() => {
        let API_URL = 'https://localhost:44352/api/detailinvoice/many';
        // props.actFetchProductsRequest();  
        let method = 'POST'
        let d = axios({
        method,
        url: API_URL,
        data: {
            "maHD": invoiceID,
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
            console.log("ListDetailInvoice",res.data)
            setListDetailInvoice(res.data)
        });
    }, [invoiceID])
  
    //set invoice when invoiceID change
    useEffect(() => {
        let API_URL = 'https://localhost:44352/api/invoice/one';
        // props.actFetchProductsRequest();  
        let method = 'POST'
        let d = axios({
        method,
        url: API_URL,
        data: {
            "maHD": invoiceID,
        }
        }).catch(err => {
        console.log(err);
        }).then(res => {
          if (res.data.length > 0){
            console.log("order info:", res.data[0])
            setInvoice(res.data[0])
            setStoreAddress(res.data[0].diaChiCuaHang.diaChiChiTiet)
            setCustomerAddress(res.data[0].diaChiKhachHang.diaChiChiTiet)
          }
            
        });
    },[invoiceID, cancelOrder])

    const handleCancel = () => {
        let time = new Date().getFullYear()+"-"+(parseInt(new Date().getMonth())+1)+"-"+new Date().getDate()+" "+new Date().getHours()+":"+new Date().getMinutes()+":"+new Date().getSeconds()
        let value = {
            "maHD": invoice.maHD,
            "thoiGian": time,
        }
        let value2 = {
            "maHD": invoice.maHD,
        }
        console.log("value",value)
        axios({
            method: "post",
            url: "http://localhost:8080/api/history/cancel",
            data: value,
        })
            .then(function (res) {
                console.log("res.data: ", res.data);
                setCancelOrder(!cancelOrder)
            })
            .catch(function (err) {
                console.log(err);
            });

        axios({
            method: "post",
            url: "https://localhost:44352/api/invoice/cancel",
            data: value2,
        })
            .then(function (res) {
                console.log("res.data: ", res.data);
            })
            .catch(function (err) {
                console.log(err);
            });
    }

  return <>
      <Heading style={{marginLeft: "10px"}}>????n h??ng c???a t??i</Heading>
    <table style={{marginLeft: "20px",borderBottom:"solid 2px #ccc",marginBottom:"50px"}}>
        <thead>
            <tr style={{height:"36px",borderBottom:"solid 1px #ccc"}}>
            <th scope="col">M?? ????n h??ng</th>
            <th scope="col">T???ng ti???n</th>
            <th scope="col">Th???i gian</th>
            </tr>
        </thead>
        <tbody>
            {listInvoice.map((item, index)=> {
                if (item.maHD === invoiceID) {
                    return <tr onClick={()=>{setInvoiceID(item.maHD)}} style={{height:"60px",borderBottom:"solid 1px #d7d7d7",cursor:"pointer",backgroundColor:"#4c4c4b",color:"white",transition:"all .2s linear"}} key={index}>
                    <th style={{transform:"translateX(10px)",transition:"all .2s linear"}} scope="row">{item.maHD}</th>
                    <td>{item.tongTien}</td>
                    <td>{item.ngayLap}</td>
                </tr>
                }
                else {
                    return <tr onClick={()=>{setInvoiceID(item.maHD)}} style={{height:"60px",borderBottom:"solid 1px #d7d7d7",cursor:"pointer"}} key={index}>
                    <th scope="row">{item.maHD}</th>
                    <td>{item.tongTien}</td>
                    <td>{item.ngayLap}</td>
                </tr>
                }
            })}
            
        </tbody>
    </table>
    <Line></Line>
    { (typeof invoice === 'undefined') ?<></> : <><Heading style={{marginLeft: "10px"}}>Chi ti???t ????n h??ng: <strong>{invoiceID}</strong></Heading>
      <Wrapper>
        <WrapperGrid>
            <FormGroup>
                <StyledLink  to={"/store/" + invoice.account_CH}>
                    <label>T??n c???a h??ng:</label>
                    <span>{invoice.tenCH}</span>
                </StyledLink>
            </FormGroup>
            <FormGroup>
                <StyledLink  to={"/shipper/" + invoice.account_S}>
                    <label>T??n shipper:</label>
                    <span>{invoice.hoTenS}</span>
                </StyledLink>
            </FormGroup>
            <FormGroup>
                <label>T???ng ????n h??ng:</label>
                <span>{invoice.tongTien} VN??</span>
            </FormGroup>
            <FormGroup>
                <label>Ph?? ship:</label>
                <span>{invoice.phiShip} VN??</span>
            </FormGroup>
            <FormGroup>
                <label>H??nh th???c thanh to??n:</label>
                <span>{invoice.tenTT}</span>
            </FormGroup>
            <FormGroup>
                <label>Tr???ng th??i giao h??ng:</label>
                {
                    invoice.trangThai == "B??? hu??? b???" ?
                    <span style={{color: "red"}}>{invoice.trangThai}</span>:
                    invoice.trangThai == "Ch??? giao h??ng" ? 
                    <span style={{color: "#21c3c3"}}>{invoice.trangThai}</span>:
                    invoice.trangThai == "Giao h??ng th??nh c??ng" ? 
                    <span style={{color: "#02e102"}}>{invoice.trangThai}</span>:
                    <span style={{color: "blue"}}>{invoice.trangThai}</span>

                }
                {
                    invoice.trangThai == "Ch??? giao h??ng" ? 
                    <BtnCancel onClick= {()=> handleCancel()}>H???y ????n</BtnCancel> 
                    : 
                    <></>
                }
            </FormGroup>
        </WrapperGrid>
        <FormGroup>
          <label>Giao t???:</label>
          <span>{storeAddress}</span>
        </FormGroup>
        <FormGroup>
          <label>Giao ?????n:</label>
          <span>{customerAddress}</span>
        </FormGroup>
      </Wrapper>
    
    
    
    <Line></Line>
    
    <Heading style={{marginLeft: "10px"}}>Danh s??ch s???n ph???m </Heading></>}
    <table style={{marginLeft: "20px",borderBottom:"solid 2px #ccc"}}>
        <thead>
            <tr style={{height:"36px",borderBottom:"solid 1px #ccc"}}>
            <th scope="col">M?? s???n ph???m</th>
            <th scope="col">T??n s???n ph???m</th>
            <th scope="col">S??? l?????ng</th>
            <th scope="col">????n gi?? (VN??)</th>
            {
                invoice.trangThai == "Giao h??ng th??nh c??ng" ?
                <th scope="col">????nh gi??</th>:<></>
            }
            </tr>
        </thead>
        <tbody>
            {listDetailInvoice.map((item, index)=><>
                <tr style={{height:"60px",borderBottom:"solid 1px #d7d7d7",cursor:"pointer"}} key={index}>
                    <th scope="row">{item.maSP}</th>
                    <td>{item.tenSP}</td>
                    <td>{item.soLuong}</td>
                    <td>{item.giaSP}</td>
                    {
                        invoice.trangThai == "Giao h??ng th??nh c??ng" ?
                        <td>
                        {
                            showComment == item.maSP?
                            <BtnRating style={{backgroundColor:"#ff8d8d"}} onClick={()=>setShowComment('')}>H???y b???</BtnRating>:
                            <BtnRating onClick={()=>setShowComment(item.maSP)}>????nh gi??</BtnRating>
                        }
                        </td>:<></>
                    }
                </tr>
                {
                    showComment == item.maSP ?
                    <tr>
                        <th></th>
                        <td><UserComment productID={item.maSP} rating={rating}></UserComment></td>
                        <td ></td>
                        <td style={{display: "flex", flexDirection: "column",justifyContent: "center",height: "120px"}}>
                            <span>Ch???n s??? sao rating </span>
                            <span>
                                {/* <InputRating onChange={(e) => setRating(e.target.value)} type="number" value = {rating} step="1" min="1" max="5"/> */}
                                <SelectTag onChange={(e) => setRating(e.target.value)}>
                                    <option value="1">1</option>
                                    <option value="2">2</option>
                                    <option value="3">3</option>
                                    <option value="4">4</option>
                                    <option value="5">5</option>
                                </SelectTag>
                                <StarIcon style={{color: "#dfbb6b",marginLeft:"4px"}}></StarIcon>
                            </span>
                        </td>
                    </tr>: <></>
                }
                </>
            )}
        </tbody>
    </table>
  </>
};


export default Order;