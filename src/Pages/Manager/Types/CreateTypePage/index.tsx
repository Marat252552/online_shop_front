
import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,

    Upload,
} from 'antd';
// import { Brand_T, Type_T } from '../../../../../6.Shared/lib/types';
// import GetBrandsAPI from '../../../../../6.Shared/api/GetBrandsAPI';
// import GetTypesAPI from '../../../../../6.Shared/api/GetTypesAPI';
import CreateBrandAPI from './api/api';
import Header from '../../../../Shared/UI/Header';
import { useNavigate } from 'react-router-dom';
import CreateTypeAPI from './api/api';


const CreateTypePage: React.FC = () => {
    let navigate = useNavigate()
    const onSubmit = async (values: {name: string}) => {
        let {name} = values
        let response = await CreateTypeAPI(name)
        if(response.status === 200) {
            navigate('/types')
        }
    }
    return (
        <>
        <Header />
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ maxWidth: 600 }}
                onFinish={onSubmit}
            >
                <h1>Форма создания категории</h1>
                <Form.Item
                    label="Название"
                    name="name"
                    rules={[{ required: true, message: 'Введите название' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item label="Button" >
                    <Button htmlType="submit">Создать</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CreateTypePage