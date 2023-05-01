import PublicInstanse from "./PublicInstanse"
import { GetTypesAPI_T } from "./types"


const GetTypesAPI: GetTypesAPI_T = (offset, limit, searchValue) => {
    
    return PublicInstanse.post(`/types/find`, {
        offset,
        limit,
        searchValue
    })
}

export default GetTypesAPI