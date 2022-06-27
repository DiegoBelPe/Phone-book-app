import { useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { getContact } from '../services/contact'

const VerContact = () => {
  const { id } = useParams()
  const [contact, setContact] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contact = await getContact(id)
        setContact(contact)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])
  return (
    <div>
      <h1 className="font-black text-4xl text-blue-900">Ver Contacto: {contact.nombre}</h1>
      <p className="mt-3">Informacion Contacto</p>
      <p className='text-3xl text-gray-600 '>
        <span className='font-bold text-gray-700 uppercase'>Nombre:</span> {contact.nombre}
      </p>
      <p className='text-2xl text-gray-600 mt-4 '>
        <span className='font-bold text-gray-700 uppercase'>Telefono:</span> {contact.telefono}
      </p>
      <p className='text-2xl text-gray-600 mt-4 '>
        <span className='font-bold text-gray-700 uppercase'>Edad:</span> {contact.fechaNacimiento}
      </p>
      <p className='text-2xl text-gray-600 mt-4 '>
        <span className='font-bold text-gray-700 uppercase'>Direccion:</span> {contact.direccion}
      </p>
      <p className='text-2xl text-gray-600 mt-4 '>
        <span className='font-bold text-gray-700 uppercase'>Email:</span> {contact.email}
      </p>
    </div>
  )
}

export default VerContact