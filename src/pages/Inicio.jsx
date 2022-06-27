import { useState, useEffect } from 'react'
import { getContacts, deleteContact } from '../services/contact'
import Contacto from '../components/Contacto'

const Inicio = () => {
  // eslint-disable-next-line no-unused-vars
  const [contacts, setContacts] = useState([])
  const [search, setSearch] = useState('')

  const searchContacts = (e) => {
    setSearch(e.target.value)
  }

  //metodo de filtrado de contactos
  let results = []
  if(!search){
    results = contacts
  }else{
    results = contacts.filter(contact => {
      return contact.nombre.toLowerCase().includes(search.toLowerCase()),
      contact.email.toLowerCase().includes(search.toLowerCase())
    }
    )
  }

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

      <input 
      type="text"
      className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-500"
      placeholder="Buscar contacto"
      value={search}
      onChange={searchContacts}
      ></input>

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
          {results.map(contact => (
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