
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


const CreateBrandPage: React.FC = () => {
    let navigate = useNavigate()
    let [file, setFile] = useState()
    const onSubmit = async (values: {name: string}) => {
        let formData = new FormData()
        formData.append('name', values.name)
        formData.append('img', file as any)
        let response = await CreateBrandAPI(formData)
        if(response.status === 200) {
            navigate('/brands')
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

                <input type='file' onChange={(e) => {setFile(e.target.files[0])}}/>
                <Form.Item label="Button" >
                    <Button htmlType="submit">Создать</Button>
                </Form.Item>
            </Form>
        </>
    );
};

export default CreateBrandPage