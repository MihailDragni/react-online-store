import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contacts from './pages/Contacts'
import Cabinet from './pages/Cabinet'
import NotFound from './pages/NotFound'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contacts" element={<Contacts />} />
      <Route path="/cabinet" element={<Cabinet />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}

export default App
