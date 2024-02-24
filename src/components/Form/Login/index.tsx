'use client'
import { setCookie } from 'nookies'
import { useDispatch, useSelector } from 'react-redux'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputField } from '@/components/InputField'
import { useLogin } from '@/hooks/useLogin'
import { ImputPasswordField } from '@/components/ImputPasswordField'
import { ModalToast } from '@/components/Modals/ModalToast'
import { LoadingSpinner } from '@/components/Loading/LoadingSpinner'
import { AxiosError } from '@/services/AuthService/type'
import { loginSchema, defaultValues } from './constants'
import { FormData } from './type'
import { setUser } from '@/stores/userSlice'
import { RootStateToast } from '@/stores/toast/types'
import { hideToast, showToast } from '@/stores/toast'
import * as S from './styles'

export const Login = () => {
    const router = useRouter()
    const { mutate: doLogin, isLoading } = useLogin()
    const toast = useSelector((state: RootStateToast) => state.toastData.toastInfo)
    const dispatch = useDispatch()

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onBlur',
        defaultValues: defaultValues,
        resolver: zodResolver(loginSchema),
    })

    const handleSignUpClick = () => {
        router.push('/register')
    }

    const onSubmit = (data: FormData) => {
        doLogin(data, {
            onSuccess: (response) => {
                const { accessToken, refreshToken, user } = response

                const options = { maxAge: 7 * 24 * 60 * 60, path: '/' }
                setCookie(null, 'accessToken', accessToken, options)
                setCookie(null, 'refreshToken', refreshToken, options)
                setCookie(null, 'userData', JSON.stringify(user), options)
                dispatch(setUser(user))
                router.push('/')
            },
            onError: (error) => {
                const axiosError = error as AxiosError
                const errorMessage =
                    axiosError.response?.data.message || 'Ocorreu um erro desconhecido.'
                dispatch(
                    showToast({
                        message: errorMessage,
                        color: 'error',
                        isVisible: true,
                    }),
                )
            },
        })
    }

    return (
        <S.LoginContainer>
            <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
                <S.CartIcon />
                <h2>Entrar</h2>

                <InputField
                    type='email'
                    label='Login'
                    placeholder='Email'
                    {...register('email')}
                    error={errors.email?.message}
                />
                <ImputPasswordField
                    label='Senha'
                    type='password'
                    placeholder='Senha'
                    {...register('password')}
                    error={errors.password?.message}
                />
                <ModalToast
                    color={toast.color}
                    message={toast.message}
                    isVisible={toast.isVisible}
                    setIsVisible={() => dispatch(hideToast())}
                />

                <S.TextButton
                    type='button'
                    onClick={handleSignUpClick}
                >
                    Ainda não tem conta? Crie uma agora!
                </S.TextButton>

                <S.SubmitButton
                    disabled={!isValid || isLoading}
                    type='submit'
                >
                    {isLoading ? <LoadingSpinner /> : 'Entrar'}
                </S.SubmitButton>
            </S.LoginForm>
        </S.LoginContainer>
    )
}
