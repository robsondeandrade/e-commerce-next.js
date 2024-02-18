import { CreateUser } from '@/components/Form/CreateUser'
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Registrar-se | RBS',
}

const CreateUserPage = () => <CreateUser />

export default CreateUserPage
