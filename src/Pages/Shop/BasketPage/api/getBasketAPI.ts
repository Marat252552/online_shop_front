import { PrivateInstanse } from "../../../../Shared/api/PrivateInstanse"
import { GetBasketAPI_T } from "../lib/types"


const GetBasketAPI: GetBasketAPI_T = () => {
    return PrivateInstanse.get('/basket')
}

export default GetBasketAPI