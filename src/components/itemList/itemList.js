import React from 'react';
import Item from '../item/item';
import './itemList.css';

function ItemList (productos) {
    return(
        <>
        <ul>
            {productos.plantas.map((producto)=>(
                <Item planta={producto}/>
             ))}
        </ul>
        </>
    )

};

export default ItemList;
