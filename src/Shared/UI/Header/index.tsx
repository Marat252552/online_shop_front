import { Button } from "antd"
import { observer } from 'mobx-react-lite'
import { useContext, useEffect } from "react"
import { Context } from "../../../App/App" 
import styles from './lib/styles.module.css'
import {NavLink} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import LogoutAPI from "./api/LogoutAPI"
import Typography from "@material-ui/core/Typography"
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
        fontFamily: 'Permanent Marker',
        // margin: theme.spacing(3, 0, 2),
        textAlign: 'center',
        fontSize: '20px',
        color: 'white'
    }
}))

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
    let styles2 = useStyles()
    return <div className={styles.header}>
        <div className={styles.header1}>
            <NavLink to='/' style={{color: 'white', textDecoration: 'none', fontSize: '30px'}}>
                <Typography className={styles2.root} component='h1' variant='h5'>
                    BuyAll.com
                </Typography>
                
                </NavLink>
        </div>
        <div className={styles.header2}>
            {(userState.isAuth) ?
                <Button type="ghost" onClick={Logout}>Выйти</Button>
                :
                <Button type="primary" onClick={() => {
                    navigate('/login')
                }}>Войти</Button>
            }
            {(userState.user.role === 'MANAGER') &&
                <Button type="default" onClick={() => {
                    navigate('/manager')
                }}>Панель менеджера</Button>
            }
            {(userState.user.role === 'ADMIN') &&
                <Button type="default" onClick={() => {
                    navigate('/accesscontrol')
                }}>Панель администратора</Button>
            }
        </div>
    </div>
})

export default Header