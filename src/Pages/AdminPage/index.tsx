import { Button } from "antd"
import Header from "../../Shared/models/Header"
import { useNavigate } from "react-router-dom"


const AdminPage = () => {
    let navigate = useNavigate()
    return <div>
        <Header />
        <Button onClick={() => {navigate('/accesscontrol')}}>Управление доступом</Button>
    </div>
}

export default AdminPage