import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail';

function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState([]);

    useEffect(() => {
        fetch('https://mocki.io/v1/6626133f-3066-45a5-a4c1-b4d549c2ecaf')
            .then((response) => response.json())
            .then((res)=> res.find(item => item.id == id))
            .then((foundItem) => setItem(foundItem));
    },[])
    console.log(item);

    return (
        <div>
            <ItemDetail item={item}/>
        </div>
    )
}

export default ItemDetailContainer
