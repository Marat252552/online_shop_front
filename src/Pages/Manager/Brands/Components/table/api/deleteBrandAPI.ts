import { PrivateInstanse } from "../../../../../../Shared/api/PrivateInstanse"
import { DeleteBrandAPI_T } from "../lib/types"

const DeleteBrandAPI: DeleteBrandAPI_T = (id) => {
    return PrivateInstanse.delete(`/brands/${id}`)
}

export default DeleteBrandAPI