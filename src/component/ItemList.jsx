import React from 'react'
import Item from './Item'
import '../CSS/ItemListContainer.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const ItemList = ({productos}) => {

    return (
        <div className='container-fluid'>
            <div className='Item, row' >
                {productos.map((p)=> {                
                        return ( 
                            <Col sm={12} md={6} lg={4} xl={4} >                           
                                <Item 
                                    key={p.id} 
                                    id={p.id}
                                    img={p.img}
                                    Categoria={p.categoria}
                                    Marca={p.marca}
                                    Modelo={p.modelo}
                                    />
                            </Col>                                                            
                        ) })}                        
            </div>
        </ div>
    )     
}

export default  ItemList      