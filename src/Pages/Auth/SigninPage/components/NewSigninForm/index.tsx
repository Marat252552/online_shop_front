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
import SigninAPI from "../../api/SigninAPI"
import { Context } from "../../../../../App/App"
import IsduplAPI from "../../api/IsduplAPI"

const NewSigninForm = (props: { openNotif: (message: string) => void }) => {
    let navigate = useNavigate()
    let { userState } = useContext(Context)
    const { register, handleSubmit, formState: { errors, isDirty, isValid } } = useForm<Inputs_T>({
        mode: 'onChange'
    })
    let [loading, setLoading] = useState(false)
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    let onSubmit = async (values: Inputs_T) => {
        setLoading(true)
        try {
            let response = await SigninAPI(values.login, values.password, values.remember)
            if (response.status === 201) {
                userState.setIsAuth(true)
                localStorage.setItem('AccessToken', response.data.AccessToken)
                userState.setUser(response.data.user)
                navigate('/')
            }
        } catch (e) {
            console.log(e)
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
                            },
                            validate: async (value) => {
                                try {
                                    await IsduplAPI(value)
                                } catch (e) {
                                    console.log(e)
                                    return 'Логин занят'
                                }
                            }
                        })}
                        type='text'
                        label='Логин'
                    />
                    <PasswordInput
                        label='Пароль'
                        error={errors.password || null}
                        helperText={errors.password?.message || null}
                        {...register('password', {
                            required: 'Введите пароль',
                            pattern: {
                                value: /^[a-z0-9]+$/i,
                                message: 'Допустимы только латинские символы'
                            }
                        })}
                    />
                    <PasswordInput
                        label='Подтвердите пароль'
                        error={errors.password2 || null}
                        helperText={errors.password2?.message || null}
                        {...register('password2', {
                            required: 'Подтвердите пароль',
                            validate: (value, formValues) => {
                                if (value !== formValues.password) {
                                    return 'Пароли не совпадают'
                                }
                            }
                        })}
                    />
                    <MyCheckbox {...label}
                        {...register('remember')}
                        defaultChecked />
                    <PrimaryButton
                        disabled={!isDirty || !isValid}
                        loading={loading}>Войти</PrimaryButton>
                </Form>
                <p><NavLink to={'/login'}>Перейти на страницу входа</NavLink></p>
                <p><NavLink to={'/'}>Продолжить без входа</NavLink></p>


            </MainContainer>
        </StyledEngineProvider>
    </div>
}

export default NewSigninForm