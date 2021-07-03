import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemList from '../itemList/itemList';

function ItemDetailContainer() {
    const {category} = useParams();
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/cb8d8d8f-4468-427c-bbb1-a651f64f84b4')
            .then((response) => response.json())
            .then((res)=> res.filter(item => item.category == category))
            .then((filteredItems) => setItems(filteredItems));
    },[])

    return (
        <ItemList plantas={items}/>
        );
}

export default ItemDetailContainer
