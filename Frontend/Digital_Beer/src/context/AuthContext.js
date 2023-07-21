import { useState, useEffect, createContext } from 'react'

export const AuthContext = createContext({
    auth: undefined,
    login: () => null,
    logout: () => null
})

export function AuthProvider({children}) {
    const valueContext = {
        auth: null,
        login: () => console.log('accediendo'),
        logout: () => console.log('cerrando')
    }

    return(
        <AuthContext.Provider value={valueContext}>{children}</AuthContext.Provider>
    )
}