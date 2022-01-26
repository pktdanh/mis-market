import React, {useState, useEffect, useContext} from 'react';
import ReactDOM from 'react-dom';
// import { Line } from '@ant-design/plots';
import { Button, Radio, Tabs, Select  } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import ExportToExcel from '../exportToExcel/ExportToExcel';
import axios from 'axios'

import BarChart from '../chart/BarChart'
import { MyContext } from '../../App';
const { Option } = Select;
const { TabPane } = Tabs;

function callback(key) {
  console.log(key);
}

function Statistic() {
  let context = useContext(MyContext)
  const [data, setData] = useState([]);
  const [year1, setYear1] = useState('2020')
  const [year2, setYear2] = useState('2020')
  const [year3, setYear3] = useState([])
  const [month, setMonth] = useState([])
  const [revenue1, setRevenue1] = useState([])
  const [revenue2, setRevenue2] = useState([])
  const [revenue3, setRevenue3] = useState([])
  const [season, setSeason] = useState([])
  
  const [month4, setMonth4] = useState('1')
  const [year4, setYear4] = useState('2020')

  const [year5, setYear5] = useState('2020')
  const fileName = "products-13478s3ad2";
  // call api get data excel file
  useEffect(() => {
    let fetchData = async () =>{
        const result = axios.get('https://localhost:44352/api/product/all', 
           
        ).then(function (res) {
            console.log(res.data);
            setData(res.data)
            
        }).catch(function (error) {
            console.log(error);
        });
        
        return result
    }
        
    fetchData()
    // setData(result.data);
  }, []);
    

    // API doanh thu theo tháng
    const [revenueData, setRevenueData] = useState([])
    useEffect(() => {
      let fetchData = async () =>{
          let data = {
            "nam": year1
          }
          console.log("data", data);
          const result = axios.post('http://localhost:8080/api/statistic/revenue/app/month', 
              data
          ).then(function (res) {
              console.log("Revenue: ", res.data);
              let t_m = [], t_r = []
              for(let i = 0; i < res.data.length; i++){
                t_m.push(res.data[i].thang)
                t_r.push(res.data[i].doanhThu)
              }
              console.log("thang - doanh thu", t_m, t_r);
              setMonth(t_m)
              setRevenue1(t_r)
              
          }).catch(function (error) {
              console.log(error);
          });
          
          return result
      }
          
      fetchData()
    }, [year1]);


    
    useEffect(() => {
      let fetchData = async () =>{
          let data = {
            "nam": year2
          }
          console.log("data", data);
          const result = axios.post('http://localhost:8080/api/statistic/revenue/app/season', 
              data
          ).then(function (res) {
              console.log("Revenue: ", res.data);
              let t_m = [], t_r = []
              for(let i = 0; i < res.data.length; i++){
                t_m.push(res.data[i].quy)
                t_r.push(res.data[i].doanhThu)
              }
              console.log("thang - doanh thu", t_m, t_r);
              setSeason(t_m)
              setRevenue2(t_r)
              
          }).catch(function (error) {
              console.log(error);
          });
          
          return result
      }
          
      fetchData()
    }, [year2]);


    useEffect(() => {
      let fetchData = async () =>{
          let data = {
          }
          console.log("data", data);
          const result = axios.get('http://localhost:8080/api/statistic/revenue/app/year', 
              
          ).then(function (res) {
              console.log("Revenue: ", res.data);
              let t_m = [], t_r = []
              for(let i = 0; i < res.data.length; i++){
                t_m.push(res.data[i].nam)
                t_r.push(res.data[i].doanhThu)
              }
              console.log("thang - doanh thu", t_m, t_r);
              setYear3(t_m)
              setRevenue3(t_r)
              
          }).catch(function (error) {
              console.log(error);
          });
          
          return result
      }
          
      fetchData()
    }, []);


    const [name, setName] = useState([])
    const [quantity, setQuantity] = useState([])
    useEffect(() => {
      let fetchData = async () =>{
          let data = {
          }
          console.log("data", data);
          const result = axios.get('http://localhost:8080/api/statistic/account').then(function (res) {
              // console.log("quantity - name: ", res.data);
              let t_m = [], t_r = []
              for(let i = 0; i < res.data.length; i++){
                t_m.push(res.data[i].vung)
                t_r.push(res.data[i].soLuong)
              }
              // console.log("thang - doanh thu", t_m, t_r);
              setName(t_m)
              setQuantity(t_r)
              
          }).catch(function (error) {
              console.log(error);
          });
          
          return result
      }
          
      fetchData()
    }, []);

    const [tenSP, setTenSP] = useState([])
    const [nhuCau, setNhuCau] = useState([])
    useEffect(() => {
      let fetchData = async () =>{
          let data = {
            "nam": year4,
            "thang": month4
          }
          console.log("data", data);
          const result = axios.post('http://localhost:8080/api/statistic/demand/month', data).then(function (res) {
              // console.log("year - month: ", res.data);
              let t_m = [], t_r = []
              for(let i = 0; i < res.data.length; i++){
                t_m.push(res.data[i].tenSP)
                t_r.push(res.data[i].nhuCau)
              }
              // console.log("thang - doanh thu", t_m, t_r);
              setTenSP(t_m)
              setNhuCau(t_r)
              
          }).catch(function (error) {
              console.log(error);
          });
          
          return result
      }
          
      fetchData()
    }, []);


    const [tenSP1, setTenSP1] = useState([])
    const [nhuCau1, setNhuCau1] = useState([])
    useEffect(() => {
      let fetchData = async () =>{
          let data = {
            "nam": year5,
          }
          console.log("data", data);
          const result = axios.post('http://localhost:8080/api/statistic/demand/year', data).then(function (res) {
              // console.log("year - month: ", res.data);
              let t_m = [], t_r = []
              for(let i = 0; i < res.data.length; i++){
                t_m.push(res.data[i].tenSP)
                t_r.push(res.data[i].nhuCau)
              }
              // console.log("thang - doanh thu", t_m, t_r);
              setTenSP1(t_m)
              setNhuCau1(t_r)
              
          }).catch(function (error) {
              console.log(error);
          });
          
          return result
      }
          
      fetchData()
    }, []);

  return <div>
    <h2>THỐNG KÊ DOANH THU THEO:</h2>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tháng" key="1">
        <Select
          showSearch
          placeholder="Chọn năm"
          optionFilterProp="children"
          onChange={(value) => setYear1(`${value}`)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          defaultValue="2020" 
        >
          <Option value="2020">2020</Option>
          <Option value="2021">2021</Option>
          <Option value="2022">2022</Option>
        </Select>
          <BarChart dataMonth={month} dataRevenue={revenue1}></BarChart>
        </TabPane>
        <TabPane tab="Quý" key="2">
        <Select
          showSearch
          placeholder="Chọn năm"
          optionFilterProp="children"
          onChange={(value) => setYear2(`${value}`)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          defaultValue="2020" 
        >
          <Option value="2020">2020</Option>
          <Option value="2021">2021</Option>
          <Option value="2022">2022</Option>
        </Select>
          <BarChart dataMonth={season} dataRevenue={revenue2}></BarChart>
        </TabPane>
        <TabPane tab="Năm" key="3">
        <BarChart dataMonth={year3} dataRevenue={revenue3}></BarChart>
        </TabPane>
      </Tabs>
      <h2 style={{marginTop: "100px"}}>THỐNG KÊ KHÁCH HÀNG, SHIPPER VÀ CỬA HÀNG THEO VÙNG XANH - VÀNG - ĐỎ:</h2>
      <BarChart dataMonth={name} dataRevenue={quantity}></BarChart>
      
      <h2 style={{marginTop: "100px"}}>THỐNG KÊ NHU CẦU THỰC PHẨM CÙNG KỲ:</h2>
      <Tabs defaultActiveKey="1" onChange={callback}>
        <TabPane tab="Tháng" key="1">
        <Select
          showSearch
          placeholder="Chọn tháng"
          optionFilterProp="children"
          onChange={(value) => setMonth4(`${value}`)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          defaultValue="1" 
        >
          <Option value="1">1</Option>
          <Option value="2">2</Option>
          <Option value="3">3</Option>
          <Option value="4">4</Option>
          <Option value="5">5</Option>
          <Option value="6">6</Option>
          <Option value="7">7</Option>
          <Option value="8">8</Option>
          <Option value="9">9</Option>
          <Option value="10">10</Option>
          <Option value="11">11</Option>
          <Option value="12">12</Option>
        </Select>
        <Select
          showSearch
          placeholder="Chọn năm"
          optionFilterProp="children"
          onChange={(value) => setYear4(`${value}`)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          defaultValue="2020" 
        >
          <Option value="2020">2020</Option>
          <Option value="2021">2021</Option>
          <Option value="2022">2022</Option>
        </Select>
          <BarChart dataMonth={tenSP} dataRevenue={nhuCau}></BarChart>
        </TabPane>
        <TabPane tab="Quý" key="2">
        <Select
          showSearch
          placeholder="Chọn năm"
          optionFilterProp="children"
          onChange={(value) => setYear5(`${value}`)}
          filterOption={(input, option) =>
            option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
          }
          defaultValue="2020" 
        >
          <Option value="2020">2020</Option>
          <Option value="2021">2021</Option>
          <Option value="2022">2022</Option>
        </Select>
          <BarChart dataMonth={tenSP1} dataRevenue={nhuCau1}></BarChart>
        </TabPane>
      </Tabs>

      <ExportToExcel apiData={data} fileName={fileName}></ExportToExcel>
        
      
  </div>;
}

export default Statistic;


