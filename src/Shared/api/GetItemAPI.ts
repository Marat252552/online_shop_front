import PublicInstanse from "./PublicInstanse"

const GetItemAPI = (id: number) => {
    return PublicInstanse.get(`/items/${id}`)
}

export default GetItemAPI