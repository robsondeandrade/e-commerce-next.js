'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputField } from '@/components/InputField'
import { ImputPasswordField } from '@/components/ImputPasswordField'
import { ModalToast } from '@/components/Modals/ModalToast'
import { loginSchema, defaultValues } from './constants'
import { FormData, ToastInfo } from './type'
import * as S from './styles'

export const Login = () => {
    const router = useRouter()
    const [toastInfo, setToastInfo] = useState<ToastInfo>({
        message: '',
        color: 'success',
        isVisible: false,
    })

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: defaultValues,
        resolver: zodResolver(loginSchema),
    })

    const handleSignUpClick = () => {
        router.push('/esqueci-minha-senha')
    }

    const onSubmit = (data: FormData) => {
        console.log('data', data)
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
                    color={toastInfo.color}
                    message={toastInfo.message}
                    isVisible={toastInfo.isVisible}
                    setIsVisible={(isVisible) => setToastInfo({ ...toastInfo, isVisible })}
                />

                <S.TextButton
                    type='button'
                    onClick={handleSignUpClick}
                >
                    Ainda não tem conta? Crie uma agora!
                </S.TextButton>

                <S.SubmitButton type='submit'>Entrar</S.SubmitButton>
            </S.LoginForm>
        </S.LoginContainer>
    )
}
