import { z } from 'zod'

export const defaultValues = {
    email: '',
    password: '',
    name: '',
    confirmPassword: '',
}

export const createUserSchema = z
    .object({
        name: z.string().min(1, 'Por favor, digite seu nome.'),
        email: z.string().email('Por favor, insira um endereço de e-mail válido.'),
        password: z
            .string()
            .min(
                6,
                'A senha deve ter pelo menos 6 caracteres. Por favor, escolha uma senha mais longa.',
            ),
        confirmPassword: z.string(),
    })
    .refine((data) => data.password === data.confirmPassword, {
        message: 'As senhas digitadas não coincidem. Por favor, verifique e tente novamente.',
        path: ['confirmPassword'],
    })
