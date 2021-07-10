import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import logo from './logo.png';
import cart from './cart.png';
import './header.css';
import {Link} from "react-router-dom";

function header() {
    return (
        <div>
            <AppBar position='static'>
                <Toolbar>
                    <img src={logo} alt='logo' width='80px'/>

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

                    <Link to="/cart">
                        <img src={cart} alt='cart' width='40px'/>
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default header
