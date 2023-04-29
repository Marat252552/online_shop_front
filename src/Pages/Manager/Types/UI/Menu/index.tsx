import { Button } from "antd"
import { useNavigate } from "react-router-dom"



const Menu = () => {
    let navigate = useNavigate()
    return <div style={{width: '300px'}}>
        Menu
        <Button onClick={() => {navigate('/types/create')}}>Создать</Button>
    </div>
}

export default Menu