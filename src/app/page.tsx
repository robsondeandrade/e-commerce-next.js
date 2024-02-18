import Head from 'next/head'
import { ListProducts } from '@/components/ListProducts'

import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Home | RBS',
}

export default function Home() {
    return <ListProducts />
}
