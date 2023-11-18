import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Badge from 'react-bootstrap/Badge';
import CartWidget from './CartWidget';


const ItemCount = () => {

const [count, setCount, setCart ] = useState (0)

const addToCart = (ItemCount) => { 
    setCart ({...CartWidget, count})
    }

const decrease = ()=>{
    if (count > 0)
    setCount (count -1)
}

const increase = ()=> {
    if (count < 10) {
        setCount (count +1)
    }
}

    return (
        <div>
            <Button variant="secondary" onClick={decrease}>
                -            
            </Button>
        
            <Badge bg='secondary' >{count}</Badge>      
        
            <Button variant="secondary" onClick={increase}>
                +          
            </Button>

            <Button variant="secondary" onClick={addToCart}>
                Agregar al carrito            
            </Button>
        </div>
    );
}


export default ItemCount