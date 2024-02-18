import { LoadingSpinnerProps } from './type'
import * as S from './styles'

export const LoadingSpinner = ({ size, color }: LoadingSpinnerProps) => {
    return (
        <S.Spinner
            size={size}
            color={color}
        />
    )
}
