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
        let fetchData = () =>{
            const result = axios.get('https://localhost:44352/api/product/all',                
            ).then(function (res) {
                // console.log(res.data.danhSachSanPham);
                console.log(res.data);
                setListProduct(res.data)
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
                storeName: listProduct[i]['tenCH'],
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
            sorter: () => {setListProduct(listProduct.sort((a, b) => a.key - b.key)); console.log(listProduct);}
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
                running: { text: 'Hết hàng', status: 'Processing' },
                online: { text: 'Còn hàng', status: 'Success' },
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
            sorter: (a, b) => {return new Date(a.createdAt) - new Date(b.createdAt)},
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
            title: 'Tên cửa hàng',
            dataIndex: 'storeName',
            copyable: true,
            
        },
        // {
        //     title: 'Option',
        //     width: 20,
        //     key: 'option',
        //     valueType: 'option',
        //     render: () => [
        //         <TableDropdown key="actionGroup" menus={[
        //                 { key: 'edit', name: 'Sủa' },
        //                 { key: 'delete', name: 'Xoá' },
        //             ]}/>,
        //     ],
        // },
    ];

    

    return (
    <ProTable columns={columns} request={(params, sorter, filter) => {
            
            console.log(params, sorter, filter);
            if ('productId' in params){
                console.log(params.productId);
                let result = listProduct.find(item => item.productId.includes(params.productId))
                console.log("result", result);
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