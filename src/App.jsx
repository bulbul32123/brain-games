import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Numbers from './pages/Numbers'
import StoopsEffect from './pages/StoopEffect'
import Home from './pages/Home'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/numbers' element={<Numbers />} />
        <Route path='/stoopsEffect' element={<StoopsEffect />} />
      </Routes>
    </BrowserRouter>
  )
}
