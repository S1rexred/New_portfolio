import { useState } from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Main from './pages/Main'
import All_Projects from './pages/All_Projects'
import Page_detail from './pages/Page_detail'
function App() {

  return(
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Main/>}></Route>
      <Route path='/all' element={<All_Projects/>}></Route>
      <Route path='/detail/:id' element={<Page_detail/>}></Route>
    </Routes>
    </BrowserRouter>
    
  )
  
}

export default App
