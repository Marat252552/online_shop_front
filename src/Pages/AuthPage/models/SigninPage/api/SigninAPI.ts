import { PrivateInstanse } from "../../../../../Shared/api/PrivateInstanse"
import { SigninAPI_T } from "../lib/types"


const SigninAPI: SigninAPI_T = (login: string, password: string, remember: boolean) => {
    return PrivateInstanse.post('/auth/signin', {
        login, password, remember
    })
}

export default SigninAPI