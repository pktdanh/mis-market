import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../App';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import axios from 'axios'
import Model from '../model/Model';

const TableListShipper = () => {
    let context = useContext(MyContext)
    // console.log("accountID", typeof JSON.parse(context.store).accountID);
    // console.log(context);
    const [listStore, setListStore] = useState([])
    useEffect(() => {
    
      let url1 = 'https://localhost:44352/api/shipper/all'
        let fetchData1 =  () => {
            const result = axios.get(url1, 
            ).then(function (res) {
              console.log(res.data);  
              setListStore(res.data)
            }).catch(function (error) {
                console.log(error);
            });
          }
        fetchData1()
    }, [])

    const valueEnum = {
        0: 'online',
    };
    const tableListDataSource = [];
    const creators = ['creators 1', 'creators 2', 'creators 3', 'creators 4', 'creators 5'];
    
    useEffect(() => {
        for (let i = 0; i < listStore.length; i += 1) {
            
            tableListDataSource.push({
                key: i,
                accountID: listStore[i]['accountID'],
                bienSo: listStore[i]['bienSo'],
                cmnd: listStore[i]['cmnd'],
                diaChi: listStore[i]['diaChi']+listStore[i]['diaChiChiTiet']['diaChiChiTiet'],
                email: listStore[i]['email'],
                hoTen: listStore[i]['hoTen'],
                maBangLai: listStore[i]['maBangLai'],
                maPhuongXa: listStore[i]['maPhuongXa'],
                ngaySinh: listStore[i]['ngaySinh'],
                sdt: listStore[i]['sdt'],
                status: listStore[i]['status'],
            });
        }
    }, [listStore])

    const columns = [
        {
            title: 'Mã shipper',
            width: 120,
            dataIndex: 'accountID',
            copyable: true,
            render: (_) => <a>{_}</a>,
            
        },    
        {
            title: 'Tên shipper',
            width: 80,
            dataIndex: 'hoTen',
            copyable: true,
            
            // valueEnum: {
            //     all: { text: '全部' },
            //     付小小: { text: '付小小' },
            //     曲丽丽: { text: '曲丽丽' },
            //     林东东: { text: '林东东' },
            //     陈帅帅: { text: '陈帅帅' },
            //     兼某某: { text: '兼某某' },
            // },
        },        
        {
            title: 'CCCD',
            dataIndex: 'cmnd',
            copyable: true,            
        },
        {
            title: 'Địa chỉ',
            dataIndex: 'diaChi',
            copyable: true,            
        },
        {
            title: 'Email',
            dataIndex: 'email',
            copyable: true,            
        },
        {
            title: 'Biển số',
            dataIndex: 'bienSo',
            copyable: true,            
        },
        {
            title: 'Mã bằng lái',
            dataIndex: 'maBangLai',
            copyable: true,            
        },
        {
            title: 'SĐT',
            dataIndex: 'sdt',
            copyable: true,            
        },
        

        
    ];

    

    return (
    <ProTable columns={columns} request={(params, sorter, filter) => {
            
            console.log(params, sorter, filter);
            if ('accountID' in params){
                console.log(params.accountID);
                let result = listStore.find(item => item.accountID.includes(params.accountID))
                console.log("result", result);
                let t = []
                t.push(result)
                setListStore(t)
                console.log("t", t);
                console.log(listStore);
            }
            return Promise.resolve({
                data: tableListDataSource,
                success: true,
            });
        }} rowKey="key" pagination={{
            // showQuickJumper: true,
            pageSize: 5,
        }} search={{
            // optionRender: false,
            // collapsed: false,
            // labelWidth: 'auto',
        }} dateFormatter="string" headerTitle="Danh Sách Shipper" toolBarRender={() => [            
            // <Model></Model>
        ]}/>
        );
};

export default TableListShipper;
