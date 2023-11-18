import React from 'react'
import Item from './Item'

const ItemList = ({productos}) => {
    return (
        <div>
            <div>
                <h5>Productos</h5>
                {productos.map((p)=> {
                        return (
                                <Item 
                                    key={p.id} 
                                    id={p.id}
                                    img={p.img}
                                    Categoria={p.categoria}
                                    Marca={p.marca}
                                    />
                            ) })}
            </div>
        </ div>
    )     
}

export default  ItemList      