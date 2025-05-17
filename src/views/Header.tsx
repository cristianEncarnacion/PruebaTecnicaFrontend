import { useNavigate } from 'react-router-dom'


const Header = () => {
    const navigate = useNavigate();
    const user = localStorage.getItem('user') || '{}';
    
    function logout() {
        localStorage.removeItem('user');
    }

  return (
    <header className='flex justify-between items-center p-[10px] bg-white text-black'>
      <div className='font-bold'>Dominicana de Seguros</div>
      <div className='flex items-center gap-[10px]'>
        <span>{user ? user : ""}</span>
        <button 
          onClick={() => {
            logout();
            navigate('/ ');
          }} 
          style={{ padding: '5px 10px', cursor: 'pointer' }}
        >
          Cerrar sesión
        </button>
      </div>
    </header>
  )
}

export default Header