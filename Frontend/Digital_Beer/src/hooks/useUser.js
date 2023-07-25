import { useState } from 'react'
import { getMeApi, getUsersApi } from '../api/user'
import { useAuth } from '../hooks'

//SECCION  5 CAP 35
export function useUser() {
    
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const [users, setUsers] = useState(null)
    const { auth } = useAuth()

    const getMe = async (token) => {
        try {
            const response = await getMeApi(token)
            return response
        } catch (error) {
            throw error
        }
    }

    //SECCION 6 CAP 43
    const getUsers = async () => {
        try {
            setLoading(true)
            const response = await getUsersApi(auth.token)
            setLoading(false)
            setUsers(response)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    return {
        getMe,
        getUsers,
        loading,
        error,
        users
    }
}

