import { createContext, useState, useEffect, useParams } from "react";

export const CartContext = createContext();

const carritoInitial = JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({children}) => {

    const [cart, setCart] = useState (carritoInitial);

    
    const addToCart = (productos, qty) => {
        const itemAgregado = {...productos, qty};
        
        const newCart = [...cart];
        const inCart = newCart.find((producto) => producto.id === itemAgregado.id);

        if (inCart) {
            inCart.qty += qty;
        } else {
            newCart.push(itemAgregado);
        }
        setCart(newCart);
    }

    const removeFromCart = (productId) => {
        const newCart = cart.filter((producto) => producto.id !== productId);
        setCart(newCart);
    }

    const cantidadEnCart = () => {
        return cart.reduce((acc, prod) => acc + prod.qty, 0);
    }

    const precioTotal = () => {
        return cart.reduce((acc, prod) => acc + prod.precio * prod.qty, 0); 
    }


    const emptyCart = () => {
        setCart([]);
    }

    useEffect (() => {
        localStorage.setItem("cart", JSON.stringify(cart));
    }, [cart])

return (
    <CartContext.Provider value={{cart, addToCart, cantidadEnCart, precioTotal, emptyCart, removeFromCart}}>
        {children}
    </CartContext.Provider>
);

}

//export default CartProvider