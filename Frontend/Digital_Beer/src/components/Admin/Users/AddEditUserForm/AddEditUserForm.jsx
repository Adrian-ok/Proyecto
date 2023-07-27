import React from 'react'
import { } from 'flowbite-react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useFormik } from 'formik'
import { useUser } from '../../../../hooks'
import * as Yup from 'yup'

export function AddEditUserForm(props) {

  const { onHide, onRefresh } = props
  const { addUser } = useUser()

  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: newSchema,
    onSubmit: async (formValue) => {
      try {
        await addUser(formValue)
        onRefresh()
        onHide()        
      } catch (error) {
        console.log(error)
      }
    }
  })


  return (
    <form className="space-y-4" onSubmit={formik.handleSubmit}>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="text" value="Your username" />
        </div>
        <TextInput
          id="username"
          type='text'
          value={formik.values.username}
          onChange={formik.handleChange}
          helperText={<span className='text-red-600'>{formik.errors.username}</span>}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="email" value="Your email" />
        </div>
        <TextInput
          id="email"
          type='email'
          value={formik.values.email}
          onChange={formik.handleChange}
          helperText={<span className='text-red-600'>{formik.errors.email}</span>}
        />
      </div>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="password" value="Your password" />
        </div>
        <TextInput
          id="password"
          type="password"
          value={formik.values.password}
          onChange={formik.handleChange}
          helperText={<span className='text-red-600'>{formik.errors.password}</span>}
        />
      </div>
      <div className="flex justify-around">
        <div className="flex items-center gap-2">
          <Checkbox
            checked={formik.values.is_active}
            onChange={(event) => formik.setFieldValue('is_active', event.target.checked)}
          />
          <Label htmlFor="remember">Is Active</Label>
        </div>
        <div className="flex items-center gap-2">
          <Checkbox
            checked={formik.values.is_staff}
            onChange={(event) => formik.setFieldValue('is_staff', event.target.checked)}
          />
          <Label htmlFor="remember">Is Staff</Label>
        </div>
      </div>
      <div className="w-full flex justify-center">
        <Button type='submit'>Create User</Button>
      </div>
    </form>
  )
}

function initialValues() {
  return {
    username: '',
    email: '',
    password: '',
    is_active: true,
    is_staff: false
  }
}

const newSchema = Yup.object().shape({
  username: Yup.string().required('Campo requerido'),
  email: Yup.string().email(true).required('Campo requerido'),
  password: Yup.string().required('Campo requerido'),
  is_active: Yup.bool().required(true),
  is_staff: Yup.bool().required(true)
})