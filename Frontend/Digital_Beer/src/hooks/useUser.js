import {getMeApi} from '../api/user'

//SECCION  5 CAP 35
export function useUser() {
    const getMe = async (token) => {
        try {
            const response = await getMeApi(token)
            return response
        } catch (error) {
            throw error
        }
    }

    return {
        getMe
    }
}