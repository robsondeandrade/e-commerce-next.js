import React, { useState } from 'react'
import { InputFieldProps } from '../InputField/type'
import * as S from './styles'

export const ImputPasswordField = React.forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, error, ...inputProps }, ref) => {
        const [showPassword, setShowPassword] = useState(false)

        const togglePasswordVisibility = () => {
            setShowPassword(!showPassword)
        }

        return (
            <S.Field>
                <S.Label>{label}</S.Label>

                <S.InputContainer>
                    <S.StyledInput
                        ref={ref}
                        placeholder='Digite sua senha'
                        {...inputProps}
                        type={showPassword ? 'text' : 'password'}
                    />
                    <S.IconContainer onClick={togglePasswordVisibility}>
                        {showPassword ? <S.IconFiEye size={20} /> : <S.IconFiEyeOff size={20} />}
                    </S.IconContainer>
                </S.InputContainer>

                {error && <S.Error>{error}</S.Error>}
            </S.Field>
        )
    },
)

ImputPasswordField.displayName = 'ImputPasswordField'
