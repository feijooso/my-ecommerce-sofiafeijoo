import React, {useState, useEffect} from 'react';
import {useParams} from 'react-router-dom';
import ItemDetail from '../itemDetail/itemDetail';
import {itemsCollection} from '../../firebase';

function ItemDetailContainer() {
    const {id} = useParams();
    const [item, setItem] = useState([]);


    useEffect(() => {
        (async ()=> {
            const response = await itemsCollection.collection("productos").doc(id).get();
            setItem({id: response.id, ...response.data()});
        })();
    }, [id])

    return (
        <div>
            { 
            <ItemDetail item={item}/> 
        }
        </div>
    )
}


export default ItemDetailContainer
