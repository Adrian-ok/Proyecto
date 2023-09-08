import { URL_API } from '../utils/constants'

export async function getOrdersByTableApi(id_table, state='', ordering='') {
    try {
        const tableFilter = `table=${id_table}`
        const stateFilter = `state=${state}`
        const closeFilter = `close=False`

        const url = `${URL_API}/api/orders/?${tableFilter}&${stateFilter}&${closeFilter}&${ordering}` 
        const response = await fetch(url)
        const result = await response.json()
        return result
    } catch (error) {
        throw error
    }
}