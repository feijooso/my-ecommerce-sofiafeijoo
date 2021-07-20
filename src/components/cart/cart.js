import React from 'react'
import { Redirect } from 'react-router-dom';
import { useCartContext } from '../../context/cartContext';

const Cart = () => {
  const { cart, clearCart, removeItem } = useCartContext();

  if (!cart.length) return <p>Carrito vacio</p>;

  return (
    <div>
      {cart.map((item) => (
        <h1>Product: {item.title} - {item.cantidad} - <span onClick={()=>removeItem(item.id)}>X</span> </h1>
      ))}
      <button onClick={clearCart}>VACIAR CARRITO</button>
    </div>
  )
}

export default Cart