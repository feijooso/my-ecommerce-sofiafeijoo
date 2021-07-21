import React, {useEffect, useState} from 'react';
import './itemListContainer.css';
import {useParams} from 'react-router-dom';
import ItemList from '../itemList/itemList';
import {itemsCollection} from '../../firebase'; 

function ItemListContainer(){
    const {category} = useParams();
    const [items, setItems] = useState([]);


    useEffect(() => {
        if(category){
            (async ()=> {
                const response = await itemsCollection.get();
                var filteredItems = response.docs.filter(item => item.data().category == category);
                setItems(filteredItems.map(item => ({id:item.id, ...item.data()})));
            })();

        }else {
            (async ()=> {
                const response = await itemsCollection.get();
                setItems(response.docs.map(item => ({id:item.id, ...item.data()})))
            })();
        }
    }, [category])

    return(
        <ItemList plantas={items}/>
    );
};

export default ItemListContainer;