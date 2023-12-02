import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import { CartContext } from './context/ShoppingCartContext';


const ItemCount = ({productos}) => {

const [buttonTxt, setButtonTxt] = useState("Agregar a carrito")

    const { cart, addToCart, } = useContext(CartContext);
    console.log(cart);

    const [qty, setQty] = useState(1);

    const handleRestar = () => {
        qty > 1 && setQty(qty - 1)
    };

    const handleSumar = () => {
        if (qty < productos.stock) {
            setQty(qty + 1);
    } else {
        setButtonTxt ("Finalizar")
        }
    };

    const handleAgregar = () => {
        addToCart (productos, qty);
        setQty(1);
    };



    return (
        <div>
            <Button variant="secondary" onClick={handleRestar}>
                -            
            </Button>
        
            <Badge bg='secondary' >{qty}</Badge>      
        
            <Button variant="secondary" onClick={handleSumar}>
                +          
            </Button>
            
            <Button variant="secondary" onClick={handleAgregar}>
                {buttonTxt}            
            </Button>
        </div>
    );
}


export default ItemCount