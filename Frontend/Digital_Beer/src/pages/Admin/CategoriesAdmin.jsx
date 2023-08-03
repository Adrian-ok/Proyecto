import React, { useEffect, useState } from 'react'
import { HeaderPage, TableCategory, AddEditCategory, FormMio } from '../../components/Admin'
import { useCategory } from '../../hooks'
import { Loading, ModalBasic } from '../../components/Common'


export function CategoriesAdmin() {
  
  const { getCategories, loading, categories } = useCategory()
  useEffect(() => getCategories, [])

  const [show, setShow] = useState(false)
  const [component, setComponent] = useState(null)
  const [title, setTitle] = useState(null)

  const showOrHide = () => setShow((prevState) => (!prevState))

  const AddCategory = () => {
    setTitle('Add Category')
    // setComponent(<FormMio close={showOrHide}/>)
    setComponent(<AddEditCategory/>)
    showOrHide()
  }
  
  return (
    <div className='h-full'>

      <HeaderPage title='Categories' btnTitle='New Category' btnClick={AddCategory}/>

      {loading ? (
        <Loading/>
      ) : (
        <TableCategory categories={categories}/>
      )}

      <ModalBasic show={show} showOrHide={showOrHide} title={title} children={component} />

    </div>
  )
}
