import React from 'react'
import { InputFieldProps } from './type'
import * as S from './styles'

export const InputField = React.forwardRef<HTMLInputElement, InputFieldProps>(
    ({ label, error, ...inputProps }, ref) => {
        return (
            <S.Field>
                <S.Label>{label}</S.Label>
                <S.Input
                    ref={ref}
                    {...inputProps}
                />
                {error && <S.Error>{error}</S.Error>}
            </S.Field>
        )
    },
)

InputField.displayName = 'InputField'
