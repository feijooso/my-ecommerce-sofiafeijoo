import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import img from './logo.png';
import './header.css';
import Cart from '../cart/cart';

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
                        <Button color="inherit">Home</Button>
                        <Button color="inherit">Tienda</Button>
                        <Button color="inherit">FAQ</Button>
                        <Button color="inherit">Contacto</Button>
                    </div>

                    <Cart />

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default header
