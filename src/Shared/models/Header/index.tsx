import { Button } from "antd"
import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from "react"
import { Context } from "../../../App/App"
import styles from './lib/styles.module.css'
import {NavLink} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import LogoutAPI from "./api/LogoutAPI"

const Header = observer(() => {
    const navigate = useNavigate()
    const { userState } = useContext(Context)
    const Logout = async () => {
        try {
            let response = await LogoutAPI()
            if(response.status === 200) {
                userState.logout()
                localStorage.clear()
            }
        } catch(e) {
            console.log(e)
        }   
    }
    console.log(userState.user.role)
    return <div className={styles.header}>
        <div className={styles.header1}>
            <NavLink to='/' style={{color: 'white', textDecoration: 'none'}}>КупитьВсе</NavLink>
        </div>
        <div className={styles.header2}>
            {(userState.isAuth) ?
                <Button type="ghost" onClick={Logout}>Выйти</Button>
                :
                <Button type="primary" onClick={() => {
                    navigate('/login')
                }}>Войти</Button>
            }
            {(userState.user.role === 'ADMIN') &&
                <Button type="default" onClick={() => {
                    userState.setIsAuth(false)
                }}>Панель администратора</Button>
            }
        </div>
    </div>
})

export default Header