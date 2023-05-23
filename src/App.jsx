import React from 'react'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Router from './components/Router'
import Home from './pages/Home'
import Individuals from './pages/Individuals'
import Team from './pages/Team'
import Enterprise from './pages/Enterprise'

function App() {
  return (
    <BrowserRouter>
      <Router/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/individuals' element={<Individuals/>}/>
        <Route path='/teams'  element={<Team/>}/>
        <Route path='/enterprise' element={<Enterprise/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App