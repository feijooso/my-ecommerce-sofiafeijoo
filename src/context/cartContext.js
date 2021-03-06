import { createContext, useContext, useState } from "react";

export const CartContext = createContext({});
export const useCartContext = () => useContext(CartContext);
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

    const getActualStock = product => { /* actual stock is db stock minus amount in cart */
      const foundItem = cart.find(item => item.id === product.id);
      return foundItem ? product.stock - foundItem.cantidad : product.stock;
    };

    const removeItem = (id) => setCart(cart.filter(item => item.id !== id));

    return <CartContext.Provider value = {{cart,setCart, clearCart, addToCart, getActualStock, removeItem}}>
        {children}
    </CartContext.Provider>
}
