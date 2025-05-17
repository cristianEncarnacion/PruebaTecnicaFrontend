import { useEffect,useState } from "react"
import { useParams } from "react-router-dom"
import { getClientesById } from "../Service/Clients"
import type { Client } from "../Interfaces/Client.d"
import BackButton from "../components/BackButton"
import Header from '../views/Header'



const viewClient = () => {
    const [viewClient, setViewClient] = useState<Client>()
    const { id } = useParams()

    useEffect(() => {
   if (!id) return
    const fetchClientData = async () => {
        try {
       
          const response= await getClientesById(id)
                 setViewClient(response)
        } catch (error) {
          console.error(error)
        }
        }

        fetchClientData()
    }, [])
    
  return (
    <>
    <Header />
    
    <div className="min-h-screen bg-[#f0f4f8] flex items-center justify-center px-4">
    <div className="max-w-2xl w-full p-8 bg-white shadow-xl rounded-xl border border-[#0075C9]/30 relative">
      <div className="absolute top-6 left-6">
        <BackButton />
      </div>
  
      <h1 className="text-3xl font-extrabold text-[#012F6B] mb-6 border-b border-[#0075C9]/50 pb-3 text-center">
        Detalle del Cliente
      </h1>
  
      <div className="space-y-5">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[#0075C9] flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#0075C9]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.121 17.804A9 9 0 1118.878 6.196 9 9 0 015.12 17.804z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" d="M12 11v2m0 4h.01" />
            </svg>
            Nombre:
          </span>
          <span className="text-gray-800 font-medium">{viewClient?.nombre_completo || ""}</span>
        </div>
  
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[#0075C9] flex items-center gap-2">
            <svg
              className="w-5 h-5 text-[#0075C9]"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
            Cédula:
          </span>
          <span className="text-gray-800 font-medium">{viewClient?.cedula || ""}</span>
        </div>
  
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[#0075C9]">Sexo:</span>
          <span className="text-gray-800 font-medium">{viewClient?.sexo || ""}</span>
        </div>
  
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[#0075C9]">Estado Civil:</span>
          <span className="text-gray-800 font-medium">{viewClient?.estado_civil || ""}</span>
        </div>
  
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[#0075C9]">Nacionalidad:</span>
          <span className="text-gray-800 font-medium">{viewClient?.nacionalidad || ""}</span>
        </div>
  
        <div className="flex justify-between items-center">
          <span className="font-semibold text-[#0075C9]">Fecha de Nacimiento:</span>
          <span className="text-gray-800 font-medium">{viewClient?.fecha_nacimiento || ""}</span>
        </div>
      </div>
    </div>
  </div>
  
  </>
  
  ) 
}

export default viewClient