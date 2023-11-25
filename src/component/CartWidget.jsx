import React, { useContext } from 'react'
import { Badge, Center, Flex } from '@chakra-ui/react';
import {RiShoppingCartLine} from 'react-icons/ri';
import { CartContext } from './context/ShoppingCartContext';



const CartWidget = () => {

    const { cantidadEnCart } = useContext(CartContext);

    return (
    <>
        {cantidadEnCart() > 0 && (  
            <div>
                <Flex display={'inline'} alignContent={'Center'} color={'whiteAlpha.900'} padding={2}>  
                    <Badge colorScheme='green'>{cantidadEnCart()}</Badge>
                    <RiShoppingCartLine size={35}/>
                </Flex >
            </div>
        )}
    </>
    )
}

export default CartWidget