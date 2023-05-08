import PublicInstanse from "./PublicInstanse"
import { GetItemsAPI_T } from "./types"



const GetItemsAPI: GetItemsAPI_T = (offset, limit, brandTags, typeTags, searchValue) => {
    return PublicInstanse.post(`/items/find`, {
        offset,
        limit,
        brandTags,
        typeTags,
        searchValue
    })
}


export default GetItemsAPI