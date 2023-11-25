import React, {useContext} from 'react';
import { CartContext } from './context/ShoppingCartContext';
import '../CSS/Checkout.css';

const Checkout = () => {

    const { precioTotal } = useContext(CartContext);

    return (
        <div>
            <h2 className='tittleCO'>Checkout</h2>
            <h3 className='txtTotal'>Total a pagar: ${precioTotal()}</h3>
            <div className='containerB'>
                <button className='buttonPay'>Pagar</button>
            </div>
        </div> 
    ) 
}

export default Checkout