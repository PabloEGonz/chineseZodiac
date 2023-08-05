import './App.css'
import Home from './pages/home'
import Info from './pages/info';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import {createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />
    },
    {
      path: "/zodiac/:zodiacId",
      element: <Info />
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
