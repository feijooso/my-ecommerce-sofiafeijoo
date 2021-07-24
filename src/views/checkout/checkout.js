import React from 'react';
import Form from '../../components/form/form';
import {itemsCollection} from '../../firebase'; 
import { useCartContext } from '../../context/cartContext';

function Checkout() {
    const { cart } = useCartContext();

    const addOrder = async (values) => {
        const fecha = new Date();
		//await itemsCollection.collection('ordenes').doc().set({...cart, nombre: values.nombre, telefono: values.telefono, mail: values.mail, fecha: fecha}).then(a=>console.log(a));
		await itemsCollection.collection('ordenes').add({...cart, nombre: values.nombre, telefono: values.telefono, mail: values.mail, fecha: fecha}).then(data=>data.id);

    };

    return (
        <div>
            <Form addOrder={addOrder} />
        </div>
    )
}

export default Checkout;
