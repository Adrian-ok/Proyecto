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

export async function addProductsApi(data, token) {
    try {
        const formData = new FormData()
        formData.append('image', data.image)
        formData.append('title', data.title)
        formData.append('price', data.price)
        formData.append('active', data.active)
        formData.append('category', data.category)

        const url = `${URL_API}/api/products/`
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'POST',
            body: formData
        }
        const response = await fetch(url, params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}