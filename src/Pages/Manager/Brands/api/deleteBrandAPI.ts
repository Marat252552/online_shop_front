import { PrivateInstanse } from "../../../../Shared/api/PrivateInstanse"
import { DeleteBrandAPI_T } from "../Components/table/lib/types"

const DeleteBrandAPI: DeleteBrandAPI_T = (id) => {
    return PrivateInstanse.delete(`/brands/${id}`)
}

export default DeleteBrandAPI