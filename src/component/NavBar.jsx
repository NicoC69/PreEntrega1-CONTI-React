import React from 'react'
import '../NavBar.css';
import { Nav, Container, NavDropdown, Row, Col, DropdownMenu, DropdownButton, Dropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <div className='NavB'>
            <Container fluid>
                <Row>
                    <Col xs={6} md={6} lg={6}>
                        <Link to={`/`}>
                            <h1 className='NavTittle'>Servicio Tec<span className='Span'>Nico</span></h1>
                        </Link>
                    </Col>
                    
                    <Col xs={5} md={5} lg={5}>
                        <Dropdown className='Button' data-bs-theme="dark">
                            <Dropdown.Toggle variant="secondary">
                                MENU
                            </Dropdown.Toggle>
                            <Dropdown.Menu>
                                <Dropdown.Item>
                                    <Link to={`/categoria/Motherboard`}>
                                        Motherboard
                                    </Link>
                                </Dropdown.Item>
                                
                                <Dropdown.Item>
                                    <Link to={`/categoria/Procesadores`}>                                
                                        Procesadores
                                    </Link>
                                </Dropdown.Item>
                                
                                <Dropdown.Item>
                                    <Link to={`/categoria/Almacenamiento`}>
                                        Almacenamiento
                                    </Link>
                                </Dropdown.Item>
                                
                                <Dropdown.Item>
                                    <Link to={`/categoria/Ram`}>
                                        Ram
                                    </Link>
                                </Dropdown.Item>
                                
                                <Dropdown.Item>
                                    <Link to={`/categoria/Monitores`}>
                                        Monitores
                                    </Link>
                                </Dropdown.Item>
                                
                                <Dropdown.Item>
                                    <Link to={`/categoria/Video`}>
                                        Video
                                    </Link>
                                </Dropdown.Item>
                                
                                <Dropdown.Item>
                                    <Link to={`/categoria/Perifericos`}>
                                        Perifericos
                                    </Link>
                                </Dropdown.Item>
                                
                                    <NavDropdown.Divider />
                                
                                <Dropdown.Item>
                                    <Link to={'/Contacto'}>
                                        Contacto
                                    </Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown>
                    </Col>
                    
                    <Col className='CartW' xs={1} md={1} lg={1}>
                        <Link to={"/Cart"}>
                            <CartWidget />
                        </Link>
                    </Col>    
                </Row>    
            </Container>
    </div>
    )
}

export default NavBar