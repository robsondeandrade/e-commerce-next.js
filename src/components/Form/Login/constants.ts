import { z } from 'zod'

export const defaultValues = {
    email: '',
    password: '',
}

export const loginSchema = z.object({
    email: z.string().email('Por favor, insira um endereço de e-mail válido.'),
    password: z
        .string()
        .min(6, 'A senha deve conter pelo menos 6 caracteres. Por favor, verifique sua senha.'),
})
