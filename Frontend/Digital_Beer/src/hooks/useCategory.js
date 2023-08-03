import { useState } from 'react'
import { getCategoriesApi, addCategoryApi } from '../api/category'
import { useAuth } from '../hooks'

export function useCategory() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [categories, setCategories] = useState(null)
    const { auth } = useAuth()

    const getCategories = async () => {
        try {
            setLoading(true)
            const response = await getCategoriesApi()
            setCategories(response)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    const addCategory = async (data) => {
        try {
            setLoading(true)
            await addCategoryApi(data, auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    return {
        getCategories,
        addCategory,
        loading,
        error,
        categories
    }
}