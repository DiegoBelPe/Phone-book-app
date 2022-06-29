import React from 'react'
import Form from '../components/Form'

const NewContact = () => {
  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Nuevo Contacto</h1>
      <p className="mt-3">Diligencia los siguientes campos para registrar un contacto</p>
      <Form/>

    </>
  )
}

export default NewContact