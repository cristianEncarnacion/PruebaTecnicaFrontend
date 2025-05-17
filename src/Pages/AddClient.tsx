import BackButton from '../components/BackButton'
import { addClient } from '../Service/Clients'
import Header from '../views/Header'

const AddClient = () => {

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
      
        event.preventDefault()
        try {
             
        const formData = new FormData(event.currentTarget)
        const client = {
        nombre_completo: formData.get('name') as string,
        cedula: formData.get('cedula') as string,
        fecha_nacimiento: formData.get('fecha_nacimiento') as string,
        sexo: formData.get('sexo') as string,
        estado_civil: formData.get('estado_civil') as string,
        nacionalidad: formData.get('nacionalidad') as string,
        }
        await addClient(client)
 
        } catch (error) {
        console.error('Error al agregar cliente:', error)
        }
    }

  return (
    <>
    <Header />
   <form
  onSubmit={handleSubmit}
  className="min-h-screen  flex items-center justify-center bg-gray-100 px-4"
>
  <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-2xl">

   
    <div className="flex items-center justify-between mb-6">
      <BackButton />
      <h2 className="text-2xl font-bold text-[#012F6B] text-center flex-1">
        Agregar Cliente - Dominicana de Seguros
      </h2>
      <div className="w-[90px]" />
    </div>

    <div className="mb-4">
      <label htmlFor="name" className="block text-lg font-medium text-gray-700 mb-1">
        Nombre Completo:
      </label>
      <input
        type="text"
        id="name"
        name="name"
        placeholder="Ingrese el nombre completo"
        required
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="cedula" className="block text-lg font-medium text-gray-700 mb-1">
        Cédula:
      </label>
      <input
        type="text"
        id="cedula"
        name="cedula"
        placeholder="Ingrese la cédula"
        required
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="fecha_nacimiento" className="block text-lg font-medium text-gray-700 mb-1">
        Fecha de Nacimiento:
      </label>
      <input
        type="date"
        id="fecha_nacimiento"
        name="fecha_nacimiento"
        required
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
      />
    </div>

    <div className="mb-4">
      <label htmlFor="sexo" className="block text-lg font-medium text-gray-700 mb-1">
        Sexo:
      </label>
      <select
        id="sexo"
        name="sexo"
        required
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
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
        id="estado_civil"
        name="estado_civil"
        required
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
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
        type="text"
        id="nacionalidad"
        name="nacionalidad"
        placeholder="Ingrese la nacionalidad"
        required
        className="w-full h-12 px-4 text-base rounded-md border border-gray-300 shadow-sm focus:border-[#0075C9] focus:ring-[#0075C9] focus:outline-none"
      />
    </div>

    <button
      type="submit"
      className="w-full bg-[#0075C9] hover:bg-[#005fa5] text-white text-lg font-semibold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-[#012F6B] focus:ring-offset-2"
    >
      Agregar Cliente
    </button>
  </div>
</form>
</>

  )
}

export default AddClient