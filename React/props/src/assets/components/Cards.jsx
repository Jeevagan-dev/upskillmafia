import React from 'react'


function Cards({items}) {
  return (
    <div className='card-container'>
       {items.map((prop) => {
        return(
        <div className='cards'>
         <h1>{prop.id}</h1>
         <img src={prop.image} alt=""  width={'100px'}/>
         <h2>{prop.name}</h2>
         </div>)
       })}

  
        </div>
  
  )
}

export default Cards