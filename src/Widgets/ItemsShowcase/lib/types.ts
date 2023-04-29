import { AxiosResponse } from "axios";
import { Item_T } from "../../../../../../../Shared/lib/types";

export type GetItemsAPI_T = (offset?: number, limit?: number, brandId?: number, typeId?: number) => Promise<AxiosResponse<{
    items: Array<Item_T>
}, any>>