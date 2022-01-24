import React from 'react';
import { Button, message } from 'antd';
import ProForm, { ModalForm, ProFormText, ProFormDateRangePicker, ProFormSelect, } from '@ant-design/pro-form';
import { PlusOutlined } from '@ant-design/icons';

import { Cascader } from 'antd';

const options = [
    {
      value: 'zhejiang',
      label: 'Zhejiang',
      children: [
        {
          value: 'hangzhou',
          label: 'Hangzhou',
          children: [
            {
              value: 'xihu',
              label: 'West Lake',
            },
          ],
        },
      ],
    },
    {
      value: 'jiangsu',
      label: 'Jiangsu',
      children: [
        {
          value: 'nanjing',
          label: 'Nanjing',
          children: [
            {
              value: 'zhonghuamen',
              label: 'Zhong Hua Men',
            },
          ],
        },
      ],
    },
  ];

const waitTime = (time = 100) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(true);
        }, time);
    });
};
const Model =  () => {
    return (<ModalForm title="New User Account" 
        trigger={
            <Button type="primary">
                <PlusOutlined />
                New Account
            </Button>
        } autoFocusFirstInput modalProps={{
            destroyOnClose: true,
            onCancel: () => console.log('run'),
        }} onFinish={async (values) => {
            await waitTime(2000);
            console.log(values.name);
            message.success('提交成功');
            return true;
        }}>
      <ProForm.Group>
        <ProFormText width="md" name="name" label="Username" tooltip="Username tooltip" placeholder="Username"/>

        <ProFormText width="md" name="company" label="我方公司名称" placeholder="请输入名称"/>
      </ProForm.Group>
      <ProForm.Group>
        <ProFormText width="md" name="contract" label="合同名称" placeholder="请输入名称"/>
        <ProFormDateRangePicker name="contractTime" label="合同生效时间"/>
      </ProForm.Group>
      <ProForm.Group>
        <ProFormSelect request={async () => [
            {
                value: 'chapter',
                label: '盖章后生效',
            },
        ]} width="xs" name="useMode" label="合同约定生效方式"/>
        <ProFormSelect width="xs" options={[
            {
                value: 'time',
                label: '履行完终止',
            },
        ]} name="unusedMode" label="合同约定失效效方式"/>
      </ProForm.Group>
      <ProFormText width="sm" name="id" label="主合同编号"/>
      <ProFormText name="project" label="项目名称" initialValue="xxxx项目"/>
      <ProFormText width="xs" name="mangerName" label="商务经理" initialValue="启途"/>
    </ModalForm>);
};

export default Model;