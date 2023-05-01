import PublicInstanse from "./PublicInstanse"
import { GetBrandsAPI_T } from "./types"



const GetBrandsAPI: GetBrandsAPI_T = (offset, limit, searchValue) => {
    return PublicInstanse.post(`/brands/find`, {
        offset,
        limit,
        searchValue
    })
}

export default GetBrandsAPI