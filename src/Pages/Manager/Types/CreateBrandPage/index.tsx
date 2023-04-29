
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
import CreateTypeAPI from './api/api';
import Header from '../../../../../../Shared/models/Header';
import { useNavigate } from 'react-router-dom';


const CreateTypePage: React.FC = () => {
    let navigate = useNavigate()
    const onSubmit = async (values: {name: string}) => {
        let response = await CreateTypeAPI(values.name)
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