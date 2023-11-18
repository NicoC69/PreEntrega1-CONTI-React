import React from 'react';
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom';
import '../ItemDetail.css';
import { Card } from 'react-bootstrap';
import '../ItemDetail.css';


const ItemDetail = ({productos}) => {
    const { id } = useParams();

    const productosFiltrados = productos.filter((producto) => producto.id == id)

    return (        
            <div className='bodyID'>
                {productosFiltrados.map((p)=> {
                    return (
                        <div key={p.id}>
                        <Card style={{ width: '20rem' }} bg='dark' text='light'>
                            <Card.Img className='img' variant='top' src={p.img}/>
                            <Card.Body>
                                <Card.Text>{p.categoria}</Card.Text>
                                <Card.Title>{p.marca}</Card.Title>
                                <Card.Text>{p.descripcion}</Card.Text>
                                <Card.Text>{p.precio}</Card.Text>
                                <Card.Text>{p.stock}</Card.Text>
                                    <ItemCount />
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })}
            </div>
    )
}

export default ItemDetail




    //const filteredData = productos.filter((producto)=> producto.id == id)

//{filteredData.map((p)=> {
  //  return (