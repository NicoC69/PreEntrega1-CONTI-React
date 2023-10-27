import React from 'react'
import {Flex, Box } from '@chakra-ui/react'

const ItemListContainer = ({greeting}) => {
    return (
        <div>
            <Flex bg={'gray.700'} color={'whiteAlpha.900'} fontSize={60} display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Box> 
                    {greeting}
                </Box>
            </Flex>
        </div>
    )
}

export default ItemListContainer