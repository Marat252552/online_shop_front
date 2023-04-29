import PublicInstanse from "./PublicInstanse"
import { GetBrandsAPI_T } from "./types"



const GetBrandsAPI: GetBrandsAPI_T = (offset: number = 0, limit: number = 100) => {
    return PublicInstanse.get(`/brands?offset=${offset}&limit=${limit}`)
}

export default GetBrandsAPI