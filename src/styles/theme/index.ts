import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['400', '500', '600', '700'],
    style: 'normal',
    subsets: ['latin'],
})
const theme = {
    colors: {
        primary: '#0F52BA',
        primaryLight: '#3178C6',
        primaryDark: '#0C3C8C',
        secondary: '#FFFFFF',
        tertiary: '#000',
        gray: {
            100: '#F2F2F2',
            200: '#E5E5E5',
            300: '#CCCCCC',
            400: '#B2B2B2',
            500: '#CCCCCC',
            600: '#999999',
            700: '#667667',
            800: '#333333',
            900: '#111111',
        },
    },
    fonts: {
        body: 'poppins',
    },
}

export default theme
