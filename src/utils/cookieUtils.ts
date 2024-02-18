import { IUser } from '@/stores/userSlice/type'
import { parseCookies } from 'nookies'

export const getUserFromCookie = (): IUser | null => {
    const cookies = parseCookies()
    const userData = cookies.userData ? JSON.parse(cookies.userData) : null
    return userData
}
