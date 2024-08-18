import React from "react"
import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./components/Home"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Login from "./components/Login"
import Signup from "./components/Signup"
function App() {


  return (
  <BrowserRouter>
  <Header />
  <Routes>
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login />}></Route>
    <Route path="/signup" element={<Signup />}></Route>
  </Routes>
  <Footer />
  </BrowserRouter>
  )
}

export default App
