import { ListProducts } from '@/components/ListProducts'
import Head from 'next/head'

export default function Home() {
    return (
        <>
            <Head>
                <title>Home | RBS</title>
            </Head>
            <ListProducts />
        </>
    )
}
