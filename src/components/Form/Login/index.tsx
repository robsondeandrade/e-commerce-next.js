'use client'
import { InputField } from '@/components/InputField/InputField'
import { useRouter } from 'next/navigation'
import * as S from './styles'

export const Login = () => {
    const router = useRouter()

    const handleSignUpClick = () => {
        router.push('/esqueci-minha-senha')
    }

    return (
        <S.LoginContainer>
            <S.LoginForm>
                <S.CartIcon />
                <h2>Entrar</h2>

                <InputField
                    type='email'
                    label='Login'
                    placeholder='Email'
                />
                <InputField
                    label='Senha'
                    type='password'
                    placeholder='Senha'
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
