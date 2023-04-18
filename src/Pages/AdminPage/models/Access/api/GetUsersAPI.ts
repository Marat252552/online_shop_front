import { PrivateInstanse } from "../../../../../Shared/api/PrivateInstanse"
import { GetUsersAPI_T } from "../lib/types"


const GetUsersAPI: GetUsersAPI_T = (role: string = 'ANY', offset: number = 0, limit: number = 10) => {
    return PrivateInstanse.get(`/admin/users?role=${role}&offset=${offset}&limit=${limit}`)
}

export default GetUsersAPI