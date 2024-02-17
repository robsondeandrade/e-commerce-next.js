import * as S from './styles'
import { InputFieldProps } from './type'

export const InputField = ({ label, type, placeholder }: InputFieldProps) => (
    <S.Field>
        <S.Label>{label}</S.Label>
        <S.Input
            type={type}
            placeholder={placeholder}
        />
    </S.Field>
)
