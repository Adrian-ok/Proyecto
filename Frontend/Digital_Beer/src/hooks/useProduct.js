import { useState } from 'react'
import { getProductsApi } from '../api/product'

export function useProduct() {
    const [loading, setLoading] = useState(false)
    const [products, setProducts] = useState(null)

    const getProducts = async () => {
        try {
            setLoading(true)
            const result = await getProductsApi()
            setProducts(result)
            setLoading(false)
        } catch (error) {
            setLoading(false)
        }
    }

    return {
        getProducts,
        loading,
        products
    }

}