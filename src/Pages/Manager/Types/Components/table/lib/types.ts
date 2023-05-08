import { AxiosResponse } from "axios";


export type DeleteBrandAPI_T = (id: number) => Promise<AxiosResponse<{
    message: string
}, any>>