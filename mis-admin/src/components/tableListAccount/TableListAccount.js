import { useState, useEffect, useContext } from 'react';
import { MyContext } from '../../App';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import axios from 'axios'
import Model from '../model/Model';

const TableListAccount = () => {
    let context = useContext(MyContext)
    // console.log("accountID", typeof JSON.parse(context.store).accountID);
    // console.log(context);
    const [listStore, setListStore] = useState([])
    const [isChange, setIsChange] = useState(true);
    useEffect(() => {
    
      let url1 = 'https://localhost:44352/api/account/all'
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
    }, [isChange])


    let handleKichHoat = (id) => {
        let data ={
            "accountID": id
        }
        let url1 = 'http://localhost:8080/api/account/active'
        let fetchData1 =  () => {
            const result = axios.post(url1, data
            ).then(function (res) {
              console.log("active", res.data);  
            //   setListStore(res.data)
            setIsChange(!isChange)
            }).catch(function (error) {
                console.log(error);
            });
          }
        fetchData1()
        
    }

    let handleKhoa = (id) => {
        let data ={
            "accountID": id
        }
        let url1 = 'http://localhost:8080/api/account/deactive'
        let fetchData1 =  () => {
            const result = axios.post(url1, data
            ).then(function (res) {
              console.log("deactive", res.data);  
            //   setListStore(res.data)
            setIsChange(!isChange)
            }).catch(function (error) {
                console.log(error);
            });
          }
        fetchData1()
    }

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
                role: listStore[i]['role'],
                password: "**********************************",
                kichHoat: listStore[i]['kichHoat'],
            });
        }
    }, [listStore])

    const columns = [
        {
            title: 'Mã tài khoản',
            width: 220,
            dataIndex: 'accountID',
            copyable: true,
            render: (_) => <a>{_}</a>,
            
        },    
        {
            title: 'Role',
            width: 180,
            dataIndex: 'role',
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
            title: 'Mật khẩu',
            dataIndex: 'password',
            copyable: true,            
        },
        {
            title: 'Trạng thái kích hoạt',
            dataIndex: 'kichHoat',
            copyable: true,            
        },
        {
            title: 'Kích hoạt',
            width: 30,
            key: 'enable',
            render: _ => <Button type="primary" onClick={() => handleKichHoat(`${{..._}.accountID}`)}>Kích Hoạt</Button>
        },
        {
            title: 'Khoá',
            width: 30,
            key: 'lock',
            render: _ => <Button type="danger" onClick={() => handleKhoa(`${{..._}.accountID}`)}>Khoá</Button>
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
            labelWidth: 'auto',
        }} dateFormatter="string" headerTitle="Danh Sách Tài Khoản" toolBarRender={() => [            
            // <Model></Model>
        ]}/>
        );
};

export default TableListAccount;
