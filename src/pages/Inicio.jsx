import { useState, useEffect } from 'react'
import { getContacts } from '../services/contact'

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

  return (
    <>
      <h1 className="font-black text-4xl text-blue-900">Contactos</h1>
      <p className="mt-3">Administra tus contactos</p>
    </>
  )
}

export default Inicio