import React from 'react';
import '../index.css'


export default function Cards({shoe,handleClick}) {
    const {name , id , price , image} = shoe ;
  return (
    <div className="cards">
        <div className="image_box">
            <img src={image} alt="Image" />
        </div>
        <div className="content">
            <h2>{name}</h2>
            <h3>Rs - {price}</h3>
        </div>
        <div className="addtocart">
            <button onClick={()=>handleClick(shoe)}>add to cart</button>
        </div>
    </div>
  )
}
