import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ContactUs from './component/Contact.jsx'
import AboutUs from './component/AboutUs.jsx'
import {  createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layour from './component/Layour.jsx'

import Navbar from './component/Navbar.jsx'


const route =createBrowserRouter([{
  path:'/',
  element:<Layour/>,
  children:[{
    path:'',
    element:<App/>},
    {
      path:'about',
      element:<AboutUs/>
    },{

    
    path:'contact',
    element:<ContactUs/>
  },{
    path:"home",
    element:<App/>
  }]
}])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <ContactUs/> */}
    {/* <AboutUs/> */}
  {/* <Login/> */}
    <RouterProvider router={route}/>
  </StrictMode>
)
