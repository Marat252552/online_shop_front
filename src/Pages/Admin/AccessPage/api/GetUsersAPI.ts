import { PrivateInstanse } from "../../../../Shared/api/PrivateInstanse" 
import { GetUsersAPI_T } from "../lib/types"


const GetUsersAPI: GetUsersAPI_T = (roles, searchValue, offset, limit) => {
    return PrivateInstanse.post(`/admin/users`, {
        roles,
        offset,
        limit,
        searchValue
    })
}

export default GetUsersAPI