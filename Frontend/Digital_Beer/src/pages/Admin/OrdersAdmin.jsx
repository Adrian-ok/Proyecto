import React, { useEffect } from 'react'
import { HeaderPage, TablesListAdmin } from '../../components/Admin'
import { Loading } from '../../components/Common'
import { useTable } from '../../hooks'

export function OrdersAdmin() {
  const { loading, tables, getTables } = useTable()  

  useEffect(() => getTables, [])

  return (
    <>
      <HeaderPage title="Digital Beer orders"/>

      {loading ? (
        <Loading/>
      ) : (
        <>
          <TablesListAdmin tables={tables}/>
        </>
      )}
    </>
  )
}
