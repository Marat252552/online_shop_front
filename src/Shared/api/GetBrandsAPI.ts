import PublicInstanse from "./PublicInstanse"



const GetBrandsAPI = () => {
    return PublicInstanse.get(`/brands`)
}

export default GetBrandsAPI