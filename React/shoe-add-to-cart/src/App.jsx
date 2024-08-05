// import shoes from './components/shoes.jsx';
// import Cards from './components/Cards.jsx';
// import { useState } from 'react';

// function App(){
//   const [cart , setCart] = useState([]);
//   const [price , setprice] = useState(0);
//   const [quantity , setquantity] = useState(1);
  
//   console.log(cart)

//   const handleClick = (shoe)=>{
//     let ispresent = false;
//         cart.forEach((product) => {
//           if(shoe.id === product.id){
//              ispresent = true;
//              setquantity(quantity+1);
//           }
//         })
//         if(ispresent)
//           return;
//           setCart([...cart , shoe]);
        
//       setprice((prevPrice)=> prevPrice+ shoe.price);
//   }
//   return(
//     <section className='main-area'>
//       <div className="card-container">
//       {shoes.map((shoe) => (
//         <Cards key={shoe.id} shoe={shoe} handleClick={handleClick}/>
//       ))}
//       </div>
//       <div className="billing">
//         <h2>Total price : {price}</h2>
//         <h3>Total item : {cart.length}</h3>
//         <div className="billing-items">
         
//             {cart.map((data)=>(
//                <div  key={data.id}  className="b-items">
//               <img src={data.image} width={'50px'}/>
            
//               <div className="b-content">
//                  <h4>{data.name}</h4>
//                  <h3>{quantity}</h3>
//                  <button>+</button>
//                  <button >1</button>
//                  <button>-</button>
//                  <h5>{data.price}</h5>
//               </div>
//             </div>
//             ))}
         
//         </div>

//       </div>
//     </section>
//   )
// }

// export default App ;



import shoes from './components/shoes.jsx';
import Cards from './components/Cards.jsx';
import NavBar from './components/NavBar.jsx';
import { useState } from 'react';

function App() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const handleClick = (shoe) => {
    let isPresent = false;

    const updatedCart = cart.map((product) => {
      if (shoe.id === product.id) {
        isPresent = true;
        return { ...product, quantity: product.quantity + 1 };
      }
      return product;
    });

    if (!isPresent) {
      setCart([...updatedCart, { ...shoe, quantity: 1 }]);
    } else {
      setCart(updatedCart);
    }

    setPrice((prevPrice) => prevPrice + shoe.price);
  };

  const handleIncrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        setPrice((prevPrice) => prevPrice + item.price);
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  const handleDecrement = (id) => {
    const updatedCart = cart.map((item) => {
      if (item.id === id) {
        setPrice((prevPrice) => prevPrice - item.price);
        const newQuantity = item.quantity - 1;
        if (newQuantity > 0) {
          return { ...item, quantity: newQuantity };
        }
        return null; // Mark this item for removal
      }
      return item;
    }).filter(item => item !== null); // Remove items with quantity 0

    setCart(updatedCart);
  };

  return (
    <>
    <NavBar />
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
                <h4>Name : {data.name}</h4>
                <h3>quantity : {data.quantity}</h3>
                <button onClick={() => handleIncrement(data.id)}>+</button>
                <button onClick={() => handleDecrement(data.id)}>-</button>
                <h5>Price : {data.price * data.quantity}</h5>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    </>
  );
}

export default App;
