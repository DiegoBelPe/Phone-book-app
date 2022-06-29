/* eslint-disable react/prop-types */
import React from 'react'
import { Formik, Form, Field } from 'formik'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup'
import Alert from './Alert'
import Spinner from './Spinner'

const Formulario = ({contact, loading}) => {
  const navigate = useNavigate()

  const nuevoContactoShema = Yup.object().shape({
    nombre: Yup.string()
               .min(3, 'El nombre es muy corto')
               .max(20, 'El nombre es muy largo')
               .required('El nombre es requerido'),
    telefono: Yup.number()
                 .positive('El teléfono no es valido')
                 .integer('El teléfono debe ser un número entero')
                 .typeError('El teléfono debe ser un número')
                 .required('El teléfono es requerido'),
    fechaNacimiento: Yup.date()
                        .required('La fecha de nacimiento es requerida'),
    direccion: Yup.string()
                  .required('La dirección es requerida'),
    email: Yup.string()
              .email('El email no es válido')
              .required('El email es requerido'),
   
  })
  const handleSubmit = async (valores) => {
    try {
        let respuesta 
        if(contact.id) {
            // Editando un registro
            const url = `http://localhost:8080/api/contacts/${contact.id}`
            respuesta = await fetch(url, {
                method: 'PUT',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                }
            })

        } else {
            // Nuevo Registro
            const url = 'http://localhost:8080/api/contacts'
            respuesta = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(valores),
                headers: {
                    'Content-Type': 'application/json'
                }
            })
        }

        await respuesta.json()
        navigate('/')
    } catch (error) {
        console.log(error)
    }
}
  return (
    loading ? <Spinner /> : (
      <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md 
      md:w-3/4 mx-auto">
        <h1 className='text-gray-600 font-bold text-xl uppercase text-center'>{contact?.nombre ? 'Editar Contacto' : 'Agregar Contacto'}</h1>
        <Formik
          initialValues={{
            nombre: contact?.nombre ?? '',
            telefono: contact?.telefono ?? '',
            fechaNacimiento: contact?.fechaNacimiento ?? '',
            direccion: contact?.direccion ?? '',
            email: contact?.email ?? '',
          }}
          enableReinitialize={true}
          onSubmit={async (values, {resetForm}) => {
            await handleSubmit(values)

            resetForm()
            
          }}
          validationSchema={nuevoContactoShema}
        
        >
          {({errors, touched}) => {
            console.log(errors)
            return (
          <Form>
            <div className='mb-4'>
              <label
                className="text-gray-800"
                htmlFor="nombre"
              >Nombre:</label>
              <Field 
                id="nombre"
                type="text"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Nombre de contacto"
                name="nombre"
              />
              {errors.nombre && touched.nombre ? (
                <Alert>{errors.nombre}</Alert> 
              ): null}
            </div>
            <div className='mb-4'>
              <label
                className="text-gray-800"
                htmlFor="telefono"
              >Telefono:</label>
              <Field 
                id="telefono"
                type="number"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Numero de contacto"
                name="telefono"
              />
              {errors.telefono && touched.telefono ? (
                <Alert>{errors.telefono}</Alert> 
              ): null}
            </div>
            <div className='mb-4'>
              <label
                className="text-gray-800"
                htmlFor="fechaNacimiento"
              >Fecha de Nacimiento:</label>
              <Field 
                id="fechaNacimiento"
                type="date"
                className="mt-2 w-full p-3 bg-gray-50"
                name="fechaNacimiento"
              />
              {errors.fechaNacimiento && touched.fechaNacimiento ? (
                <Alert>{errors.fechaNacimiento}</Alert> 
              ): null}
            </div>
            <div className='mb-4'>
              <label
                className="text-gray-800"
                htmlFor="direccion"
              >Direccion residencia:</label>
              <Field 
                id="direcccion"
                type="text"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Direccion de contacto"
                name="direccion"
              />
              {errors.direccion && touched.direccion ? (
                <Alert>{errors.direccion}</Alert> 
              ): null}
            </div>
            <div className='mb-4'>
              <label
                className="text-gray-800"
                htmlFor="email"
              >Correo electronico:</label>
              <Field 
                id="email"
                type="email"
                className="mt-2 w-full p-3 bg-gray-50"
                placeholder="Correo electronico"
                name="email"
              />
              {errors.email && touched.email ? (
                <Alert>{errors.email}</Alert> 
              ): null}
            </div>
            <input 
            type="submit" 
            value={contact?.nombre ? 'Editar Contacto' : 'Agregar Contacto'}
            className="mt-5 w-full p-3 bg-blue-800 text-white uppercase font-bold text-lg hover:bg-blue-900 rounded-md"
            />

          </Form>
          )}}
        </Formik>
      </div>
    )
  )
}
Formulario.defaultProps = {
  contact: {}
}

export default Formulario