import React from 'react'
import useFetch from './hooks/useFetch'

function App() {
  const {data , isLoading , error} = useFetch('https://jsonplaceholder.typicode.com/photos');
  
  if(isLoading){
    return <div className='load'>Loding...</div>
  }
  if(error){
    return <div className='error'>{error}</div>
  }

   return (
    <>
<h1>photos</h1>
<div className="container">
        
        {data && data.map((item) => (
           <div key={item.id}>
          <img src={item.thumbnailUrl} alt="" width={'200px'}/>
          <p>{item.title}</p>
         </div>
              ) )}
      </div>


    </>
    
   )




}

export default App