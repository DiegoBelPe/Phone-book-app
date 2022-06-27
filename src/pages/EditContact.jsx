import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Formulario from '../components/Formulario'
import { getContact } from '../services/contact'

const EditContact = () => {
  const { id } = useParams()
  const [contact, setContact] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const contact = await getContact(id)
        setContact(contact)
      } catch (error) {
        console.log(error)
      }
      setTimeout(() => {
        setLoading(!loading)
      }, 500)
      
    }
    fetchData()
  }, [])
  return (
    <div>
        <h1 className="font-black text-4xl text-blue-900">Editar Contacto</h1>
        <p className="mt-3">Formulario para editar datos de un contacto</p>
        {contact?.nombre ? (
          <Formulario 
          contact={contact}
          loading={loading}
        
        />
        ): <p>Contacto con ID no existe</p>}
        
    </div>
  )
}

export default EditContact