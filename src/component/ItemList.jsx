import React from 'react'
import Item from './Item'
import '../CSS/ItemListContainer.css';


const ItemList = ({productos}) => {
    return (
        <div>
            <div className='Item'>
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