'use client'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { InputField } from '@/components/InputField'
import { createUserSchema, defaultValues } from './constants'
import { ImputPasswordField } from '@/components/ImputPasswordField'
import { FormData } from './type'
import * as S from './styles'

export const CreateUser = () => {
    const router = useRouter()

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: defaultValues,
        resolver: zodResolver(createUserSchema),
    })

    const handleLoginClick = () => {
        router.push('/login')
    }

    const onSubmit = (data: FormData) => {
        console.log(data)
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
                <S.SubmitButton type='submit'>Criar Conta</S.SubmitButton>
            </S.LoginForm>
        </S.LoginContainer>
    )
}
