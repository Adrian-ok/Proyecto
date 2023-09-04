import { useAuth } from '../hooks/useAuth'
import { getTablesApi, addTableApi } from '../api/table'
import { useState } from 'react'

export function useTable() {
    const [tables, setTables] = useState(null)
    const [loading, setLoading] = useState(false)
    const { auth } = useAuth()

    const getTables = async () => {
        try {
            setLoading(true)
            const result = await getTablesApi(auth.token)
            setLoading(false)
            setTables(result)
        } catch (error) {
            setLoading(false)
        }
    }

    const addTable = async (data) => {
        try {
            setLoading(true)
            await addTableApi(data, auth.token)
            setLoading(false)
        } catch (error) {
            setLoading(false)
            setError(true)
        }
    }

    return {
        getTables,
        addTable,
        loading,
        tables
    }
}