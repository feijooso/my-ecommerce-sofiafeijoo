import { AppBar, Button, Toolbar, Typography } from '@material-ui/core';
import React from 'react';
import logo from './logo.png';
import emptycart from './emptycart.png';
import fullcart from './fullcart.png';
import './header.css';
import { useCartContext } from '../../context/cartContext';
import {Link} from "react-router-dom";

function Header() {
    const { cart } = useCartContext();

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
                    {cart.length != 0 && <img src={fullcart} alt='cart' width='50px'/>}
                    {cart.length == 0 && <img src={emptycart} alt='cart' width='50px'/>}
                    </Link>

                </Toolbar>
            </AppBar>
        </div>
    )
}

export default Header
