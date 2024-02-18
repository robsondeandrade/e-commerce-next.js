export const getUserInitials = (name: string | undefined) => {
    if (!name) return null

    const names = name.trim().toUpperCase().split(/\s+/)
    const firstInitial = names[0][0]
    const secondInitial = names.length > 1 ? names[1][0] : ''
    return `${firstInitial}${secondInitial}`
}
