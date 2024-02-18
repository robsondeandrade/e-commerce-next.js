import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { IUser, IUserState } from './type'
import { getUserFromCookie } from '@/utils/cookieUtils'

const initialState: IUserState = {
    user: getUserFromCookie(),
}

const userSlice = createSlice({
    name: 'userData',
    initialState,
    reducers: {
        setUser: (state, action: PayloadAction<IUser>) => {
            state.user = action.payload
        },

        clearUser: (state) => {
            state.user = null
        },
    },
})

export const { setUser, clearUser } = userSlice.actions

export default userSlice.reducer
