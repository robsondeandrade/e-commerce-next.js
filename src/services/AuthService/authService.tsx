import api from '../api'
import { Credentials, NewCredentials } from './type'

export class LoginService {
    async login(credentials: Credentials) {
        try {
            const { data } = await api.post(`/login`, credentials)
            return data
        } catch (error) {
            throw error
        }
    }
    async createUser(newCredentials: NewCredentials) {
        try {
            const { data } = await api.post(`/user`, newCredentials)
            return data
        } catch (error) {
            throw error
        }
    }
    async refreshAccessToken(refleshToken: any) {
        try {
            const { data } = await api.post(`/refresh-token`, refleshToken)
            return data
        } catch (error) {
            throw error
        }
    }
}
