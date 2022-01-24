import React, {useEffect, useState} from 'react';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import axios from 'axios'
import Model from '../model/Model';

const Table = () => {
    const [listProduct, setListProduct] = useState([])
    useEffect(() => {
        let fetchData = async () =>{
            const result = axios.post('http://localhost:8080/api/store/one', 
                {
                    "AccountID": "ch001"
                }
            ).then(function (res) {
                console.log(res.data.DanhSachSanPham);
                setListProduct(res.data.DanhSachSanPham)
                console.log(listProduct);
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
                productId: listProduct[i]['MaSP'],
                productName: listProduct[i]['TenSP'],
                status: valueEnum[0],
                createdAt: listProduct[i]['NgayDang'],
                productGroup: listProduct[i]['TenNhomSP'],
                productType: listProduct[i]['TenLoaiSP'],
                description: listProduct[i]['MoTaSP'],
                img: listProduct[i]['AnhSP'],
                price: listProduct[i]['GiaSP'],
                quantityRest: listProduct[i]['SoLuongTon'],
                quantitySold: listProduct[i]['SoSPDaBan'],
                quantityRating: listProduct[i]['SoRating'],
                avgRating: listProduct[i]['AvgRating'],
            });
        }
    }, [listProduct])

    const columns = [
        {
            title: 'Mã sản phẩm',
            width: 120,
            dataIndex: 'productId',
            copyable: true,
            render: (_) => <a>{_}</a>,
        },    
        {
            title: 'Tên sản phẩm',
            width: 80,
            dataIndex: 'productName',
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
            title: 'Trạng thái',
            width: 80,
            dataIndex: 'status',
            initialValue: 'all',
            valueEnum: {
                all: { text: 'ALl', status: 'Default' },
                close: { text: 'Close', status: 'Default' },
                running: { text: 'Runing', status: 'Processing' },
                online: { text: 'Online', status: 'Success' },
                error: { text: 'Error', status: 'Error' },
            },
        },
        {
            title: (<>
            Ngày tạo
            <Tooltip placement="top" title="Tooltip">
              <QuestionCircleOutlined style={{ marginLeft: 4 }}/>
            </Tooltip>
          </>),
            width: 100,
            key: 'since',
            dataIndex: 'createdAt',
            valueType: 'date',
            sorter: (a, b) => a.createdAt - b.createdAt,
        },
        {
            title: 'Nhóm sản phẩm',
            dataIndex: 'productGroup',
            copyable: true,
        },
        {
            title: 'Loại sản phẩm',
            dataIndex: 'productType',
            copyable: true,
        },
        {
            title: 'Mô tả',
            width: 200,
            dataIndex: 'description',
            copyable: true,
        },
        {
            title: 'Giá',
            dataIndex: 'price',
            copyable: true,
            sorter: (a, b) => parseInt(a.price) - parseInt(b.price)
        },
        {
            title: 'Số lượng còn lại',
            dataIndex: 'quantityRest',
            copyable: true,
            sorter: (a, b) => parseInt(a.quantityRest) - parseInt(b.quantityRest)
        },
        {
            title: 'Số lượng đã bán',
            dataIndex: 'quantitySold',
            copyable: true,
            sorter: (a, b) => parseInt(a.quantitySold) - parseInt(b.quantitySold)
        },
        {
            title: 'Số lượng đánh giá',
            dataIndex: 'quantityRating',
            copyable: true,
            sorter: (a, b) => parseInt(a.quantityRating) - parseInt(b.quantityRating)
        },
        {
            title: 'Đánh giá trung bình',
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
                        { key: 'copy', name: 'Copy' },
                        { key: 'delete', name: 'Delete' },
                    ]}/>,
            ],
        },
    ];

    

    return (
    <ProTable columns={columns} request={(params, sorter, filter) => {
            // 表单搜索项会从 params 传入，传递给后端接口。
            console.log(params, sorter, filter);
            if ('containers' in params){
                console.log("");
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
        }} dateFormatter="string" headerTitle="Danh Sách Sản Phẩm" toolBarRender={() => [            
            <Model></Model>
        ]}/>
        );
};

export default Table;