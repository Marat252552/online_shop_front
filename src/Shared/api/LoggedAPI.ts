import { AxiosResponse } from "axios"
import { PrivateInstanse } from "./PrivateInstanse"
import { User_T } from "../lib/types"

type LoggedAPI_T = () => Promise<AxiosResponse<{
    user: User_T
}, any>>

const LoggedAPI: LoggedAPI_T = () => {
    return PrivateInstanse.get('/auth/logged')
}

export default LoggedAPI