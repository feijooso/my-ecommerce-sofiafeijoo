import React, {useEffect, useState} from 'react';
import './itemListContainer.css';
import ItemList from '../itemList/itemList';
import {itemsCollection} from '../../firebase'; 

function ItemListContainer(){

    const [items, setItems] = useState([]);


    useEffect(() => {
        (async ()=> {
            const response = await itemsCollection.get();
            setItems(response.docs.map(item => ({id:item.id, ...item.data()})))
        })();
        
    }, [])

    return(
        <ItemList plantas={items}/>
    );
};

export default ItemListContainer;