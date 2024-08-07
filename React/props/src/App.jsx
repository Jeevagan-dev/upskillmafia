import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Cards from './assets/components/Cards'
import shoes from './assets/components/shoes'

function App() {


  return (
    <section>
      <Cards items ={shoes} />
    </section>
  )
}

export default App
