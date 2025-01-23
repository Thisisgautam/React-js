import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import User from './components/User.jsx'
import Navbar from './components/Navbar.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element: <><App/></>,
  },
  {
    path:"/home",
    element: <><Navbar/><Home/></>,
  },
  {
    path:"/about",
    element: <><Navbar/><About/></>,
  },
  {
    path:"/user/:username",
    element: <><Navbar/><User/></>,
  },
])

createRoot(document.getElementById('root')).render(
  // <StrictMode>
    <RouterProvider router={router}/>
  // </StrictMode>,
)
