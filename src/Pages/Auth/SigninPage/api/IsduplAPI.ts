import PublicInstanse from "../../../../Shared/api/PublicInstanse"


const IsduplAPI = (login: string) => {
    return PublicInstanse.get(`/auth/isdupl?login=${login}`)
}

export default IsduplAPI