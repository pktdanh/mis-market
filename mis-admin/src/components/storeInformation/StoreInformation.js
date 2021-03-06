import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../App';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import axios from 'axios'
import Model from '../model/Model';

const Table = () => {
    let context = useContext(MyContext)
    // console.log("accountID", typeof JSON.parse(context.store).accountID);
    // console.log(context);
    const [listStore, setListStore] = useState([])
    useEffect(() => {
    
      let url1 = 'https://localhost:44352/api/store/all'
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
                tenCH: listStore[i]['tenCH'],
                cmnd: listStore[i]['cmnd'],
                diaChi: listStore[i]['diaChi'],
                email: listStore[i]['email'],
                maCNATTP: listStore[i]['maCNATTP'],
                sdt: listStore[i]['sdt'],
                maGPKD: listStore[i]['maGPKD'],
                ngayThamGia: listStore[i]['ngayThamGia'],
            });
        }
    }, [listStore])

    const columns = [
        {
            title: 'Mã cửa hàng',
            width: 120,
            dataIndex: 'accountID',
            copyable: true,
            render: (_) => <a>{_}</a>,
            
        },    
        {
            title: 'Tên cửa hàng',
            width: 80,
            dataIndex: 'tenCH',
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
            title: 'Mã CNATTP',
            dataIndex: 'maCNATTP',
            copyable: true,            
        },
        {
            title: 'SĐT',
            dataIndex: 'sdt',
            copyable: true,            
        },
        {
            title: 'Mã GPKD',
            dataIndex: 'maGPKD',
            copyable: true,            
        },
        {
            title: 'Ngày tham gia',
            dataIndex: 'ngayThamGia',
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
        }} dateFormatter="string" headerTitle="Danh Sách Cửa Hàng" toolBarRender={() => [            
            // <Model></Model>
        ]}/>
        );
};

export default Table;