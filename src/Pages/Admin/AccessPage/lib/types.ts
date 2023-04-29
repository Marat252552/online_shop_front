import { AxiosResponse } from "axios";
import { User_T } from "../../../../Shared/lib/types"; 


export type GetUsersAPI_T = (role?: string, offset?: number, limit?: number) => Promise<AxiosResponse<{
    users: Array<User_T>
}, any>>

export type ChangeAccessAPI_T = (newRole: string) => Promise<AxiosResponse<{
    user: User_T
}, any>>

export type setUsers_T = React.Dispatch<React.SetStateAction<{
    login: string;
    role: string;
}[]>>