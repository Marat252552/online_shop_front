import { PrivateInstanse } from "../../../../../Shared/api/PrivateInstanse"

const CreateTypeAPI = (name: string) => {
    return PrivateInstanse.post('/types', {
        name
    })
}

export default CreateTypeAPI