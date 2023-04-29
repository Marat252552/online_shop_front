import { Button } from "antd"
import Header from "../../../Shared/UI/Header"
import { useNavigate } from "react-router-dom"


const ManagerPage = () => {
    let navigate = useNavigate()
    return <div>
        <Header />
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100%'}}>
            <Button type="primary" onClick={() => {navigate('/items')}}>Товары</Button>
            <Button type="primary" onClick={() => {navigate('/brands')}}>Производители</Button>
            <Button type="primary" onClick={() => {navigate('/types')}}>Категории</Button>
        </div>
    </div>
}

export default ManagerPage