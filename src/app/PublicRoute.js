import React from 'react'
import { Navigate } from 'react-router-dom'
import { selectUserToken } from '../features/authSlice'
import { useSelector } from 'react-redux'
function PublicRoute({ children }) {
    const userToken = useSelector(selectUserToken)

    if (userToken === null) {
        return <Navigate to="/login" replace />
    }
    return children
}
export default PublicRoute
