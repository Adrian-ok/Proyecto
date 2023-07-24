import { useState, useEffect, createContext } from 'react'
import { setToken, getToken, deleteToken } from '../api/token'
import { useUser } from '../hooks/useUser'

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null
})

export function AuthProvider({children}) {
    //SECCION  5 CAP 35
    const { getMe } = useUser()
    const [auth, setAuth] = useState(undefined)

    //SECCION 5 CAP 36
    useEffect(() => {
        (async () => {
            const token = getToken()

            if(token){
                const me = await getMe(token)
                setAuth({token, me})
            }
            else{
                setAuth(null)
            }
        })()
    }, [])

    //SECCION  5 CAP 35
    const login = async (token) => {
        setToken(token)
        const me = await getMe(token)
        setAuth({token, me})
    }

    const logout = () => {
        if(auth){
            deleteToken()
            setAuth(null)
        }
    }

    const valueContext = {
        auth,
        login,
        logout
    }

    if(auth === undefined) return null

    return(
        <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
    )
}