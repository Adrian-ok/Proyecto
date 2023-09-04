import React, { useEffect, useState } from 'react'
import { HeaderPage, TableTablesAdmin, AddEditTable } from '../../components/Admin'
import { useTable } from '../../hooks'
import { Loading, ModalBasic } from '../../components/Common'

export function TablesAdmin() {
    const { loading, tables, getTables } = useTable()
    const [component, setComponent] = useState(null)
    const [refresh, setRefresh] = useState(false)
    const [title, setTitle] = useState(null)
    const [show, setShow] = useState(false)

    const onRefresh = () => setRefresh((prevState) => !prevState)
    const showOrHide = () => setShow((prev) => !prev)
    useEffect(() => getTables, [refresh])
    useEffect(() => getTables, [])

    const addTable = () => {
        setTitle('Add new Table')
        setComponent(<AddEditTable close={showOrHide} refresh={onRefresh} />)
        showOrHide()
    }

    return (
        <>
            <HeaderPage title='Tables' btnTitle='Add Table' btnClick={addTable} />
            {loading ? (
                <Loading />
            ) : (
                <TableTablesAdmin tables={tables} />
            )}
            <ModalBasic show={show} showOrHide={showOrHide} title={title} children={component} />
        </>
    )
}
