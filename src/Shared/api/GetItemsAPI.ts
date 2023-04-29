import PublicInstanse from "./PublicInstanse"
import { GetItemsAPI_T } from "./types"



const GetItemsAPI: GetItemsAPI_T = (offset: number = 0, limit: number = 100, brandId: string | number = 'ANY', typeId: string | number = 'ANY') => {
    return PublicInstanse.get(`/items?brandId=${brandId}&offset=${offset}&limit=${limit}&typeId=${typeId}`)
}

export default GetItemsAPI