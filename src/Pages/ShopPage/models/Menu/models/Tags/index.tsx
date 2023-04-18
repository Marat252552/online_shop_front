import React from 'react';
import { Button, Form, Input, Select } from 'antd';


const { Option } = Select;

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};

const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

const Tags: React.FC = () => {
    const [form] = Form.useForm();

    const onFinish = (values: any) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <div style={{ width: '100%', marginTop: '10px' }}>
            <Form
                {...layout}
                form={form}
                name="control-hooks"
                onFinish={onFinish}
            >
                <Form.Item name="type" rules={[{ required: true }]}>
                    <Select
                        placeholder="Категория"
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item name="brand" rules={[{ required: true }]}>
                    <Select
                        placeholder="Производитель"
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Button type="primary" htmlType="submit">
                    Submit
                </Button>
                <Button htmlType="button" onClick={onReset}>
                    Reset
                </Button>
            </Form>
        </div>

    );
};

export default Tags;