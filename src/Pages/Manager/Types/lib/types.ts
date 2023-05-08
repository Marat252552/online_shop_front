import { AxiosResponse } from "axios";
import { Type_T } from "../../../../Shared/lib/types";


export type DeleteTypeAPI_T = (id: number) => Promise<AxiosResponse<{
    message: string
}>>