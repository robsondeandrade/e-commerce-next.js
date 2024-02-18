export interface Credentials {
    email: string
    password: string
}

export interface NewCredentials {
    name: string
    email: string
    password: string
}

interface AxiosError {
    response?: {
        data: {
            message: string
        }
        status: number
    }
}
