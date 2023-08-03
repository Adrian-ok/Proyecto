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

export async function updateCategoryApi(id, data, token) {
    try {
        const formData = new FormData()
        formData.append('title', data.title)
        if(data.image) formData.append('image', data.image)

        const url = `${URL_API}/api/categories/${id}/`
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'PATCH',
            body: formData
        }
        const response = await fetch(url, params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function deleteCategoryApi(id, token) {
    try {
        const url = `${URL_API}/api/categories/${id}/`
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
            },
            method: 'DELETE',
        }
        const response = await fetch(url, params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}