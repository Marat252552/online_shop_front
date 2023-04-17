import { AxiosResponse } from "axios";
import { User_T } from "../../../../../Shared/lib/types";

export type SigninAPI_T = (login: string, password: string, remember: boolean) => Promise<AxiosResponse<{
    AccessToken: string,
    user: User_T
}, any>>