import React, { useContext } from 'react';
import { CartContext } from './CartContext.jsx'; 
import {Link} from 'react-router-dom'
import shoes from './shoes.jsx';
import Cards from './Cards.jsx';

function All() {
  const { cart, price, handleClick, handleIncrement, handleDecrement } = useContext(CartContext);

  return (
    <section className='main-area'>
      <div className="card-container">
        {shoes.map((shoe) => (
          <Cards key={shoe.id} shoe={shoe} handleClick={handleClick} />
        ))}
      </div>
      <div className="billing">
        <h2>Total price: {price}</h2>
        <h3>Total items: {cart.length}</h3>
        <div className="billing-items">
          {cart.map((data) => (
            <div key={data.id} className="b-items">
              <img src={data.image} width={'50px'} alt={data.name} />
              <div className="b-content">
                <h4>Name: {data.name}</h4>
                <h3>Quantity: {data.quantity}</h3>
                <button onClick={() => handleIncrement(data.id)}>+</button>
                <button onClick={() => handleDecrement(data.id)}>-</button>
                <h5>Price: {data.price * data.quantity}</h5>
              </div>
            </div>
          ))}
        </div>
        <Link to='/paymentpage' > <button>Proceed payment</button></Link>
      </div>
    </section>
  );
}

export default All;
