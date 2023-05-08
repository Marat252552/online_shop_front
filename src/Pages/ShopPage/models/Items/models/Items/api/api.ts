import PublicInstanse from "../../../../../../../Shared/api/PublicInstanse"



const GetItemsAPI = (offset: number = 0, limit: number = 10, brandId: string | number = '', typeId: string | number = '') => {
    return PublicInstanse.get(`/items?brandId=${brandId}&offset=${offset}&limit=${limit}&typeId=${typeId}`)
}

export default GetItemsAPI