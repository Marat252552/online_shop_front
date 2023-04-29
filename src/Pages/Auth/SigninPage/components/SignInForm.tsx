import React, { useContext, useState } from 'react';
import type { CascaderProps } from 'antd';
import {
  Button,
  Checkbox,
  Form,
  Input,
} from 'antd';
import {observer} from 'mobx-react-lite'
import SigninAPI from '../api/SigninAPI';
import { Context } from '../../../../App/App'; 
import {NavLink, useNavigate} from 'react-router-dom'

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 8 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const SignInForm = observer(() => {
  const [form] = Form.useForm();
  const navigate = useNavigate()
    const {userState} = useContext(Context)
  const onFinish = async (values: {login: string, password: string, remember: boolean}) => {
    try {
        let response = await SigninAPI(values.login, values.password, values.remember)
        if(response.status === 201) {
            userState.setIsAuth(true)
            userState.setToken(response.data.AccessToken)
            userState.setUser(response.data.user)
            navigate('/')
        }
    } catch(e) {
        console.log(e)
    }
  };

  return (
    <Form
      {...formItemLayout}
      form={form}
      name="register"
      onFinish={onFinish}
      initialValues={{ residence: ['zhejiang', 'hangzhou', 'xihu'], prefix: '86' }}
      style={{ maxWidth: 600 }}
      scrollToFirstError
    >
      <Form.Item
        name="login"
        label="Логин"
        rules={[
          {
            type: 'string',
            message: 'Введите логин',
          },
          {
            required: true,
            message: 'Please input your E-mail!',
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        name="password"
        label="Пароль"
        rules={[
          {
            required: true,
            message: 'Введите пароль',
          },
        ]}
        hasFeedback
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        name="confirm"
        label="Подтвердите пароль"
        dependencies={['password']}
        hasFeedback
        rules={[
          {
            required: true,
            message: 'Подтвердите пароль',
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue('password') === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error('Пароли не совпадают'));
            },
          }),
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Запомнить меня</Checkbox>
        </Form.Item>

      <Form.Item
        name="agreement"
        valuePropName="checked"
        rules={[
          {
            validator: (_, value) =>
              value ? Promise.resolve() : Promise.reject(new Error('Should accept agreement')),
          },
        ]}
        {...tailFormItemLayout}
      >
        <Checkbox>
          Я прочитал <a href="">соглашение</a>
        </Checkbox>
      </Form.Item>
      <Form.Item {...tailFormItemLayout}>
        <Button type="primary" htmlType="submit">
          Создать
        </Button>
      </Form.Item>
      <Button onClick={() => navigate(-1)}>Назад к форме логина</Button>
    </Form>
  );
})

export default SignInForm;