import { URL_API } from '../utils/constants'

export async function loginApi(formData) {
    try {
        const url = `${URL_API}/api/auth/login/`
        const params ={
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        }

        const response = await fetch(url, params)

        if (response.status !== 200) {
            throw new Error('¡Acceso denegado! Verifique los datos ingresados.')
        }

        const result = await response.json()
        return result
        
    } catch (error) {
        throw error
    }
}