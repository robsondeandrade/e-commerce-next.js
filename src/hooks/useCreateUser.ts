import { useMutation } from 'react-query'
import { LoginService } from '@/services/AuthService/authService'
import { NewCredentials } from '@/services/AuthService/type'

export const useCreateUser = () => {
    const loginService = new LoginService()

    return useMutation((credentials: NewCredentials) => loginService.createUser(credentials))
}
