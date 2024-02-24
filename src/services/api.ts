import axios from 'axios'
import { parseCookies, setCookie, destroyCookie } from 'nookies'

const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

api.interceptors.request.use((config) => {
    const cookies = parseCookies()
    const token = cookies['accessToken']

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`
    }

    return config
})

async function refreshAccessToken() {
    const cookies = parseCookies()
    const refreshToken = cookies['refreshToken']
    if (!refreshToken) {
        throw new Error('No refresh token available')
    }

    const response = await api.post(`/refresh-token`, { refreshToken })
    return response.data
}

api.interceptors.response.use(
    (response) => response,
    async (error) => {
        if (
            error.response &&
            error.response.status === 401 &&
            !error.config.url.includes('/login')
        ) {
            try {
                const data = await refreshAccessToken()

                setCookie(null, 'accessToken', data.accessToken.newAccessToken, { path: '/' })
                setCookie(null, 'refreshToken', data.accessToken.newRefreshToken, { path: '/' })

                error.config.headers['Authorization'] = `Bearer ${data.accessToken.newAccessToken}`

                return api.request(error.config)
            } catch (refreshError) {
                Object.keys(parseCookies()).forEach((cookieName) => {
                    destroyCookie(null, cookieName, { path: '/' })
                })
                if (typeof window !== 'undefined') {
                    window.location.href = '/login'
                }
                return Promise.reject(refreshError)
            }
        }

        return Promise.reject(error)
    },
)

export default api
