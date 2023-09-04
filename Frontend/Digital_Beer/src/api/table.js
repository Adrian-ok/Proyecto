import { URL_API } from '../utils/constants'

export async function getTablesApi(token) {
    try {
        const url = `${URL_API}/api/tables/`
        const params = {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }

        const response = await fetch(url, params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}

export async function addTableApi(data, token) {
    try {
        const url = `${URL_API}/api/tables/`
        const params = {
            headers: {
                Authorization: `Bearer ${token}`,
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(data)
        }
        const response = await fetch(url, params)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}