import { PrivateInstanse } from "../../../../../Shared/api/PrivateInstanse"

const CreateBrandAPI = (formData: any) => {
    return PrivateInstanse.post('/brands', formData, {headers: {
        'Content-Type': 'multipart/form-data'
    }})
}

export default CreateBrandAPI