import { useState } from 'react'
import { addProductsApi, getProductsApi } from '../api/product'
import { useAuth } from '../hooks'

export function useProduct() {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState(null)
    const { auth } = useAuth()

    const getProducts = async () => {
        try {
            setLoading(true)
            const result = await getProductsApi()
            setLoading(false)
            setProducts(result)
        } catch (error) {
            setLoading(false)
        }
    }

    const addProducts = async (data) => {
        try {
            setLoading(false)
            await addProductsApi(data, auth.token)
            setLoading(true)
        } catch (error) {
            setLoading(false)
        }
    }

    return {
        getProducts,
        addProducts,
        loading,
        products
    }
}