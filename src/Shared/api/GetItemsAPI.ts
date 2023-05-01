import PublicInstanse from "./PublicInstanse"
import { GetItemsAPI_T } from "./types"



const GetItemsAPI: GetItemsAPI_T = (offset, limit, brandId, typeId, searchValue) => {
    return PublicInstanse.post(`/items/find`, {
        offset,
        limit,
        brandId,
        typeId,
        searchValue
    })
}

export default GetItemsAPI