import React, { useEffect, useState } from 'react'
import { TableImg } from '../../../Icons'
import { getOrdersByTableApi } from '../../../../api/orders'
import { ORDER_STATE } from '../../../../utils/constants'
import { size } from 'lodash'
import { Badge } from 'flowbite-react';

export function TableAdmin(props) {
  const { table } = props
  const [orders, setOrders] = useState([])
  const [tableBusy, setTableBusy] = useState([])

  useEffect(() => {
    (async () => {
      const response = await getOrdersByTableApi(table.id, ORDER_STATE.PENDING)
      const response2 = await getOrdersByTableApi(table.id, ORDER_STATE.DELIVERED)
      setOrders(response)
      if (size(response2) > 0) setTableBusy(response2)
      else setTableBusy(false)
    })()
  }, [])

  
  return (
    <div className='flex flex-col items-center hover:bg-gray-600 rounded-lg'>
      {size(orders) > 0 ? (
        <Badge color='warning' className='absolute top-50'>
          {size(orders)}
        </Badge>
      ) : (
        null
      )}
      
      <TableImg
        fill={size(orders) > 0 ? '#e67e22' : (tableBusy ? '#2e86c1 ' : 'black')}
      />
      <p>Mesa - {table.number}</p>
    </div>
  )
}
