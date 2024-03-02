'use client'
import { useState } from 'react'
import { usePathname } from 'next/navigation'
import { ModalCart } from '../Modals/ModalCart'
import UserMenu from '../UserMenu'
import { useRouter } from 'next/navigation'
import { useCart } from '@/hooks/useCart'
import * as S from './styles'

const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    const [openModal, setOpenModal] = useState(false)
    const { products } = useCart()

    const isExcludedRoute = () => {
        const excludedRoutes = ['/login', '/register']
        return excludedRoutes.includes(pathname)
    }

    if (isExcludedRoute()) return null

    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)

    return (
        <S.HeaderContainer>
            <S.LogoContainer
                data-testid='logo-container'
                onClick={() => router.push('/')}
            >
                <S.MainLogo>RBS</S.MainLogo>
                <S.SubLogo>Digital</S.SubLogo>
            </S.LogoContainer>
            <S.Box>
                <S.CartContainer
                    data-testid='cart-container'
                    onClick={handleOpenModal}
                >
                    <S.CartIcon />
                    <S.CartValue>{products?.length || 0}</S.CartValue>
                </S.CartContainer>
                <UserMenu />
            </S.Box>
            <ModalCart
                isOpen={openModal}
                onClose={handleCloseModal}
            />
        </S.HeaderContainer>
    )
}

export default Header
