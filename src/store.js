import { configureStore } from '@reduxjs/toolkit'
import appReducer from './features'

export default configureStore({
    reducer: {
        app: appReducer
    }
})