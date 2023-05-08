import { Button } from "antd"
import Header from "../../../Shared/UI/Header"
import { useNavigate } from "react-router-dom"
import MainTemplate from "../../../Templates/MainTemplate"


const AdminPage = () => {
    let navigate = useNavigate()
    return <>
        <MainTemplate
            BodyChildren={
                <Button onClick={() => { navigate('/accesscontrol') }}>Управление доступом</Button>
            } />
    </>
}

export default AdminPage