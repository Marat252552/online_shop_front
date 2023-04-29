import { Button, Card } from "antd"
import { useLocation, useNavigate, useParams } from "react-router-dom"
import { MenuProps_T } from "./lib/types"
import styles from './lib/styles.module.css'


const Menu = (props: MenuProps_T) => {
    let {pathname} = useLocation()
    let navigate = useNavigate()
    return <div className={styles.menu}>
        {pathname !== '/' && <Button onClick={() => navigate(-1)}>Назад</Button>}
        {
            (props.children) ? props.children : undefined
        }
    </div>
}

export default Menu