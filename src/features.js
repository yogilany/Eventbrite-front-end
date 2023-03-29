import { createSlice } from '@reduxjs/toolkit'

export const appSlice = createSlice({
    name: 'app',
    initialState: {
        user: false
    },
    reducers: {
        userAuthorize: (state, action) => {
            state.user = action.payload
            console.log("hello from uiserauth")
        },
        testReducer: state => {
            console.log("hello from test")
        }
    }
})

export const { userAuthorize, testReducer } = appSlice.actions

export const selectUserState = (state) => state.app.user

export default appSlice.reducer


