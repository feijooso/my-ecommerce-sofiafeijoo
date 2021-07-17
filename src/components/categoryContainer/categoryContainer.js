import { Divider } from '@material-ui/core';
import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from '../itemList/itemList';
import {itemsCollection} from '../../firebase';


function ItemDetailContainer() {
    const {category} = useParams();
    const [items, setItems] = useState([]);


    useEffect(() => {
        (async ()=> {
            const response = await itemsCollection.get();
            var filteredItems = response.docs.filter(item => item.data().category == category);
            console.log(filteredItems)
            setItems(filteredItems.map(item => ({id:item.id, ...item.data()})));
        })();
    }, [])

    return (
        <ItemList plantas={items}/>

        )
}

export default ItemDetailContainer
