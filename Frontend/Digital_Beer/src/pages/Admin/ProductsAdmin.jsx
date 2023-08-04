import React, { useEffect } from 'react'
import { HeaderPage } from '../../components/Admin'
import { Loading } from '../../components/Common'
import { useProduct } from '../../hooks'

export function ProductsAdmin() {
  const { getProducts, loading, products } = useProduct()
  
  useEffect(() => getProducts, [])

  console.log(products)
  
  return (
    <div className='h-full'>
      <HeaderPage title='Products' btnTitle='Add Product'/>

      {loading ? (
        <Loading/>
      ) : (
        <></>
      )}

    </div>
  )
}
