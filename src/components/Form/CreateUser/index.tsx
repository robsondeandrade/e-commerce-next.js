'use client'
import { InputField } from '@/components/InputField/InputField'
import { useRouter } from 'next/navigation'
import * as S from './styles'

export const CreateUser = () => {
    const router = useRouter()

    const handleLoginClick = () => {
        router.push('/login')
    }

    return (
        <S.LoginContainer>
            <S.LoginForm>
                <h2>Criar Conta</h2>

                <InputField
                    type='text'
                    label='Nome'
                    placeholder='Seu nome completo'
                />
                <InputField
                    type='email'
                    label='Email'
                    placeholder='Email'
                />
                <InputField
                    type='password'
                    label='Senha'
                    placeholder='Senha'
                />
                <InputField
                    type='password'
                    label='Confirmar Senha'
                    placeholder='Confirme sua senha'
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
