import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail';

function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/cb8d8d8f-4468-427c-bbb1-a651f64f84b4')
            .then((response) => response.json())
            .then((res)=> res.find(item => item.id == id))
            .then((foundItem) => setItem(foundItem));
    },[id])

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer