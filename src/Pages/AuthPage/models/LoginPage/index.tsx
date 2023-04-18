import React, { useContext } from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import LoginAPI from './api/loginAPI';
import { Context } from '../../../../App/App';
import {useNavigate, NavLink} from 'react-router-dom'

const LoginPage: React.FC = () => {
    const {userState} = useContext(Context)
    const navigate = useNavigate()
    const onFinish = async (values: { login: string, password: string, remember: boolean }) => {
        let response = await LoginAPI(values.login, values.password, values.remember)
        if (response.status === 200) {
            userState.setIsAuth(true)
            userState.setUser(response.data.user)
            localStorage.setItem('_AccessToken', response.data.AccessToken)
            navigate('/')
        }
    }

    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="login"
                rules={[{ required: true, message: 'Введите логин' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Логин" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Введите пароль' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Пароль"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                    <Checkbox>Запомнить меня</Checkbox>
                </Form.Item>

                <a className="login-form-forgot" href="">
                    Забыл пароль
                </a>
            </Form.Item>

            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                    Войти
                </Button>
                Или <NavLink to='/signin'>создать аккаунт</NavLink>
            </Form.Item>
        </Form>
    );
};

export default LoginPage;