import { useState } from 'react'
import { getCategoriesApi } from '../api/category'

export function useCategory() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [categories, setCategories] = useState(null)

    const getCategories = async () =>
}