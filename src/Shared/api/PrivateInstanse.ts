import axios from 'axios'

export const PrivateInstanse = axios.create({
    withCredentials: true,
    baseURL: 'http://localhost:3000/',
    headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
    }
})

// Interceptor, устанавливающий в headers каждого запроса AccessToken
PrivateInstanse.interceptors.request.use((config: any) => {
    config.headers.Authorization = `Bearer ${localStorage.getItem('_AccessToken')}`
    return config
})



// Interceptor, отлавливающий ошибку, которую вызывает отсутствие AccessToken-а, и посылающий запрос на получение новой пары токенов
PrivateInstanse.interceptors.response.use((config: any) => {
    return config;
}, async (error) => {
    const OriginalRequest = error.config
    if (error.response.status === 401 && error.config && !error.config._isRetry) {
        OriginalRequest._isRetry = true
        try {
            let response = await PrivateInstanse.get('/auth/refresh')
            localStorage.setItem('_AccessToken', response.data.AccessToken)
            localStorage.setItem('_role', 'ADMIN')
            return PrivateInstanse.request(OriginalRequest)
        } catch (e) {
            console.log(e)
        }
    }
    throw error;
})