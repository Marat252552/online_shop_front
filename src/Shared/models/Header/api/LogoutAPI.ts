import { PrivateInstanse } from "../../../api/PrivateInstanse"


const LogoutAPI = () => {
    return PrivateInstanse.delete('/auth/logout')
}

export default LogoutAPI