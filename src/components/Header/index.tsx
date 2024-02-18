'use client'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { usePathname } from 'next/navigation'
import { ModalCart } from '../Modals/ModalCart'
import { RootState } from '@/stores/productSlice/types'
import UserMenu from '../UserMenu'
import { useRouter } from 'next/navigation'
import * as S from './styles'

const Header = () => {
    const router = useRouter()
    const pathname = usePathname()
    const products = useSelector((state: RootState) => state.userShoppingData.products)
    const [openModal, setOpenModal] = useState(false)

    const isExcludedRoute = () => {
        const excludedRoutes = ['/login', '/register']
        return excludedRoutes.includes(pathname)
    }

    if (isExcludedRoute()) return null

    const handleOpenModal = () => setOpenModal(true)
    const handleCloseModal = () => setOpenModal(false)

    return (
        <S.HeaderContainer>
            <S.LogoContainer onClick={() => router.push('/')}>
                <S.MainLogo>RBS</S.MainLogo>
                <S.SubLogo>Sistemas</S.SubLogo>
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
