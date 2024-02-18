import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    const accessToken = request.cookies.get('accessToken')
    const url = request.nextUrl.clone()
    const pathname = url.pathname

    if (pathname.startsWith('/login') && accessToken) {
        url.pathname = '/'
        return NextResponse.redirect(url)
    }

    if (pathname.startsWith('/favoritos') && !accessToken) {
        url.pathname = '/login'
        return NextResponse.redirect(url)
    }

    return NextResponse.next()
}

export const config = {
    matcher: ['/login', '/favoritos/:path*'],
}
