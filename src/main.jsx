import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router'
import { router } from './routers/MainRouter'
import ContactProvider from './context/ContactProvider'
import { ToastContainer } from 'react-toastify'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ContactProvider>
      < RouterProvider router={router} />
      <ToastContainer position="top-center"/>
    </ContactProvider>

  </StrictMode>,
)
