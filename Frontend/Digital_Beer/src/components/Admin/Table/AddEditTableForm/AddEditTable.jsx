import { TextInput, Button, Label } from 'flowbite-react'
import { MdNumbers } from 'react-icons/md'
import { useFormik } from 'formik'
import { useTable } from '../../../../hooks'
import * as Yup from 'yup'
import React from 'react'

export function AddEditTable(props) {
    const { addTable } = useTable()
    const { close, refresh } = props

    const formik = useFormik({
        initialValues: initialValues(),
        validationSchema: Yup.object(validationSchema()),
        validateOnChange: false,
        onSubmit: async (val) => {
            try {
                await addTable(val)
                refresh()   
                close()             
            } catch (error) {
                throw error
            }
        }
    })

    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="title" value="Number of Table" />
                </div>
                <TextInput
                    icon={MdNumbers}
                    id="number"
                    placeholder=""
                    type="number"
                    value={formik.values.number}
                    onChange={formik.handleChange}
                    helperText={<span className='text-red-600'>{formik.errors.number}</span>}
                />
            </div>

            <Button type="submit" className='w-full'>
                {'Add'}
            </Button>
        </form>
    )
}

function initialValues() {
    return {
        number: ''
    }
}

function validationSchema() {
    return {
        number: Yup.number().required(true)
    }
}