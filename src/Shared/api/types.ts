import { AxiosResponse } from "axios";
import { Brand_T, Item_T, Type_T } from "../lib/types";


export type GetBrandsAPI_T = (offset?: number, limit?: number) => Promise<AxiosResponse<{
    brands: Array<Brand_T>,
    brandsAmount: number
}, any>>

export type GetTypesAPI_T = (offset?: number, limit?: number) => Promise<AxiosResponse<{
    types: Array<Type_T>,
    typesAmount: number
}, any>>

export type GetItemsAPI_T = (offset?: number, limit?: number, brandId?: string | number, typeId?: string | number) => Promise<AxiosResponse<{
    items: Array<Item_T>,
    itemsAmount: number
}, any>>