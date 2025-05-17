import React, { useState } from 'react'
import 'animate.css';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../Context/useContext';

const Login = () => {
    const { setUser } = useAuth();
    const [signIn, setSignIn] = useState<string>("Iniciar Sesion");
    const [disabled, setDisabled] = useState<boolean>(false);
    const navigate = useNavigate();
    function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());
       if(data.username && data.password) {
        localStorage.setItem("user", data.username as string);
        setUser(data.username as string);
        setSignIn("Iniciando Sesion...");
        setDisabled(true);
            setTimeout(()=>{
             
                navigate('/index');
                setSignIn("Iniciar Sesion");
                setDisabled(false);
            },3000)
        }
    }
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f4f4f4] px-4">
    <div className="flex items-center space-x-2 mb-4">
      <div className="text-[#003366] font-bold text-2xl tracking-wide">
        Dominicana de Seguros
      </div>
    </div>
  
    <h1 className="text-3xl font-semibold text-[#003366] mb-2">
      Bienvenido
    </h1>
    <p className="text-gray-700 mb-6 text-center">
      Esta es una <span className="font-medium">Prueba Técnica</span> de acceso al sistema
    </p>
  
    <form
      onSubmit={handleSubmit}
      className="bg-white p-8 rounded-xl shadow-md w-full max-w-md animate__animated animate__fadeInDown"
    >
      <div className="mb-6">
        <label
          htmlFor="email"
          className="block text-[#003366] text-sm font-semibold mb-2"
        >
          Usuario
        </label>
        <input
          id="username"
          name="username"
          type="email"
          required
          placeholder="Ingresa tu usuario"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
        />
      </div>
  
      <div className="mb-6">
        <label
          htmlFor="password"
          className="block text-[#003366] text-sm font-semibold mb-2"
        >
          Contraseña
        </label>
        <input
          id="password"
          name="password"
          type="password"
          required
          placeholder="Ingresa tu contraseña"
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#003366]"
        />
      </div>
  
      <button
        type="submit"
        className="w-full bg-[#003366] hover:bg-[#002244] text-white font-bold py-2 px-4 rounded-lg transition duration-200"
      disabled={disabled}
      >
        {signIn}
      </button>
    </form>
  </div>
  
  

  )
}

export default Login