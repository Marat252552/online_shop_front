import { Button } from "antd"
import Header from "../../Shared/models/Header"
import { useNavigate } from "react-router-dom"


const ManagerPage = () => {
    let navigate = useNavigate()
    return <div>
        <Header />
        <div>
            <Button type="primary" onClick={() => {navigate('/items')}}>Товары</Button>
            <Button type="primary">Добавить категорию</Button>
            <Button type="primary">Добавить производителя</Button>
        </div>
    </div>
}

export default ManagerPage