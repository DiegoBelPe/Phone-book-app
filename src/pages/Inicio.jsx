import { useState, useEffect } from 'react'
import { getContacts, deleteContact } from '../services/contact'
import Contacto from '../components/Contacto'

const Inicio = () => {
  // eslint-disable-next-line no-unused-vars
  const [contacts, setContacts] = useState([])

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contacts = await getContacts()
        setContacts(contacts)
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    const confirmar = confirm('¿Estás seguro de eliminar este contacto?')
    if(confirmar) {
      try {
        await deleteContact(id)
        setContacts(contacts.filter(contact => contact.id !== id))
      } catch (error) {
        console.log(error)
        
      }
    }
  }

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Contactos</h1>
      <p className="mt-3">Administra tus contactos</p>

      <table className='w-full mt-5 table-auto shadow bg-white'>
        <thead className='bg-blue-800 text-white'>
          <tr>
            <th className='p-2'>Nombre</th>
            <th className='p-2'>Datos</th>
            <th className='p-2'>Edad</th>
            <th className='p-2'>Direccion</th>
            <th className='p-2'>Acciones</th>
          </tr>

        </thead>
        <tbody>
          {contacts.map(contact => (
            <Contacto
               key={contact.id} 
               contacto={contact}
               handleDelete={handleDelete}
            />
          ))}

        </tbody>

      </table>
    </>
  )
}

export default Inicio