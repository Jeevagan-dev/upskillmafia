import React, { useContext } from 'react'
import { CartContext } from './CartContext'
import {Link} from 'react-router-dom'


function PaymentPage() {
    const {price , cart } = useContext(CartContext)
  return (
    <section className="payment">
        <div className="paymentoption">
        <input type="radio" name='payment'/> Cash on delivery  
        <input type="radio" name='payment'/> Creditcard

           <form action="">
             Enter credit card number: <br />
             <input type="number"  /><br />
             Enter creditcard expire date: <br />
             <input type="date" /> <br />
             Enter cvv: <br />
             <input type="number"/> <br />
             <input type="submit" value="Proceed" />
           </form>
        </div>
        <div className="billing">
        <h2>Total price: {price}</h2>
        <h3>Total items: {cart.length}</h3>
        <div className="billing-items">
          {cart.map((data) => (
            <div key={data.id} className="b-items">
              <img src={data.image} width={'50px'} alt={data.name} />
              <div className="b-content">
                <h4>Name : {data.name}</h4>
                <h3>quantity : {data.quantity}</h3>
                <h5>Price : {data.price * data.quantity}</h5>
              </div>
            </div>
          ))}
        </div>
        <Link to='/' ><button>Back to shopping</button></Link>
      </div>
    </section>
  )
}

export default PaymentPage