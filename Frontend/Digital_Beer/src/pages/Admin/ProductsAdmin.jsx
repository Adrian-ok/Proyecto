import React, { useEffect, useState } from 'react'
import { HeaderPage, TableProductAdmin, AddEditProductFrom, } from '../../components/Admin'
import { Loading, ModalBasic } from '../../components/Common'
import { useProduct } from '../../hooks'

export function ProductsAdmin() {
  const { getProducts, loading, products } = useProduct()
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState(null)
  const [component, setComponent] = useState(null)

  useEffect(() => getProducts, [])
  const showOrHide = () => setShow((prev) => !prev)

  const addProduct = () => {
    setTitle('Add Product')
    setComponent(<AddEditProductFrom />)
    showOrHide()
  }

  return (
    <div className='h-full'>
      <HeaderPage title='Products' btnTitle='Add Product' btnClick={addProduct}/>

      {loading ? (
        <Loading />
      ) : (
        <>
          <TableProductAdmin products={products} />
        </>
      )}

      <ModalBasic show={show} showOrHide={showOrHide} title={title} children={component} />

    </div>
  )
}
