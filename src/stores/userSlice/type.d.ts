export interface IUser {
    id: string
    name: string
    email: string
}

export interface IUserState {
    user: IUser | null
}

export interface RootStateUser {
    userData: user
}
