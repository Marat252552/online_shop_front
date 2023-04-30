import PublicInstanse from "./PublicInstanse"
import { GetBrandsAPI_T } from "./types"



const GetBrandsAPI: GetBrandsAPI_T = (offset?: number, limit?: number) => {
    return PublicInstanse.get(`/brands?offset=${offset || 0}&limit=${limit || 100}`)
}

export default GetBrandsAPI