import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, Navigate, Route, Routes } from 'react-router'
import MainLayout from './layouts/MainLayout'
import Main from './pages/Main'
import AuthLayout from './layouts/AuthLayout'
import Login from './components/Login'
import Register from './components/Register'
import AuthProvider from './auth/AuthProvider'
import NewsDetails from './pages/NewsDetails'
import PrivateRoute from './routes/PrivateRoute'
import BookMarksCard from './components/layoutComponents/BookMarksCard'
import About from './components/About'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<MainLayout />}>
            <Route path='category/:id' element={<Main />}>


            </Route>

            <Route path="" element={<Navigate to="/category/01" />} />



          </Route>

          <Route path='news/:id' element={<PrivateRoute><NewsDetails /></PrivateRoute>} >

          </Route>

          <Route path='/bookmarks' element={<BookMarksCard />} />
          
          
          <Route path="/about" element={<About />} />



          <Route path='/auth' element={<AuthLayout />}>
            <Route path='login' element={<Login />}></Route>

            <Route path='register' element={<Register />} />

          </Route>

          <Route path="*" element={<p>Error:this path not define</p>} />

        </Routes>

      </BrowserRouter>
    </AuthProvider>

  </StrictMode>,
)
