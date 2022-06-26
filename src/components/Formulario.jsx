import React from 'react'
import { Formik, Form, Field} from 'formik'

const Formulario = () => {
  return (
    <div className="bg-white mt-10 px-5 py-10 rounded-md shadow-md 
    md:w-3/4 mx-auto">
      <h1 className='text-gray-600 font-bold text-xl uppercase text-center'> Agregar Contacto</h1>
      <Formik>
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
            />
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
            />
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
            />
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
            />
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
            />
          </div>
          <input 
          type="submit" 
          value="Agregar Contacto"
          className="mt-5 w-full p-3 bg-blue-800 text-white uppercase font-bold text-lg hover:bg-blue-900 rounded-md"
          />

        </Form>

      </Formik>
    </div>
  )
}

export default Formulario