import React, {useContext} from 'react'
import { CartContext } from './context/ShoppingCartContext'
import '../CSS/Cart.css'
import { Link } from 'react-router-dom'


const Cart = () => {

    const { cart, precioTotal, emptyCart, removeFromCart } = useContext(CartContext);

    const handleEmpty = () => {
        emptyCart();
    }
    
    const handleRemove = (productId) => {
        removeFromCart(productId);
    }

    return (
    <div className='bodyCart'>
        <h3 className='tittleCart'>Carrito</h3>
        {
            cart.map((prod) => (
            <div className='itemCart' key={prod.id}>
                <h3>{prod.marca}</h3>
                <h6>{prod.categoria}</h6>
                <p className='txtqty'>Unit: ${prod.precio}</p>
                <p>Qty: {prod.qty}</p>    
                <p className='txtUnit'>Unit Total: ${prod.precio * prod.qty}</p>
                <button className='buttonRemove' onClick={()=>{handleRemove(prod.id)}}>Quitar</button>
            </div>
        ))
        }
        {
            cart.length > 0?
            <>
            <h2 className='txtTotal'>Total a pagar: ${precioTotal()}</h2>
            <div className='container'>
                <button className='buttonEmpty' onClick={handleEmpty}>Vaciar carrito</button>
                <button className='buttonBuy'>
                    <Link to="/Checkout">
                        Finalizar Comprar
                    </Link>
                </button>
            </ div>

            </> :
            <h2>El Carrito esta vacio </h2>
        }
    </div>
    )
}

export default Cart