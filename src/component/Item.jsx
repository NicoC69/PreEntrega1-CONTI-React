import React from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import '../CSS/Item.css';
import Col from 'react-bootstrap/Col';




const Item = ({id, img, Categoria, Marca, Modelo}) => {
    console.log(id)
    return (
        <Col sm={1} md={2} lg={2} xl={3}>
        <div className='bodyI'>
            <Card key={id} className='Card' style={{ width: '20rem' }} bg='dark' text='light'>
                <Card.Img className='img' variant='top' src={img}/>
                <Card.Body>
                    <Card.Text>Categoria: {Categoria}</Card.Text>
                    <Card.Title>Marca: {Marca}</Card.Title>
                    <Card.Title>Modelo: {Modelo}</Card.Title>
                    <Button variant="secondary">
                        <Link to={`/item/${id}`}>
                        Ver Detalle
                        </Link>
                    </Button>
                </Card.Body>
            </Card>    
        </div>
        </Col>    
    )
}

export default Item

