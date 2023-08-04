import { URL_API } from '../utils/constants'

export async function getProductsApi() {
    try {
        const url = `${URL_API}/api/products/`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}