import React from 'react';
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom';
import '../CSS/ItemDetail.css';
import { Card } from 'react-bootstrap';


const ItemDetail = ({producto}) => {
    
    const { id } = useParams();

    console.log(producto)
    console.log(id)

    return (        
        <>
        <h2 className='tittleItemD'>Detalles del Producto</h2>
            <div className='bodyID'>
                        <div>
                        <Card key={producto.id} style={{ width: '20rem' }} bg='dark' text='light'>
                            <Card.Img className='img' variant='top' src={producto.img}/>
                            <Card.Body>
                                <Card.Text>Categoria: {producto.categoria}</Card.Text>
                                <Card.Title>Marca: {producto.marca}</Card.Title>
                                <Card.Text>Modelo: {producto.modelo}</Card.Text>
                                <Card.Text>Descripcion: {producto.descripcion}</Card.Text>
                                <Card.Text>Precio: ${producto.precio}</Card.Text>
                                <Card.Text>Stock: {producto.stock}</Card.Text>
                                    <ItemCount productos={producto}/>
                            </Card.Body>
                        </Card>
                        </div>
            </div>
        </>
    )
}

export default ItemDetail