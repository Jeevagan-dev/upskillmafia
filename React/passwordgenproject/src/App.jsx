import { useState ,useCallback,useEffect } from 'react'
import './App.css'
import React from 'react'

export default function App() {
  const [length , setLength] = useState(8);
  const [numberAllowed , setNumberAllowed] = useState(false);
  const [charAllowed , setCharAllowed] = useState(false);
  const [password , setPassword] = useState('');
  
  const generatePassword = useCallback(() => {
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';

    if(numberAllowed) str += '01234567890'
    if(charAllowed)   str += '!@#$%^&*()'
 
    for(let i=0 ; i<length ; i++){
       const char = Math.floor(Math.random() * str.length + 1)
       pass += str.charAt(char);

    }

    setPassword(pass)

  },[length,numberAllowed,charAllowed])

  useEffect(()=>{
     generatePassword()
  },[length,charAllowed,numberAllowed])



  return (
    <div className='top-container'>
      <h1>Password generator</h1>
      <div className="container">
        <input type="text" placeholder='password' readOnly value={password} />
        <button onClick={((e) => {
          navigator.clipboard.writeText(password);
          alert('copied :)')
          
        })}>copy</button>
      </div>
      <div className="items">
        <input type="range" id="" name='length' min={6} max={100} value={length} onChange={((e) => { setLength(e.target.value)})}  />
        <label htmlFor="length"> length: {length}</label>
      </div>
      <div className="checkboxs">
        <input type="checkbox"  onChange={()=>{
          setCharAllowed((prev) => !prev) 
        }}/> <label> charAllowed</label>

        <input type="checkbox"  onChange={()=>{
          setNumberAllowed((prev) => !prev)
        }}/> <label > numberAllowed</label>



      
      </div>
    </div>
  )
}


