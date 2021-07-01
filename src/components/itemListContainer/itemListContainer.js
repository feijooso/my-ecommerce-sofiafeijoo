import React, {useEffect, useState} from 'react';
import './itemListContainer.css';
import ItemList from '../itemList/itemList';

// const promise = () =>{
//     return new Promise ((resolve, reject) =>{
//         //api
//         setTimeout(
//             () =>
//             resolve([
//                 {id:1, title:'Potus',img:'./potus.jpg',stock:'12', description:'Soporta bien la escasez de luz y solo es necesario regarlo cuando se seca su tierra. Su sitio ideal es en lo alto de muebles y estantes ya que sus ramas se transforman en colgantes al crecer.'},
//                 {id:2, title:'Cintas',img:'./cintas.jpg',stock:'5', description:'Es súper decorativa y necesita mínima atención. Soporta temperaturas altas y no necesita demasiada luz.'},
//                 {id:3, title:'Lirio',img:'./lirio.jpg',stock:'10', description:'Purifica de forma natural y desprende elegancia. Se adapta a diferentes temperaturas y a distintos niveles de luz y humedad.'},
//                 {id:4, title:'Lengua',img:'./lengua.jpg',stock:'2', description:'Tiene forma alargada y hojas bicolor en forma de espada. Decora, no ocupa mucho espacio y purifica el ambiente.'},
//                 {id:5, title:'Árbol de jade',img:'./jade.jpg',stock:'10', description:'De las plantas suculentas más conocidas, tiene hojas carnosas y forma de pequeño árbol. Resiste muy bien a la sequía y puede llegar a alcanzar una altura de hasta dos metros.'},
//                 {id:6, title:'Anturio rojo',img:'./anturio.jpg',stock:'9', description:'Una planta muy vista en los hogares para aquellos que les gustan las flores y el color. Se trata de un género neotropical que resiste a todo tipo de temperaturas y condiciones.'},
//                 {id:7, title:'Costilla de Adán',img:'./adan.jpg',stock:'11', description:'Tiene hojas grandes y agujereadas, que le dan un aspecto tropical. Es de ambientes húmedos e ideal para principiantes en plantas.'},
//                 {id:8, title:'Ficus',img:'./ficus.jpg',stock:'24', description:'Es una planta un poco delicada pero de las más utilizadas en interiores. Ayuda a bloquear la contaminación acústica.'},
//                 {id:9, title:'Aloe Vera',img:'./aloevera.jpg',stock:'20', description:'Es una planta desértica que se lleva muy bien con el calor del interior. Es hermosa y sus hojas tienen usos terapéuticos o de belleza.'},
//                 {id:10, title:'Cactus de Navidad',img:'./cactus.jpg',stock:'4', description:'Florece en invierno, pero es bonito todo el año. No le gusta el sol ni la falta de riego.'},
//             ]),2000);
        
//     });
// };

function ItemListContainer(){

    const [productos, setProductos] = useState([]);


    // const consultarPromesa = () => {
    //     promise().then((data) => {
    //         setProductos(data)
    //     })
    // }

    useEffect(() => {
        fetch('https://mocki.io/v1/6626133f-3066-45a5-a4c1-b4d549c2ecaf')
            .then((response) => response.json())
            .then((res)=> setProductos(res));
        //consultarPromesa();
    },[])

    return(
        <ItemList plantas={productos}/>
    );
};

export default ItemListContainer;