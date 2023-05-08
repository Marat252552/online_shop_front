import { PrivateInstanse } from "./PrivateInstanse"
import { Basket_T } from "../lib/types"
import { AxiosResponse } from "axios"

export type AddToBasketAPI_T = (id: number) => Promise<AxiosResponse<{
    message: string,
    basket: Basket_T
}>>

const AddToBasketAPI: AddToBasketAPI_T = (id: number) => {
    return PrivateInstanse.post(`items/${id}`)
}

export default AddToBasketAPI