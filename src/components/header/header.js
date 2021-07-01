import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import img from './logo.png';
import './header.css';
import Cart from '../cart/cart';
import {Link} from "react-router-dom";

function header() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <img src={img} alt='logo' width='80px'/>

                    <Typography variant='h6'>
                        Las plantas de Sofi
                    </Typography>

                    <div className='menu'>
                        <Link to="/" className="Link">
                            <Button color="inherit">Home</Button>
                        </Link>
                        <Link to="/tienda" className="Link">
                            <Button color="inherit">Tienda</Button>
                        </Link>
                        <Link to="/contacto" className="Link">
                            <Button color="inherit">Contacto</Button>
                        </Link>
                    </div>

                    <Cart />

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default header
