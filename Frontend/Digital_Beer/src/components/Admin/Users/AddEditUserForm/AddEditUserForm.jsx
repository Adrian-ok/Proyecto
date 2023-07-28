import React, {useEffect} from 'react'
import { } from 'flowbite-react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { useFormik } from 'formik'
import { useUser } from '../../../../hooks'
import * as Yup from 'yup'

export function AddEditUserForm(props) {

  const { onHide, onRefresh, user } = props
  const { addUser, updateUser } = useUser()

  const formik = useFormik({
    initialValues: initialValues(user),
    validateOnChange: false,
    validationSchema: Yup.object(user ? updateSchema() : newSchema()),
    onSubmit: async (formValue) => {
      try {
        if(user){
          await updateUser(user.id, formValue)
        }
        else{
          await addUser(formValue)
        }
        onRefresh()
        onHide()        
      } catch (error) {
        console.log(error)
      }
    }
  })

  useEffect(() => {
    formik.resetForm()
    formik.setValues(initialValues(user));
  }, [user]);

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
        <Button type='submit'>{user ? 'Update' : 'Create'}</Button>
      </div>
    </form>
  )
}

function initialValues(user) {
  return {
    username: user?.username || '',
    email: user?.email || '',
    password: '',
    is_active: user?.is_active ? true : false,
    is_staff: user?.is_staff ? true : false
  }
}

function newSchema() {
  return {
    username: Yup.string().required('Campo requerido'),
    email: Yup.string().email(true).required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
    is_active: Yup.bool().required(true),
    is_staff: Yup.bool().required(true)
  }
}

function updateSchema() {
  return {
    username: Yup.string().required('Campo requerido'),
    email: Yup.string().email(true).required('Campo requerido'),
    password: Yup.string(),
    is_active: Yup.bool().required(true),
    is_staff: Yup.bool().required(true)
  }
}