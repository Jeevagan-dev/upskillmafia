import React from 'react'
import Header from './components/Header'
import Home from './components/Home'
import Footer from './components/Footer'
import About from './components/About'
import Contact from './components/ContactUs'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import User from './components/User'

function App() {

  return (
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home />} ></Route>
      <Route path='/about' element={<About />} ></Route>
      <Route path='/contact' element={<Contact />}></Route>
      <Route path='/user' element={<User />}>
      <Route path=':username' element={<User />}></Route>
      </Route>
      <Route path='*'  element={<NotFound />}></Route>
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}

export default App
