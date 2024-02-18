'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { useSelector } from 'react-redux'
import { destroyCookie, parseCookies } from 'nookies'
import { RootStateUser } from '@/stores/userSlice/type'
import * as S from './styles'

const UserMenu = () => {
    const router = useRouter()
    const [menuOpen, setMenuOpen] = useState(false)
    const user = useSelector((state: RootStateUser) => state.userData.user)

    const getUserInitials = (name: string | undefined) => {
        if (!name) return null

        const names = name.trim().toUpperCase().split(/\s+/)
        const firstInitial = names[0][0]
        const secondInitial = names.length > 1 ? names[1][0] : ''
        return `${firstInitial}${secondInitial}`
    }

    const userInitials = getUserInitials(user?.name)

    const handleLogout = () => {
        Object.keys(parseCookies()).forEach((cookieName) => {
            destroyCookie(null, cookieName, { path: '/' })
        })
        router.push('/login')
    }

    return (
        <>
            {menuOpen && <S.Overlay onClick={() => setMenuOpen(false)} />}
            {userInitials ? (
                <S.UserCircle onClick={() => setMenuOpen(!menuOpen)}>
                    <strong>{userInitials}</strong>
                    {menuOpen && (
                        <S.DropdownMenu>
                            <S.MenuItem onClick={() => router.push('/favoritos')}>
                                Favoritos
                            </S.MenuItem>
                            <S.MenuItem onClick={handleLogout}>Sair</S.MenuItem>
                        </S.DropdownMenu>
                    )}
                </S.UserCircle>
            ) : (
                <S.LoginButton onClick={() => router.push('/login')}>Entrar</S.LoginButton>
            )}
        </>
    )
}

export default UserMenu
