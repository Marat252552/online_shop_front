import { useForm } from "react-hook-form"
import MainContainer from "../../../../../Shared/UI/formComponents/MainContainer"
import Form from "../../../../../Shared/UI/formComponents/form"
import Input from "../../../../../Shared/UI/formComponents/input"
import PrimaryButton from "../../../../../Shared/UI/formComponents/primaryButton"
import { Inputs_T } from "./lib/types"
import { ErrorMessage } from "@hookform/error-message"
import { EyeOutlined } from "@ant-design/icons"
import PasswordInput from "../../../../../Shared/UI/formComponents/passwordInput"
import { StyledEngineProvider } from "@mui/material/styles"
import { useContext, useEffect, useState } from "react"
import Checkbox from '@mui/material/Checkbox';
import MyCheckbox from "../../../../../Shared/UI/formComponents/checkbox"
import { NavLink, useNavigate } from "react-router-dom"
import LoginAPI from "../../api/loginAPI"
import { Context } from "../../../../../App/App"

const NewLoginForm = (props: {openNotif: (message: string) => void}) => {
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs_T>({
        mode: 'onSubmit'
    })
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    const { userState } = useContext(Context)
    const navigate = useNavigate()
    let [loading, setLoading] = useState(false)

    let onSubmit = async (values: Inputs_T) => {
        setLoading(true)
        try {
            let response = await LoginAPI(values.login, values.password, values.checkbox)
            if (response.status === 200) {
                userState.setIsAuth(true)
                userState.setUser(response.data.user)
                localStorage.setItem('_AccessToken', response.data.AccessToken)
                navigate('/')
            }
        } catch (e) {
            props.openNotif('Неверный логин или пароль')
        } finally {
            setLoading(false)
        }
    }
    return <div>
        <StyledEngineProvider injectFirst>
            <MainContainer>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <Input
                        error={errors.login}
                        helperText={errors.login?.message}
                        {...register('login', {
                            required: 'Введите логин',
                            maxLength: 20,
                            pattern: {
                                value: /^[a-z0-9]+$/i,
                                message: 'Допустимы только латинские символы'
                            }
                        })}
                        type='text'
                        label='Логин'
                    />
                    <PasswordInput
                        error={errors.password}
                        helperText={errors.password?.message}
                        label='Пароль'
                        {...register('password', {
                            required: 'Введите пароль',
                            pattern: {
                                value: /^[a-z0-9]+$/i,
                                message: 'Допустимы только латинские символы'
                            }
                        })}
                    />
                    <MyCheckbox {...label}
                        {...register('checkbox')}
                        defaultChecked />
                    <PrimaryButton loading={loading}>Войти</PrimaryButton>
                </Form>
                <p><NavLink to={'/signin'}>Зарегистрироваться</NavLink></p>
                <p><NavLink to={'/'}>Продолжить без входа</NavLink></p>


            </MainContainer>
        </StyledEngineProvider>
    </div>
}

export default NewLoginForm