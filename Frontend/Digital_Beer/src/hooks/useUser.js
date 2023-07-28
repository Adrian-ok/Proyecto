import { useState } from 'react'
import { getMeApi, getUsersApi, addUserApi, updateUserApi } from '../api/user'
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

    //SECCION 6 CAP 50
    const addUser = async (data) => {
        try {
            setLoading(true)
            await addUserApi(data, auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    //SECCION 6 CAP 53
    const updateUser = async (id, data) => {
        try {
            setLoading(true)
            await updateUserApi(id, data, auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(error)
        }
    }

    return {
        getMe,
        getUsers,
        addUser,
        updateUser,
        loading,
        error,
        users
    }
}

