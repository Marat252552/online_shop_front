import PublicInstanse from "./PublicInstanse"
import { GetTypesAPI_T } from "./types"


const GetTypesAPI: GetTypesAPI_T = (offset?: number, limit?: number) => {
    return PublicInstanse.get(`/types?offset=${offset || 0}&limit=${limit || 100}`)
}

export default GetTypesAPI