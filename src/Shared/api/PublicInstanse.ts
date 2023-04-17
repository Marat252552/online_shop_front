import axios from 'axios'

const PublicInstanse = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

export default PublicInstanse