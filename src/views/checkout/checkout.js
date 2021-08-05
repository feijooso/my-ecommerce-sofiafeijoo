import React, { useState } from 'react';
import Form from '../../components/form/form';
import {itemsCollection} from '../../firebase'; 
import { useCartContext } from '../../context/cartContext';

function Checkout() {
    const { cart } = useCartContext();
    const [orderId, setOrderId] = useState("");


    const addOrder = async(values)=> {
        const fecha = new Date();
        await itemsCollection.collection('ordenes')
        .add({...cart, nombre: values.nombre, telefono: values.telefono, mail: values.mail, fecha: fecha})
        .then(data=> setOrderId(data.id));
    };

    return (
        <div>
            <Form addOrder={addOrder} />
            {orderId != "" && <p>Orden registrada con ID: {orderId}</p>}
        </div>
    )
}

export default Checkout;
