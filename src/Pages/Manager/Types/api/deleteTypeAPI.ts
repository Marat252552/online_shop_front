import { PrivateInstanse } from "../../../../Shared/api/PrivateInstanse"
import { DeleteTypeAPI_T } from "../lib/types"

const DeleteTypeAPI: DeleteTypeAPI_T = (id: number) => {
    return PrivateInstanse.delete(`/types/${id}`)
}

export default DeleteTypeAPI