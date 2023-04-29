import { PrivateInstanse } from "../../../../../Shared/api/PrivateInstanse"


const CreateItemAPI = (formData: any) => {
    return PrivateInstanse.post('/items', formData, {headers: {
        'Content-Type': 'multipart/form-data'
    }})
}

export default CreateItemAPI