import React from 'react'
import { Button, Checkbox, Label, TextInput, FileInput } from 'flowbite-react';
import { MdSubtitles } from 'react-icons/md'
import { useFormik } from 'formik'
import * as Yup from 'yup'

export function AddEditCategory() {
    return (
        <form className="space-y-4">
            <div className="max-w-md">
                <div className="mb-2 block">
                    <Label htmlFor="title" value="Title Category" />
                </div>
                <TextInput
                    icon={MdSubtitles}
                    id="email4"
                    placeholder=""
                    required
                    type="text"
                />
            </div>
            <div className="max-w-md" id="fileUpload">
                <div className="mb-2 block">
                    <Label htmlFor="file" value="Upload file" />
                </div>
                <Button color='success' className='w-full'>Select Image</Button>
            </div>
            <Button type="submit" className='w-full'>
                Add
            </Button>
        </form>
    )
}
