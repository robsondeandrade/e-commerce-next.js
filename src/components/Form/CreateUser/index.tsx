'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputField } from '@/components/InputField'
import { useCreateUser } from '@/hooks/useCreateUser'
import { ImputPasswordField } from '@/components/ImputPasswordField'
import { LoadingSpinner } from '@/components/Loading/LoadingSpinner'
import { ModalToast } from '@/components/Modals/ModalToast'
import { AxiosError } from '@/services/AuthService/type'
import { createUserSchema, defaultValues } from './constants'
import { ToastInfo } from '../Login/type'
import { FormData } from './type'
import * as S from './styles'

export const CreateUser = () => {
    const router = useRouter()
    const { mutate: doLogin, isLoading, isError } = useCreateUser()
    const [toastInfo, setToastInfo] = useState<ToastInfo>({
        message: '',
        color: 'success',
        isVisible: false,
    })
    const {
        watch,
        register,
        handleSubmit,
        formState: { errors, isValid },
    } = useForm({
        mode: 'onBlur',
        defaultValues: defaultValues,
        resolver: zodResolver(createUserSchema),
    })

    const handleLoginClick = () => {
        router.push('/login')
    }

    const onSubmit = (data: FormData) => {
        doLogin(data, {
            onSuccess: () => {
                setToastInfo({
                    message: 'Operação bem-sucedida!',
                    color: 'success',
                    isVisible: true,
                })
                router.push('/login')
            },
            onError: (error) => {
                const axiosError = error as AxiosError
                const errorMessage =
                    axiosError.response?.data.message || 'Ocorreu um erro desconhecido.'
                setToastInfo({
                    message: errorMessage,
                    color: 'error',
                    isVisible: true,
                })
            },
        })
    }

    return (
        <S.LoginContainer>
            <S.LoginForm onSubmit={handleSubmit(onSubmit)}>
                <h2>Criar Conta</h2>

                <InputField
                    type='text'
                    label='Nome'
                    {...register('name')}
                    error={errors.name?.message}
                    placeholder='Seu nome completo'
                />
                <InputField
                    type='email'
                    label='Email'
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
                <ImputPasswordField
                    type='password'
                    label='Confirmar Senha'
                    placeholder='Confirme sua senha'
                    {...register('confirmPassword')}
                    error={errors.confirmPassword?.message}
                />

                <S.TextButton
                    type='button'
                    onClick={handleLoginClick}
                >
                    Já tem uma conta? Entre agora!
                </S.TextButton>
                <S.SubmitButton
                    disabled={!isValid || isLoading}
                    type='submit'
                >
                    {isLoading ? <LoadingSpinner /> : 'Criar Conta'}
                </S.SubmitButton>
            </S.LoginForm>
            <ModalToast
                color={toastInfo.color}
                message={toastInfo.message}
                isVisible={toastInfo.isVisible}
                setIsVisible={(isVisible) => setToastInfo({ ...toastInfo, isVisible })}
            />
        </S.LoginContainer>
    )
}
