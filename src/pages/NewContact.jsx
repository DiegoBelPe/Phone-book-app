import React from 'react'
import Formulario from '../components/Formulario'

const NewContact = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Contacto</h1>
      <p className="mt-3">Diligencia los siguientes campos para registrar un contacto</p>
      <Formulario />

    </>
  )
}

export default NewContact