import React from 'react'
import CartWidget from './CartWidget'
import { Menu, Button, MenuButton, MenuList, MenuOptionGroup, MenuItemOption, MenuDivider, Flex, Box, Spacer, Stack, Heading, Center} from '@chakra-ui/react'
import {RiShoppingCartLine} from 'react-icons/ri'


const NavBar = () => {
    return (
    <div>
        
        <Flex>
            <Box p='4' paddingTop={5}>
                <Stack spacing={4}>
                    <Heading as='h1' size='xl' color={'blue'}>
                        <p>Servicio TecNICO</p>
                    </Heading>
                </Stack>
            </Box>
        <Spacer />
            <Box paddingTop={5}>
            <Menu closeOnSelect={false}>
    <MenuButton as={Button} colorScheme='yellow' >
        Menu
    </MenuButton>
    
    <MenuList minWidth='240px'>

        <MenuOptionGroup defaultValue='asc' title='Productos' type='radio'>
        
            <MenuItemOption value='desc'>Motherboard</MenuItemOption>
            <MenuItemOption value='desc'>Memorias</MenuItemOption>
            <MenuItemOption value='desc'>Almacenamientos</MenuItemOption>
            <MenuItemOption value='desc'>Video</MenuItemOption>
            <MenuItemOption value='desc'>Monitores</MenuItemOption>
            <MenuItemOption value='desc'>Impresoras</MenuItemOption>
            <MenuItemOption value='desc'>Teclados & Mouse</MenuItemOption>
            <MenuItemOption value='desc'>Parlantes</MenuItemOption>

        </MenuOptionGroup>
    
    <MenuDivider />
    
        <MenuOptionGroup title='Servicios' type='checkbox'>
            
            <MenuItemOption value='email'>Reparacion Computadoras</MenuItemOption>
            <MenuItemOption value='email'>Reparacon Celulares y Tablets</MenuItemOption>
            <MenuItemOption value='email'>Revisa el estado de tu reparacion</MenuItemOption>

        </MenuOptionGroup>

    <MenuDivider />

        <MenuOptionGroup title='Contacto' type='checkbox'>
        
            <MenuItemOption value='email'>Email</MenuItemOption>
            <MenuItemOption value='email'>Telefono</MenuItemOption>
            <MenuItemOption value='email'>Ubicacion</MenuItemOption>

        </MenuOptionGroup>
    </MenuList>
</Menu>

            </Box>
        <Spacer />
            <Box p='4' paddingTop={5}>
                <CartWidget /> <RiShoppingCartLine size={35} />
            </Box>
</Flex>

    
    </div>
    )
}

export default NavBar