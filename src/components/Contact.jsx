/* eslint-disable react/prop-types */
import { useNavigate } from 'react-router-dom'
import PropTypes  from 'prop-types'

const Contacto = ({contacto, handleDelete}) => {
  const navigate = useNavigate()
  const { nombre, telefono, fechaNacimiento, direccion, email, id } = contacto
  
  const calcularEdad = (fechaNacimiento) => {
    const hoy = new Date()
    const cumpleanos = new Date(fechaNacimiento)
    const edad = hoy.getFullYear() - cumpleanos.getFullYear()
    return edad
  }
  return (
    <tr className='border-b hover:bg-gray-50'>
      <td className='p-3 '>{nombre}</td>
      <td className='p-3 '>
        <p><span className='text-gray-800 uppercase font-bold'>Email:</span>{email}</p>
        <p><span className='text-gray-800 uppercase font-bold'>Tel:</span>{telefono}</p>
      </td>
      <td className='p-3 '>{calcularEdad(fechaNacimiento)} años</td>
      <td className='p-3 '>{direccion}</td>
      <td className='p-3 '>
      <button
          type='button'
          className='bg-yellow-500 hover:bg-yellow-600 block w-full text-white p-2 uppercase font-bold text-xs rounded-md'
          onClick={() => navigate(`/${id}`)}
        >
          Ver
        </button>
        <button
          type='button'
          className='bg-blue-600 hover:bg-blue-700 block w-full text-white p-2 uppercase font-bold text-xs rounded-md mt-3'
          onClick={() => navigate(`/contactos/editar/${id}`)}
        >
          Editar
        </button>
        <button
          type='button'
          className='bg-red-600 hover:bg-red-700 block w-full text-white p-2 uppercase font-bold text-xs rounded-md mt-3'
          onClick={() => handleDelete(id)}
        >
          Eliminar
        </button>
      </td>
      
    </tr>
  )
}

Contacto.propTypes = {
  contacto: PropTypes.object.isRequired
}

export default Contacto