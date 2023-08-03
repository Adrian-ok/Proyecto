import React from 'react';
import {useFormik } from 'formik';
import { Button, Label, TextInput, FileInput } from 'flowbite-react';
import * as Yup from 'yup';

export function FormMio(props) {
  const {close} = props

  // Funciones para initialValues y validationSchema
  const initialValues = () => ({
    title: '',
    image: null,
  });

  const validation = () => {
    return Yup.object().shape({
      title: Yup.string().required('El título es requerido'),
      image: Yup.mixed().required('Seleccione una imagen'),
    });
  };

  const onSubmitHandler = (values, {resetForm}) => {
    // Aquí puedes manejar la lógica de envío de datos
    console.log(values);
    close()
    resetForm()
  };

  // Declarar useFormik fuera del return
  const formik = useFormik({
    initialValues: initialValues(),
    validateOnChange: false,
    validationSchema: validation(),
    onSubmit: onSubmitHandler,
  });

  const handleImageChange = (event) => {
    formik.setFieldValue('image', event.currentTarget.files[0]);
  };

  return (
    <form onSubmit={formik.handleSubmit}>
      <div>
        <Label htmlFor="title">Título:</Label>
        <TextInput 
          type="text" 
          id="title" 
          name="title" 
          helperText={<span className='text-red-600'>{formik.errors.title}</span>}
          value={formik.values.title} 
          onChange={formik.handleChange} 
        />
      </div>

      <div className='mb-4'>
        <Label htmlFor="image">Seleccionar una imagen:</Label>
        <FileInput
          type="file"
          id="image"
          name="image"
          accept="image/*" // Acepta solo archivos de tipo imagen
          helperText={<span className='text-red-600'>{formik.errors.image}</span>}
          onChange={handleImageChange}
        />
      </div>

      {/* Previsualización de la imagen */}
      {formik.values.image && (
        <div className='flex justify-center'>
          <img src={URL.createObjectURL(formik.values.image)} className='w-24 m-4' />
        </div>
      )}

      <Button type="submit" className='w-full'>Enviar</Button>
    </form>
  );
};