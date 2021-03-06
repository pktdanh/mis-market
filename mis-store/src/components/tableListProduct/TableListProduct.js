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
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        let fetchData = async () =>{
            const result = axios.post('http://localhost:8080/api/store/one', 
                {
                    "accountID": JSON.parse(context.store).accountID
                }
            ).then(function (res) {
                // console.log(res.data.danhSachSanPham);
                // console.log(res.data);
                setListProduct(res.data.danhSachSanPham)
                // console.log(listProduct);
            }).catch(function (error) {
                console.log(error);
            });
            
            return result
        }
            
        fetchData()
        // setData(result.data);
    }, []);

    const valueEnum = {
        0: 'online',
    };
    const tableListDataSource = [];
    const creators = ['creators 1', 'creators 2', 'creators 3', 'creators 4', 'creators 5'];
    
    useEffect(() => {
        for (let i = 0; i < listProduct.length; i += 1) {
            
            tableListDataSource.push({
                key: i,
                productId: listProduct[i]['maSP'],
                productName: listProduct[i]['tenSP'],
                status: valueEnum[0],
                createdAt: listProduct[i]['ngayDang'],
                productGroup: listProduct[i]['tenNhomSP'],
                productType: listProduct[i]['tenLoaiSP'],
                description: listProduct[i]['moTaSP'],
                img: listProduct[i]['anhSP'],
                price: listProduct[i]['giaSP'],
                quantityRest: listProduct[i]['soLuongTon'],
                quantitySold: listProduct[i]['soSPDaBan'],
                quantityRating: listProduct[i]['soRating'],
                avgRating: listProduct[i]['avgRating'],
            });
        }
    }, [listProduct])

    const columns = [
        {
            title: 'M?? s???n ph???m',
            width: 120,
            dataIndex: 'productId',
            copyable: true,
            render: (_) => <a>{_}</a>,
            sorter: () => {setListProduct(listProduct.sort((a, b) => a.key - b.key)); console.log(listProduct);}
        },    
        {
            title: 'T??n s???n ph???m',
            width: 80,
            dataIndex: 'productName',
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
            title: 'Tr???ng th??i',
            width: 80,
            dataIndex: 'status',
            initialValue: 'all',
            valueEnum: {
                running: { text: 'H???t h??ng', status: 'Processing' },
                online: { text: 'C??n h??ng', status: 'Success' },
            },
        },
        {
            title: (<>
            Ng??y t???o
            <Tooltip placement="top" title="Tooltip">
              <QuestionCircleOutlined style={{ marginLeft: 4 }}/>
            </Tooltip>
          </>),
            width: 100,
            key: 'since',
            dataIndex: 'createdAt',
            valueType: 'date',
            sorter: (a, b) => {return new Date(a.createdAt) - new Date(b.createdAt)},
        },
        {
            title: 'Nh??m s???n ph???m',
            dataIndex: 'productGroup',
            copyable: true,
        },
        {
            title: 'Lo???i s???n ph???m',
            dataIndex: 'productType',
            copyable: true,
        },
        {
            title: 'M?? t???',
            width: 200,
            dataIndex: 'description',
            copyable: true,
        },
        {
            title: 'Gi??',
            dataIndex: 'price',
            copyable: true,
            sorter: (a, b) => parseInt(a.price) - parseInt(b.price)
        },
        {
            title: 'S??? l?????ng c??n l???i',
            dataIndex: 'quantityRest',
            copyable: true,
            sorter: (a, b) => parseInt(a.quantityRest) - parseInt(b.quantityRest)
        },
        {
            title: 'S??? l?????ng ???? b??n',
            dataIndex: 'quantitySold',
            copyable: true,
            sorter: (a, b) => parseInt(a.quantitySold) - parseInt(b.quantitySold)
        },
        {
            title: 'S??? l?????ng ????nh gi??',
            dataIndex: 'quantityRating',
            copyable: true,
            sorter: (a, b) => parseInt(a.quantityRating) - parseInt(b.quantityRating)
        },
        {
            title: '????nh gi?? trung b??nh',
            dataIndex: 'avgRating',
            copyable: true,
            sorter: (a, b) => parseFloat(a.avgRating) - parseFloat(b.avgRating)
        },
        {
            title: 'Option',
            width: 20,
            key: 'option',
            valueType: 'option',
            render: () => [
                <TableDropdown key="actionGroup" menus={[
                        { key: 'edit', name: 'S???a' },
                        { key: 'delete', name: 'Xo??' },
                    ]}/>,
            ],
        },
    ];

    

    return (
    <ProTable columns={columns} request={(params, sorter, filter) => {
            
            console.log(params, sorter, filter);
            if ('productID' in params){
                console.log(params.productID);
                let result = listProduct.find(item => item.productID.includes(params.productID))
                console.log("result", result);
                let t = []
                t.push(result)
                setListProduct(t)
                console.log("t", t);
                console.log(listProduct);
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
        }} dateFormatter="string" headerTitle="Danh S??ch S???n Ph???m" toolBarRender={() => [            
            <Model></Model>
        ]}/>
        );
};

export default Table;