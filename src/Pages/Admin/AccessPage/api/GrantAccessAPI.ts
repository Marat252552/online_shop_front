import { PrivateInstanse } from "../../../../Shared/api/PrivateInstanse" 

const ChangeAccessAPI = (id: number, newRole: string) => {
    return PrivateInstanse.put('/admin/users', {
        id, newRole
    })
}

export default ChangeAccessAPI