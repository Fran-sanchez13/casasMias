import {BrowserRouter, Routes, Route} from "react-router-dom"
import { useState } from 'react'
import './App.css'
import NavBar from "./components/navbar/NavBar"
import Home from "./pages/Home"
import Productos from "./pages/Procutos"
import Contactos from "./pages/Contactos"
function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/productos" element={<Productos/>}/>
        <Route path="/contactos" element={<Contactos/>}/>
      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
