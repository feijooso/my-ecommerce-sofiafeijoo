import React, {useEffect, useState} from 'react';
import './itemListContainer.css';
import ItemList from '../itemList/itemList';

const promise = () =>{
    return new Promise ((resolve, reject) =>{
        //api
        setTimeout(
            () =>
            resolve([
                {id:1, title:'Potus',img:'./potus.jpg', description:'Soporta bien la escasez de luz y tan solo es necesario regarlo cuando se seca la tierra de la maceta. Su sitio ideal es en lo alto de muebles y estantes ya que sus ramas se transforman en colgantes al crecer'},
                {id:2, title:'Cintas',img:'./cintas.jpg', description:'Es súper decorativa y necesita mínima atención. Soporta temperaturas altas y no necesita demasiada luz'},
                {id:3, title:'Lirio',img:'./lirio.jpg', description:'Purifica de forma natural y desprende elegancia. Se adapta a diferentes temperaturas y a distintos niveles de luz y humedad.'},
            ]),2000);
        
    });
};

function ItemListContainer(){

    const [productos, setProductos] = useState([]);
    const consultarPromesa = () => {
        promise().then((data) => {
            setProductos(data)
        })
    }

    useEffect(() => {
        consultarPromesa();
    },[])

    return(
        <ItemList plantas={productos}/>
       //<p>{productos.length}</p>
    );
};

export default ItemListContainer;