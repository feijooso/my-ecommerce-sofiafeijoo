import React from 'react'
import ItemListContainer from '../../components/itemListContainer/itemListContainer';
import Button from '@material-ui/core/Button';
import {Link} from "react-router-dom";

function tienda() {
    return (
        <div>
            <h1>Tienda</h1>
            <div className="categorias">
                <Link to="/category/planta" className="Link">
                    <Button variant="contained">Plantas</Button>
                </Link>
                <Link to="/category/maceta" className="Link">
                    <Button variant="contained">Macetas</Button>
                </Link>    
                
            </div>
            <ItemListContainer/>
        </div>
    )
}

export default tienda
