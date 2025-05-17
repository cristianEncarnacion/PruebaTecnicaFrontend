import { useEffect,useState } from 'react';
import { useParams } from 'react-router-dom';
import { getClientesById,updateClient} from '../Service/Clients';
import type { Client } from '../Interfaces/Client.d';
import { useNavigate } from 'react-router-dom';
import BackButton from '../components/BackButton';


const EditClient = () => {
    const [client, setClient] = useState<Client>();
    const navigate = useNavigate();
 
    const { id } = useParams();

    useEffect(() => {
        
        if(!id) return;
        const fetchClientData = async () => {
          const response= await getClientesById(id)
          console.log(response)
          setClient(response)
        };
        fetchClientData();
    }, [])

    const handleChange=(e:React.ChangeEvent<HTMLInputElement | HTMLSelectElement>)=>{
        const { name, value } = e.target;
        if(value==="") return
        setClient((prevClient) => ({
            ...prevClient,
            [name]: value,
        } as Client));
    }
    
    const handleSubmit=async (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        await updateClient(client as Client)
        navigate("/index")
    
    }

  return (
    <>
    <div className=' bg-gray-100 px-4'>

<div className='relative top-0 left-0 w-full h-16    flex items-center justify-between px-4'>

       <BackButton />
</div>
<form
  className="min-h-screen flex items-center justify-center"
  onSubmit={handleSubmit}
>
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">

   
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold text-[#012F6B] text-center flex-1">
        Editar Cliente - Dominicana de Seguros
      </h2>
      <div className="w-[90px]" />
    </div>

    <div className="mb-4">
      <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-1">
        Nombre Completo:
      </label>
      <input
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
        type="text"
        id="name"
        name="nombre_completo"
        placeholder="Ingrese el nombre completo"
        onChange={handleChange}
        value={client?.nombre_completo || ''}
      />
    </div>

    <div className="mb-4">
      <label htmlFor="cedula" className="block text-lg font-medium text-gray-700 mb-1">
        Cédula:
      </label>
      <input
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
        type="text"
        id="cedula"
        name="cedula"
        placeholder="Ingrese la cédula"
        onChange={handleChange}
        value={client?.cedula || ''}
      />
    </div>

    <div className="mb-4">
      <label htmlFor="fecha_nacimiento" className="block text-lg font-medium text-gray-700 mb-1">
        Fecha de Nacimiento:
      </label>
      <input
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
        type="date"
        id="fecha_nacimiento"
        name="fecha_nacimiento"
        onChange={handleChange}
        value={client?.fecha_nacimiento || ''}
      />
    </div>

    <div className="mb-4">
      <label htmlFor="sexo" className="block text-lg font-medium text-gray-700 mb-1">
        Sexo:
      </label>
      <select
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
        id="sexo"
        name="sexo"
        onChange={handleChange}
        value={client?.sexo || ''}
      >
        <option value="">Seleccione</option>
        <option value="Masculino">Masculino</option>
        <option value="Femenino">Femenino</option>
      </select>
    </div>

    <div className="mb-4">
      <label htmlFor="estado_civil" className="block text-lg font-medium text-gray-700 mb-1">
        Estado Civil:
      </label>
      <select
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
        id="estado_civil"
        name="estado_civil"
        onChange={handleChange}
        value={client?.estado_civil || ''}
      >
        <option value="">Seleccione</option>
        <option value="Soltero">Soltero</option>
        <option value="Casado">Casado</option>
        <option value="Divorciado">Divorciado</option>
        <option value="Viudo">Viudo</option>
      </select>
    </div>

    <div className="mb-6">
      <label htmlFor="nacionalidad" className="block text-lg font-medium text-gray-700 mb-1">
        Nacionalidad:
      </label>
      <input
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
        type="text"
        id="nacionalidad"
        name="nacionalidad"
        placeholder="Ingrese la nacionalidad"
        onChange={handleChange}
        value={client?.nacionalidad || ''}
      />
    </div>

    <button
      type="submit"
      className="w-full bg-[#0075C9] hover:bg-[#005fa5] text-white text-lg font-semibold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-[#012F6B] focus:ring-offset-2"
    >
      Guardar Cambios
    </button>
  </div>
</form>
</div>
  </>
  
  )
}

export default EditClient