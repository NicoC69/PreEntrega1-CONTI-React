import React from 'react';
import ItemCount from './ItemCount'
import { useParams } from 'react-router-dom';
import '../CSS/ItemDetail.css';
import { Card } from 'react-bootstrap';


const ItemDetail = ({productos}) => {
    const { id } = useParams();

    const productosFiltrados = productos.filter((producto) => producto.id == id)

    return (        
        <>
        <h2 className='tittleItemD'>Detalles del Producto</h2>
            <div className='bodyID'>
                {productosFiltrados.map((p)=> {
                    return (
                        <div key={p.id}>
                        <Card style={{ width: '20rem' }} bg='dark' text='light'>
                            <Card.Img className='img' variant='top' src={p.img}/>
                            <Card.Body>
                                <Card.Text>Categoria: {p.categoria}</Card.Text>
                                <Card.Title>Marca: {p.marca}</Card.Title>
                                <Card.Text>Descripcion: {p.descripcion}</Card.Text>
                                <Card.Text>Precio: ${p.precio}</Card.Text>
                                <Card.Text>Stock: {p.stock}</Card.Text>
                                    <ItemCount productos={p}/>
                            </Card.Body>
                        </Card>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default ItemDetail




    //const filteredData = productos.filter((producto)=> producto.id == id)

//{filteredData.map((p)=> {
  //  return (