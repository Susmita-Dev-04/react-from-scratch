import React from 'react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Root from './Root.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'  
import ReactDOM from 'react-dom/client'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'


// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <Root />,
//     children: 
//     [
//       {
//       path: '',
//       element: <Home />
//       },
//       {
//       path: 'about',
//       element: <About />
//       },
//       {
//       path: 'contact',
//       element: <Contact />
//       }
//     ]
//   }
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>

  </React.StrictMode>,
)
