import React from 'react'
import '../CSS/NavBar.css';
import { Container, Row, Col, Dropdown, DropdownButton } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import CartWidget from './CartWidget';


const NavBar = () => {
    return (
        <div className='NavB'>
            <Container fluid>
                <Row xs={2} sm={2} md={1} lg={1} xl={1}>
                    <Col xs={12} sm={12} md={6} lg={6} xl={6}>
                        <Link to={`/`}>
                            <h1 className='NavTittle'>Servicio Tec<span className='Span'>Nico</span></h1>
                        </Link>
                    </Col>
                    
                    <Col xs={6} sm={6} md={5} lg={5} xl={5}>
                        <DropdownButton className='Button' variant='secondary' title="MENU" data-bs-theme="dark">
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
                                                            
                            <Dropdown.Item>
                                <Link to={'/Contacto'}>
                                    Contacto
                                </Link>
                            </Dropdown.Item>
                        </DropdownButton>
                    </Col>
                    
                    <Col className='CartW' xs={6} sm={6} md={1} lg={1} xl={1}>
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