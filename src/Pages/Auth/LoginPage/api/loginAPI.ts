import axios from "axios"
import { LoginAPI_T } from "../lib/types"
import { PrivateInstanse } from "../../../../Shared/api/PrivateInstanse" 


const LoginAPI: LoginAPI_T = (login, password, remember) => {
    return PrivateInstanse.post('/auth/login', {
        login, password, remember
    })
}

export default LoginAPI