import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router'
import MainLayout from './layouts/MainLayout'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<MainLayout />}>
          <Route path='category/:id' element={<p>main page</p>}></Route>
          
         

        </Route>

        <Route path="*" element={<p>Error:this path not define</p> } />

      </Routes>
      
    </BrowserRouter>
    
  </StrictMode>,
)
