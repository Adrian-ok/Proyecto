import React from 'react'
import { Button, Checkbox, Label, TextInput } from 'flowbite-react';
import { loginApi } from '../../../api/user'
import { toast } from 'react-toastify'
import { useAuth } from '../../../hooks'
import { useFormik } from 'formik'
import * as Yup from 'yup'

//SECCION 5 CAP 30
function initialValues() {
    return {
        email: '',
        password: ''
    }
}

const validationSchema = Yup.object().shape({
    email: Yup.string().required('Campo requerido'),
    password: Yup.string().required('Campo requerido').min(5, 'Minimo 5 caracteres'),
})

export function LoginForm() {

    const { login } = useAuth()

    const formik = useFormik({
        initialValues: initialValues(),
        validateOnChange: false,
        validationSchema: validationSchema,
        onSubmit: async (formValue) => {
            try {
                const response = await loginApi(formValue)
                const { access } = response
                login(access) //SECCION  5 CAP 35
            } catch (error) {
                toast.error(error.message)
            }
        }
    })

    return (
        <div className='w-96 flex flex-col items-center bg-zinc-100 dark:bg-gray-600 p-4 rounded-md'>
            <h3 className="text-2xl font-bold mb-4">Acceder</h3>
            <form 
                className="flex flex-col gap-4 w-full max-w-sm px-3" 
                onSubmit={formik.handleSubmit}
            >
                <div>
                    <Label htmlFor="email1" value="Your email"/>
                    <TextInput
                        id="email"
                        placeholder="name@flowbite.com"
                        required
                        type="email"
                        onChange={formik.handleChange}
                        value={formik.values.email}
                        helperText={<span className='text-red-600'>{formik.errors.email}</span>}
                    />
                </div>
                <div>
                    <Label htmlFor="password1" value="Your password"/>
                    <TextInput
                        id="password"
                        required
                        type="password"
                        onChange={formik.handleChange}
                        value={formik.values.password}
                        helperText={<span className='text-red-600'>{formik.errors.password}</span>}
                    />
                </div>
                {/* <div className="flex items-center gap-2">
                    <Checkbox id="remember" />
                    <Label htmlFor="remember"> Remember me </Label>
                </div> */}
                <Button type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}
