
import React, { useEffect, useState } from 'react';
import { PlusOutlined } from '@ant-design/icons';
import {
    Form,
    Input,
    Button,
    Radio,
    Select,
    Cascader,
    DatePicker,
    InputNumber,
    TreeSelect,
    Switch,
    Checkbox,
    Upload,
} from 'antd';
import { Brand_T, Type_T } from '../../../../../Shared/lib/types'; 
import GetBrandsAPI from '../../../../../Shared/api/GetBrandsAPI';
import GetTypesAPI from '../../../../../Shared/api/GetTypesAPI';
import CreateItemAPI from '../api/CreateItemAPI';
import Header from '../../../../../Shared/UI/Header';
import { useNavigate } from 'react-router-dom';


const CreateItemForm: React.FC = () => {
    const navigate = useNavigate()
    const [types, setTypes]: [Array<Type_T>, any] = useState([] as any)
    const [brands, setBrands]: [Array<Brand_T>, any] = useState([] as any)
    let [file, setFile] = useState()
    useEffect(() => {
        let getBrands = async () => {
            let response = await GetBrandsAPI()
            if (response.status === 200) {
                setBrands(response.data.brands)
            }
        }
        let getTypes = async () => {
            let response = await GetTypesAPI()
            if (response.status === 200) {
                setTypes(response.data.types)
            }
        }
        getBrands()
        getTypes()
    }, [])
    const onSubmit = async (values: {name: string, price: string, typeId: string, brandId: string, description: string, img: {file: any}}) => {
        let formData = new FormData()
        formData.append('name', values.name)
        formData.append('price', values.price)
        formData.append('typeId', values.typeId)
        formData.append('brandId', values.brandId)
        formData.append('description', values.description)
        formData.append('img', file as any)
        let response = await CreateItemAPI(formData)
        if(response.status === 201) {
            navigate('/items')
        }
    }
    return (
        <div style={{display: 'flex', flexDirection: 'column'}}>
        <h1>Форма создания нового товара</h1>
            <Form
                labelCol={{ span: 4 }}
                wrapperCol={{ span: 14 }}
                layout="horizontal"
                style={{ width: '600px', border: 'solid 1px black', textAlign: 'center' }}
                onFinish={onSubmit}
            >
                <Form.Item
                    // label="Название"
                    name="name"
                    rules={[{ required: true, message: 'Введите название' }]}
                    style={{border: 'solid 1px red', display: 'flex', justifyContent: 'center'}}
                >
                    <span>Название</span>
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Стоимость"
                    name="price"
                    rules={[{ required: true, message: 'Введите стоимость' }]}
                >
                    <Input />
                </Form.Item>

                <Form.Item
                    label="Описание"
                    name="description"
                    rules={[{ required: true, message: 'Укажите описание' }]}
                >
                    <Input.TextArea />
                </Form.Item>

                <Form.Item
                    label="Категория"
                    name="typeId"
                    rules={[{ required: true, message: 'Укажите категорию' }]}>
                    <Select>
                        {(types[0]) ? types.map(type => {
                            return <Select.Option key={type.id} value={type.id}>{type.name}</Select.Option>
                        }) : undefined}
                    </Select>
                </Form.Item>

                <Form.Item
                    label="Производитель"
                    rules={[{ required: true, message: 'Укажите производителя' }]}
                    name="brandId"
                >
                    <Select>
                        {(brands[0]) ? brands.map(brand => {
                            return <Select.Option key={brand.id} value={brand.id}>{brand.name}</Select.Option>
                        }) : undefined}
                    </Select>
                </Form.Item>
                <input type='file' onChange={(e) => {setFile(e.target.files[0])}}/>
                <Form.Item label="Button" >
                    <Button htmlType="submit">Создать</Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default CreateItemForm