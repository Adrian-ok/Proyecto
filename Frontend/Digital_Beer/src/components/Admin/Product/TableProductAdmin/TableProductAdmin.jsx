import { NUM_PAGINATION } from '../../../../utils/constants'
import { Pagination } from '../../../../components/Common'
import React, { useState } from 'react'
import { Table, Checkbox, Label } from 'flowbite-react'
import { map } from 'lodash'

export function TableProductAdmin(props) {
  const { products, update, deleteP } = props
  const [page, setPage] = useState(0)
  const [cont, setCont] = useState(1)
  const [filters, setFilters] = useState({ category: '', nameProduct: '', disable: false })
  let result = []

  const nextPage = () => {
    if (result.length > page + NUM_PAGINATION) {
      setPage(page + NUM_PAGINATION)
      setCont(cont + 1)
    }
  }

  const prevPage = () => {
    if (page > 0) {
      setPage(page - NUM_PAGINATION)
      setCont(cont - 1)
    }
  }

  const handleFilterChange = (filterName, value) => {
    setFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: value,
    }))
  }

  if (!filters.nameProduct & !filters.category & !filters.disable) {
    result = products
  }
  else {
    result = products
      .filter((item) => !filters.nameProduct || item.title.toLowerCase().includes(filters.nameProduct.toLocaleLowerCase()))
      .filter((item) => !filters.category || item.category_title.toLowerCase().includes(filters.category.toLocaleLowerCase()))
      .filter((item) => !filters.disable || filters.disable === !item.active)
  }

  // result = products
  //   .filter((item) => !filters.nameProduct || item.title.toLowerCase().includes(filters.nameProduct.toLocaleLowerCase()))

  return (
    <>
      <div className='flex flex-row gap-6 mb-4'>
        {/* <input value={filters.category} onChange={(e) => handleFilterChange('category', e.target.value)} type='text' placeholder='Category' /> */}
        <select
          defaultValue={''}
          className='rounded-lg'
          onChange={(e) => handleFilterChange('category', e.target.value)}
        >
          <option value={''}>All Categories</option>
          <option value={'Beers'}>Beers</option>
          <option value={'Burger'}>Burger</option>
          <option value={'Drinks'}>Drinks</option>
          <option value={'Pizza'}>Pizza</option>
        </select>
        <input
          value={filters.nameProduct}
          onChange={(e) => handleFilterChange('nameProduct', e.target.value)}
          type='text'
          className='rounded-lg'
          placeholder='Product Name'
        />
        <div className="flex items-center gap-2">
          <input
            type='checkbox'
            checked={filters.disable}
            onChange={(event) => {
              console.log('disable', event.target.checked) 
              handleFilterChange('disable', event.target.checked)
            }}
          />
          <Label htmlFor="remember">Only disable</Label>
        </div>
      </div>

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
          {map(result?.slice(page, page + NUM_PAGINATION), (item, index) => (
            <Table.Row key={index} className='bg-white text-center dark:border-gray-700 dark:bg-gray-800'>
              <Table.Cell className='flex justify-center'>
                <img src={item.image} className='w-10' />
              </Table.Cell>
              <Table.Cell>{item.title}</Table.Cell>
              <Table.Cell>{parseFloat(item.price).toLocaleString('es-AR', { style: 'currency', currency: 'ARS', minimumFractionDigits: 2 })}</Table.Cell>
              <Table.Cell>{item.category_title}</Table.Cell>
              <Table.Cell>{item.active ? '🟢' : '🔴'}</Table.Cell>
<<<<<<< HEAD
              <Actions product={item} updateProduct={update} />
=======
              <Actions product={item} updateProduct={update} deleteProduct={deleteP}/>
>>>>>>> d5f475b844a7a65b4c520bb27e6cf8da84bcc97f
            </Table.Row>
          ))}
        </Table.Body>
      </Table>

      <Pagination next={nextPage} prev={prevPage} page={cont} />
    </>
  )
}

function Actions(props) {
<<<<<<< HEAD
  const { product, updateProduct } = props
=======
  const {product, updateProduct, deleteProduct} = props
>>>>>>> d5f475b844a7a65b4c520bb27e6cf8da84bcc97f
  return (
    <Table.Cell className='text-lg'>
      <button className='mr-6' onClick={() => updateProduct(product)}>✏️</button>
      <button onClick={() => deleteProduct(product)}>🗑️</button>
    </Table.Cell>
  )
}