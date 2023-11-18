import React from 'react'
import { Badge, Center, Flex } from '@chakra-ui/react';
import {RiShoppingCartLine} from 'react-icons/ri';



const CartWidget = () => {
    return (

        <div>
                <Flex display={'inline'} alignContent={'Center'} color={'whiteAlpha.900'} padding={2}>  
                    <Badge colorScheme='green'>0</Badge>
                    <RiShoppingCartLine size={35}/>
                </Flex >
        </div>
    )
}

export default CartWidget