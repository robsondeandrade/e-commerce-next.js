import { useMutation } from 'react-query'
import { LoginService } from '@/services/AuthService/authService'
import { Credentials } from '@/services/AuthService/type'

export const useLogin = () => {
    const loginService = new LoginService()

    return useMutation((credentials: Credentials) => loginService.login(credentials))
}
