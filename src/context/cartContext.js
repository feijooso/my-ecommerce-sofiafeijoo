import { createContext, useContext, useEffect, useState } from "react";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext); /* tipo hook  */

export const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);  

    const clearCart = () => setCart([]);

    const isInCart = id => cart.some(item => item.id === id);


    const addToCart = (item, cantidad) => {
        if (isInCart(item.id)) {
            const newCart = cart.map(cartElement => {
              if (cartElement.id === item.id) {
                return { ...cartElement, cantidad: cartElement.cantidad + cantidad }
              } else return cartElement;
            })
            setCart(newCart);
          } else {
            setCart(prev => [...prev, { ...item, cantidad }]);
          }
    };

    return <CartContext.Provider value = {{cart,setCart, clearCart, addToCart}}>
        {children}
    </CartContext.Provider>
}
