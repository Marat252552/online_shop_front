import { Button } from "antd"
import Header from "../../../Shared/UI/Header"
import Menu from "../../../Shared/UI/Menu"
import MakeTable from "../Items/UI/Table"
import { useNavigate } from "react-router-dom"


const BrandsPage = () => {
    let navigate = useNavigate()
    return <div>
        <Header />
        <div style={{ display: 'flex', flexDirection: 'row' }}>
            <Menu>
                <Button type='dashed' onClick={() => { navigate('/brands/create') }}>Создать</Button>
            </Menu>
            <MakeTable />
        </div>
    </div>
}

export default BrandsPage