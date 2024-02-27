'use client'
import Link from 'next/link'
import * as S from './styles'

export const Custom404 = () => {
    return (
        <S.NotFoundContainer>
            <S.NotFoundText>
                Ops! Não conseguimos encontrar a página que você está procurando.
            </S.NotFoundText>
            <Link
                href='/'
                passHref
            >
                <S.HomeButton>Voltar para a Home</S.HomeButton>
            </Link>
        </S.NotFoundContainer>
    )
}
