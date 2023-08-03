import { URL_API } from '../utils/constants'

export async function getCategoriesApi() {
    try {
        const url = `${URL_API}/api/categories/`
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function addCategoryApi(data, token) {
    try {
        const formData = new FormData()
        formData.append('image', data.image)
        formData.append('title', data.title)

        const url = `${URL_API}/api/categories/`
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