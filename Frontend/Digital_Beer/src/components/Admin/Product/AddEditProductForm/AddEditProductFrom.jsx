import React, { useEffect, useState, useCallback } from 'react'
import { Button, Label, TextInput, Checkbox } from 'flowbite-react';
import { MdSubtitles, MdAttachMoney } from 'react-icons/md'
import { useCategory, useProduct } from '../../../../hooks'
import { useDropzone } from 'react-dropzone'
import { useFormik } from 'formik'
import { map } from 'lodash'
import * as Yup from 'yup'

export function AddEditProductFrom(props) {

  const { close, refresh, product } = props
  const { addProducts, updateProducts } = useProduct()
  const { categories, getCategories } = useCategory()
  const [previewImage, setPreviewImage] = useState(null)
  const [categoryFormat, setCategoryFormat] = useState([])
  
  useEffect(() => getCategories, []) //OBTIENE LA LISTA DE CATEGORIAS
  //POR CADA CAMBIO EN CATEGORIES FORMATEA LA LISTA Y LA SETEA  
  //PARA UTILIZARLA EN EL DROPDOWN
  useEffect(() => {
    setCategoryFormat(formatDropdownData(categories))
  }, [categories])

  useEffect(() => {
    setPreviewImage(product?.image || null)
    formik.setValues(initialValues(product));
  }, [product])
  

  //FORMIK SE ENCARGA DEL CONTROL Y ENVIO DEL FORMULARIO
  const formik = useFormik({
    initialValues: initialValues(product),
    validationSchema: Yup.object(product ? validationUpdate() : validation()),
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values)
      try {
        if(product){
          await updateProducts(product.id, values)
        }
        else{
          await addProducts(values) 
        }
        refresh()
        close()
      } catch (error) {
        throw error
      }
    }
  })

  //CON DROP SE SELECCIONA LA IMAGEN
  const onDrop = useCallback(async (acceptedFile) => {
    console.log(acceptedFile)
    const file = acceptedFile[0]
    await formik.setFieldValue('image', file)
    setPreviewImage(URL.createObjectURL(file))
  }, [])

  //CONFIG DE DROP
  const { getRootProps, getInputProps } = useDropzone({
    accept: {'image/*': ['.jpeg', '.jpg', '.png']},
    noKeyboard: true,
    multiple: false,
    onDrop
  })

  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      <div className="max-w-md">
        <Label htmlFor="title" value="Title Product" />
        <TextInput
          icon={MdSubtitles}
          id="title"
          placeholder=""
          type="text"
          value={formik.values.title}
          onChange={formik.handleChange}
          helperText={<span className='text-red-600'>{formik.errors.title}</span>}
        />
      </div>

      <div className="max-w-md">
        <Label htmlFor="title" value="Price Product" />
        <TextInput
          icon={MdAttachMoney}
          id="price"
          placeholder=""
          type="number"
          step=".01"
          value={formik.values.price}
          onChange={formik.handleChange}
          helperText={<span className='text-red-600'>{formik.errors.price}</span>}
        />
      </div>

      <div className="max-w-md">
        <Label htmlFor="title" value="Category" />
        <div className='flex items-center gap-12'>
          <select 
            id='category'
            className='rounded-md dark:bg-gray-700 dark:text-white border-gray-600 w-36'
            value={formik.values.category}
            onChange={formik.handleChange}
          >
            {categoryFormat.map(item => {
              return (
                <option key={item.value} value={item.value} >{item.text}</option>
              )
            })}
          </select>

          <div className="flex items-center gap-2">
            <Checkbox
              checked={formik.values.active}
              onChange={(event) => formik.setFieldValue('active', event.target.checked)}
            />
            <Label htmlFor="remember">Is Active</Label>
          </div>
        </div>
      </div>

      <Button
        color={formik.errors.image ? 'failure' : 'success'}
        className='w-full'
        size='xs'
        {...getRootProps()}
      >
        {previewImage ? 'Update image' : 'Select image'}
      </Button>
      <input {...getInputProps()} />

      <img src={previewImage} className='w-24'/>

      <Button type="submit" className='w-full'>
        {product ? 'Update' : 'Add'}
      </Button>
    </form >
  )
}

function formatDropdownData(data) {
  return map(data, (item) => ({
    text: item.title,
    value: item.id
  }))
}

function initialValues(product) {
  return {
    title: product?.title || '',
    price: product?.price || '',
    category: product?.category || 1,
    active: product?.active ? true : false
  }
}

function validation() {
  return {
    title: Yup.string().required('Complete title'),
    price: Yup.number().required('Complete price'),
    category: Yup.number().required('Select category'),
    image: Yup.string().required(true),
    active: Yup.bool().required(true)
  }
}

function validationUpdate() {
  return {
    title: Yup.string().required('Complete title'),
    price: Yup.number().required('Complete price'),
    category: Yup.number().required('Select category'),
    image: Yup.string(),
    active: Yup.bool().required(true)
  }
}