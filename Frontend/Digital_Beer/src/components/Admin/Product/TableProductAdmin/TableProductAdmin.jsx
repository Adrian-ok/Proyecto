import React, { useState } from 'react'
import { Table } from 'flowbite-react';
import { Pagination } from '../../../../components/Common'
import { map } from 'lodash'

export function TableProductAdmin(props) {
  const { products } = props
  const [page, setPage] = useState(0)
  const [cont, setCont] = useState(1)

  const nextPage = () => {
    if(products.length > page + 6){
      setPage(page + 6)
      setCont(cont + 1)
    }
  }

  const prevPage = () => {
    if(page > 0){
      setPage(page - 6)
      setCont(cont - 1)
    }
  }

  return (
    <>
      <Table>
        <Table.Head className='text-center'>
          <Table.HeadCell>Image</Table.HeadCell>
          <Table.HeadCell>Title</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Category</Table.HeadCell>
          <Table.HeadCell>Active</Table.HeadCell>
          <Table.HeadCell>Actions</Table.HeadCell>
        </Table.Head>
        <Table.Body>
          {map(products?.slice(page, page + 6), (item, index) => (
            <Table.Row key={index} className='bg-white text-center dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell className='flex justify-center'>
                <img src={item.image} className='w-10' />
              </Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>$ {item.price}</Table.Cell>
              <Table.Cell>{item.category_title}</Table.Cell>
              <Table.Cell>{item.active ? '🟢' : '🔴'}</Table.Cell>
              <Actions />
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Pagination next={nextPage} prev={prevPage} page={cont}/>
    </>
  )
}

function Actions(props) {
  return (
    <Table.Cell className='text-lg'>
      <button className='mr-6' onClick={() => console.log('update')}>✏️</button>
      <button onClick={() => console.log('delete')}>🗑️</button>
    </Table.Cell>
  )
}