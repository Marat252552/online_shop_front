import { AxiosResponse } from "axios";
import { Basket_T } from "../../../../Shared/lib/types";



export type GetBasketAPI_T = () => Promise<AxiosResponse<{
    basket: Basket_T
}, any>>
