import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'
import AuthLayout from './layouts/AuthLayout'
import Login from './components/Login'
import Register from './components/Register'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='category/:id' element={<Main />}></Route>
          
          <Route path="" element={<Navigate to="/category/01"/> } />
          
         

        </Route>

        <Route path='/auth' element={<AuthLayout />}>
          <Route path='login' element={<Login />}></Route>
          
          <Route path='register' element={<Register />} />

        </Route>

        <Route path="*" element={<p>Error:this path not define</p> } />

      </Routes>
      
    </BrowserRouter>
    
  </StrictMode>,
)
