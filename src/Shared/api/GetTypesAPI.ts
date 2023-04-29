import PublicInstanse from "./PublicInstanse"
import { GetTypesAPI_T } from "./types"


const GetTypesAPI: GetTypesAPI_T = (offset: number = 0, limit: number = 5) => {
    return PublicInstanse.get(`/types?offset=${offset}&limit=${limit}`)
}

export default GetTypesAPI