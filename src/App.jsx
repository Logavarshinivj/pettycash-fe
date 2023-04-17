import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import SideBar from './components/sidebar'
import { BrowserRouter,Routes,Route, Outlet, Navigate } from 'react-router-dom'
import Analytics from './pages/Analytics'
import About from './pages/Dashboard'
import Home from './pages/Home'
import Transaction from './pages/Transaction'
import Add from './pages/Add'
import Edit from './pages/Edit'
import Register from './pages/Register'
import Login from './pages/Login'
import { useNavigate } from 'react-router-dom'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Button from '@mui/material/Button';


function App() {
  const auth=localStorage.getItem('user')
  const navigate=useNavigate()
  const logout=()=>{
    localStorage.clear()
    navigate("/login-petty",{replace: true})
  }
  
  return(
    <div className='App'>
      <div className="AppGlass">
      {auth?
     <AppBar sx={{background:"linear-gradient(purple,pink)"}} position="relative" className='AppBar'>
        <Toolbar className='test'>
        <Button onClick={()=>navigate("/",{replace: true})} color="inherit">Home</Button>
        
        
        

         <Button onClick={logout}  color="inherit">Logout</Button>
        </Toolbar>
        </AppBar>:
       <AppBar sx={{background:"linear-gradient(purple,pink)"}} position="static" className='AppBar'>
       <Toolbar>
       <Button onClick={()=>navigate("/register-petty",{replace: true})} color="inherit">Sign Up</Button>
        <Button onClick={()=>navigate("/login-petty",{replace: true})} color="inherit">LogIN</Button>
        
        
       </Toolbar>
        </AppBar>
}
    
  <SideBar>
    <Routes>
    <Route element={< Private title='Private' /> } >
    <Route path="/" element={< Home title='Home' /> } />
    <Route path="/analytics" element={< Analytics title='Analytics' /> } />
    <Route path="/about" element={< About title='About' /> } />
    <Route path="/transaction" element={<Transaction title='Transaction' /> } />
    <Route path="/add-trans" element={<Add title='Add' /> } />
    <Route path="/update-trans/:id" element={<Edit title='Edit' /> } />
  
  </Route>

    <Route path="/register-petty" element={< Register title='Register' /> } />
    <Route path="/login-petty" element={< Login title='Login' /> } />


    </Routes>
    </SideBar>
   
    </div>
    </div>
  )
}

function Private(){
  
  const auth=localStorage.getItem('user')
   return auth? <Outlet/>:<Navigate to="register-petty"/>

}

export default App
