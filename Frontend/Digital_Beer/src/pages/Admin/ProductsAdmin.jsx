import { HeaderPage, TableProductAdmin, AddEditProductFrom } from '../../components/Admin'
import { Loading, ModalBasic } from '../../components/Common'
import React, { useEffect, useState } from 'react'
import { useProduct } from '../../hooks'

export function ProductsAdmin() {
  const { getProducts, deleteProducts, loading, products } = useProduct()
  const [show, setShow] = useState(false)
  const [title, setTitle] = useState(null)
  const [refresh, setRefresh] = useState(false)
  const [component, setComponent] = useState(null)

  useEffect(() => getProducts, [refresh])
  const showOrHide = () => setShow((prev) => !prev)
  const onRefresh = () => setRefresh((prevState) => !prevState)

  const addProduct = () => {
    setTitle('Add Product')
    setComponent(<AddEditProductFrom close={showOrHide} refresh={onRefresh}/>)
    showOrHide()
  }

  const updateProduct = (data) => {
    setTitle('Edit Product')
    setComponent(<AddEditProductFrom close={showOrHide} refresh={onRefresh} product={data}/>)
    showOrHide()
  }

  const deleteProduct = (data) => {
    const option = window.confirm(`Delete ${data.title}?`)
    if(option){
      deleteProducts(data.id)
      onRefresh()
    }
  }

  return (
    <div className='h-full'>
      <HeaderPage title='Products' btnTitle='Add Product' btnClick={addProduct}/>

      {loading ? (
        <Loading />
      ) : (
        <>
          <TableProductAdmin products={products} update={updateProduct} deleteP={deleteProduct}/>
        </>
      )}

      <ModalBasic show={show} showOrHide={showOrHide} title={title} children={component} />

    </div>
  )
}
