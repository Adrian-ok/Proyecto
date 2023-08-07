import React, { useEffect, useState } from 'react'
import { Button, Label, TextInput, Dropdown, Checkbox } from 'flowbite-react';
import { MdSubtitles, MdAttachMoney } from 'react-icons/md'
import { useCategory } from '../../../../hooks'
import { map } from 'lodash'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export function AddEditProductFrom(props) {

  const { categories, getCategories } = useCategory()
  const [categoryFormat, setCategoryFormat] = useState([])

  useEffect(() => getCategories, [])
  useEffect(() => {
    setCategoryFormat(formatDropdownData(categories))
  }, [categories])

  return (
    <form className="space-y-4" >
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="title" value="Title Product" />
        </div>
        <TextInput
          icon={MdSubtitles}
          id="title"
          placeholder=""
          type="text"
        // value={formik.values.title}
        // onChange={formik.handleChange}
        // helperText={<span className='text-red-600'>{formik.errors.title}</span>}
        />
      </div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="title" value="Price Product" />
        </div>
        <TextInput
          icon={MdAttachMoney}
          id="price"
          placeholder=""
          type="number"
          step=".01"
        // value={formik.values.title}
        // onChange={formik.handleChange}
        // helperText={<span className='text-red-600'>{formik.errors.title}</span>}
        />
      </div>
      <div className="max-w-md">
        <div className="mb-2 block">
          <Label htmlFor="title" value="Price Product" />
        </div>
        <div className='flex items-center gap-12'>
          {/* <Dropdown label="Small dropdown" placement="bottom" color={'light'} >
            {categoryFormat.map(item => {
              return (
                <Dropdown.Item key={item.value}>{item.text}</Dropdown.Item>
              )
            })}
          </Dropdown> */}
          <select className='rounded-md dark:bg-gray-700 dark:text-white border-gray-600 w-36'>
            {categoryFormat.map(item => {
              return (
                <option key={item.value}>{item.text}</option>
              )
            })}
          </select>

          <div className="flex items-center gap-2">
            <Checkbox
            // checked={formik.values.is_staff}
            // onChange={(event) => formik.setFieldValue('is_staff', event.target.checked)}
            />
            <Label htmlFor="remember">Is Active</Label>
          </div>
        </div>
      </div>
      <Button type="button" color={'success'} className='w-full' size='xs'>
        Select Image
      </Button>

      <Button type="submit" className='w-full'>
        Add
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
