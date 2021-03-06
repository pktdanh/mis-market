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
            title: 'M?? shipper',
            width: 120,
            dataIndex: 'accountID',
            copyable: true,
            render: (_) => <a>{_}</a>,
            
        },    
        {
            title: 'T??n shipper',
            width: 80,
            dataIndex: 'hoTen',
            copyable: true,
            
            // valueEnum: {
            //     all: { text: '??????' },
            //     ?????????: { text: '?????????' },
            //     ?????????: { text: '?????????' },
            //     ?????????: { text: '?????????' },
            //     ?????????: { text: '?????????' },
            //     ?????????: { text: '?????????' },
            // },
        },        
        {
            title: 'CCCD',
            dataIndex: 'cmnd',
            copyable: true,            
        },
        {
            title: '?????a ch???',
            dataIndex: 'diaChi',
            copyable: true,            
        },
        {
            title: 'Email',
            dataIndex: 'email',
            copyable: true,            
        },
        {
            title: 'Bi???n s???',
            dataIndex: 'bienSo',
            copyable: true,            
        },
        {
            title: 'M?? b???ng l??i',
            dataIndex: 'maBangLai',
            copyable: true,            
        },
        {
            title: 'S??T',
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
        }} dateFormatter="string" headerTitle="Danh S??ch Shipper" toolBarRender={() => [            
            // <Model></Model>
        ]}/>
        );
};

export default TableListShipper;
