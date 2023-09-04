import React from 'react'
import { Table } from 'flowbite-react'
import { map } from 'lodash'

export function TableTablesAdmin(props) {
    const { tables } = props

  return (
    <>
        <Table>
            <Table.Head className='text-center'>
                <Table.HeadCell>Numero</Table.HeadCell>
                <Table.HeadCell>Acciones</Table.HeadCell>
            </Table.Head>
            <Table.Body>
                {map(tables, (item, index) => (
                    <Table.Row key={index} className='bg-white text-center dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell>Mesa - {item.number}</Table.Cell>
                        <Actions tables={tables}/>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
    </>
  )
}

function Actions(props) {
    const { tables } = props
    return (
      <Table.Cell className='text-lg'>
        <button className='mr-6' onClick={() => console.log(tables)}>✏️</button>
        <button onClick={() => console.log(tables)}>🗑️</button>
      </Table.Cell>
    )
  }
