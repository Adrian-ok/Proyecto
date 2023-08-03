import React, { useCallback, useState, useEffect } from 'react'
import { Button, Label, TextInput } from 'flowbite-react';
import { MdSubtitles } from 'react-icons/md'
import { useDropzone } from 'react-dropzone'
import { toast } from 'react-toastify'
import { useCategory } from '../../../../hooks'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export function AddEditCategory(props) {
    
    const { close, refresh, category } = props
    const {addCategory, updateCategory} = useCategory()
    const [previewImage, setPreviewImage] = useState(null)

    useEffect(() => {
        // formik.resetForm()
        setPreviewImage(category?.image || null)
        formik.setValues(initialValues(category));
      }, [category]);

    const formik = useFormik({
        initialValues: initialValues(category),
        validationSchema: Yup.object(category ? updateSchema() : newSchema()),
        validateOnChange: false,
        onSubmit: async (value) => {
            try {
                // if(category) console.log('update', category.id)
                if(category){
                    await updateCategory(category.id, value)
                    toast.success('Update!')
                } 
                else{
                    await addCategory(value)
                    toast.success('Add!')
                } 
                    
                refresh()
                close()
            } catch (error) {
                toast.error(error.message)
            }
        }
    })
    
    //SECCION 7 CAP 62
    const onDrop = useCallback( async (acceptedFile) => {
        console.log(acceptedFile)
        const file = acceptedFile[0]
        await formik.setFieldValue('image', file)
        setPreviewImage(URL.createObjectURL(file))
    },[])
    
    const {getRootProps, getInputProps} = useDropzone({
        accept: {
            'image/*': ['.jpeg', '.jpg', '.png']
        },
        noKeyboard: true,
        multiple: false,
        onDrop
    })

    return (
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="title" value="Title Category" />
                </div>
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
            <div className="max-w-md" id="fileUpload">
                <div className="mb-2 block">
                    <Label htmlFor="file" value="Upload file" />
                </div>
                <Button 
                    color={formik.errors.image ? 'failure' : 'success'}
                    className='w-full'
                    {...getRootProps()}
                >
                    {previewImage ? 'Update image' : 'Select image'}
                </Button>
                <input {...getInputProps()} />
            </div>

            <img src={previewImage} className='w-24'/>

            <Button type="submit" className='w-full'>
                {category ? 'Update' : 'Add'}
            </Button>
        </form>
    )
}

function initialValues(data) {
    return{
        title: data?.title || '',
        image: ''
    }
}

function newSchema() {
    return{
        title: Yup.string().required('Complete este campo'),
        image: Yup.string().required(true)
    }
}

function updateSchema() {
    return{
        title: Yup.string().required('Complete este campo'),
        image: Yup.string()
    }
}