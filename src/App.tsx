import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './Pages/Login'
import Index from './Pages/Index'
import AddClient from './Pages/AddClient'
import EditClient from './Pages/EditClient'
import ViewClient from './Pages/ViewClient'
import { AuthProvider } from './Context/useContext'

function App() {
  return (
  <BrowserRouter>
  <AuthProvider>
 
<Routes>
<Route path="/" element={<Login/>} />
<Route path="/index" element={<Index/>} />
<Route path="/add-client" element={<AddClient/>} />
<Route path="/edit-client/:id" element={<EditClient/>} />
<Route path="/view-client/:id" element={<ViewClient/>} />


  </Routes>
  </AuthProvider>
  </BrowserRouter>
  )

}

export default App
