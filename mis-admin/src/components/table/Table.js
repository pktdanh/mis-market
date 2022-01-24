import React from 'react';
import { Button, Tooltip } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { DownOutlined, QuestionCircleOutlined } from '@ant-design/icons';
import ProTable, { TableDropdown } from '@ant-design/pro-table';
import Model from '../model/Model';
const valueEnum = {
    0: 'close',
    1: 'running',
    2: 'online',
    3: 'error',
};
const tableListDataSource = [];
const creators = ['creators 1', 'creators 2', 'creators 3', 'creators 4', 'creators 5'];
for (let i = 0; i < 5; i += 1) {
    tableListDataSource.push({
        key: i,
        accountId: 'AppName',
        id: Math.floor(Math.random() * 20),
        creator: creators[Math.floor(Math.random() * creators.length)],
        status: valueEnum[Math.floor(Math.random() * 10) % 4],
        createdAt: Date.now() - Math.floor(Math.random() * 100000),
        memo: i % 2 === 1 ? 'memo le' : 'memo chan',
    });
}
const columns = [
    {
        title: 'AccountID',
        width: 120,
        dataIndex: 'accountId',
        render: (_) => <a>{_}</a>,
    },
    {
        title: 'ID',
        dataIndex: 'id',
        align: 'right',
        sorter: (a, b) => a.containers - b.containers,
    },
    {
        title: 'Status',
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
        title: 'Username',
        width: 80,
        dataIndex: 'creator',
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
        title: (<>
        Create at
        <Tooltip placement="top" title="Tooltip">
          <QuestionCircleOutlined style={{ marginLeft: 4 }}/>
        </Tooltip>
      </>),
        width: 140,
        key: 'since',
        dataIndex: 'createdAt',
        valueType: 'date',
        sorter: (a, b) => a.createdAt - b.createdAt,
    },
    {
        title: 'Access Token',
        dataIndex: 'memo',
        ellipsis: true,
        copyable: true,
    },
    {
        title: 'Option',
        width: 180,
        key: 'option',
        valueType: 'option',
        render: () => [
            <a key="link" href="/">Action 1</a>,
            <a key="link2" href="/">Action 2</a>,
            <a key="link3" href="/">Action 3</a>,
            <TableDropdown key="actionGroup" menus={[
                    { key: 'copy', name: 'Copy' },
                    { key: 'delete', name: 'Delete' },
                ]}/>,
        ],
    },
];
const Table = () => {
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
        }} dateFormatter="string" headerTitle="Table List Account" toolBarRender={() => [            
            <Model></Model>
        ]}/>
        );
};

export default Table;