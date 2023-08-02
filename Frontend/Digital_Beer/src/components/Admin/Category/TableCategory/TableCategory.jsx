import React from 'react'
import { Table } from 'flowbite-react';
import { map } from 'lodash'

export function TableCategory(props) {
  
    const { categories } = props
  
    return (
        <Table>
            <Table.Head className='text-center'>
                <Table.HeadCell>Image</Table.HeadCell>
                <Table.HeadCell>Category</Table.HeadCell>
                <Table.HeadCell>Actions</Table.HeadCell>
            </Table.Head>
            <Table.Body>
                {map(categories, (item, index) => (
                    <Table.Row key={index} className='bg-white text-center dark:border-gray-700 dark:bg-gray-800'>
                        <Table.Cell className='flex justify-center'>
                            <img src={item.image} className='w-14'/>
                        </Table.Cell>
                        <Table.Cell>{item.title}</Table.Cell>
                        <Actions category={item}/>
                    </Table.Row>
                ))}
            </Table.Body>
        </Table>
  )
}

function Actions(props) {
    const { category } = props

    return (
        <Table.Cell className='text-lg'>
        <button className='mr-6' onClick={() => console.log('update')}>✏️</button>
        <button onClick={() => console.log('delete')}>🗑️</button>
      </Table.Cell>
    )
}