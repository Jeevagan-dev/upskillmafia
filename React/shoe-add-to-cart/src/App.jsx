import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All from './components/All';
import NavBar from './components/NavBar';
import PaymentPage from './components/PaymentPage';
import CartProvider from './components/CartContext';

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path='/' element={<All />} />
          <Route path='/paymentPage' element={<PaymentPage />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
