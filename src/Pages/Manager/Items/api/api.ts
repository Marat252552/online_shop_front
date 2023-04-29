import { PrivateInstanse } from "../../../../Shared/api/PrivateInstanse"


export const DeleteItemAPI = (id: number) => {
    return PrivateInstanse.delete(`/items/${id}`)
}