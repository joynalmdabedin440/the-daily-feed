import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='category/:id' element={<Main />}></Route>
          
          <Route path="" element={<Navigate to="/category/01"/> } />
          
         

        </Route>

        <Route path="*" element={<p>Error:this path not define</p> } />

      </Routes>
      
    </BrowserRouter>
    
  </StrictMode>,
)
