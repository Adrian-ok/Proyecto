import React, { useEffect, useState } from 'react'
import { HeaderPage, TableCategory, AddEditCategory, FormMio } from '../../components/Admin'
import { useCategory } from '../../hooks'
import { toast } from 'react-toastify'
import { Loading, ModalBasic } from '../../components/Common'


export function CategoriesAdmin() {

  const { getCategories, loading, categories, deleteCategory } = useCategory()
  const [show, setShow] = useState(false)
  const [component, setComponent] = useState(null)
  const [title, setTitle] = useState(null)
  const [refresh, setRefresh] = useState(false)

  useEffect(() => getCategories, [refresh])
  const showOrHide = () => setShow((prevState) => (!prevState))
  const onRefresh = () => setRefresh((prevState) => !prevState)

  const AddCategory = () => {
    setTitle('Add Category')
    // setComponent(<FormMio close={showOrHide} refresh={onRefresh}/>)
    setComponent(<AddEditCategory close={showOrHide} refresh={onRefresh} />)
    showOrHide()
  }

  const UpdateCategory = (data) => {
    setTitle('Update Category')
    setComponent(<AddEditCategory close={showOrHide} refresh={onRefresh} category={data} />)
    showOrHide()
  }

  const DeleteCategory = (data) => {
    const result = window.confirm(`Delete category: ${data.title}?`)
    if (result) {
      deleteCategory(data.id)
      toast.success('Delete!')
      onRefresh()
    }
  }

  return (
    <div className='h-full'>

      <HeaderPage title='Categories' btnTitle='New Category' btnClick={AddCategory} />

      {loading ? (
        <Loading />
      ) : (
        <TableCategory categories={categories} update={UpdateCategory} deleteC={DeleteCategory} />
      )}

      <ModalBasic show={show} showOrHide={showOrHide} title={title} children={component} />

    </div>
  )
}
